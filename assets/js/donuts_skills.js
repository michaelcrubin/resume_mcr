function data_fnc(x, y, z) {
  var data = {
    [y]: {
      val: Math.round(x * 100),
      color: z
     // link: 'http://www.google.com'
    }
  };
  return data;
}

$(window).scroll(function() {
  
  var sectionOffset = $('#skills').offset().top;
  var scrollPosition = $(window).scrollTop() + $(window).height();
  
  
  if (scrollPosition > sectionOffset) {
    // Execute your function here
  // R Programming
  doughnutWidget.options = {
    container: $('#r_donut'),
    width: 50,
    height: 50,
    class: 'myClass',
    cutout: 70
  };
  var dataset = data_fnc(0.95, "R", '#A31F34');
  doughnutWidget.render(dataset);


  // Python Programming
  doughnutWidget.options = {
    container: $('#python_donut'),
    width: 100,
    height: 100,
    class: 'myClass',
    cutout: 70
  };
  var dataset = data_fnc(0.9, "Python", '#A31F34');
  doughnutWidget.render(dataset);
  
  
  // SQL
  doughnutWidget.options = {
    container: $('#sql_donut'),
    width: 100,
    height: 100,
    class: 'myClass',
    cutout: 70
  };
  var dataset = data_fnc(0.8, "SQL", '#A31F34');
  doughnutWidget.render(dataset);

  // frontend
  doughnutWidget.options = {
    container: $('#fe_donut'),
    width: 100,
    height: 100,
    class: 'myClass',
    cutout: 70
  };
  var dataset = data_fnc(0.55, "HTML_CSS_JS", '#A31F34');
  doughnutWidget.render(dataset);
  
  // ML
  doughnutWidget.options = {
    container: $('#ml_donut'),
    width: 100,
    height: 100,
    class: 'myClass',
    cutout: 70
  };
  var dataset = data_fnc(0.85, "Machine_Learning", '#2c5890');
  doughnutWidget.render(dataset);
  
  // GIS
  doughnutWidget.options = {
    container: $('#gis_donut'),
    width: 100,
    height: 100,
    class: 'myClass',
    cutout: 70
  };
  var dataset = data_fnc(0.9, "GIS", '#2c5890');
  doughnutWidget.render(dataset);
  
  // AI
  doughnutWidget.options = {
    container: $('#ai_donut'),
    width: 100,
    height: 100,
    class: 'myClass',
    cutout: 70
  };
  var dataset = data_fnc(0.80, "AI_RL_NN", '#2c5890');
  doughnutWidget.render(dataset);
  
    // DS
  doughnutWidget.options = {
    container: $('#ds_donut'),
    width: 100,
    height: 100,
    class: 'myClass',
    cutout: 70
  };
  var dataset = data_fnc(0.9, "Statistics", '#2c5890');
  doughnutWidget.render(dataset);
  
  
  // Shiny
  doughnutWidget.options = {
    container: $('#shiny_donut'),
    width: 100,
    height: 100,
    class: 'myClass',
    cutout: 70
  };
  var dataset = data_fnc(0.95, "R_Shiny", '#44484C');
  doughnutWidget.render(dataset);
  
  // Dash
  doughnutWidget.options = {
    container: $('#dash_donut'),
    width: 100,
    height: 100,
    class: 'myClass',
    cutout: 70
  };
  var dataset = data_fnc(0.5, "Python_Dash", '#44484C');
  doughnutWidget.render(dataset);
  
  // Data Viz
  doughnutWidget.options = {
    container: $('#dataviz_donut'),
    width: 100,
    height: 100,
    class: 'myClass',
    cutout: 70
  };
  var dataset = data_fnc(0.7, "DataViz", '#44484C');
  doughnutWidget.render(dataset);
  
  // AWS
  doughnutWidget.options = {
    container: $('#aws_donut'),
    width: 100,
    height: 100,
    class: 'myClass',
    cutout: 70
  };
  var dataset = data_fnc(0.3, "AWS", '#44484C');
  doughnutWidget.render(dataset);
  
  }

});

/*

  // ML
  var data6 = data(0.8, "Machine Learning");
  doughnutWidget.options = {
    container: $('#ml_donut'),
    width: 100,
    height: 100,
    class: 'myClass',
    cutout: 70
  };
  doughnutWidget.render(data6);
  
  // Data Science
  var data7 = data(0.8, "Data Science/Stats");
  doughnutWidget.options = {
    container: $('#ds_donut'),
    width: 100,
    height: 100,
    class: 'myClass',
    cutout: 70
  };
  doughnutWidget.render(data7);
  
  // AI
  var data8 = data(0.8, "AI/RL/NN");
  doughnutWidget.options = {
    container: $('#ai_donut'),
    width: 100,
    height: 100,
    class: 'myClass',
    cutout: 70
  };
  doughnutWidget.render(data8);
  
  // Shiny
  var data9 = data(0.95, "R-Shiny");
  doughnutWidget.options = {
    container: $('#shiny_donut'),
    width: 100,
    height: 100,
    class: 'myClass',
    cutout: 70
  };
  doughnutWidget.render(data9);
  
  // Data Viz
  var data10 = data(0.75, "DataViz");
  doughnutWidget.options = {
    container: $('#dataviz_donut'),
    width: 100,
    height: 100,
    class: 'myClass',
    cutout: 70
  };
  doughnutWidget.render(data10);


*/