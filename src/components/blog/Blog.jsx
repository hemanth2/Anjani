import React, { useEffect, useState } from 'react';
import "../home/recent/recent.css"
import ItemDataService from '../../services/item.service';

const Blog = () => {
 const [items, setItems] = useState([]);
  useEffect(() => {
    getItems();
  }, []);

  const getItems = async () => {
    const data = await ItemDataService.getAllItems();
    var canvas = document.querySelector('canvas');
    canvas.width = 7000;
    canvas.height = 9000;
    var c = canvas.getContext('2d');
    c.lineWidth = 5;
    data.docs.map((doc) => {
      var plot = doc.data();
      const vertices = [
        { x: plot.Ax, y: plot.Ay },
        { x: plot.Bx, y: plot.By },
        { x: plot.Cx, y: plot.Cy },
        { x: plot.Dx, y: plot.Dy },
      ];
      if (plot.Status === 'Open') {
        c.fillStyle = 'white';
      } else {
        console.log('In loop');
        c.fillStyle = 'red';
      }
      c.beginPath();
      c.moveTo(vertices[0].x, vertices[0].y);
      for (let i = 1; i < vertices.length; i++) {
        c.lineTo(vertices[i].x, vertices[i].y);
      }
      c.lineTo(vertices[0].x, vertices[0].y);
      c.stroke();
      c.closePath();
      c.fill();
      const centerX = (vertices[0].x + vertices[2].x) / 2;
      const centerY = (vertices[0].y + vertices[2].y) / 2;
      const rotationAngle = 15 * (Math.PI / 180);
      c.translate(centerX, centerY);
      c.rotate(-rotationAngle);

      const text = plot.No;
      c.font = '20px Arial';
      c.fillStyle = 'black';
      c.textAlign = 'center';

      c.fillText(text, 0, 0);

      c.rotate(rotationAngle);
      c.translate(-centerX, -centerY);
    });

    const borders =[{"X":2913,"Y":587},{"X":5632,"Y":106},{"X":5599,"Y":10},{"X":0,"Y":0},{"X":5752,"Y":1},{"X":5781,"Y":83},{"X":6019,"Y":45},{"X":0,"Y":0},{"X":6075,"Y":301},{"X":5865,"Y":335},{"X":6809,"Y":3119},{"X":0,"Y":0},{"X":6726,"Y":3148},{"X":6670,"Y":2990},{"X":6277,"Y":3081},{"X":6197,"Y":3160},{"X":5959,"Y":3880},{"X":5885,"Y":4335},{"X":5934,"Y":4535},{"X":0,"Y":0},{"X":5838,"Y":4554},{"X":5811,"Y":4432},{"X":3967,"Y":4093},{"X":3828,"Y":4082},{"X":3812,"Y":4258},{"X":3769,"Y":4407},{"X":3729,"Y":4466},{"X":3651,"Y":4549},{"X":3499,"Y":5044},{"X":3370,"Y":4998},{"X":3226,"Y":5518},{"X":3492,"Y":5552},{"X":3430,"Y":5677},{"X":3766,"Y":5757},{"X":3793,"Y":5708},{"X":4138,"Y":5850},{"X":0,"Y":0},{"X":4085,"Y":5957},{"X":3845,"Y":5858},{"X":3788,"Y":5972},{"X":3685,"Y":5922},{"X":0,"Y":0},{"X":3494,"Y":7040},{"X":3826,"Y":7201},{"X":0,"Y":0},{"X":3787,"Y":7311},{"X":3442,"Y":7144},{"X":3361,"Y":7301},{"X":2331,"Y":6790},{"X":1452,"Y":8554},{"X":1651,"Y":8648},{"X":0,"Y":0},{"X":1605,"Y":8748},{"X":6,"Y":8001},{"X":0,"Y":0},{"X":54,"Y":7901},{"X":461,"Y":8092},{"X":1354,"Y":6301},{"X":0,"Y":0},{"X":2957,"Y":846},{"X":3300,"Y":784},{"X":3030,"Y":1432},{"X":2385,"Y":3518},{"X":1857,"Y":4745},{"X":1303,"Y":5973},{"X":390,"Y":7889},{"X":249,"Y":7993},{"X":0,"Y":0}]
      var begin = true;
	c.lineWidth = 3;
	borders.forEach((line)=>{
		if(begin){
			c.beginPath();
			c.moveTo(line.X, line.Y)
			begin=false;
		}else{
			if(line.X > 0){
				c.lineTo(line.X, line.Y)
			}else{
				begin =true;
				c.stroke();
				c.closePath();
			}
		}
		
	})

    canvas.addEventListener('click', function(event) {
      const px = Math.floor(event.clientX - canvas.getBoundingClientRect().left);
      const py = Math.floor(event.clientY - canvas.getBoundingClientRect().top);
      for (let i = 0; i < items.length; i++) {
        if (py > items[i].Ay && py < items[i].Dy && px >items[i].Ax && px < items[i].Bx) {
          console.log('Clicked on polygon', i + 1);
        }
      }
    });
  };
  return <canvas style={{ width: '100%' }}></canvas>;
}

export default Blog
