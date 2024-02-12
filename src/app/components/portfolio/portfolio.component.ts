import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  color: string = '#2C3E50'
  address: string = 'PORTFOLIO COMPONENT'
  element: any = '';


  showModel(element: any) {
    this.element = element;
    let imgPath:any =  $(element).children('img').attr('src');
    $('#innerBox').css('background-image', 'url( ' + imgPath + ')')
    this.showNextBtn()
    this.showPrevBtn()
    $('#boxModal').css('display', 'flex')
  }

  hideBoxModel(event: any) {
    let id: any = $(event.target).attr('id')
    if (id === 'boxModal') {
      $('#boxModal').css('display', 'none')
    }
  }

  nextelment() {
    this.element = $(this.element).parent().next().children('div');
    let imgPath = (this.element).children('img').attr('src')
    this.showPrevBtn()
    this.showNextBtn()
    if (imgPath) {
      $('#innerBox').css('background-image', 'url(' + imgPath + ')')
    }
  }

  showNextBtn() {
    if (!$(this.element).parent().next().children('div').children('img').attr('src')) {
      $('#next').addClass('d-none')
    }
    else {
      $('#next').removeClass('d-none')
    }
  }

  prevelment() {
    this.element = $(this.element).parent().prev().children('div');
    let imgPath = (this.element).children('img').attr('src')
    this.showPrevBtn()
    this.showNextBtn()
    if (imgPath) {
      $('#innerBox').css('background-image', 'url(' + imgPath + ')')
    }
  }

  showPrevBtn() {
    if (!$(this.element).parent().prev().children('div').children('img').attr('src')) {
      $('#prev').addClass('d-none')
    }
    else {
      $('#prev').removeClass('d-none')
    }
  }
}
