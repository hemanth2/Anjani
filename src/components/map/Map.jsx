import React, { useEffect, useState } from 'react';
import "../home/recent/recent.css"
import ItemDataService from '../../services/item.service';

const Map = () => {


 const [items, setItems] = useState([]);
 const borders =[{"X":2913,"Y":587},{"X":5632,"Y":106},{"X":5599,"Y":10},{"X":0,"Y":0},{"X":5752,"Y":1},{"X":5781,"Y":83},{"X":6019,"Y":45},{"X":0,"Y":0},{"X":6075,"Y":301},{"X":5865,"Y":335},{"X":6809,"Y":3119},{"X":0,"Y":0},{"X":6726,"Y":3148},{"X":6670,"Y":2990},{"X":6277,"Y":3081},{"X":6197,"Y":3160},{"X":5959,"Y":3880},{"X":5885,"Y":4335},{"X":5934,"Y":4535},{"X":0,"Y":0},{"X":5838,"Y":4554},{"X":5811,"Y":4432},{"X":3967,"Y":4093},{"X":3828,"Y":4082},{"X":3812,"Y":4258},{"X":3769,"Y":4407},{"X":3729,"Y":4466},{"X":3651,"Y":4549},{"X":3499,"Y":5044},{"X":3370,"Y":4998},{"X":3226,"Y":5518},{"X":3492,"Y":5552},{"X":3430,"Y":5677},{"X":3766,"Y":5757},{"X":3793,"Y":5708},{"X":4138,"Y":5850},{"X":0,"Y":0},{"X":4085,"Y":5957},{"X":3845,"Y":5858},{"X":3788,"Y":5972},{"X":3685,"Y":5922},{"X":0,"Y":0},{"X":3494,"Y":7040},{"X":3826,"Y":7201},{"X":0,"Y":0},{"X":3787,"Y":7311},{"X":3442,"Y":7144},{"X":3361,"Y":7301},{"X":2331,"Y":6790},{"X":1452,"Y":8554},{"X":1651,"Y":8648},{"X":0,"Y":0},{"X":1605,"Y":8748},{"X":6,"Y":8001},{"X":0,"Y":0},{"X":54,"Y":7901},{"X":461,"Y":8092},{"X":1354,"Y":6301},{"X":0,"Y":0},{"X":2957,"Y":846},{"X":3300,"Y":784},{"X":3030,"Y":1432},{"X":3016,"Y":1495},{"X":2932,"Y":1829},{"X":2932,"Y":1829},{"X":2873,"Y":2076},{"X":2801,"Y":2373},{"X":2666,"Y":2787},{"X":2598,"Y":2965},,{"X":2493,"Y":3249},{"X":2385,"Y":3518},{"X":1857,"Y":4745},{"X":1303,"Y":5973},{"X":390,"Y":7889},{"X":249,"Y":7993},{"X":0,"Y":0},{"X":3662,"Y":6035},{"X":3742,"Y":6121},,{"X":0,"Y":0}]
	const roads =[{"X":3223,"Y":664,"TXT":100,"D":9},{"X":4251,"Y":488,"TXT":100,"D":9},{"X":5188,"Y":315,"TXT":100,"D":9},{"X":5985,"Y":897,"TXT":40,"D":110},{"X":5504,"Y":1065,"TXT":30,"D":110},{"X":5043,"Y":1216,"TXT":30,"D":110},{"X":4582,"Y":1374,"TXT":30,"D":110},{"X":4121,"Y":1529,"TXT":30,"D":110},{"X":3664,"Y":1688,"TXT":30,"D":110},{"X":3244,"Y":1956,"TXT":30,"D":110},{"X":3170,"Y":3289,"TXT":30,"D":110},{"X":3677,"Y":3243,"TXT":30,"D":110},{"X":4178,"Y":3202,"TXT":30,"D":110},{"X":4637,"Y":3046,"TXT":30,"D":110},{"X":5560,"Y":2736,"TXT":30,"D":110},{"X":5100,"Y":2894,"TXT":30,"D":110},{"X":6017,"Y":2584,"TXT":30,"D":110},{"X":2066,"Y":4985,"TXT":30,"D":63},{"X":2508,"Y":5195,"TXT":30,"D":63},{"X":2949,"Y":5413,"TXT":30,"D":63},{"X":3091,"Y":6221,"TXT":30,"D":63},{"X":3520,"Y":6435,"TXT":30,"D":63},{"X":1901,"Y":7513,"TXT":30,"D":63},{"X":1453,"Y":7316,"TXT":30,"D":63},{"X":1015,"Y":7103,"TXT":30,"D":63},{"X":4935,"Y":4236,"D":-12},{"X":2571,"Y":6654,"TXT":30,"D":-27}]
	const misc =[{"Ax":3301,"Ay":787,"Bx":3370,"By":991,"Cx":3192,"Cy":1051,"Dx":3301,"Dy":787,"Text":"Fill","Color":"#E1E7E8"},{"Ax":3192,"Ay":1051,"Bx":3277,"By":1302,"Cx":3100,"Cy":1361,"Dx":3082,"Dy":1311,"Text":"Fill","Color":"#E1E7E8"},{"Ax":3017,"Ay":1496,"Bx":3109,"By":1769,"Cx":2931,"Cy":1828,"Dx":3017,"Dy":1496,"Text":"Fill","Color":"#E1E7E8"},{"Ax":2933,"Ay":1830,"Bx":2962,"By":1919,"Cx":2906,"Cy":1937,"Dx":2933,"Dy":1830,"Text":"Fill","Color":"#E1E7E8"},{"Ax":2907,"Ay":1937,"Bx":2950,"By":2052,"Cx":2873,"Cy":2075,"Dx":2907,"Dy":1937,"Text":"Fill","Color":"#E1E7E8"},{"Ax":2873,"Ay":2075,"Bx":2915,"By":2191,"Cx":2863,"Cy":2209,"Dx":2849,"Dy":2171,"Text":"Fill","Color":"#E1E7E8"},{"Ax":2801,"Ay":2372,"Bx":2914,"By":2704,"Cx":2666,"Cy":2787,"Dx":2801,"Dy":2373,"Text":"Park","Color":"#DAF7A6"},{"Ax":2599,"Ay":2965,"Bx":2784,"By":2905,"Cx":2983,"Cy":3489,"Dx":2492,"Dy":3249,"Text":"Park","Color":"#DAF7A6"},{"Ax":2978,"Ay":3477,"Bx":3156,"By":3418,"Cx":3219,"Cy":3605,"Dx":2981,"Dy":3488,"Text":"Fill","Color":"#E1E7E8"},{"Ax":3339,"Ay":3612,"Bx":3517,"By":3553,"Cx":3575,"Cy":3778,"Dx":3358,"Dy":3674,"Text":"Fill","Color":"#E1E7E8"},{"Ax":3556,"Ay":3667,"Bx":3733,"By":3609,"Cx":3758,"Cy":3680,"Dx":3575,"Dy":3778,"Text":"Fill","Color":"#E1E7E8"},{"Ax":1188,"Ay":6220,"Bx":1353,"By":6302,"Cx":461,"Cy":8091,"Dx":293,"Dy":8011,"Text":"ANJANIPUTRA ESTATES","Color":"#EAF0F0"},{"Ax":4183,"Ay":3829,"Bx":5355,"By":4041,"Cx":5454,"Cy":4289,"Dx":4016,"Dy":4007,"Text":"RAMARAOPET VILLAGE","Color":"#F6F8F9"}]
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
	
	
	roads.forEach((rd) =>{
	  const rotationAngle = rd.D * (Math.PI / 180);
	  c.translate(rd.X, rd.Y);
      c.rotate(-rotationAngle);
	  const text = rd.TXT + ' FEET WIDE ROAD';
      c.font = rd.TXT===100? '40px Arial bold':rd.TXT-10+'px Arial bold';
      c.fillStyle = 'black';
      c.textAlign = 'center';

      c.fillText(text, 0, 0);
	  c.rotate(rotationAngle);
      c.translate(-rd.X, -rd.Y);
	})
	
	misc.forEach((plot)=>{
		
		const vertices = [
        { x: plot.Ax, y: plot.Ay },
        { x: plot.Bx, y: plot.By },
        { x: plot.Cx, y: plot.Cy },
        { x: plot.Dx, y: plot.Dy },
      ];
      
        c.fillStyle = plot.Color;
      
      c.beginPath();
      c.moveTo(vertices[0].x, vertices[0].y);
      for (let i = 1; i < vertices.length; i++) {
        c.lineTo(vertices[i].x, vertices[i].y);
      }
      c.lineTo(vertices[0].x, vertices[0].y);
      c.stroke();
      c.closePath();
      c.fill();
	  if(plot.Text  !== 'Fill'){
      const centerX = (vertices[0].x + vertices[2].x) / 2;
      const centerY = (vertices[0].y + vertices[2].y) / 2;
      const rotationAngle = 15 * (Math.PI / 180);
      c.translate(centerX, centerY);
      c.rotate(-rotationAngle);

      const text = plot.Text;
      c.font = '20px Arial';
	  c.fillStyle = 'black';
      c.textAlign = 'center';

      c.fillText(text, 0, 0);

      c.rotate(rotationAngle);
      c.translate(-centerX, -centerY);
	  }
		
	});
	
	
	canvas.addEventListener('click', function(event) {
      const px = Math.floor(event.clientX - canvas.getBoundingClientRect().left);
      const py = Math.floor(event.clientY - canvas.getBoundingClientRect().top);
	  console.log(px,py)
      for (let i = 0; i < items.length; i++) {
        if (py > items[i].Ay && py < items[i].Dy) {
          console.log('Clicked on polygon', i + 1);
        }
      }
    });
  };
  return <canvas style={{ width: '100%' }}></canvas>;
}

export default Map