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
    graph.addNode('missouri', {imageURL: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Missouri_post_refit.JPG'});

    // specify where it should be rendered:
    var renderer = Viva.Graph.View.renderer(graph, {
      container: this.graphContainer,
      graphics: this.getSvgGraphics()
    });
    renderer.run();

  }
  getSvgGraphics (): any {
    var graphics = Viva.Graph.View.svgGraphics();
    graphics.node((node) => {
           // The function is called every time renderer needs a ui to display node
           return Viva.Graph.svg('image')
                 .attr('width', 24)
                 .attr('height', 24)
                 .link(node.data.imageURL); // node.data holds custom object passed to graph.addNode();
        })
        .placeNode((nodeUI, pos) => {
            // Shift image to let links go to the center:
            nodeUI.attr('x', pos.x - 12).attr('y', pos.y - 12);
        });
    return graphics;
  }
}
