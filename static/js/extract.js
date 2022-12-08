
const main = {
  init(){
    this.showBlockTransition();
    this.showModalDownloadFile();
    this.hideModalDownloadFile();
    this.downloaderFile();
    this.clickClearFile(); 
    this.showModalDelete();
    this.hideModalDelete(); 
    // this.showModalSave();
  },
  // Показать скрыть блок транзакции
  showBlockTransition(){
    $('.table-wrapper .pointer').on('click', function(e){
        e.preventDefault();
        $('.clicked').not($(this).next()).slideUp(0);
        $(this).next().slideToggle(0);

        $('.clicked').each(function(){
            if($(this).css('display') == 'table-row'){
                $('.table-wrapper table').addClass('has-opened');
                return false;
            }else{
                $('.table-wrapper table').removeClass('has-opened');
            }
        });
        const idx = $('.table-wrapper .pointer').index(this);
        const res = $('.table-wrapper .clicked:eq('+idx+') dd.summa')[0].childNodes[0].data;
        const num = Number(res.replaceAll(' ', ''))

        main.addInput(idx, num);
    });
  },
  addInput(idx, num){
    $('.table-wrapper .clicked:eq('+idx+') .table-cell input').on('click', function(e){
        e.preventDefault();
        res = main.resultInput(idx)
        $(this).val(num - res);
    });
  },
  resultInput(idx){
    num = 0;
    $('.table-wrapper .clicked:eq('+idx+') .table-cell input').each(function(index, val){
      num += Number(val.value)
    })
    return num
  },
  downloaderFile(){
    let dropZone = $('#upload-container');

    $('#file-input').focus(function() {
        $('label').addClass('focus');
    })
    .focusout(function() {
        $('label').removeClass('focus');
    });

    dropZone.on('drag dragstart dragend dragover dragenter dragleave drop', function(){
        return false;
    });

    dropZone.on('dragover dragenter', function() {
        dropZone.addClass('dragover');
    });

    dropZone.on('dragleave', function(e) {
        let dx = e.pageX - dropZone.offset().left;
        let dy = e.pageY - dropZone.offset().top;
        if ((dx < 0) || (dx > dropZone.width()) || (dy < 0) || (dy > dropZone.height())) {
            dropZone.removeClass('dragover');
        }
    });

    dropZone.on('drop', function(e) {
        dropZone.removeClass('dragover');
        let files = e.originalEvent.dataTransfer.files;
        $('input.file-input')[0].files = files
        main.validFile(files);
    });

    $(".modal-body .file-input").on('change', function(e) {
      let files = e.target.files;
      main.validFile(files);
    });
  },
  validFile(files){
    if (files[0].type == 'text/plain'){
      return main.showBlockFile(files[0].name);
    }
    main.showBlockError();
    main.clearFile();
  },
  showBlockError(){
    $('.modal-footer .error').removeClass('hide-modal');
  },
  showBlockFile(name){
      $('.file-select-block ').addClass('hide-modal');
      $('.chosen-docs-data span')[0].innerText = name;
      $('.chosen-docs').removeClass('hide-modal');
      $('.form-actions').removeClass('hide-modal');
      $('.modal-footer .error').addClass('hide-modal');
    },
    clickClearFile(){
      $("#clear").on("click", function(e) {
        main.clearFile();
      });
    },
  clearFile(){
      $('input.file-input').val('');
      $('.chosen-docs').addClass('hide-modal');
      $('.file-select-block ').removeClass('hide-modal');
      $('.form-actions').addClass('hide-modal');
  },
  showModalDownloadFile(){
    $('button#download').on('click', function(e){
      $('#modal-download-file').removeClass('hide-modal');
      $('body').addClass('modal-open');
    });
  },
  hideModalDownloadFile(){
    $('#modal-download-file button.close').on('click', function(e){
      $('#modal-download-file').addClass('hide-modal');
      $('.modal-footer .error').addClass('hide-modal');
      $('body').removeClass('modal-open');
      main.clearFile();
    });
  },
  showModalDelete(){
    $('button#delete').on('click', function(e){
      const content = $('.col-xs-6', this.offsetParent)[0].innerHTML;
      $('#modal-delete form').attr('action', e.target.attributes.role.nodeValue);
      $('#modal-delete .modal-body .col-xs-12').html(content)
      $('#modal-delete').removeClass('hide-modal');
      $('body').addClass('modal-open');
    });
  },
  hideModalDelete(){
    $('#modal-delete button.close').on('click', function(e){
      $('#modal-delete').addClass('hide-modal');
      $('body').removeClass('modal-open');        
    });
  },
  // showModalSave(){
  //   $('button#save').on('click', function(e){
  //     console.log('save')
  //   });
  // },
  // getLoad(login, password){
  //   const url = "https://cdntilda.ru/financials";
  //   const data = new URLSearchParams({
  //       'action': 'action', 
  //       'user_mail': login,
  //       'user_password': password
  //   });    
  //   var getData = async url => {
  //       try {
  //           var response = await fetch(url, {
  //               method: 'POST', 
  //               body: data,
  //           });
  //           var json = await response.json();
  //           this.log(json.data);
  //       } catch (error) {
  //           console.log('error:', error);
  //       }
  //   };
  //   getData(url, data);
  // },
  log(data){
    console.log(data.data)
    // for(let i = 0; i < data.data.length; i++) {
    //   console.log(data.data[i])
    // }    
  }
}
  
  
// main.init();