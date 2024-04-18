


const getConfig = () => {
    let tgWindow = false
    let telegram_user = false
    let user = {
        first_name: 'Профиль',
        id: 1234567890
    }

    try {
        console.log(window.Telegram.WebApp)
        tgWindow = window.Telegram.WebApp
        if (tgWindow.initDataUnsafe.user) {
            user = tgWindow.initDataUnsafe.user
        }
    } catch (error) {

    }

    return {
        apiToken: 'ccde934d585e926b25c62cef1ee0ce7ea26ac249',
        apiUrl: 'https://rbychin.ddns.net/cln-v2/api',
        user: user,
        debug: true,
        tgWindow: tgWindow
    }
}

export const Config = getConfig()