import { NgModule } from "@angular/core";
import { MetricConverterPipe } from "./metric-converter/metric-converter";
import { SafeUrlPipe } from './safe-url/safe-url';
@NgModule({
  declarations: [MetricConverterPipe,
    SafeUrlPipe],
  imports: [],
  exports: [MetricConverterPipe,
    SafeUrlPipe]
})
export class PipesModule {}
