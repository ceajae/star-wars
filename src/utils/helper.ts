/********* GET ICON FOR RESOURCE ***********/
export const getIcon = (name: string) => {
    switch(name) {
        case 'films':
            return 'fas fa-film'
        case 'people':
            return 'fas fa-user-friends'
        case 'planets':
            return 'fas fa-globe'
        case 'species':
            return 'fas fa-user-astronaut'
        case 'vehicles':
            return 'fas fa-truck-pickup'
        case 'starships':
            return 'fas fa-ship'
        default:
            return 'fas fa-film'
    }
}