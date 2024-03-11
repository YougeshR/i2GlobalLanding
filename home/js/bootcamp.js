//view More script starts
!function (e) { e.fn.viewMore = function (i) { if (this.length) { var t = e.extend({}, { height: 245, moretext: '<a href="javascript:void(0)" class="color-3 read-more-content no-margin-bottom">View More <i class="fa fa-angle-right" aria-hidden="true"></i></a>', lesstext: '<a href="javascript:void(0)" class="color-3 read-more-content no-margin-bottom"><i class="fa fa-angle-left" aria-hidden="true"></i>&nbsp;&nbsp;View Less</a>', linkcontainer: "" }, i); return e.fn.viewMoreLink = function (i) { if (this.length) { var t = e.extend({}, { height: 245, moretext: '<a href="javascript:void(0)" class="color-3 read-more-content no-margin-bottom">View More <i class="fa fa-angle-right" aria-hidden="true"></i></a>', lesstext: '<a href="javascript:void(0)" class="color-3 read-more-content no-margin-bottom"><i class="fa fa-angle-left" aria-hidden="true"></i>&nbsp;&nbsp;View Less</a>' }, i); return this.click(function () { $thisLink = e(this), $thisLink.closest(".view-more-container").find("a").removeAttr("aria-expanded"), "false" == $thisLink.attr("aria-pressed") ? ($thisLink.closest(".view-more-container").find("[aria-expanded]").attr("aria-expanded", !0).animate().css({ overflow: "", height: "" }), $thisLink.replaceWith(e(t.lesstext).attr("aria-pressed", !0).viewMoreLink(t))) : ($thisLink.closest(".view-more-container").find("[aria-expanded]").attr("aria-expanded", !1).animate().css({ overflow: "hidden", height: t.height }), $thisLink.closest(".view-more-container").height() > 300 ? $thisLink.closest(".view-more-container").scrollToElem() : !1, $thisLink.replaceWith(e(t.moretext).attr("aria-pressed", !1).viewMoreLink(t))) }) } }, this.each(function () { $this = e(this), $this.height() >= t.height && ($this.css({ overflow: "hidden", height: t.height }).attr("aria-expanded", !1).wrap('<div class="view-more-container"></div>'), t.linkcontainer ? $this.after(e(t.linkcontainer).append(e(t.moretext).attr("aria-pressed", !1).viewMoreLink(t))) : $this.after(e(t.moretext).attr("aria-pressed", !1).viewMoreLink(t))) }) } } }(jQuery);
//view More script ends

//common view-more js
var height_before = $('.view_more').attr("attr-test-height");
$('.view_more').parent().find('.editor-content').css({
  height: height_before + 'px'
});
$('.view_more').on('click', function () {
  var height_of_doc = $(this).parent().find('.editor-content').prop('scrollHeight');
  if ($(this).attr('attr-test-open') == '0') {
    $(this).parent().find('.editor-content').css({
      height: height_of_doc + 'px'
    });
    $(this).attr('attr-test-open', '1');
    $('.view_more').text('Read less');
  } else {
    $(this).parent().find('.editor-content').css({
      height: height_before + 'px'
    });
    $(this).attr('attr-test-open', '0');
    $('.view_more').text('Read more');
  }
});
//common view-more js

//common See-more js
var before_height = $('.see_more').attr("attr-test-height");

$('.see_more').parent().parent().find('.content_list').css({
  height: before_height + 'px'
});

$(document).ready(function () {
  $("#start-app-country select.customize-select").change(function () {
    if (
      $("#start-app-country select.customize-select").val() == "Select Country"
    ) {
      $("#start-app-country .select-floating-label").removeClass(
        "value-selected"
      );
    } else {
      $("#start-app-country .select-floating-label").addClass("value-selected");
    }
  });

  $("#start-app-state select.customize-select").change(function () {
    if ($("#start-app-state select.customize-select").val() == "Select State") {
      $("#start-app-state .select-floating-label").removeClass(
        "value-selected"
      );
    } else {
      $("#start-app-state .select-floating-label").addClass("value-selected");
    }
  });

  $("#start-app-exp select.customize-select").change(function () {
    if ($("#start-app-exp select.customize-select").val() == "Select exp") {
      $("#start-app-exp .select-floating-label").removeClass("value-selected");
    } else {
      $("#start-app-exp .select-floating-label").addClass("value-selected");
    }
  });

  $("#start-app-pass select.customize-select").change(function () {
    if ($("#start-app-pass select.customize-select").val() == "Select pass") {
      $("#start-app-pass .select-floating-label").removeClass("value-selected");
    } else {
      $("#start-app-pass .select-floating-label").addClass("value-selected");
    }
  });

  $("#start-app-pass-1 select.customize-select").change(function () {
    if ($("#start-app-pass-1 select.customize-select").val() == "Select pass") {
      $("#start-app-pass-1 .select-floating-label").removeClass(
        "value-selected"
      );
    } else {
      $("#start-app-pass-1 .select-floating-label").addClass("value-selected");
    }
  });

  $("#dcyearsOfExperience select.customize-select").change(function () {
    if (
      $("#dcyearsOfExperience select.customize-select").val() ==
      "Select Years of Experience"
    ) {
      $("#dcyearsOfExperience .select-floating-label").removeClass(
        "value-selected"
      );
    } else {
      $("#dcyearsOfExperience .select-floating-label").addClass(
        "value-selected"
      );
    }
  });

  $("#yearsOfExperience select.customize-select").change(function () {
    if (
      $("#yearsOfExperience select.customize-select").val() ==
      "Select Years of Experience"
    ) {
      $("#yearsOfExperience .select-floating-label").removeClass(
        "value-selected"
      );
    } else {
      $("#yearsOfExperience .select-floating-label").addClass(
        "value-selected"
      );
    }
  });

  $(".step-01").click(function () {
    $(".progress-bar").css("width", "8.76666%");
  });

  $(".step-02").click(function () {
    $(".progress-bar").css("width", "25.5%");
  });

  $(".step-03").click(function () {
    $(".progress-bar").css("width", "42.3%");
  });

  $(".step-04").click(function () {
    $(".progress-bar").css("width", "58.9%");
  });

  $(".step-05").click(function () {
    $(".progress-bar").css("width", "75.74%");
  });

  $(".step-06").click(function () {
    $(".progress-bar").css("width", "92.5%");
  });

  var creatorSlider, mentorSlider, reviewerSlider;

  if ($(".creator-slider").length) {
    creatorSlider = new Swiper(".creator-slider", {
      loop: false,
      navigation: {
        nextEl: ".creator-button-next",
        prevEl: ".creator-button-prev",
      },
      observer: true,
      observeParents: true,
      slidesPerView: 4,
      slidesPerGroup: 3,
      spaceBetween: 60,
      pagination: false,
      breakpointsInverse: true,
      breakpoints: {
        1024: {
          slidesPerView: 4,
          spaceBetween: 60,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
          slidesPerGroup: 2,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 30,
          slidesPerGroup: 1,
        },
        320: {
          slidesPerView: 1.3,
          spaceBetween: 30,
          slidesPerGroup: 1,
        },
      },
    });
  }

  if ($(".mentor-slider").length) {
    mentorSlider = new Swiper(".mentor-slider", {
      loop: false,
      navigation: {
        nextEl: ".mentor-button-next",
        prevEl: ".mentor-button-prev",
      },
      observer: true,
      observeParents: true,
      slidesPerView: 4,
      slidesPerGroup: 3,
      spaceBetween: 60,
      pagination: false,
      breakpointsInverse: true,
      breakpoints: {
        1024: {
          slidesPerView: 4,
          spaceBetween: 60,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
          slidesPerGroup: 2,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 30,
          slidesPerGroup: 1,
        },
        320: {
          slidesPerView: 1.3,
          spaceBetween: 30,
          slidesPerGroup: 1,
        },
      },
    });
  }
  if ($(".reviewer-slider").length) {
    reviewerSlider = new Swiper(".reviewer-slider", {
      loop: false,
      navigation: {
        nextEl: ".reviewer-button-next",
        prevEl: ".reviewer-button-prev",
      },
      observer: true,
      observeParents: true,
      slidesPerView: 4,
      slidesPerGroup: 3,
      spaceBetween: 60,
      pagination: false,
      breakpointsInverse: true,
      breakpoints: {
        1024: {
          slidesPerView: 4,
          spaceBetween: 60,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
          slidesPerGroup: 2,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 30,
          slidesPerGroup: 1,
        },
        320: {
          slidesPerView: 1.3,
          spaceBetween: 30,
          slidesPerGroup: 1,
        },
      },
    });
  }

  var $videoSrc;
  $('.video-btn').click(function () {
    $videoSrc = $(this).data("src");
  });
  console.log($videoSrc);
  $('.banner-video').on('shown.bs.modal', function (e) {
    $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
  })
  $('.banner-video').on('hide.bs.modal', function (e) {
    $("#video").attr('src', '');
  })
});

var career_prep = new Swiper(".projects .swiper-container", {
  slidesPerView: 3,
  spaceBetween: 60,
  watchOverflow: true,
  pagination: {
    el: '.projects .swiper-pagination',
    clickable: true,
    dynamicBullets: true,
    dynamicMainBullets: 1,
  },
  navigation: {
    nextEl: '.project-button-next',
    prevEl: '.project-button-prev',
  },
  breakpoints: {
    1024: {
      slidesPerView: 3,
      spaceBetween: 60,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    320: {
      slidesPerView: 1.3,
      spaceBetween: 27,
    },
  },
});

var reviews = new Swiper('.reviews .swiper-container', {
  slidesPerView: 2,
  spaceBetween: 40,
  watchOverflow: true,

  pagination: {
    el: '.reviews .swiper-pagination',
    clickable: true,
    dynamicBullets: true,
    dynamicMainBullets: 1,
  },
  navigation: {
    nextEl: '.reviews-button-next',
    prevEl: '.reviews-button-prev',
  },
  breakpoints: {
    1024: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    320: {
      slidesPerView: 1.3,
      spaceBetween: 25,
    }
  }
});

var company_section_images = new Swiper(".company-logos-images", {
  spaceBetween: 0,
  centeredSlides: true,
  speed: 4000,
  autoplay: {
    delay: 1,
  },
  loop: true,
  slidesPerView: "auto",
  allowTouchMove: false,
  disableOnInteraction: true,
  breakpoints: {
    1024: {
      slidesPerView: 6,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 15,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    320: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $("header").addClass("sticky-top");
  } else {
    $("header").removeClass("sticky-top");
  }
});

/**
 * Test Data - START
 */

// $("input[name=dcfirstName]").val("bala");
// $("input[name=dclastName]").val("ragala");
// $("input[name=dcemail]").val("balaugX@mailinator.com");
// $("input[name=dcphone]").val("99999999X");

/**
 * Test Data - END
 */

function clearOtp() {
  $("input[name=otp1]").val("");
  $("input[name=otp2]").val("");
  $("input[name=otp3]").val("");
  $("input[name=otp4]").val("");
}

$("#apply_now_form").show();
$("#verify_application_mobile_form").hide();


$("#verify_email_back").on("click", function () {
  $("#apply_now_form").show();
  $("#verify_application_mobile_form").hide();
  $(".resend-code-text .resend-otp").hide();
  $(".resend-code-text .disabled").hide();
  disableTimer();
  $("#apply_now_form").find('button[type="submit"]').attr("disabled", false);
  $("#apply_now_modal_close").show();
  clearOtp();
});

$("a[data-target='.application-modal']").on("click", function () {
  $("#apply_now_form").trigger('reset');
  $("select[name=yearsOfExperience]").val('').trigger("change");
  $("#apply_now_form").find('button[type="submit"]').attr("disabled", true);
  $("#apply_now_form").show();
  $("#verify_application_mobile_form").hide();
  $("#apply_now_modal_close").show();
  clearOtp();
  $("#otp-form-success").hide();
});

$("#verify_application_mobile_form").on('keyup', function () {
  var firstName = $("input[name=otp1]").val();
  var lastName = $("input[name=otp2]").val();
  var email = $("input[name=otp3]").val();
  var phone = $("input[name=otp4]").val();
  if (firstName && lastName && email && phone) {
    $("#verify_application_mobile_form").find('button[type="submit"]').attr("disabled", false);
  } else {
    $("#verify_application_mobile_form").find('button[type="submit"]').attr("disabled", true);
  }
});

$("#verify_application_mobile_form").on('click', function () {
  var firstName = $("input[name=otp1]").val();
  var lastName = $("input[name=otp2]").val();
  var email = $("input[name=otp3]").val();
  var phone = $("input[name=otp4]").val();
  if (firstName && lastName && email && phone) {
    $("#verify_application_mobile_form").find('button[type="submit"]').attr("disabled", false);
  } else {
    $("#verify_application_mobile_form").find('button[type="submit"]').attr("disabled", true);
  }
});


$("#apply_now_form").on('keyup', function () {
  var firstName = $("input[name=firstName]").val();
  var lastName = $("input[name=lastName]").val();
  var email = $("input[name=email]").val();
  var phone = $("input[name=phone]").val();
  var yearsOfExperience = $("select[name=yearsOfExperience]").val();
  if (firstName && lastName && email && phone && yearsOfExperience) {
    if ($("#apply_now_form").valid()) {
      $("#apply_now_form").find('button[type="submit"]').attr("disabled", false);
    } else {
      $("#apply_now_form").find('button[type="submit"]').attr("disabled", true);
    }
  } else {
    $("#apply_now_form").find('button[type="submit"]').attr("disabled", true);
  }
});

$("#apply_now_form").on('click', function () {
  var firstName = $("input[name=firstName]").val();
  var lastName = $("input[name=lastName]").val();
  var email = $("input[name=email]").val();
  var phone = $("input[name=phone]").val();
  var yearsOfExperience = $("select[name=yearsOfExperience]").val();
  if (firstName && lastName && email && phone && yearsOfExperience) {
    if ($("#apply_now_form").valid()) {
      $("#apply_now_form").find('button[type="submit"]').attr("disabled", false);
    } else {
      $("#apply_now_form").find('button[type="submit"]').attr("disabled", true);
    }
  } else {
    $("#apply_now_form").find('button[type="submit"]').attr("disabled", true);
  }
});

$("a[data-target='.download-modal']").on("click", function () {
  $("#download_curriculum_form").trigger('reset');
  $("#download_curriculum_form").find('button[type="submit"]').attr("disabled", true);
  $("#download_curriculum_form").show();
  $("select[name=dcyearsOfExperience]").val('').trigger("change");
  $("#dc_verify_application_mobile_form").hide();
  $("#download_modal_close").show();
  $("#download_curriculum_success").hide();
  clearOtp();
})

$("#dc_verify_email_back").on("click", function () {
  $("#download_curriculum_form").show();
  $("#dc_verify_application_mobile_form").hide();
  $("#download_curriculum_success").hide();
  $("#download_modal_close").show();
  $(".resend-code-text .resend-otp").hide();
  $(".resend-code-text .disabled").hide();
  disableTimer();
  $("#download_curriculum_form").find('button[type="submit"]').attr("disabled", false);
  clearOtp();
});

$("#dc_verify_application_mobile_form").on('keyup', function () {
  var firstName = $("#dc_verify_application_mobile_form input[name=otp1]").val();
  var lastName = $("#dc_verify_application_mobile_form input[name=otp2]").val();
  var email = $("#dc_verify_application_mobile_form input[name=otp3]").val();
  var phone = $("#dc_verify_application_mobile_form input[name=otp4]").val();
  if (firstName && lastName && email && phone) {
    $("#dc_verify_application_mobile_form").find('button[type="submit"]').attr("disabled", false);
  } else {
    $("#dc_verify_application_mobile_form").find('button[type="submit"]').attr("disabled", true);
  }
});

$("#dc_verify_application_mobile_form").on('click', function () {
  var firstName = $("#dc_verify_application_mobile_form input[name=otp1]").val();
  var lastName = $("#dc_verify_application_mobile_form input[name=otp2]").val();
  var email = $("#dc_verify_application_mobile_form input[name=otp3]").val();
  var phone = $("#dc_verify_application_mobile_form input[name=otp4]").val();
  if (firstName && lastName && email && phone) {
    $("#dc_verify_application_mobile_form").find('button[type="submit"]').attr("disabled", false);
  } else {
    $("#dc_verify_application_mobile_form").find('button[type="submit"]').attr("disabled", true);
  }
});


$("#download_curriculum_form").on('keyup', function () {
  var firstName = $("input[name=dcfirstName]").val();
  var lastName = $("input[name=dclastName]").val();
  var email = $("input[name=dcemail]").val();
  var phone = $("input[name=dcphone]").val();
  var yearsOfExperience = $("select[name=dcyearsOfExperience]").val();
  if (firstName && lastName && email && phone && yearsOfExperience) {
    if ($("#download_curriculum_form").valid()) {
      $("#download_curriculum_form").find('button[type="submit"]').attr("disabled", false);
    } else {
      $("#download_curriculum_form").find('button[type="submit"]').attr("disabled", true);
    }
  } else {
    $("#download_curriculum_form").find('button[type="submit"]').attr("disabled", true);
  }
});

$("#download_curriculum_form").on('click', function () {
  var firstName = $("input[name=dcfirstName]").val();
  var lastName = $("input[name=dclastName]").val();
  var email = $("input[name=dcemail]").val();
  var phone = $("input[name=dcphone]").val();
  var yearsOfExperience = $("select[name=dcyearsOfExperience]").val();
  if (firstName && lastName && email && phone && yearsOfExperience) {
    if ($("#download_curriculum_form").valid()) {
      $("#download_curriculum_form").find('button[type="submit"]').attr("disabled", false);
    } else {
      $("#download_curriculum_form").find('button[type="submit"]').attr("disabled", true);
    }
  } else {
    $("#download_curriculum_form").find('button[type="submit"]').attr("disabled", true);
  }
});

var utmApplynowFormId = "APPLY_NOW";

$(document).on('click','[data-target=".application-modal"]',function(){
  if(typeof $(this).attr('data-form-mapping-id') == 'undefined' || $(this).attr('data-form-mapping-id') === false){
    utmApplynowFormId = "APPLY_NOW";
    eventName = "Apply Now";
  }else{
    utmApplynowFormId = $(this).attr('data-form-mapping-id');
    eventName = "Register for Free Demo";
  }
  applyNowFormValidate();
});

function applyNowFormValidate(){
  const applyNowFormValidator = $("#apply_now_form").validate({
    errorElement: "span",
    onfocusout: false,
    rules: {
      firstName: "required",
      lastName: "required",
      phone: {
        required: true,
        digits: true,
        maxlength: 10,
      },
      email: {
        required: true,
        email: true,
      },
      yearsOfExperience: {
        required:true
      }
    },
    messages: {
      firstName: "This Field is required",
      lastName: "This Field is required",
      phone: {
        required: "This Field is required",
        digits: "Only numbers are allowed",
        maxlength: 'Please enter a valid phone number',
      },
      email: {
        required: "This Field is required",
        email: "Please enter a valid email address",
      },
      yearsOfExperience:{
        required: "This Field is required"
      }
    },
    errorElement: "span",
    errorClass: "error",
    highlight: function (element, errorClass) {
      $(element).removeClass(errorClass);
    },
    unhighlight: function (element, errorClass) {
      $(element).removeClass(errorClass);
    },
    submitHandler: function (form) {
      $("#apply_now_form").find('button[type="submit"]').attr("disabled", true);
      var firstName = $("input[name=firstName]").val();
      var lastName = $("input[name=lastName]").val();
      var email = $("input[name=email]").val();
      var phone = $("input[name=phone]").val();
      var enableWhatsApp = $("input[name=enableWhatsApp]:checked").val() === 'on' ? 'Yes' : 'No';
      var yearsOfExperience = $("select[name=yearsOfExperience]").val();
      var utmFormId = utmApplynowFormId;

      var formData = {
        firstName,
        lastName,
        email,
        phone,
        utmFormId,
        enableWhatsApp,
        yearsOfExperience
      };

      const utm = {
        utmMedium: sessionStorage.getItem("utm_medium") || "",
        utmSource: sessionStorage.getItem("utm_source") || "",
        url: window.location.href,
        utmCampaign: sessionStorage.getItem("utm_campaign") || "",
        utmTerm: sessionStorage.getItem("utm_term") || "",
        utmContent: sessionStorage.getItem("utm_content") || "",
      };

      const detectedLocation = {
        detectedCity: "",
        detectedCountry: "",
        detectedDistrict: "",
        detectedPostalCode: "",
        detectedState: "",
      };

      const captureLeadGraphqlQuery = {
        operationName: "captureLead",
        query: `mutation captureLead($input: CreatOneLeadInput!) {
          captureLead(input: $input) {
            id,
            leadIdentifier
          }
        }`,
        variables: {
          input: {
            lead: {
              ...formData,
              program: PROGRAM,
              ...utm,
              ...detectedLocation,
            },
          },
        },
      };

      axios
        .post(API_ENDPOINT, captureLeadGraphqlQuery)
        .then(function (result) {
          console.log(result);
          if (result.data.data.captureLead?.id) {
            let leadIdentifier = result.data.data.captureLead?.leadIdentifier || '';
            localStorage.setItem("lf", JSON.stringify({...formData,leadIdentifier}));
            trackEvent({
              "eventAction": "upGrad Clicked on "+eventName,
              "userAction": false,
              "trackerType": "moengage",
              "data": {
                first_name: firstName,
                last_name: lastName,
                leadIdentifier,
                mobile: phone,
                action: "upGrad Clicked on "+eventName,
                email,
                course_name: PROGRAM,
                utmFormId,
                enableWhatsApp,
                yearsOfExperience,
                ...utm,
                label: "upGrad Clicked on "+eventName,
                name: "UG_FSD_"+utmApplynowFormId
              },
              "userActionData": {
                first_name: firstName,
                last_name: lastName,
                leadIdentifier,
                mobile: phone,
                action: "upGrad Clicked on "+eventName,
                email,
                course_name: PROGRAM,
                enableWhatsApp,
                yearsOfExperience
              }
            })
            //$('#apply_now_form').trigger("reset");
            //$('#application-modal').modal('hide');
            //window.location.href = `${window.location.protocol}//${window.location.host}/bootcamps/fullstack-development/application`;
            $("#apply_now_form").hide();
            $("#verify_application_mobile_form").show();
            $("#apply_now_modal_close").hide();
            $("#verify_application_mobile_form [id=otpError]").text('');
            disableTimer();
            $(".resend-code-text .resend-otp").hide();
            $(".resend-code-text .disabled").show();
            enableTimer();
            let maskText = phone.substring(0,2)+'*'.repeat(phone.length-4)+phone.substring(phone.length-2,phone.length);
            $("#verify_email_message").text(`Please verify your Mobile number to continue with the application process. We have sent a code to your Mobile ${maskText}`);
            $("#verify_application_mobile_form")
              .find('button[type="submit"]')
              .attr("disabled", true);
          }
        })
        .catch((err) => {
          console.error(err);
        })
        .finally(() => {
          // $("#apply_now_form")
          //   .find('button[type="submit"]')
          //   .attr("disabled", false);
        });
    },
  });
}
applyNowFormValidate();
$("#apply_now_modal_close").on("click", function () {
  applyNowFormValidator.resetForm();
});

const verifyEmailFormValidator = $("#verify_application_mobile_form").validate({
  submitHandler: function (form) {
    // $("#verify_application_mobile_form")
    //   .find('button[type="submit"]')
    //   .attr("disabled", true);
    var otp1 = $("input[name=otp1]").val().trim();
    var otp2 = $("input[name=otp2]").val().trim();
    var otp3 = $("input[name=otp3]").val().trim();
    var otp4 = $("input[name=otp4]").val().trim();

    const otp = `${otp1}${otp2}${otp3}${otp4}`;
    var formData = { otp };

    console.log(formData);
    if (otp.length != 4) {
      $("#otpError").text("4 digit OTP is required");
      $("#verify_application_mobile_form")
        .find('button[type="submit"]')
        .attr("disabled", false);
      return;
    }

    trackEvent({"eventAction":"upGrad Clicked on OTP Verification",
    "userAction":true,
    "trackerType":"moengage",
    "data":{
      first_name:JSON.parse(localStorage.getItem("lf")).firstName,
      last_name:JSON.parse(localStorage.getItem("lf")).lastName,
      email:JSON.parse(localStorage.getItem("lf")).email,
      action: "upGrad Clicked on OTP Verification",
      leadIdentifier: JSON.parse(localStorage.getItem("lf")).leadIdentifier || '',
      mobile:JSON.parse(localStorage.getItem("lf")).phone,
      course_name: PROGRAM,
      label:"upGrad Clicked on OTP Verification",
      name:"UG_FSD_OTP_VERIFY_APPLY_NOW"
    },
    "userActionData":{
      first_name:JSON.parse(localStorage.getItem("lf")).firstName,
      last_name:JSON.parse(localStorage.getItem("lf")).lastName,
      email:JSON.parse(localStorage.getItem("lf")).email,
      action: "upGrad Clicked on OTP Verification",
      leadIdentifier: JSON.parse(localStorage.getItem("lf")).leadIdentifier || '',
      mobile:JSON.parse(localStorage.getItem("lf")).phone,
      course_name: PROGRAM,
      label:"upGrad Clicked on OTP Verification",
      name:"UG_FSD_OTP_VERIFY_APPLY_NOW"
    }
    })

    const verifyEmailGraphqlQuery = {
      operationName: "verifyMobile",
      query: `mutation verifyMobile($input: VerifyLeadMobileInput!) {
        verifyMobile(input: $input) {
          data {
            message
          }
          error{
            message
          }
        }
      }`,
      variables: {
        input: {
          //email: JSON.parse(localStorage.getItem("lf")).email,
          phone: JSON.parse(localStorage.getItem("lf")).phone,
          utmFormId: JSON.parse(localStorage.getItem("lf")).utmFormId || '',
          program: PROGRAM || '',
          ...formData,
        },
      },
    };

    axios
      .post(API_ENDPOINT, verifyEmailGraphqlQuery)
      .then((result) => {
        clearOtp();
        if (!result.data.data) {
          $("#verify_application_mobile_form [id=otpError]").text('OTP Verification Failed');
        }
        if(utmApplynowFormId == "APPLY_NOW")
        {
          if (result.data?.data?.verifyMobile.data?.message) {
            window.location.href = `${window.location.protocol}//${window.location.host}/bootcamps/fullstack-development/application`;
          }
        }else{
          $("#otp-form-success").show();
          $("#apply_now_modal_close").show();
          $('#verify_application_mobile_form').hide();
          $('#apply_now_form').hide();
        }
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(function () {
        $("#verify_application_mobile_form")
          .find('button[type="submit"]')
          .attr("disabled", true);
      });
  },
});


var resendTimer;
var timer = 30;
function enableTimer() {
  timer = 30;
  resendTimer = setInterval(function(){
    timer--;
    if(timer == 0){
      $(".resend-code-text .resend-otp").show();
      $(".resend-code-text .disabled").hide();
      disableTimer();
      timer = 30;
    } else {
      $(".resend-code-text .number").text(timer);
    }
  },1000);
}

function disableTimer() {
  if(resendTimer) {
    clearInterval(resendTimer);
    $(".resend-code-text .number").text(30);
  }
}


const dcVerifyEmailFormValidator = $("#dc_verify_application_mobile_form").validate({
  submitHandler: function (form) {
    // $("#verify_application_mobile_form")
    //   .find('button[type="submit"]')
    //   .attr("disabled", true);
    var otp1 = $("#dc_verify_application_mobile_form input[name=otp1]").val().trim();
    var otp2 = $("#dc_verify_application_mobile_form input[name=otp2]").val().trim();
    var otp3 = $("#dc_verify_application_mobile_form input[name=otp3]").val().trim();
    var otp4 = $("#dc_verify_application_mobile_form input[name=otp4]").val().trim();

    const otp = `${otp1}${otp2}${otp3}${otp4}`;
    var formData = { otp };

    console.log(formData);
    if (otp.length != 4) {
      $("#otpError").text("4 digit OTP is required");
      $("#dc_verify_application_mobile_form")
        .find('button[type="submit"]')
        .attr("disabled", false);
      return;
    }

    trackEvent({"eventAction":"upGrad Clicked on OTP Verification",
    "userAction":true,
    "trackerType":"moengage",
    "data":{
      first_name:JSON.parse(localStorage.getItem("lf")).firstName,
      last_name:JSON.parse(localStorage.getItem("lf")).lastName,
      email:JSON.parse(localStorage.getItem("lf")).email,
      action: "upGrad Clicked on OTP Verification",
      leadIdentifier: JSON.parse(localStorage.getItem("lf")).leadIdentifier || '',
      mobile:JSON.parse(localStorage.getItem("lf")).phone,
      course_name: PROGRAM,
      label:"upGrad Clicked on OTP Verification",
      name:"UG_FSD_OTP_VERIFY_DOWNLOAD_CURRICULUM"
    },
    "userActionData":{
      first_name:JSON.parse(localStorage.getItem("lf")).firstName,
      last_name:JSON.parse(localStorage.getItem("lf")).lastName,
      email:JSON.parse(localStorage.getItem("lf")).email,
      action: "upGrad Clicked on OTP Verification",
      leadIdentifier: JSON.parse(localStorage.getItem("lf")).leadIdentifier || '',
      mobile:JSON.parse(localStorage.getItem("lf")).phone,
      course_name: PROGRAM,
      label:"upGrad Clicked on OTP Verification",
      name:"UG_FSD_OTP_VERIFY_DOWNLOAD_CURRICULUM"
    }
    })

    const verifyEmailGraphqlQuery = {
      operationName: "verifyMobile",
      query: `mutation verifyMobile($input: VerifyLeadMobileInput!) {
        verifyMobile(input: $input) {
          data {
            message
          }
          error{
            message
          }
        }
      }`,
      variables: {
        input: {
          //email: JSON.parse(localStorage.getItem("lf")).email,
          phone: JSON.parse(localStorage.getItem("lf")).phone,
          utmFormId: JSON.parse(localStorage.getItem("lf")).utmFormId || '',
          program: PROGRAM || '',
          ...formData,
        },
      },
    };

    axios
      .post(API_ENDPOINT, verifyEmailGraphqlQuery)
      .then((result) => {
        clearOtp();
        if (!result.data.data) {
          $("#dc_verify_application_mobile_form [id=otpError]").text('OTP Verification Failed');
        }
        if (result.data?.data?.verifyMobile?.data?.message) {
          $("#download_curriculum_form").hide();
          $("#dc_verify_application_mobile_form").hide();
          $("#download_curriculum_success").show();
          $("#download_modal_close").show();
          axios({
              url: CURRICULUM_URL,
              method: "GET",
              responseType: "blob",
            }).then((response) => {
              const url = window.URL.createObjectURL(new Blob([response.data]));
              const link = document.createElement("a");
              link.href = url;
              link.setAttribute("download", "Full_Stack_Software_Development_Bootcamp.pdf");
              document.body.appendChild(link);
              link.click();
          });
        }
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(function () {
        $("#dc_verify_application_mobile_form")
          .find('button[type="submit"]')
          .attr("disabled", true);
      });
  },
});

function OTPInput() {
  const inputs = document.querySelectorAll("#otp > *[id]");
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("keydown", function (event) {
      if (event.key === "Backspace") {
        inputs[i].value = "";
        if (i !== 0) inputs[i - 1].focus();
        event.preventDefault();
      } else {
         if (event.keyCode > 47 && event.keyCode < 58) {
          inputs[i].value = event.key;
          if (i !== inputs.length - 1) inputs[i + 1].focus();
          event.preventDefault();
        } else  {
          event.preventDefault();
        }
      }
    });
  }
  $("#otpError").text("");
}
OTPInput();

function DcOTPInput() {
  const inputs = document.querySelectorAll("#dcotp > *[id]");
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("keydown", function (event) {
      if (event.key === "Backspace") {
        inputs[i].value = "";
        if (i !== 0) inputs[i - 1].focus();
        event.preventDefault();
      } else {
         if (event.keyCode > 47 && event.keyCode < 58) {
          inputs[i].value = event.key;
          if (i !== inputs.length - 1) inputs[i + 1].focus();
          event.preventDefault();
        } else  {
          event.preventDefault();
        }
      }
    });
  }
  $("#otpError").text("");
}
DcOTPInput();

$("#download_curriculum_form").show();
$("#download_curriculum_success").hide();

$("#download_modal_close").on("click", function () {
  $("#download_curriculum_form").show();
  $("#download_curriculum_success").hide();
  downloadCurriculumFormValidator.resetForm();
});

var downloadCurriculumFormValidator = $("#download_curriculum_form").validate({
  errorElement: "span",
  onfocusout: false,
  rules: {
    dcfirstName: "required",
    dclastName: "required",
    dcphone: {
      required: true,
      digits: true,
      maxlength: 10,
    },
    dcemail: {
      required: true,
      email: true,
    },
  },
  messages: {
    dcfirstName: "This Field is Required",
    dclastName: "This Field is Required",
    dcphone: {
      required: "This Field is required",
      digits: "Only numbers are allowed",
      maxlength: 'Please enter a valid phone number',
    },
    dcemail: {
      required: "This Field is required",
      email: "Please enter a valid email address",
    },
    dcyearsOfExperience: {
      required: "This Field is required"
    }
  },
  errorElement: "span",
  errorClass: "error",
  highlight: function (element, errorClass) {
    $(element).removeClass(errorClass);
  },
  unhighlight: function (element, errorClass) {
    $(element).removeClass(errorClass);
  },
  submitHandler: function (form) {
    $("#download_curriculum_form")
      .find('button[type="submit"]')
      .attr("disabled", true);
    var firstName = $("input[name=dcfirstName]").val();
    var lastName = $("input[name=dclastName]").val();
    var email = $("input[name=dcemail]").val();
    var phone = $("input[name=dcphone]").val();
    var yearsOfExperience = $("select[name=dcyearsOfExperience]").val();
    var utmFormId = "DOWNLOAD_BROCHURE";
    var enableWhatsApp = $("input[name=dcenableWhatsApp]:checked").val() === 'on' ? 'Yes' : 'No';

    var formData = {
      firstName,
      lastName,
      email,
      phone,
      utmFormId,
      enableWhatsApp,
      yearsOfExperience
    };
    //localStorage.setItem("lf", JSON.stringify(formData));

    const utm = {
      utmMedium: sessionStorage.getItem("utm_medium") || "",
      utmSource: sessionStorage.getItem("utm_source") || "",
      url: window.location.href,
      utmCampaign: sessionStorage.getItem("utm_campaign") || "",
      utmTerm: sessionStorage.getItem("utm_term") || "",
      utmContent: sessionStorage.getItem("utm_content") || "",
    };

    const detectedLocation = {
      detectedCity: "",
      detectedCountry: "",
      detectedDistrict: "",
      detectedPostalCode: "",
      detectedState: "",
    };

    const downloadBroucherGraphqlQuery = {
      operationName: "captureLead",
      query: `mutation captureLead($input: CreatOneLeadInput!) {
        captureLead(input: $input) {
          id,
          leadIdentifier
        }
      }`,
      variables: {
        input: {
          lead: {
            ...formData,
            program: PROGRAM,
            ...utm,
            ...detectedLocation,
          },
        },
      },
    };

    axios
      .post(API_ENDPOINT, downloadBroucherGraphqlQuery)
      .then((result) => {
        if (result.data.data.captureLead?.id) {
          let leadIdentifier = result.data.data.captureLead?.leadIdentifier;
          localStorage.setItem("lf", JSON.stringify({...formData,leadIdentifier}));
          trackEvent({
            "eventAction": "upGrad Clicked on Download Curriculum",
            "userAction": false,
            "trackerType": "moengage",
            "data": {
              first_name: firstName,
              last_name: lastName,
              mobile: phone,
              email,
              action: "upGrad Clicked on Download Curriculum",
              leadIdentifier,
              course_name: PROGRAM,
              utmFormId,
              enableWhatsApp,
              yearsOfExperience,
              ...utm,
              label: "upGrad Clicked on Download Curriculum",
              name: "UG_FSD_DOWNLOAD_BROCHURE"
            },
            "userActionData": {
              first_name: firstName,
              last_name: lastName,
              leadIdentifier,
              mobile: phone,
              action: "upGrad Clicked on Download Curriculum",
              email,
              course_name: PROGRAM,
              enableWhatsApp,
              yearsOfExperience
            }
          })
          $("#download_curriculum_form").hide();
          $("#dc_verify_application_mobile_form").show();
          $("#download_curriculum_success").hide();
          $("#download_modal_close").hide();
          disableTimer();
          $(".resend-code-text .resend-otp").hide();
          $(".resend-code-text .disabled").show();
          $("#dc_verify_application_mobile_form [id=otpError]").text('');
          enableTimer();
          $("#dc_verify_application_mobile_form").find('button[type="submit"]').attr("disabled", true);
          let maskText = phone.substring(0,2)+'*'.repeat(phone.length-4)+phone.substring(phone.length-2,phone.length);
          $("#dc_verify_email_message").text(`Please verify your Mobile number to download course curriculum. We have sent a code to your Mobile ${maskText}`);
        }
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(function () {
        // $("#download_curriculum_form")
        //   .find('button[type="submit"]')
        //   .attr("disabled", true);
        // $("input[name=dcfirstName]").val('');
        // $("input[name=dclastName]").val('');
        // $("input[name=dcemail]").val('');
        // $("input[name=dcphone]").val('');
        // $("input[name=dcyearsOfExperience]").val('');
        // $('input[name=dcenableWhatsApp]').prop('checked', true);
        // axios({
        //   url: CURRICULUM_URL,
        //   method: "GET",
        //   responseType: "blob",
        // }).then((response) => {
        //   const url = window.URL.createObjectURL(new Blob([response.data]));
        //   const link = document.createElement("a");
        //   link.href = url;
        //   link.setAttribute("download", "Full_Stack_Software_Development_Bootcamp.pdf");
        //   document.body.appendChild(link);
        //   link.click();
        // });
      });
  },
});

$("#resendOtp").on("click", function (event) {
  event.preventDefault();
  $("#verify_application_mobile_form [id=otpError]").text('');
  const lf = JSON.parse(localStorage.getItem("lf"));
  const resendOtpGraphqlQuery = {
    operationName: "resendOTP",
    query: `mutation resendOTP($input: ResendOTPInput!) {
      resendOTP(input: $input) {
        data {
          message
        }
        error {
          message
        }
      }
    }
    
    `,
    variables: {
      input: {
        email: lf.email,
        phone: lf.phone,
      },
    },
  };

  axios
    .post(API_ENDPOINT, resendOtpGraphqlQuery)
    .then((result) => {
      if (result.data.data.resendOTP.error) {
        $("#verify_application_mobile_form [id=otpError]").text("Error in sending OTP.");
      }
      if (result.data.data.resendOTP.data?.message) {
        $("#verify_application_mobile_form [id=otpError]").text("OTP sent successfully.");
        $(".resend-code-text .resend-otp").hide();
        $(".resend-code-text .disabled").show();
        enableTimer();
      }
    })
    .catch((err) => {
      $("#verify_application_mobile_form [id=otpError]").text("Error in sending OTP.");
      console.error(err);
    })
    .finally(function () { });
});

$("#dc_verify_application_mobile_form [id=resendOtp]").on("click", function (event) {
  event.preventDefault();
  $("#dc_verify_application_mobile_form [id=otpError]").text('');
  const lf = JSON.parse(localStorage.getItem("lf"));
  const resendOtpGraphqlQuery = {
    operationName: "resendOTP",
    query: `mutation resendOTP($input: ResendOTPInput!) {
      resendOTP(input: $input) {
        data {
          message
        }
        error {
          message
        }
      }
    }
    
    `,
    variables: {
      input: {
        email: lf.email,
        phone: lf.phone,
      },
    },
  };

  axios
    .post(API_ENDPOINT, resendOtpGraphqlQuery)
    .then((result) => {
      if (result.data.data.resendOTP.error) {
        $("#dc_verify_application_mobile_form [id=otpError]").text("Error in sending OTP.");
      }
      if (result.data.data.resendOTP.data?.message) {
        $(".resend-code-text .resend-otp").hide();
        $(".resend-code-text .disabled").show();
        enableTimer();
        $("#dc_verify_application_mobile_form [id=otpError]").text("OTP sent successfully.");
      }
    })
    .catch((err) => {
      $("#dc_verify_application_mobile_form [id=otpError]").text("Error in sending OTP.");
      console.error(err);
    })
    .finally(function () { });
});
