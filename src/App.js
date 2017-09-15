import React, { Component } from 'react';
import * as api from './utils/Api'




class App extends Component {

  state ={
     data : [
  {
      "id": 526,
      "title": "commutatus",
      "lat": null,
      "lng": null,
      "url": "https://gis.aiesec.org/v2/opportunities/526",
      "location": null,
      "status": null,
      "description": "technical task",
      "is_gep": true,
      "current_status": "open",
      "duration_min": 14,
      "duration_max": 45,
      "duration": 47,
      "google_place_id": null,
      "is_ge": false,
      "programmes": {
          "id": 5,
          "short_name": "GE"
      },
      "is_favourited": false,
      "favourites": 0,
      "remark": null,
      "applied_to": true,
      "applied_to_with": 1098,
      "earliest_start_date": "2018-01-06T00:00:00Z",
      "latest_end_date": "2018-12-01T00:00:00Z",
      "applications_close_date": "2017-12-18T00:00:00Z",
      "applications_count": 2,
      "latest_reviews": [],
      "office_footfall_for_exchange": 0,
      "host_lc": {
          "id": 1975,
          "name": "-EI,CYU",
          "full_name": "AIESEC in -EI,CYU",
          "email": null,
          "tag": "LC",
          "parent_id": 1613,
          "signup_link": null,
          "country": "China",
          "url": "https://gis.aiesec.org/v2/committees/1975",
          "profile_photo_url": "https://cdn-expa.aiesec.org/gis-img/missing_profile_0.svg",
          "cover_photo_url": "https://cdn-expa.aiesec.org/gis-img/missing_office_cover.png"
      },
      "home_lc": {
          "id": 1975,
          "name": "-EI,CYU",
          "full_name": "AIESEC in -EI,CYU",
          "email": null,
          "tag": "LC",
          "parent_id": 1613,
          "signup_link": null,
          "country": "China",
          "url": "https://gis.aiesec.org/v2/committees/1975",
          "profile_photo_url": "https://cdn-expa.aiesec.org/gis-img/missing_profile_0.svg",
          "cover_photo_url": "https://cdn-expa.aiesec.org/gis-img/missing_office_cover.png"
      },
      "managers": [
          {
              "id": 1,
              "full_name": "Holly Stanford",
              "email": "1992_albertha@kovacekbatz.co",
              "profile_photo_url": "https://s3-eu-west-1.amazonaws.com/gis-development/people/profile_photos/000/000/001/medium/FacebookFemale_web_V..jpeg?1503477719",
              "cover_photo_url": "https://s3-eu-west-1.amazonaws.com/gis-development/people/cover_photos/000/000/001/original/risk..png?1494235735",
              "contact_info": {
                  "website": "http://hahnwindler.org/america",
                  "email": "afton@herzogward.info",
                  "phone": "9944178418",
                  "facebook": "susie_casper",
                  "twitter": "felicia.raynor",
                  "instagram": "alford",
                  "linkedin": "delilah.parisian",
                  "country_code": "213"
              }
          },
          {
              "id": 273,
              "full_name": "Anabelle Frami",
              "email": "1994_mylene@lebsack.io",
              "profile_photo_url": "https://cdn-expa.aiesec.org/gis-img/missing_profile_a.svg",
              "cover_photo_url": "https://cdn-expa.aiesec.org/gis-img/missing_person_cover.png",
              "contact_info": {
                  "website": "http://howellleffler.com/ivory",
                  "email": "nona@cronincarter.org",
                  "phone": "1-659-360-7456",
                  "facebook": "brielle",
                  "twitter": "eldred_smitham",
                  "instagram": "jabari",
                  "linkedin": "alysha_stiedemann",
                  "country_code": null
              }
          },
          {
              "id": 274,
              "full_name": "Pat Hand",
              "email": "1993_arnoldo.altenwerth@kautzer.co",
              "profile_photo_url": "https://cdn-expa.aiesec.org/gis-img/missing_profile_p.svg",
              "cover_photo_url": "https://cdn-expa.aiesec.org/gis-img/missing_person_cover.png",
              "contact_info": {
                  "website": "http://padberghilpert.org/dahlia.cruickshank",
                  "email": "daisha@gutmannborer.io",
                  "phone": "(420) 587-2986",
                  "facebook": "kennith_rosenbaum",
                  "twitter": "jeffry_parisian",
                  "instagram": "sasha_greenfelder",
                  "linkedin": "diana",
                  "country_code": null
              }
          }
      ],
      "branch": {
          "id": 259,
          "name": "Cassin-Leuschke",
          "organisation": {
              "id": 130,
              "name": "Cassin-Leuschke",
              "meta": {},
              "url": "https://gis.aiesec.org/v2/organisations/130",
              "website": "http://beatty.net/brandon",
              "summary": "It's not impossible. I used to bullseye womp rats in my T-16 back home, they're not much bigger than two meters.",
              "is_gep": true,
              "registration_no": "813",
              "experience_count": null,
              "year_of_creation": null,
              "contact_info": null,
              "profile_photo_urls": {
                  "original": "https://cdn-expa.aiesec.org/gis-img/missing_profile_c.svg",
                  "medium": "https://cdn-expa.aiesec.org/gis-img/missing_profile_c.svg",
                  "thumb": "https://cdn-expa.aiesec.org/gis-img/missing_profile_c.svg"
              },
              "cover_photo_urls": "https://cdn-expa.aiesec.org/gis-img/missing_company_cover.png"
          },
          "address_info": null,
          "url": "https://gis.aiesec.org/v2/organisations//branches/259",
          "contact_info": null
      },
      "team": null,
      "project": null,
      "tn_manager_info": null,
      "openings": 4,
      "available_openings": 3,
      "nationalities": [
          {
              "option": "preferred",
              "level": null,
              "id": 479,
              "name": "India"
          }
      ],
      "skills": [],
      "backgrounds": [],
      "languages": [
          {
              "option": "required",
              "level": 2,
              "id": 18,
              "name": "English"
          },
          {
              "option": "preferred",
              "level": 2,
              "id": 31,
              "name": "Italian"
          }
      ],
      "issues": [
          {
              "id": 314,
              "name": "Ageing Population"
          },
          {
              "id": 275,
              "name": "Organisational development"
          }
      ],
      "study_levels": [
          {
              "id": 783,
              "name": "Associate Degree"
          }
      ],
      "preferred_locations_info": [],
      "programme_fee": {
          "id": 1225,
          "programme_id": 5,
          "mc_id": 1613,
          "currency_id": 63,
          "fee": 0,
          "fee_for": "outgoing",
          "programmes": {
              "id": 5,
              "short_name": "GE"
          },
          "currency": {
              "id": 63,
              "name": "Mexican Peso",
              "alphabetic_code": "MXN"
          }
      },
      "logistics_info": {},
      "tm_details": {},
      "legal_info": {},
      "role_info": {
          "city": "chennai",
          "required_preparation": null,
          "learning_points": null,
          "learning_points_list": [],
          "additional_instructions": null,
          "selection_process": "interview"
      },
      "department": null,
      "specifics_info": {
          "salary": "35000",
          "salary_currency": null,
          "ask_gip_question": null,
          "salary_periodicity": null,
          "ef_test_required": null,
          "computer": false,
          "saturday_work": false,
          "expected_work_schedule": null,
          "saturday_work_schedule": null
      },
      "sdg_info": null,
      "nps_score": 0,
      "reviews": {
          "score": 0,
          "count": 0
      },
      "comments": [],
      "profile_photo_urls": {
          "original": "https://cdn-expa.aiesec.org/gis-img/missing_profile_c.svg",
          "medium": "https://cdn-expa.aiesec.org/gis-img/missing_profile_c.svg",
          "thumb": "https://cdn-expa.aiesec.org/gis-img/missing_profile_c.svg"
      },
      "cover_photo_urls": "https://cdn-expa.aiesec.org/gis-img/ge_default.png",
      "permissions": {
          "can_update": true,
          "can_edit_managers": true,
          "can_open": true,
          "can_be_applied_to": true,
          "view_applications": true,
          "can_mark_gep": true
      },
      "created_at": "2017-04-29T06:27:03Z",
      "updated_at": "2017-09-15T18:07:26Z"
  }

  ]
  }

  render() {
    return (
      <div className="App">
      <h1> hello</h1>
      {this.state.data.map(d =>
        <div>
        <p> {d.title} </p>
        <p> {d.applications_close_date}</p>
        <p> {d.earliest_start_date}</p>
        <p>{d.latest_end_date}</p>
        <p>{d.description}</p>

        </div>
       )}
      </div>
    );
  }
}

export default App;
