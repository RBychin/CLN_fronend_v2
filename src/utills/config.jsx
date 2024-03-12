


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
        apiToken: '52053baf54a991142b6af804e9de8a602cd4c297',
        apiUrl: 'https://rbychin.ddns.net:6077/apiv2',
        user: user,
        debug: true,
        tgWindow: tgWindow
    }
}

export const Config = getConfig()