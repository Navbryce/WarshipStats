import { Component, Input, ElementRef } from '@angular/core';
declare var Viva: any;
@Component({
  selector: 'ship-graph',
  templateUrl: './ship-graph.component.html',
  styleUrls: ['./ship-graph.component.css']
})
export class ShipGraphComponent {
  graphContainer: any;
  @Input() ship: any;
  ngAfterContentInit() {
    this.graphContainer = document.getElementById("ship-graph");
    console.log("Graph Container: " + this.graphContainer); // Should not be null
    var graph = Viva.Graph.graph();
    graph.addLink(1, 2);

    // specify where it should be rendered:
    var renderer = Viva.Graph.View.renderer(graph, {
      container: this.graphContainer
    });
    renderer.run();

  }
}
