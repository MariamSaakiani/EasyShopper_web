import { Component, Input, OnInit } from '@angular/core';
import { Member } from 'src/app/Model/Member';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {

  constructor(private service: GeneralService) { }

  ngOnInit(): void {
    let a = this.memberInfo;
  }

  @Input() memberInfo: Member = new Member();

  close() {
    this.service.showDialog = false;
  }

}
