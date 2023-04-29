import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel, NgbCarouselModule, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { log } from 'console';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true
  folder: string = ""
  s3bucket: string = "https://realloc-image.s3.amazonaws.com/"
  imgUrl: any
  address: any = '2030/31/32/25 Silver Bussiness Point, Near VIP Circle, Utran, Syrat:394101'
  email: string = 'info@reallocinfotech.com'
  contactNumber: number = 9985451212
  fileToUpload: any;
  imageUrl: any = '../../assets/samplelogo3.png';
  cardBackground: string = "#fff";
  cardTextColor: string = "#000";
  borderColor: string = "#6d858a";
  width: number = 100
  height: number = 100
  activeMenuIndex: number = 0
  headerMenuActive: number = 0
  sortedFestivals: any
  frames1: boolean = true
  frames2: boolean = false


  tabArr: any = [
    {
      id: 0,
      name: "Republic Day",
      folderName: "RepublicDay",
      date: "Jan 26, 2023"
    },
    {
      id: 1,
      name: "Makar Sankranti",
      folderName: "MakarSankranti",
      date: "Jan 14, 2023"
    },
    {
      id: 2,
      name: "Hanuman Jayanti",
      folderName: "HanumanJayanti",
      date: "Apr 6, 2023"
    },
    {
      id: 3,
      name: "Sardar Patel Jayanti",
      folderName: "SardarPatelJayanti",
      date: "31 October 2023"
    },
    {
      id: 4,
      name: "Indian Army Day",
      folderName: "IndianArmyDay",
      date: "Jan 15, 2023"
    },
    {
      id: 5,
      name: "World Cancer Day",
      folderName: "WorldCancerDay",
      date: "Feb 4, 2023"
    },
    {
      id: 6,
      name: "MahaShivratri",
      folderName: "MahaShivratri",
      date: "Feb 18, 2023"
    },
    {
      id: 7,
      name: "Ramnavami",
      folderName: "Ramnavami",
      date: "Mar 30, 2023"
    },
    {
      id: 8,
      name: "Mahavir Jayanti",
      folderName: "MahavirJayanti",
      date: "Apr 4, 2023"
    },
    {
      id: 9,
      name: "Rathyatra",
      folderName: "Rathyatra",
      date: "Jun 20, 2023"
    },
    {
      id: 10,
      name: "GuruPurnima",
      folderName: "GuruPurnima",
      date: "Jul 3, 2023"
    },
    {
      id: 11,
      name: "Rakshabandhan",
      folderName: "Rakshabandhan",
      date: "Aug 30, 2023"
    },
    {
      id: 12,
      name: "Kargil Vijay Diwas",
      folderName: "KargilVijayDiwas",
      date: "ul 26, 2023"
    },
    {
      id: 13,
      name: "Janmastami",
      folderName: "Janmastami",
      date: "Sep 7, 2023"
    },
    {
      id: 14,
      name: "Independence Day",
      folderName: "IndependenceDay",
      date: "Aug 15, 2023"
    },
    {
      id: 15,
      name: "Ganesh Chaturthi",
      folderName: "GaneshChaturthi",
      date: "Sep 19, 2023"
    },
    {
      id: 16,
      name: "Teacher's Day",
      folderName: "Teacher'sDay",
      date: "Sep 5, 2023"
    },
    {
      id: 17,
      name: "National Farmers Day",
      folderName: "NationalFarmersDay",
      date: "Dec 23, 2023"
    },
    {
      id: 18,
      name: "Mahatma Gandhi Jaynti",
      folderName: "MahatmaGandhiJaynti",
      date: "Oct 2, 2023"
    },
    {
      id: 19,
      name: "Women's Day",
      folderName: "WomenDay",
      date: "Mar 8, 2023"
    },
    {
      id: 20,
      name: "Mothers Day",
      folderName: "MothersDay",
      date: "May 14, 2023"
    },
    {
      id: 21,
      name: "Yoga Day",
      folderName: "YogaDay",
      date: "Jun 21, 2023"
    },
    {
      id: 22,
      name: "Javaharlal Nehrus Bday",
      folderName: "JavaharlalNehrusBday",
      date: "Nov 14, 2023"
    },
    {
      id: 23,
      name: "World's No TobaccoDay",
      folderName: "World'sNoTobaccoDay",
      date: "May 31, 2023"
    },
    {
      id: 24,
      name: "Worldenviroment Day",
      folderName: "WorldenviromentDay",
      date: "Jun 5, 2023"
    },
    {
      id: 25,
      name: "IndianAirForce Day",
      folderName: "IndianAirForceDay",
      date: "Oct 8, 2023"
    },
    {
      id: 26,
      name: "International Youth Day",
      folderName: "InternationalYouthDay",
      date: "Aug 12, 2023"
    },
    {
      id: 27,
      name: "Navratri Starting",
      folderName: "NavratriStarting",
      date: "Oct 15, 2023"
    },
    {
      id: 28,
      name: "Dashehra",
      folderName: "Dashehra",
      date: "Oct 24, 2023"
    },
    {
      id: 29,
      name: "Diwali",
      folderName: "Diwali",
      date: "Nov 9, 2023"
    },
    {
      id: 30,
      name: "New Year",
      folderName: "NewYear",
      date: "Jan 1, 2023"
    },
    {
      id: 31,
      name: "Indian Navy Day",
      folderName: "IndianNavyDay",
      date: "Dec 4, 2023"
    },
    {
      id: 32,
      name: "Christmas",
      folderName: "Christmas",
      date: "Dec 25, 2023"
    },
    {
      id: 33,
      name: "Dhuleti",
      folderName: "Dhuleti",
      date: "Mar 8, 2023"
    },
    {
      id: 34,
      name: "Friendship Day",
      folderName: "FriendshipDay",
      date: "Jul 30, 2023"
    },
    {
      id: 35,
      name: "Holi",
      folderName: "Holi",
      date: "Mar 8, 2023"
    },
    {
      id: 36,
      name: "National Education Day",
      folderName: "NationalEducationDay",
      date: "Nov 11, 2023"
    },
    {
      id: 37,
      name: "World Tourism Day",
      folderName: "WorldTourismDay",
      date: "Sep 27, 2023"
    },
    {
      id: 38,
      name: "APJAbdul Kalam Bday",
      folderName: "APJAbdulKalamBday",
      date: "Oct 15, 2023"
    },
    {
      id: 39,
      name: "Ambedkar Jayanti",
      folderName: "AmbedkarJayanti",
      date: "Apr 14, 2023"
    },
    {
      id: 40,
      name: "Water Day",
      folderName: "WaterDay",
      date: "Mar 22, 2023"
    },
    {
      id: 41,
      name: "World Population Day",
      folderName: "WorldPopulationDay",
      date: "Jul 11, 2023"
    },
    {
      id: 42,
      name: "Hindi Diwas",
      folderName: "HindiDiwas",
      date: "Sep 14, 2023"
    },
    {
      id: 43,
      name: "National Youth Day",
      folderName: "NationalYouthDay",
      date: "Jan 12, 2023"
    },
    {
      id: 44,
      name: "Valentine's Day",
      folderName: "Valentine'sDay",
      date: "Feb 14, 2023"
    },
    {
      id: 45,
      name: "Dhanteras",
      folderName: "Dhanteras",
      date: "Nov 10, 2023"
    },
  ]

  menuData = [
    { name: 'Home' },
    { name: 'About', link: "#About" },
    { name: 'PostMakers', link: "#FestivalPosters" },
    { name: 'How To Use', link: "#howtouse" },
    { name: 'Testimonial', link: "#Testimonial" },
    { name: 'Blog' , link:"#Blog" },
  ]
  constructor() {}

  ngOnInit(): void {
    this.imageUrl = this.s3bucket + 'assets/samplelogo3.png';

    this.headerMenuActive = Number(localStorage.getItem('activeMenuIndex'))
    this.sortedFestivals = this.sortedDates.map((id: any) => id.date)
    this.folder = this.sortedFestivals[0].folderName

  }

  

  onSlide(slideEvent: NgbSlideEvent) {
    if (
      this.unpauseOnArrow &&
      slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)
    ) {
    }
    if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
    }
  }


  festivalPosters(name: any, index: number) {
    this.activeMenuIndex = index
    this.folder = name
  }


  image(event: any) {
    this.imgUrl = event.target.src
  }

  handleFileInput(event: any) {
    this.fileToUpload = event.target.files.item(0);
    let reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }

  save(fileName: any) {
    let section: any = document.querySelector('#mainContainer');
    html2canvas(section).then((canvas: any) => {
      var link = document.createElement('a');
      link.href = canvas.toDataURL();
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
    });
  }

  activeHeaderMenu(index: any) {
    this.headerMenuActive = index
    localStorage.setItem('activeMenuIndex',JSON.stringify(this.headerMenuActive))
  }

  frames(event: any) {
    if (event.target.name === "f1") {
      this.frames1 = true
      this.frames2 = false
    }
    if (event.target.name === "f2") {
      this.frames2 = true
      this.frames1 = false
    }
  }

  sortedDates: {date: Date, isPast: boolean, isFuture: boolean }[] = this.tabArr.map((date: any) => ({
    date,
    isPast: new Date(date.date) < new Date(),
    isFuture: new Date(date.date) > new Date()
  })).sort((a: any, b: any) => {
    if (a.isFuture && b.isFuture) {
      return new Date(a.date.date) < new Date(b.date.date) ? -1 : 1;
    } else if (a.isPast && b.isPast) {
      return new Date(a.date.date) > new Date(b.date.date) ? -1 : 1;
    } else {
      return a.isFuture ? -1 : 1;
    }
  });
}
