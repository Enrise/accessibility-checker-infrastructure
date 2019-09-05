import $ from 'jquery';

const choiceInit = () => {
  $('input[type=radio]').change(function() {
    const text = this.value == 'yes' ? 'docker' : 'no docker';
    $('#chosen').text(text);
    console.log(this.value);
  });
};

choiceInit();
