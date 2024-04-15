


const getConfig = () => {
    let tgWindow = false
    let telegram_user = false
    let user = {
        first_name: 'Профиль',
        id: 1234567890
    }

    try {
        tgWindow = window.Telegram.WebApp
        if (tgWindow.initDataUnsafe.user) {
            user = tgWindow.initDataUnsafe.user
        }
    } catch (error) {

    }
    console.log(user)
    console.log(tgWindow)

    return {
        apiToken: '5ebda3a9a088e1a35bc1b28a4ac274ca7d37ff30',
        apiUrl: 'http://127.0.0.1:8000/api',
        user: user,
        debug: true,
        tgWindow: tgWindow
    }
}

export const Config = getConfig()