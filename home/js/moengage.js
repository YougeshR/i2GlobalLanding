// $(document).ready(function () {
 
function triggerMoengageCourseView() {
  let startEvent = setInterval(() => {
    if (window['Moengage'] === undefined) return;
    let stopTrackingMoengage = window.STOP_TRACKING_MOENGAGE || false;
    if (!stopTrackingMoengage) {
      trackEvent({
        trackerType: 'moengage',
        eventAction: 'upGrad Course Viewed',
        data: {
          course_name: PROGRAM,
          label: 'upGrad Course Viewed',
          name: 'UG_COURSE_VIEWED',
          action: 'upGrad Course Viewed',
          url: window.location.href
        },
      });
    }
    clearInterval(startEvent);
  }, 100);
};

  triggerMoengageCourseView();

// });


function generateMoengageEvent(eventObj) {
  let eventData = eventObj.data ? eventObj.data : {};
  delete eventObj.data;
  trackEvent({
    trackerType: 'moengage',
    eventAction: eventObj.action,
    data: {...eventObj, course_name: $('<textarea />').html(PROGRAM).text(), ...eventData}
  })
}

/*
* { "eventAction":"",
*   "userAction":"",
*   "trackerType":"moengage",
*   "data":{},
*   "userActionData":{}
* }
*/
async function trackEvent(trackerobj) {
  let stopTrackingMoengage = window.STOP_TRACKING_MOENGAGE || false;
  if (!stopTrackingMoengage) {
    switch (trackerobj.trackerType) {
      case 'moengage':
        trackerobj.data.website = 'UPGRAD_BOOTCAMPS';
        if (trackerobj.userActionData) {
          if (trackerobj.userActionData?.leadIdentifier) {
            await Moengage.add_unique_user_id(trackerobj.userActionData?.leadIdentifier);
            if (trackerobj.userActionData?.first_name) {
              Moengage.add_first_name(trackerobj.userActionData?.first_name);
            }
            if (trackerobj.userActionData?.last_name) {
              Moengage.add_last_name(trackerobj.userActionData?.last_name);
            }
            if (trackerobj.userActionData?.email) {
              Moengage.add_email(trackerobj.userActionData?.email);
            }
            if (trackerobj.userActionData?.mobile) {
              Moengage.add_mobile(trackerobj.userActionData?.mobile);
            }
            if (trackerobj.userActionData?.first_name) {
              Moengage.add_user_name(trackerobj.userActionData?.first_name + " " + trackerobj.userActionData?.last_name);
            }
            Moengage.add_user_attribute("website", 'UPGRAD_BOOTCAMPS');
          }
        }
        if (trackerobj.eventAction) {
          Moengage.track_event(trackerobj.eventAction, trackerobj.data);
        }
        break;
      default: break;
    }
  }
}


async function trackUser(trackerobj) {
  let stopTrackingMoengage = window.STOP_TRACKING_MOENGAGE || false;
  if (!stopTrackingMoengage) {
    switch (trackerobj.trackerType) {
      case 'moengage':
        trackerobj.userActionData.website = 'UPGRAD_BOOTCAMPS';
        if (trackerobj.userActionData?.leadIdentifier) {
          await Moengage.add_unique_user_id(trackerobj.userActionData?.leadIdentifier);
          if (trackerobj.userActionData?.first_name) {
            Moengage.add_first_name(trackerobj.userActionData?.first_name);
          }
          if (trackerobj.userActionData?.last_name) {
            Moengage.add_last_name(trackerobj.userActionData?.last_name);
          }
          if (trackerobj.userActionData?.email) {
            Moengage.add_email(trackerobj.userActionData?.email);
          }
          if (trackerobj.userActionData?.mobile) {
            Moengage.add_mobile(trackerobj.userActionData?.mobile);
          }
          if (trackerobj.userActionData?.first_name) {
            Moengage.add_user_name(trackerobj.userActionData?.first_name + " " + trackerobj.userActionData?.last_name);
          }
          Moengage.add_user_attribute("website", 'UPGRAD_BOOTCAMPS');
        }
        break;
      default: break;
    }
  }
}

