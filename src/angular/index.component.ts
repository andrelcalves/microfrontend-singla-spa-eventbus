import { Component, ChangeDetectorRef, Inject } from '@angular/core'
import e from '../event-bus'

@Component({
    selector: 'AngularApp',
    template: `
      <div style="margin-top: 100px;">
        <h1>App escrito em Angular</h1>
        <p>{{message}}</p>
      </div>
    `,
  })

  export default class AngularApp {
    message: string = "Mensagem enviada pelo React deve aparecer aqui 😱"
  
    constructor(@Inject(ChangeDetectorRef) private changeDetector: ChangeDetectorRef) {}
  
    ngAfterContentInit() {
      e.on('message', message => {
        this.message = message.text
        this.changeDetector.detectChanges()
        this.returnMessageToReactWhenReceived()
      })
    }
  
    returnMessageToReactWhenReceived() {
      e.emit('received', { text: 'Woohoo! Hello do Angular! 🎉' })
    }
  }