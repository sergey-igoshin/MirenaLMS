const icons = {
    header:{
      svgExit: `
      <svg width="20" height="20" fill="none" viewBox="0 0 20 20" class="svg-icon " name="ExitIcon20" focusable="false" aria-hidden="true">
        <path class="primary-fill" d="M1 4a3 3 0 013-3h7a3 3 0 013 3v1.5a1 1 0 11-2 0V4a1 1 0 00-1-1H4a1 1 0 00-1 1v12a1 1 0 001 1h7a1 1 0 001-1v-1a1 1 0 112 0v1a3 3 0 01-3 3H4a3 3 0 01-3-3V4z"></path>
        <path class="primary-fill" d="M16.504 5.632a1 1 0 011.364.372l1.99 3.483a.995.995 0 010 1.028l-1.99 3.481a1 1 0 01-1.736-.992L17.277 11H10a1 1 0 110-2h7.277l-1.145-2.004a1 1 0 01.372-1.364z"></path>
      </svg>`,
    },
    menu:{
      create:{
        svg: `
        <svg width="20" height="20" fill="none" viewBox="0 0 20 20" class="svg-icon " name="CreateIcon20" focusable="false" aria-hidden="true">
          <path class="product-fill" fill-rule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zM0 10C0 4.477 4.477 0 10 0s10 4.477 10 10-4.477 10-10 10S0 15.523 0 10z" clip-rule="evenodd"></path>
          <path class="product-fill" d="M11 6a1 1 0 10-2 0v3H6a1 1 0 100 2h3v3a1 1 0 102 0v-3h3a1 1 0 100-2h-3V6z"></path>
        </svg>`,
        text: 'Создать',
        count: 0
      },
      import:{
        svg: `
        <svg width="20" height="20" fill="none" viewBox="0 0 20 20" class="svg-icon " name="ImportIcon20" focusable="false" aria-hidden="true">
          <path class="product-fill" fill-rule="evenodd" d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V7.81a1 1 0 112 0V15a4 4 0 01-4 4H5a4 4 0 01-4-4V5a4 4 0 014-4h2.333a1 1 0 110 2H5z" clip-rule="evenodd"></path>
          <path class="product-fill" fill-rule="evenodd" d="M18 2a1 1 0 010 2h-2a5 5 0 00-5 5v2.51l1.243-1.242a1 1 0 011.414 1.414l-2.975 2.975a1 1 0 01-1.414 0l-2.975-2.975a1 1 0 011.414-1.414l1.295 1.295A1.015 1.015 0 019 11.5V9a7 7 0 017-7h2zM9.937 12.498l.038.038.035-.036H10a1 1 0 01-.063-.002z" clip-rule="evenodd"></path>
        </svg>`,
        text: 'Импорт',
        count: 0
      },
      help:{
        svg: `
        <svg width="20" height="20" fill="none" viewBox="0 0 20 20" class="svg-icon " name="HelpIcon20" focusable="false" aria-hidden="true">
          <path class="product-fill" fill-rule="evenodd" d="M0 10C0 4.477 4.477 0 10 0A10 10 0 110 10zm2 0a8 8 0 1016 0 8 8 0 00-16 0z" clip-rule="evenodd"></path>
          <path class="product-fill" d="M7.4 6.5A3 3 0 0110 5a3 3 0 011 5.82V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2 1 1 0 00-.87.5 1 1 0 11-1.73-1zM9.17 13.44a1.6 1.6 0 01.12-.15A1 1 0 0111 14a1 1 0 01-.06.38.9.9 0 01-.54.54.94.94 0 01-.76 0 .9.9 0 01-.54-.54.84.84 0 01-.08-.38 1.36 1.36 0 010-.2.64.64 0 01.06-.18.761.761 0 01.09-.18z"></path>
        </svg>
        `,
        text: 'Помощь',
        count: 0
      },
    },
    rkoMenu:{
      payment:{
        svg: `
        <svg width="20" height="20" fill="none" viewBox="0 0 20 20" class="svg-icon " name="AccountsIcon20" focusable="false" aria-hidden="true">
          <path class="product-fill" fill-rule="evenodd" d="M0 6a4 4 0 014-4h12a4 4 0 014 4v8a4 4 0 01-4 4H4a4 4 0 01-4-4V6zm4-2a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4z" clip-rule="evenodd"></path>
          <path class="product-fill" d="M12.314 5.919a1 1 0 10-1.628 1.162L12.056 9H7a1 1 0 000 2h5.057l-1.37 1.919a1 1 0 101.627 1.162l2.5-3.5a1 1 0 000-1.162l-2.5-3.5z"></path>
        </svg>`,
        text: 'Счета и платежи',
        count: 0
      },
      extracts:{
        svg: `
        <svg width="20" height="20" fill="none" viewBox="0 0 20 20" class="svg-icon " name="StatementsIcon20" focusable="false" aria-hidden="true">
          <path class="product-fill" d="M3 3a1 1 0 011-1h5a1 1 0 000-2H4a3 3 0 00-3 3v14a3 3 0 003 3h10a3 3 0 003-3v-5a1 1 0 10-2 0v5a1 1 0 01-1 1H4a1 1 0 01-1-1V3z"></path>
          <path class="product-fill" d="M5 10a1 1 0 011-1h2a1 1 0 110 2H6a1 1 0 01-1-1zM6 13a1 1 0 100 2h6a1 1 0 100-2H6zM19.924.617A.997.997 0 0019 0h-5a1 1 0 100 2h2.586l-4.293 4.293a1 1 0 001.414 1.414L18 3.414V6a1 1 0 102 0V1a.997.997 0 00-.076-.383z"></path>
          </svg>
        `,
        text: 'Выписки и отчёты',
        count: 0
      },
      counterparties:{
        svg: `
        <svg width="20" height="20" fill="none" viewBox="0 0 20 20" class="svg-icon " name="CounterpartyIcon20" focusable="false" aria-hidden="true">
          <path class="product-fill" d="M4 2a1 1 0 00-1 1v14a1 1 0 001 1h10a1 1 0 001-1v-3a1 1 0 112 0v3a3 3 0 01-3 3H4a3 3 0 01-3-3V3a3 3 0 013-3h5a1 1 0 010 2H4z"></path>
          <path class="product-fill" d="M5 14a1 1 0 011-1h4a1 1 0 110 2H6a1 1 0 01-1-1zM6 9a1 1 0 100 2h1a1 1 0 100-2H6z"></path>
          <path class="product-fill" fill-rule="evenodd" d="M14.5 0a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM14 2.5a.5.5 0 111 0 .5.5 0 01-1 0zM17.41 5.814a1.413 1.413 0 00-1.79.012c-.28.233-.642.357-1.12.357-.493 0-.902-.13-1.163-.343l-.002-.001a1.414 1.414 0 00-1.79.011v.001A4.243 4.243 0 0010 9.104c0 .258.025.518.073.773A1.39 1.39 0 0011.445 11h6.11a1.39 1.39 0 001.372-1.123A4.16 4.16 0 0019 9.104c0-1.279-.59-2.476-1.588-3.29h-.002zM14.5 8.183c.675 0 1.354-.146 1.963-.51.326.382.511.847.534 1.327h-4.995c.023-.47.202-.927.517-1.306.628.356 1.338.489 1.981.489z" clip-rule="evenodd"></path>
        </svg>
        `,
        text: 'Контрагенты',
        count: 0
      },
      templates:{
        svg: `
        <svg width="20" height="20" fill="none" viewBox="0 0 20 20" class="svg-icon " name="TemplateIcon20" focusable="false" aria-hidden="true">
          <path class="product-fill" fill-rule="evenodd" d="M13.5 0a1 1 0 01.897.557l1.383 2.804 3.095.45a1 1 0 01.554 1.705L17.189 7.7l.53 3.082a1 1 0 01-1.452 1.054L13.5 10.38l-2.768 1.455a1 1 0 01-1.45-1.055L9.81 7.7 7.571 5.516a1 1 0 01.554-1.705l3.095-.45L12.602.557A1 1 0 0113.5 0zm0 3.26l-.72 1.458a1 1 0 01-.753.547l-1.609.234 1.165 1.135a1 1 0 01.287.885l-.275 1.603 1.44-.757a1 1 0 01.93 0l1.44.757-.275-1.603a1 1 0 01.287-.885l1.165-1.135-1.61-.234a1 1 0 01-.752-.547L13.5 3.26z" clip-rule="evenodd"></path>
          <path class="product-fill" d="M3 3a1 1 0 011-1h4.5a1 1 0 000-2H4a3 3 0 00-3 3v14a3 3 0 003 3h10a3 3 0 003-3v-2.765a1 1 0 10-2 0V17a1 1 0 01-1 1H4a1 1 0 01-1-1V3z"></path>
          <path class="product-fill" d="M5 10a1 1 0 011-1h.5a1 1 0 110 2H6a1 1 0 01-1-1zM5 14a1 1 0 011-1h2a1 1 0 110 2H6a1 1 0 01-1-1z"></path>
        </svg>
        `,
        text: 'Шаблоны и автоплатежи',
        count: 0
      },
      certificate:{
        svg: `
        <svg width="20" height="20" fill="none" viewBox="0 0 20 20" class="svg-icon " name="CertificateIcon20" focusable="false" aria-hidden="true">
          <path class="product-fill" d="M1 3a3 3 0 013-3h3.264a1 1 0 110 2H4a1 1 0 00-1 1v14a1 1 0 001 1h10a1 1 0 00.867-.5 1 1 0 011.731 1A3 3 0 0114 20H4a3 3 0 01-3-3V3z"></path>
          <path class="product-fill" d="M5 14a1 1 0 011-1h3a1 1 0 110 2H6a1 1 0 01-1-1zM6 9a1 1 0 100 2h2a1 1 0 100-2H6z"></path>
          <path class="product-fill" fill-rule="evenodd" d="M15 0a5 5 0 00-3 9v5a1 1 0 001.447.894L15 14.118l1.553.776A1 1 0 0018 14V9a5 5 0 00-3-9zm-3 5a3 3 0 116 0 3 3 0 01-6 0zm4 4.9a5.022 5.022 0 01-2 0v2.482l.553-.276a1 1 0 01.894 0l.553.276V9.9z" clip-rule="evenodd"></path>
        </svg>
        `,
        text: 'Справки',
        count: 0
      }    
    }, 
    services:{
      bcard:{
        svg: `
        <svg width="20" height="20" fill="none" viewBox="0 0 20 20" class="svg-icon " name="BcardIcon20" focusable="false" aria-hidden="true">
          <path class="product-fill" fill-rule="evenodd" d="M0 5a3 3 0 013-3h14a3 3 0 013 3v9a3 3 0 01-3 3H3a3 3 0 01-3-3V5zm3-1a1 1 0 00-1 1v9a1 1 0 001 1h14a1 1 0 001-1V5a1 1 0 00-1-1H3z" clip-rule="evenodd"></path>
          <path class="product-fill" fill-rule="evenodd" d="M4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1z" clip-rule="evenodd"></path>
        </svg>
        `,
        text: 'Бизнес карты',
        count: 0
      },
      // salaryproject:{
      //   svg: `
      //   <svg width="20" height="20" fill="none" viewBox="0 0 20 20" class="svg-icon " name="SalaryprojectIcon20" focusable="false" aria-hidden="true">
      //     <path class="product-fill" fill-rule="evenodd" d="M13 11a1 1 0 100 2 1 1 0 000-2zm-3 1a3 3 0 116 0 3 3 0 01-6 0z" clip-rule="evenodd"></path>
      //     <path class="product-fill" d="M12.606 2.114a1.001 1.001 0 011.253.404 1 1 0 001.711-1.036c-.732-1.21-2.298-1.83-3.752-1.206l-10 4.285A3 3 0 000 7.32c0 .03.001.06.004.09C.001 7.44 0 7.47 0 7.5V16a3 3 0 003 3h14a3 3 0 003-3V8a3 3 0 00-3-3h-5.5a1 1 0 100 2H17a1 1 0 011 1v8a1 1 0 01-1 1H3a1 1 0 01-1-1V7.5c0-.03-.001-.06-.004-.09.003-.03.004-.06.004-.09a1 1 0 01.606-.92l10-4.285z"></path>
      //   </svg>
      //   `,
      //   text: 'Зарплатный проект',
      //   count: 0
      // },
      // certificate:{
      //   svg: `
      //   <svg width="20" height="20" fill="none" viewBox="0 0 20 20" class="svg-icon " name="CreditsIcon20" focusable="false" aria-hidden="true">
      //     <path class="product-fill" fill-rule="evenodd" d="M6 0a1 1 0 011 1v1h6V1a1 1 0 112 0v1h2a3 3 0 013 3v12a3 3 0 01-3 3H3a3 3 0 01-3-3V5a3 3 0 013-3h2V1a1 1 0 011-1zm7 4v1a1 1 0 102 0V4h2a1 1 0 011 1v12a1 1 0 01-1 1H3a1 1 0 01-1-1V5a1 1 0 011-1h2v1a1 1 0 002 0V4h6z" clip-rule="evenodd"></path>
      //     <path class="product-fill" d="M13.707 9.707a1 1 0 00-1.414-1.414l-6 6a1 1 0 101.414 1.414l6-6zM7.5 11a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm5 5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
      //   </svg>
      //   `,
      //   text: 'Кредиты',
      //   count: 10
      // },
      // merchantacquiring:{
      //   svg: `
      //   <svg width="20" height="20" fill="none" viewBox="0 0 20 20" class="svg-icon " name="MerchantacquiringIcon20" focusable="false" aria-hidden="true">
      //     <path class="product-fill" d="M7.581.186a1 1 0 01.233 1.395L6.086 4h7.828l-1.728-2.419A1 1 0 0113.814.42l2.5 3.5a.995.995 0 01.052.081H19a1 1 0 110 2H2.344l2.4 8H8a1 1 0 110 2H4a1 1 0 01-.958-.713l-3-10A1 1 0 011 4h2.634c.016-.028.033-.055.052-.081l2.5-3.5A1 1 0 017.581.186z"></path>
      //     <path class="product-fill" fill-rule="evenodd" d="M13 9a1 1 0 011-1h2.318c1.338 0 2.293.497 2.872 1.299.538.744.65 1.61.65 2.201v.167c0 .656-.184 1.487-.756 2.173-.6.72-1.53 1.16-2.766 1.16H15v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1h-1a1 1 0 110-2h1V9zm2 4v-3h1.318c.798 0 1.104.266 1.251.47.19.263.271.646.271 1.03v.167c0 .32-.094.655-.292.892-.168.202-.5.441-1.23.441H15z" clip-rule="evenodd"></path>
      //   </svg>
      //   `,
      //   text: 'Торговый экваринг',
      //   count: 0
      // },
      // deposit:{
      //   svg: `
      //   <svg width="20" height="20" fill="none" viewBox="0 0 20 20" class="svg-icon " name="DepositIcon20" focusable="false" aria-hidden="true">
      //   <path class="product-fill" fill-rule="evenodd" d="M5.5 9.5a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM10 7a2.5 2.5 0 100 5 2.5 2.5 0 000-5z" clip-rule="evenodd"></path>
      //   <path class="product-fill" fill-rule="evenodd" d="M1 3a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3h-.5v1a1 1 0 11-2 0v-1h-7v1a1 1 0 11-2 0v-1H4a3 3 0 01-3-3V3zm3-1a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V3a1 1 0 00-1-1H4z" clip-rule="evenodd"></path></svg>
      //   `,
      //   text: 'Депозиты и НСО',
      //   count: 0
      // },
      // einv:{
      //   svg: `
      //   <svg width="20" height="20" fill="none" viewBox="0 0 20 20" class="svg-icon " name="EinvIcon20" focusable="false" aria-hidden="true">
      //     <path class="product-fill" d="M3 3a1 1 0 011-1h3a1 1 0 000-2H4a3 3 0 00-3 3v14a3 3 0 003 3h10a3 3 0 003-3v-5a1 1 0 10-2 0v5a1 1 0 01-1 1H4a1 1 0 01-1-1V3z"></path>
      //     <path class="product-fill" d="M5 10a1 1 0 011-1h3a1 1 0 110 2H6a1 1 0 01-1-1zM6 13a1 1 0 100 2h6a1 1 0 100-2H6z"></path>
      //     <path class="product-fill" fill-rule="evenodd" d="M19.697.283a1 1 0 01.02 1.414l-5.41 5.564a1 1 0 01-1.392.04l-3.59-3.283a1 1 0 111.35-1.476l2.874 2.629L18.283.303a1 1 0 011.414-.02z" clip-rule="evenodd"></path>
      //   </svg>
      //   `,
      //   text: 'Документооборот',
      //   count: 0
      // },
      // cashintransit:{
      //   svg: `
      //   <svg width="20" height="20" fill="none" viewBox="0 0 20 20" class="svg-icon " name="CashintransitIcon20" focusable="false" aria-hidden="true">
      //     <path class="product-fill" d="M2 7a2 2 0 00-2 2v8a2 2 0 002 2h16a2 2 0 002-2v-5.4a1 1 0 10-2 0V17H2V9h5.5a1 1 0 000-2H2z"></path>
      //     <path class="product-fill" fill-rule="evenodd" d="M10 10a3 3 0 100 6 3 3 0 000-6zm-1 3a1 1 0 112 0 1 1 0 01-2 0z" clip-rule="evenodd"></path>
      //     <path class="product-fill" d="M16 9a1 1 0 11-2 0V3.414l-2.293 2.293a1 1 0 11-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L16 3.414V9z"></path>
      //   </svg>
      //   `,
      //   text: 'Самоинкасация',
      //   count: 0
      // },
      // ved:{
      //   svg: `
      //   <svg width="20" height="20" fill="none" viewBox="0 0 20 20" class="svg-icon " name="VedIcon20" focusable="false" aria-hidden="true">
      //     <path class="product-fill" d="M18 1a1 1 0 10-2 0v.047a2.819 2.819 0 00-.624.237c-.36.191-.71.486-.968.922-.256.433-.39.951-.408 1.547-.026.925.505 1.525 1.05 1.886.464.307 1.05.517 1.501.68l.09.032c.531.192.902.337 1.152.512.2.14.207.213.207.293 0 .247-.057.394-.113.487a.758.758 0 01-.26.252 1.405 1.405 0 01-.556.192c-.044.006-.068.007-.07.007a3 3 0 01-.768-.129c-.348-.106-.485-.225-.507-.257a1 1 0 00-1.639 1.147c.415.592 1.09.88 1.563 1.023.117.036.234.067.35.093V10a1 1 0 102 0v-.086c.22-.075.453-.178.678-.317C19.379 9.164 20 8.38 20 7.157c0-.92-.5-1.539-1.058-1.931-.501-.352-1.129-.578-1.602-.75l-.02-.006c-.546-.197-.915-.333-1.165-.499a.53.53 0 01-.153-.131l-.001-.003A.145.145 0 0116 3.81c.009-.327.079-.5.13-.586a.44.44 0 01.182-.172c.191-.101.444-.114.688-.114.17 0 .483.084.763.421a1 1 0 001.537-1.28A3.209 3.209 0 0018 1.13V1z"></path>
      //     <path class="product-fill" fill-rule="evenodd" d="M9.132 2.432C9.482 2.099 9.773 2 10 2c.455 0 .901.038 1.335.11a1 1 0 00.33-1.972A10.062 10.062 0 0010 0C4.477 0 0 4.477 0 10s4.477 10 10 10c4.356 0 8.058-2.784 9.43-6.667a1 1 0 10-1.885-.666 8.025 8.025 0 01-3.99 4.502c.619-1.241 1.059-2.813 1.28-4.542a1 1 0 10-1.983-.254c-.23 1.788-.705 3.275-1.291 4.282C10.949 17.706 10.37 18 10 18c-.227 0-.518-.1-.868-.432-.354-.337-.719-.872-1.047-1.61-.561-1.264-.958-2.992-1.06-4.958H11a1 1 0 100-2H7.026c.101-1.967.498-3.695 1.06-4.958.327-.738.692-1.273 1.046-1.61zM5.023 9c.103-2.204.545-4.218 1.235-5.77.06-.136.123-.269.188-.399A8.007 8.007 0 002.062 9h2.961zm-2.961 2a8.006 8.006 0 004.384 6.169 9.877 9.877 0 01-.188-.399c-.69-1.552-1.132-3.566-1.235-5.77H2.062z" clip-rule="evenodd"></path>
      //   </svg>
      //   `,
      //   text: 'ВЭД',
      //   count: 0
      // },
      // sberraiting:{
      //   svg: `
      //   <svg width="20" height="20" fill="none" viewBox="0 0 20 20" class="svg-icon " name="SberraitingIcon20" focusable="false" aria-hidden="true">
      //     <path class="product-fill" d="M8.975 1.002a1 1 0 01-.754 1.196 8.003 8.003 0 000 15.604 1 1 0 11-.442 1.95C3.325 18.742 0 14.76 0 10 0 5.24 3.325 1.258 7.779.248a1 1 0 011.196.754zM11.025 1.002a1 1 0 011.197-.754c3.74.848 6.682 3.79 7.53 7.53a1 1 0 11-1.95.443 8.013 8.013 0 00-6.023-6.023 1 1 0 01-.754-1.196zM11.779 17.802a1 1 0 10.442 1.95 10.013 10.013 0 007.531-7.53 1 1 0 10-1.95-.443 8.013 8.013 0 01-6.023 6.023z"></path>
      //     <path class="product-fill" d="M10 7a1 1 0 00-1 1 1 1 0 11-2 0 3 3 0 114 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zM10 15a1 1 0 100-2 1 1 0 000 2z"></path>
      //   </svg>
      //   `,
      //   text: 'Сберрейтинг',
      //   count: 0
      // },
      // encashment:{
      //   svg: `
      //   <svg width="20" height="20" fill="none" viewBox="0 0 20 20" class="svg-icon " name="EncashmentIcon20" focusable="false" aria-hidden="true">
      //   <path class="product-fill" fill-rule="evenodd" d="M14 5a1 1 0 011-1h2.156c1.05 0 1.836.394 2.318 1.06.44.61.526 1.308.526 1.767v.123c0 .508-.137 1.224-.55 1.845-.445.671-1.204 1.205-2.294 1.205H16v.5h.5a1 1 0 110 2H16v.5a1 1 0 11-2 0v-.5h-.5a1 1 0 110-2h.5V10h-.5a1 1 0 110-2h.5V5zm2 3V6h1.156c.271 0 .432.048.521.09.086.04.137.089.176.142.092.127.147.342.147.595v.123c0 .204-.066.513-.216.739-.117.176-.28.311-.628.311H16z" clip-rule="evenodd"></path>
      //   <path class="product-fill" fill-rule="evenodd" d="M7.654 2.567A7 7 0 0113.071 0H19a1 1 0 110 2h-5.929a5 5 0 00-3.869 1.833l-3.928 4.8a1 1 0 01-.237.21l-2.111 1.345A2 2 0 002 11.875V14a1 1 0 001 1h1c.042 0 .083.003.124.008a4.002 4.002 0 017.75-.008H19a1 1 0 110 2h-7.126a4.002 4.002 0 01-7.75-.008c-.04.005-.082.008-.124.008H3a3 3 0 01-3-3v-2.125A4 4 0 011.852 8.5l1.976-1.258 3.826-4.676zM10 16a2 2 0 10-4 0 2 2 0 004 0z" clip-rule="evenodd"></path>
      //   </svg>
      //   `,
      //   text: 'Инкассация',
      //   count: 0
      // },
      // exchangecurrency:{
      //   svg: `
      //   <svg width="20" height="20" fill="none" viewBox="0 0 20 20" class="svg-icon " name="ExchangecurrencyPrdIcon20" focusable="false" aria-hidden="true">
      //     <path class="product-fill" fill-rule="evenodd" d="M10 0a1 1 0 100 2 8.004 8.004 0 017.73 5.931 1 1 0 001.933-.515C18.523 3.146 14.63 0 10 0zM2.313 12.223a1 1 0 00-1.922.554C1.595 16.948 5.44 20 10.001 20a1 1 0 000-2 8.004 8.004 0 01-7.688-5.777zM5 1a1 1 0 00-2 0v.072c-.173.05-.353.118-.53.212-.36.191-.71.486-.968.922-.256.433-.39.951-.408 1.547-.026.925.505 1.525 1.05 1.886.464.307 1.05.517 1.5.68l.09.032c.532.192.903.337 1.153.512.2.14.207.213.207.293 0 .246-.057.394-.113.487a.758.758 0 01-.26.252 1.406 1.406 0 01-.556.192c-.044.006-.068.007-.071.007a3 3 0 01-.768-.129c-.347-.106-.484-.225-.507-.257a1 1 0 00-1.638 1.147c.415.592 1.09.88 1.562 1.023.086.027.172.05.257.07V10a1 1 0 102 0v-.056c.248-.077.514-.188.771-.347.702-.433 1.323-1.218 1.323-2.44 0-.92-.5-1.539-1.058-1.931-.501-.352-1.13-.579-1.602-.75l-.02-.006c-.546-.197-.915-.333-1.166-.499a.53.53 0 01-.152-.131l-.001-.003a.136.136 0 01-.002-.027c.01-.327.08-.5.13-.586a.44.44 0 01.183-.172c.19-.102.444-.115.688-.115.17 0 .482.085.763.422a1 1 0 001.536-1.28A3.192 3.192 0 005 1.096V1zm9 10a1 1 0 011-1h2.14a2.7 2.7 0 012.252 1.15c.427.594.608 1.302.608 1.85s-.18 1.256-.608 1.85A2.7 2.7 0 0117.141 16H16v.5h.5a1 1 0 110 2H16v.5a1 1 0 11-2 0v-.5h-.5a1 1 0 110-2h.5V16h-.5a1 1 0 110-2h.5v-3zm2 3v-2h1.14c.312 0 .492.127.628.316.163.227.232.52.232.684 0 .164-.07.457-.232.684a.706.706 0 01-.627.316H16z" clip-rule="evenodd"></path>
      //   </svg>
      //   `,
      //   text: 'Покупка и продажа валют',
      //   count: 0
      // },
      // settings:{
      //   svg: `
      //   <svg width="20" height="20" viewBox="0 0 20 20" version="1.1" class="svg-icon" name="SettingsIconSBBOL3">
      //     <path fill="#AAB2B7" opacity=".8" fill-rule="nonzero" d="M19.32 7.55l-1.89-.63.89-1.78A1 1 0 0 0 18.13 4L16 1.87a1 1 0 0 0-1.15-.19l-1.78.89-.63-1.89A1 1 0 0 0 11.5 0h-3a1 1 0 0 0-.95.68l-.63 1.89-1.78-.89A1 1 0 0 0 4 1.87L1.87 4a1 1 0 0 0-.19 1.15l.89 1.78-1.89.63A1 1 0 0 0 0 8.5v3a1 1 0 0 0 .68.95l1.89.63-.89 1.78A1 1 0 0 0 1.87 16L4 18.13a1 1 0 0 0 1.15.19l1.78-.89.63 1.89a1 1 0 0 0 .95.68h3a1 1 0 0 0 .95-.68l.63-1.89 1.78.89a1 1 0 0 0 1.13-.19L18.13 16a1 1 0 0 0 .19-1.15l-.89-1.78 1.89-.63a1 1 0 0 0 .68-.94v-3a1 1 0 0 0-.68-.95zM18 10.78l-1.2.4A2 2 0 0 0 15.64 14l.57 1.14-1.1 1.1-1.11-.6a2 2 0 0 0-2.79 1.16l-.4 1.2H9.22l-.4-1.2A2 2 0 0 0 6 15.64l-1.14.57-1.1-1.1.6-1.11a2 2 0 0 0-1.16-2.82l-1.2-.4V9.22l1.2-.4A2 2 0 0 0 4.36 6l-.57-1.11 1.1-1.1L6 4.36A2 2 0 0 0 8.82 3.2l.4-1.2h1.56l.4 1.2A2 2 0 0 0 14 4.36l1.14-.57 1.1 1.1-.6 1.11a2 2 0 0 0 1.16 2.79l1.2.4v1.59zM10 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"></path>
      //   </svg>
      //   `,
      //   text: 'Настроить меню',
      //   count: 0      
      // },
    },
    shop: {
      shop:{
        svg:`
        <svg width="20" height="20" fill="none" viewBox="0 0 20 20" class="svg-icon " name="ShopPrdxIcon20" focusable="false" aria-hidden="true">
          <path class="marketplace-fill" fill-rule="evenodd" d="M19.167 4.005L4.253 3.03 3.96 1.766a1 1 0 00-.528-.67L1.447.106a1 1 0 00-.893 1.79l1.565.786 2.894 11.54a1 1 0 00.975.776h11.006a1 1 0 100-2.001H6.785l-.231-1h10.942c.552 0 1.082-.44 1.183-.983l1.302-5.971a.856.856 0 00-.814-1.038zm-1.386 1.918l-.947 4.072H6.091l-1.37-4.932 13.06.86z" clip-rule="evenodd"></path>
          <path class="marketplace-fill" d="M5 17.999a2.001 2.001 0 104.002 0 2.001 2.001 0 00-4.002 0zM13 17.999a2.001 2.001 0 104.002 0 2.001 2.001 0 00-4.002 0z"></path>
        </svg>
        `,
        title: 'Все продукты и услуги',
        subtitle: 'Подключение и управление'
      }
    }     
  }
  
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
  //        console.log(text.replaceAll(' ', ''))
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
    getLoad(login, password){
      const url = "https://cdntilda.ru/financials";
      const data = new URLSearchParams({
          'action': 'action', 
          'user_mail': login,
          'user_password': password
      });    
      var getData = async url => {
          try {
              var response = await fetch(url, {
                  method: 'POST', 
                  body: data,
              });
              var json = await response.json();
              this.log(json.data);
          } catch (error) {
              console.log('error:', error);
          }
      };
      getData(url, data);
    },
    log(data){
      console.log(data.data)
      // for(let i = 0; i < data.data.length; i++) {
      //   console.log(data.data[i])
      // }    
    }
  }
  
  
  // main.init();