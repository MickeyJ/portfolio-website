import $ from 'jquery'
import {createHistory} from 'history'

const history = createHistory();


$(function() {

  history.listen(location => {
    $('#nav').find(`a[href="${location.pathname}"]`).addClass('active-link');
  });

});