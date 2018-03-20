import { NgModule } from "@angular/core";
import { MetricConverterPipe } from "./metric-converter/metric-converter";
@NgModule({
  declarations: [MetricConverterPipe],
  imports: [],
  exports: [MetricConverterPipe]
})
export class PipesModule {}
