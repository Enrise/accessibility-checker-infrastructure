import $ from 'jquery';

const Stepper = function(id) {
  this.id = id;
  this.$stepper;
  this.steps = [];
  this.currentStep = 0;
};

Stepper.prototype.init = function() {
  this.$stepper = $(this.id);
  let stepId = 0;
  let stepper = this;
  $('.stepper__step', this.$stepper).each(function(step) {
    stepper.initStep($(this), stepId);
    stepId++;
  });
  this.enterStep(this.currentStep);
};

Stepper.prototype.initStep = function($step, stepId) {
  $step.attr('step-id', stepId);
  $('.stepper__button.--next', $step).click(() => {
    this.currentStep++;
    this.enterStep(this.currentStep);
  });
  $('.stepper__button.--previous', $step).click(() => {
    this.currentStep--;
    this.enterStep(this.currentStep);
  });
};

Stepper.prototype.enterStep = function(id) {
  $('.stepper__step').removeClass('--active');
  $(`[step-id="${id}"]`, this.$stepper).addClass('--active');
};

const stepper = new Stepper('#homepage-stepper');
stepper.init();
