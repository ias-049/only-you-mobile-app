export type IconTypes = 'ionicons'
    | 'material-icons'
    | 'font-awesome'
    | 'font-awesome-5'
    | 'font-awesome-5-pro'
    | 'font-awesome-6'
    | 'simple-line-icon'
    | 'zocial'
    | 'octicon'
    | 'material-community'
    | 'evilicon'
    | 'entypo'
    | 'feather'
    | 'antdesign'
    | 'fontisto'
    | 'foundation';


export type Icons = {
    name: string;
    type: IconTypes;
    color: string;
    onPress?: () => void
    disabled?: boolean
    size?: number
}