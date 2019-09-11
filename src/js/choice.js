import $ from 'jquery';

const choiceInit = () => {
  $('input[type=radio]').change(function() {
    if (this.value == 'yes') {
      $('.suggestion__no-docker, .suggestion__nothing').hide();
      $('.suggestion__docker').show();
    } else {
      $('.suggestion__docker, .suggestion__nothing').hide();
      $('.suggestion__no-docker').show();
    }
  });
};

choiceInit();
