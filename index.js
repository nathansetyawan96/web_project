(function () {
  function runPyScript (input) {
    var jqXHR = $.ajax({
      type: 'POST',
      url: 'python script.py input',
      // url: "python /Users/brian/NTHU/NLP/WanTing/webcam/static/webcam/hello.py",
      async: false,
      data: { param: input }
    })

    return jqXHR.responseText
  }

  // ---------- Pass Image to Django Server -----------
  document.getElementById('post-on-ptt').addEventListener('click', function () {
    response = runPyScript('data to process')
    /*
        $('form input[name=image_data]').val(canvas.toDataURL("image/png"));
        $('form input[name=width]').val(canvas.width);
        $('form input[name=height]').val(canvas.height);
        $('form').submit();
    */
  })
})()
