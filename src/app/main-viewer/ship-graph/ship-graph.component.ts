import { Component, Input, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare var Viva: any;
@Component({
  selector: 'ship-graph',
  templateUrl: './ship-graph.component.html',
  styleUrls: ['./ship-graph.component.css']
})
export class ShipGraphComponent {
  graphContainer: any;
  @Input() ship: any;
  graph: any; // Vivagraph object

  // Inject HTTP client
  constructor(private http: HttpClient) {
  }

  ngAfterContentInit() {
    this.graphContainer = document.getElementById("ship-graph");
    console.log("Graph Container: " + this.graphContainer); // Should not be null
    this.graph = Viva.Graph.graph();
    this.drawEntireGraph();

    // specify where it should be rendered:
    var renderer = Viva.Graph.View.renderer(this.graph, {
      container: this.graphContainer,
      graphics: this.getSvgGraphics()
    });
    renderer.run();

  }

  addEdge(edge: any): void { // Assumes teh nodes have already been added
    this.graph.addLink(edge.source, edge.target);
  }

  addNode (node: any): void {
    this.graph.addNode(node.scrapeURL, {imageURL: node.imageURL});
  }

  add

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

  drawEntireGraph (): void {
    var body = {}
    this.http.post('http://192.168.1.82:3000/graphs/getAllEdges', body).subscribe(edgesRes => {
      var edges = <Array<any>> edgesRes;
      console.log(edges);
      for (var edgeCounter = 0; edgeCounter < edges.length; edgeCounter++) {
        var edge = edges[edgeCounter];
        var sourceNode = {
          scrapeURL: edge.source,
          imageURL: edge.sourceImage.src
        }
        var targetNode = {
          scrapeURL: edge.target,
          imageURL: edge.targetImage.src
        }
        // Add nodes first
        this.addNode(sourceNode);
        this.addNode(targetNode);

        // Add edge
        this.addEdge(edge);


      }

    });
  }
}
