FROM node:carbon-alpine AS build-env

# Upgrade OS dependencies
RUN apk update && apk upgrade

# Set the working directory to the location of our app
WORKDIR /opt/app

#Timezone
RUN apk add tzdata && cp /usr/share/zoneinfo/Europe/Brussels /etc/localtime
RUN echo "Europe/Berlin" > /etc/timezone
RUN date && apk del tzdata

# Copy Node.js App dependency manifest
COPY package.json ./package.json
# Install Node.js dependencies
RUN npm install
# RUN mkdir -p /opt/app && cp -a /tmp/node_modules /opt/app/
# Copy our app from the hard drive to the working direcotry in the docker image
COPY ./ ./
# Build the App inside the image
RUN npm run build --prod

##################
# Production Build
FROM node:carbon-alpine

# Upgrade OS dependencies
RUN apk update && apk upgrade

#Timezone
RUN apk add tzdata && cp /usr/share/zoneinfo/Europe/Brussels /etc/localtime
RUN echo "Europe/Berlin" > /etc/timezone
RUN date && apk del tzdata

# Install Nginx for app serving
RUN apk add nginx
RUN adduser -D -g 'www' www
RUN mkdir /www
RUN chown -R www:www /var/lib/nginx
RUN chown -R www:www /www
COPY nginx.conf /etc/nginx/nginx.conf

# Default port for this App Skeleton, will be exposed when -P specified
EXPOSE 80

# Copy from build stage
WORKDIR /www
COPY --from=build-env /opt/app/www .

# using array notation causes node to be PID1 and will not exit properly. Without the array notation the shell forwards the sigterm correctly.
CMD ["nginx", "-g", "daemon off;"]
