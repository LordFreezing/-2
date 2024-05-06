const TOKEN = '6394189168:AAHhuSjGmI_0W-ZvMU7pfW7qKVhth66__y4';
const CHATID = '-1002126054580';
const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`
const name = document.getElementById('name')
const tel = document.getElementById('tel')


let validation = new JustValidate('form')

validation.addField('#name', [
    {
        rule: 'required',
        errorMessage: 'Введите имя'
    },
    {
        rule: 'minLength',
        value: 2,
        errorMessage: 'Минимум 2 символа в имени'
    }
]).addField("#tel", [
    {
        rule: 'required',
        errorMessage: 'Введите телефон'
    },
    {
        rule: 'minLength',
        value: 6,
        errorMessage: 'Минимум 6 символов в телефоне'
    }
]).onSuccess(function () {
    document.getElementById('form').addEventListener('submit', function(e) {
        e.preventDefault()
    
        const text = document.getElementById('message')
    
        let message = '<b>Завявка с сайта</b>\n';
        message += `<b>имя отправителя: ${name.value}</b>\n`
        message += `<b>📞 телефон отправителя: ${tel.value}</b>\n`
        message += `<b>Сообщение: ${text.value}</b>\n`

        name.value = ""
        tel.value = ""
        text.value = ""

        axios.post(URL_API, {
            chat_id: CHATID,
            parse_mode: 'html',
            text: message
        })
        .then((res) => {
            name.innerHTML = ""
            tel.innerHTML = ""
            alert("заявка отправлена успешно")
        })
        .catch((err) => {
            console.warn(err)
        })
    })
})

