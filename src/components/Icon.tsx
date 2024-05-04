import { icons } from 'lucide-react'

interface Props {
  name: keyof typeof icons
  color?: string
  fill?: string
  strokeWidth?: number
  size?: number
}

function Icon({ name, color, fill = 'none', strokeWidth = 1.5, size }: Props) {
  const LucideIcon = icons[name]

  return <LucideIcon color={color} fill={fill} strokeWidth={strokeWidth} size={size} />
}

export default Icon
