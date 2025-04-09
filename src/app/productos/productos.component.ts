import { ChangeDetectionStrategy, Component } from '@angular/core';

type Product={
  name:string,
  price:number,
  imageUrl:string,
  description:string,
  isOfert:boolean,
  porcentajeOferta:number,

}

@Component({
  selector: 'app-productos',
  imports: [],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush,
})
export class ProductosComponent {
   products: Product[]=[
    {
      name: "Laptop",
      price:1250,
      imageUrl:'https://media.istockphoto.com/id/1023428598/es/foto/ilustraci%C3%B3n-3d-port%C3%A1til-aislado-en-fondo-blanco-port%C3%A1til-con-vac%C3%ADo-port%C3%A1til-con-pantalla-en-un.jpg?s=612x612&w=0&k=20&c=7qF1VNBfFPU_ukucIH0OJFC0_eScsjY8uVxrQ5x4SI8=',
      description: "Descripcion de producto1",
      isOfert:true,
      porcentajeOferta:0.3,
    },
    {
      name: "Impresora",
      price:2500,
      imageUrl:'https://mediaserver.goepson.com/ImConvServlet/imconv/61dcb6a700968d5fe27870dc9e72d7151805d623/1200Wx1200H?use=banner&hybrisId=B2C&assetDescr=L8050_aberta',
      description: "Descripcion de producto2",
      isOfert:false,
      porcentajeOferta:0.17,
    },
   ]
}
