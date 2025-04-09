import { Component, Pipe, PipeTransform } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductosComponent } from './productos/productos.component';

@Pipe({
  name:"Juanito",
  standalone:true
})
export class MiPipe implements PipeTransform{
  transform(value: string) {
    return value.split("").reverse().join("")
  }
}
@Pipe({
  name:"Pedrito"
})
export class MiPipe2 implements PipeTransform{
  transform(value: string) {
    return `${value.substring(0,3)}***`
  }
}
@Component({
  selector: 'app-root',
  imports: [/*RouterOutlet,*/ ProductosComponent, MiPipe, MiPipe2],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Fronted-For-Nest';
}
