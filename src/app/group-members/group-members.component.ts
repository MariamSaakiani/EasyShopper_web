import { Component, OnInit } from '@angular/core';
import { groupMembers } from '../enums';
import { GeneralService } from '../services/general.service';
import { Member } from '../Model/Member';

@Component({
  selector: 'app-group-members',
  templateUrl: './group-members.component.html',
  styleUrls: ['./group-members.component.css']
})


export class GroupMembersComponent implements OnInit {

  constructor(public service: GeneralService) { }

  ngOnInit(): void {
  }

  enum: typeof groupMembers = groupMembers;
  public MemberInfo: Member = new Member();


  OnBtnClick(memberName: number) {
    switch(memberName)
    {
    case this.enum.Salome: 
    this.MemberInfo.ImgPath = 'assets/Images/Salome.png';
    this.MemberInfo.Name = 'Salome';
    this.MemberInfo.Surname = 'Kikalishvili';
    this.MemberInfo.Phrase = 'Plan all of your days and you will be much more productive.';
    this.MemberInfo.Experiences = [ '2022 January - Present | Angular Developer in BMSystems', 
                                    '2019 - 2023 | Computer Engineering faculty in SDSU Georgia | GPA 3.5',
                                    '2014 - 2019 | Physics-Mathematics N199 school of Komarov'];
    this.MemberInfo.Profession = 'Computer Engineer';
    this.service.showDialog = true;
    break;
    case this.enum.Jorj: 
    this.MemberInfo.ImgPath = 'assets/Images/Jorj.png';
    this.MemberInfo.Name = 'Giorgi';
    this.MemberInfo.Surname = 'Morchadze';
    this.MemberInfo.Phrase = 'All things are difficult before  they are easy';
    this.MemberInfo.Experiences = ['2022 January - Present | Information Technologies and Information Security Specialist in Energo Pro Georgia', 
                                   '2019 August - Present | Electrical Engineering faculty in SDSU Georgia'];
    this.MemberInfo.Profession = 'Electrical Engineer'
    this.service.showDialog = true;
    break;
    case this.enum.Nini: 
    this.MemberInfo.ImgPath = 'assets/Images/Nini.png';
    this.MemberInfo.Name = 'Nini';
    this.MemberInfo.Surname = 'Kristesiashvili';
    this.MemberInfo.Phrase = '';
    this.MemberInfo.Experiences = ['2019 - 2023 | Computer Engineering faculty in SDSU Georgia'];
    this.MemberInfo.Profession = 'Computer Engineer';
    this.service.showDialog = true;
    break;
    case this.enum.Tamar: 
    this.MemberInfo.ImgPath = 'assets/Images/Tamar.png';
    this.MemberInfo.Name = 'Tamar';
    this.MemberInfo.Surname = 'Shamugia';
    this.MemberInfo.Phrase = '';
    this.MemberInfo.Experiences = ['2019 - 2023 | Computer Engineering faculty in SDSU Georgia'];
    this.MemberInfo.Profession = 'Computer Engineer';
    this.service.showDialog = true;
    break;
    case this.enum.Mariam: 
    this.MemberInfo.ImgPath = 'assets/Images/Mariam.png';
    this.MemberInfo.Name = 'Mariam';
    this.MemberInfo.Surname = 'Saakiani';
    this.MemberInfo.Phrase = '';
    this.MemberInfo.Experiences = ['2019 - 2023 | Computer Engineering faculty in SDSU Georgia',
                                   'Designer, Artist'];
    this.MemberInfo.Profession = 'Computer Engineer';
    this.service.showDialog = true;
    break;
    
    default: break;
    }
  }

}

