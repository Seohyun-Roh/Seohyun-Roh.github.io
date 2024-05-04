import { icons } from 'lucide-react'

interface Props {
  name: keyof typeof icons
  color?: string
  fill?: string
  size?: number
}

function Icon({ name, color, fill = 'none', size }: Props) {
  const LucideIcon = icons[name]

  return <LucideIcon color={color} fill={fill} size={size} />
}

export default Icon
