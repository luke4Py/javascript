import { Component } from '@angular/core'


@Component({
    selector: 'app-hello-world',
    template: `<p> First Component - directly from template metadata value </p>
               <h1>➡️{{  title  }}</h1>
               `,
    styles: [`
    p {
      text-align: center;
    }
    h1 {
        text-align: center;
        color: blue;
    }`]
})

export class HelloWorldComponent {
    title ='Hello World!';
}
