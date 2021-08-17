import basicInfo from './basicInfo'
import servers from './servers'
import components from './components'

const config = {
  ...basicInfo,
  ...servers,
  ...components
}

export default config
