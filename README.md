<img src="https://raw.githubusercontent.com/ScaleIT-Org/media-ressources/master/logo/scaleit-logo.png" width="20%"/>

# Production Map App [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

The Production Map App helps bridge the virtual-physical barrier between software entities and the real world that they control or interact with. It allows the user to locate Apps on the shop floor more easily and thus explore it in a more pleasant and transparent way.

Software is mostly invisible for the shop floor. Different systems are hidden behind a benigng HMI and they never come to the light of day. In the ScaleIT approach, each App has it's own HMI and thus brings transparency to the software landscape. In order to intuitively locate Apps on a physica level we (the KIT) developed this shop floor map visualization (Production Map App) as part of the free and open source reference implementation of the ScaleIT platform. By using this App, a simple mapping of the physical world (sensors, machines, etc.) to their digital representation (Apps) is possible. The digital twin (as an App) can thus be displayed next to the real machine and the user can interact with it via its web HMI.

Deutsch:

Software ist meist unsichtbar für den betrieblichen Hallenboden. Hinter einer HMI verbergen sich oft unterschiedliche Systeme, die nie zum Vorschein kommen. Im ScaleIT Ansatz besitzt jede App eine HMI und bringt dadurch Transparenz in die Software-Landschaft. Um auch die physikalische Verortung intuitiv zu ermöglichen entwickelt das KIT eine Kartenvisualisierung (Production-Map-App) als Teil der freien und offenen Referenzimplementierung der ScaleIT Plattform. Mit dieser Karten App wird ein einfaches Mapping der physichen Welt (Sensoren, Maschinen, usw.) zur digitalen Repräsentation (Apps) ermöglicht. Der digitale Zwilling (als App) kann so neben der echten Maschine dargestellt und damit über dessen Web-HMI interagiert werden.

## How to Use

### Standalone

    # Resolve dependencies
    npm install
    # Build frontend
    npm run build 
    # Run dev server
    npm run ionic:serve
    
   #### Development

In order to simplify development we recommend working locally (or with a docker bind mount) and using the ionic hot reload feature of the ionic dev server

    npm run ionic:serve
    
In order to pull from this repo as upstream you should use githubs rebasing feature:

    git checkout alpine
    git pull --rebase origin master

    git checkout dev
    git pull --rebase origin alpine

Alternatively use cherry picking (or patching):

    git cherry-pick d147423..2622049
    git cherry-pick d147423

### Docker
This app uses a multi stage build in order to create a very small production ready image. This results in an image size of about 70MB compared to the 300+MB size of the build image.

    docker-compose up -d
    # navigate to localhost:8100  

## Screenshots

| Mobile        | Desktop       |
| ------------- | ------------- |
| <img src="Resources/Store/Screenshots/Mobile%20Main%20Page.png?raw=true"/> | <img src="Resources/Store/Screenshots/Desktop%20Main%20Page.png?raw=true"/> |

|Administration view with configurable endpoints|
| ------------- |
| Not implemented yet |

## Requirements
-
## Features

1) Ionic frontend with Angular
2) Nginx Server for serving the built project (docker build only)
3) Pages and Navigation
4) Data Provider
5) Choose an image from a file system and upload it as a map
6) Drag and drop items
7) Download apps from registry, providing a correspoding registry-Url
8) Select certain apps to be shown on the map (it is also possible to add multiple instances of one app)
9) Selected apps as well as their positions are saved in the local storage, hence, after browser reload all aforementioned stuff will be restored from its previous state
10) Delete any app from the map
11) Disable and enable scrolling of the page 

### Technology Stack
    Node.js->(Typescript->Angular->Ionic)
 
## Known Issues
 - 

## Troubleshooting
-

## How to build

```
  docker-compose build 
  docker-compose up -d
```
### Health Check (Optional)
        #Build with healtcheck enabled
        HEALTHCHECK --interval=5m --timeout=3s \
        CMD curl -f http://localhost:5002/ || exit 1

## Configuration

- 

## Tests
  
  -
	
## Notes
This is still a work in progress  

        
## Learning Material

Reactive Manifesto: https://www.reactivemanifesto.org/

Reactive Programming: https://gist.github.com/staltz/868e7e9bc2a7b8c1f754

Ionic Presentation: http://ionicframework.com/present-ionic/slides/#/26

-----
### Sources

Grundriss - Grafik: ETA Fabrik, Dietz Joppien Architekten AG, Modellfabrik TU Darmstadt: https://www.detail.de/artikel/gelungenes-zusammenspiel-modellfabrik-der-tu-darmstadt-30206/

-----

Sources:
Map App Store Icon: Icon made from <a href="http://www.onlinewebfonts.com/icon">Icon Fonts</a> is licensed by CC BY 3.0

-----

(C) ScaleIT, KIT. MIT license.
