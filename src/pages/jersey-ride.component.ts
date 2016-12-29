import {Component, Output, EventEmitter} from "@angular/core";
@Component({
  selector: 'jersey-ride',
  template: `
    <div class="background-color main-content-padding">      
      <h1>The Cause: The Cavaillon Orphanage</h1>
      
      <h2>Saturday May 16th, 2015</h2>
      <p><b>Start:</b> 7:00am or 9:00am</p>
      <p><b>End:</b> around 6pm the same day or around noon the next day</p>
      
      <h1>Overview</h1>
      <h2>Bikers</h2>
      <ol>
        <li><h4>Choose Your Ride</h4> - Figure out how far you want to bike and the difficulty.</li>
        <li><h4>Transportation home</h4> - Pick an option for returning from the end location.</li>
        <li><h4>Registration Form</h4> - Fill out the biker form for our records.</li>
        <li><h4>Hotel</h4> - Be sure to make hote accomodations (if you are staying overnight).</li>
        <li><h4>Find Sponsors</h4> - Get your friends to sponsor you per mile (e.x. 10 cents a mile).</li>
        <li><h4>Directions</h4> - Make note of the starting locaiton and figure out how to get there on time.</li>
      </ol>
      <h2>Sponsors</h2>
      <ol>
        <li><h4>Registration Form</h4> - To find a biker to sponsor and/or pay online.</li>
        <li><h4>Alternatively</h4> - If you don't want to pay online, let this biker know you wish to sponsor them.</li>
          <ol><li><h4>Follow Up</h4> - If you do this, help them and us by following up with them after the event.</li></ol>
      </ol>
      <h2>Volunteers</h2>
      <ol>
        <li><h4>Transportation home</h4> - Pick an option for returning from the end location.</li>
        <li><h4>Registration Form</h4> - Fill out the volunteer form.</li>
        <li><h4>Hotel</h4> - Be sure to make hote accomodations (if you are staying overnight).</li>
        <li><h4>Directions</h4> - Make note of the starting locaiton and figure out how to get there on time.</li>
      </ol>
      <h2>Donating</h2>
      <ul>
        <li><h4>Online</h4> - You can donate online through the donate form.</li>
        <li><h4>Check</h4> - Send checks to Bike4Beds, 229 Mountain Park Rd., Allentown, PA 18103</li>
      </ul>
      
      <h2>Online Forms</h2>
      <p>Can be found at the bottom of this page</p>
      
      <h1>Event Details</h1>
       
       <h3>About</h3>
       <p>We invite people of all ages and biking abilities to join us on a lively, spring bike ride. We offer options 
       for everyone. Choose from four different bike routes ranging from 25 miles to the full century ride.</p>
       <p>There will be multiple rest stops with attendants, beverages, health bars, and wraps.</p>
       <p>We have volunteers and drivers to help with bikes and transportation along the way. Explore tranquil pinewood 
       forests surrounded by old, weathered farmhouses with wildflours and vegetable stands in the front yard.</p>
       <p>Come feel the refreshing sea breeze against your face as we ride into Avalon and down along the coast. 
       Sightsee the pastel cottages of Stone Harbor before crossing the bridge into Wildwood.</p>
       <p>Finish up the day with the salty wind against your back as you ride down the boardwalk towards our final 
       destination, The Fountain Motel.</p>
       <p>Relax with a beer or Gatorade and good company during our post ride pizza party; before catching a ride back 
       to your car. Or, stay over and help us celebrate another successful bike ride to the shore!</p>
       <p>We accommodate different biking abilities, and experience within a spectrum of routes. All routes are clearly 
       marked with road paint. Bikers will be provided with cue sheets and emergency contact numbers for support 
       volunteers.</p>
       
       <h3>Starting Times</h3>
       <p>We accomodate different biking abilities, we have two starting locations (and different starting times).</p>
       <ol>
        <li>Quarter or Half Century start at 9:00 am at St John Bosco Parish (Parish of All Saints), Millville, NJ</li>
        <li>Metric or Full Century start at 7:00am ACME in Woodstown, NJ</li>
       </ol>
       
       <h3>Choose Your Ride</h3>
       <div class="indent-sub-content">
       <h4>Quarter Century 25 (miles 1-12 & 44-55)</h4>
       <p>This is the shortest route intended for novice riders who are looking for an enjoyable Saturday morning ride 
       through moderately flat, Jersey countryside. The first 12 miles takes you to lunch Wawa, rest your legs while you
        and your bike are driven to Avalon. Once we reach the coast, you can get back on the bikes for the best part of 
        the day! Drink up the seaside sights and smells as you tap your reserves for the final 10 miles into Wildwood.</p>
       <h4>Half Century 50 miles (miles 1-55)</h4>
       <p>This route is ideal for the novice to intermediate biker who is interested in biking along the coast; but 
       isn’t prepared for a full century ride. Enjoy biking the first The first 12 miles takes you to lunch at WAWA. 
       After lunch, get back on your bike for the final 43 miles through the Pine Barrens and straight down the coast 
       into Wildwood.</p>
       <h4>Metric Century 70 (miles 1-58 & 89-100)</h4>
       <p>Ideal for intermediate to experienced riders who wish to bike through the most scenic areas, but who aren’t 
       comfortable with the full century. Enjoy the first moderately flat 30 miles through western Jersey and then get 
       a lift in the vans to the halfway point for lunch at Wawa. After lunch, get back on your bike for the final 40 
       miles through the Pine Barrens and straight down the coast into Wildwood. This route offers two sizeable legs 
       with a nice break in the middle.</p>
       <h4>Bike4Beds Century 100 (miles 1-100)</h4>
       <p>This route is ideal for experienced bikers who are interested in the full century ride through the width of 
       New Jersey and down the coast into Wildwood. This is the original route that we mapped out in an effort to take 
       riders over quiet country roads with scenic views. This moderately flat course is a good course to do your first 
       century. Riders should train for this route. There are multiple rest stops with refreshing beverages and snacks. 
       We will stop at Wawa for lunch. If you complete the full 100 miles, we will add your name to our new Century Club
        on the website!</p>
       </div>
        
      <h3>Rest Stops</h3>
      <p>There will be rest stops for bikers to get water, Gatorade, power bars and wraps. Please see your bike course 
      for where the rest stops mileage or click here to see <a href="https://www.google.com/maps/d/u/0/viewer?hl=en&hl=en&authuser=0&authuser=0&mid=1q7bDzpfxVmIC3vdL2qQ4Ddk4Ir8&ll=39.31822999290321%2C-75.02881049999996&z=9">
      Rest Stops & Starting Locations.</a></p>
      
      <h3>Transportation Options</h3>
      <p>Join us for the full day event or head back to the starting point after your ride. We will provide 
      transportation for you, your bike, and your gear back to your car at the Acme in Woodstown, NJ and the St John's 
      Parish in Millville, NJ.</p>
      <ul>
        <li><h4>Van A</h4> – Traveling back to Millville & Woodstown NJ from Wildwood, NJ at 3 - 4 pm on Saturday evening May 16th</li>
        <li><h4>Van B</h4> – Traveling back to Millville & Woodstown NJ from Wildwood, NJ at 7 - 8 pm on Saturday evening May 16th</li>
        <li><h4>Van C</h4> – Traveling back to Millville & Woodstown, NJ from Wildwood, NJ at noon on Sunday morning May 17th</li>
      </ul>

      <h3>What to Bring</h3>
      <p>Please bring spare inner tubes, bike helmet, and cell phone. The route is intended to have little automobile 
      traffic, however there are a few places where the automobile traffic is heavy. Note: Helmets are required!</p>
      
      <h3>Hotel Accommodations</h3>
      <p>After the ride we will be hosting a pizza party at the Fountain Motel in Wildwood, NJ. Kick back, have a 
      beverage and a slice of pizza; and relax after an active day in the sun! If you are staying the night, bring a 
      bathing suit so you can cool off in the pool or the Ocean. For information on hotel accommodations please check 
      out the links below. Don’t forget to mention that you are with the Bike for Beds organization for a preferred 
      rate. <a href="http://www.fountainmotel.com/en/">The Fountain Motel</a></p>
      
      <h1>Online Resgistration and Forms</h1>
      <div class="form-button" (click)="handleFormClick('BIKEFORM')">
        <div class="title">
          <h3>Biking Form</h3>
        </div>
        <h5>Will ask you to pick a ride and difficulty, a transportation home method, and ask you to sign a waiver.</h5>
        
      </div>
      <div class="form-button" (click)="handleFormClick('VOLUNTEERFORM')">
        <div class="title">
          <h3>Volunteering Form</h3>
        </div>
        <h5>Will ask you to pick a transportation home method and have you sign a waiver.</h5>
        
      </div>
      <div class="form-button" (click)="handleFormClick('SPONSORFORM')">
        <div class="title">
          <h3>Sponsoring Form</h3>
        </div>
        <h5>Will ask you to pick a biker and event and provide a way for you to enter the payment amount.</h5>
      </div>
      <div class="form-button" (click)="handleFormClick('DONATEFORM')">
        <div class="title">
          <h3>Donations Form</h3>
        </div>
        <h5>Will provide a way to donate directly to this event.</h5>
      </div>
    </div>
  `,
  styles: [`
    .form-button {
      width: 100%;
      padding: 5px;
    }
    .form-button:hover {
      color: #8b0000;
    }
    .form-button .title {
      margin-top: 5px;
      margin-left: 15px;
    }
    .form-button h5 {
      margin-left: 30px;
    }
    .main-content-padding {
      padding: 10px 25px;
    }
    li h4 {
      display: inline-block;
      margin-top: 0px;
    }
    .indent-sub-content {
      padding-left: 25px;
    }
    h1 {
      color: #8b0000;
    }
  `]
})
export class JerseyRide{

  @Output() enterNewLevel = new EventEmitter();

  handleFormClick(newLevelTarget){
    this.enterNewLevel.emit({
      value: newLevelTarget
    })
  }
}
