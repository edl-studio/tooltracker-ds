import * as React from "react"
import { SvgIcon, SvgIconProps } from "@mui/material"
// Common icons used across the app
import AddOutlined from "@mui/icons-material/AddOutlined"
import CheckOutlined from "@mui/icons-material/CheckOutlined"
import CloseOutlined from "@mui/icons-material/CloseOutlined"
import DownloadOutlined from "@mui/icons-material/DownloadOutlined"
import FileDownloadOutlined from "@mui/icons-material/FileDownloadOutlined"
import SettingsOutlined from "@mui/icons-material/SettingsOutlined"
import HomeOutlined from "@mui/icons-material/HomeOutlined"
import BuildOutlined from "@mui/icons-material/BuildOutlined"
import PersonOutlined from "@mui/icons-material/PersonOutlined"
import FolderOutlined from "@mui/icons-material/FolderOutlined"
import MoreVertOutlined from "@mui/icons-material/MoreVertOutlined"
import ChevronRightOutlined from "@mui/icons-material/ChevronRightOutlined"
import VisibilityOutlined from "@mui/icons-material/VisibilityOutlined"
import EditOutlined from "@mui/icons-material/EditOutlined"
import DeleteOutlined from "@mui/icons-material/DeleteOutlined"
import CheckCircleOutlined from "@mui/icons-material/CheckCircleOutlined"
import StarOutlined from "@mui/icons-material/StarOutlined"
import FavoriteOutlined from "@mui/icons-material/FavoriteOutlined"
import ShareOutlined from "@mui/icons-material/ShareOutlined"
import ThumbUpOutlined from "@mui/icons-material/ThumbUpOutlined"
import CommentOutlined from "@mui/icons-material/CommentOutlined"
import EmailOutlined from "@mui/icons-material/EmailOutlined"
import PauseOutlined from "@mui/icons-material/PauseOutlined"
import SearchOutlined from "@mui/icons-material/SearchOutlined"
import NotificationsOutlined from "@mui/icons-material/NotificationsOutlined"
import PhoneOutlined from "@mui/icons-material/PhoneOutlined"
import LocationOnOutlined from "@mui/icons-material/LocationOnOutlined"
import WarningOutlined from "@mui/icons-material/WarningOutlined"
import RefreshOutlined from "@mui/icons-material/RefreshOutlined"
import RemoveOutlined from "@mui/icons-material/RemoveOutlined"
import AccountCircleOutlined from "@mui/icons-material/AccountCircleOutlined"
import FaceOutlined from "@mui/icons-material/FaceOutlined"
import GroupOutlined from "@mui/icons-material/GroupOutlined"
import BusinessOutlined from "@mui/icons-material/BusinessOutlined"
import CircleIcon from "@mui/icons-material/Circle"
import PaymentOutlined from "@mui/icons-material/PaymentOutlined"
import KeyboardOutlined from "@mui/icons-material/KeyboardOutlined"
import SupportAgentOutlined from "@mui/icons-material/SupportAgentOutlined"
import ApiOutlined from "@mui/icons-material/ApiOutlined"
import LogoutOutlined from "@mui/icons-material/LogoutOutlined"
import MenuOutlined from "@mui/icons-material/MenuOutlined"
import SaveOutlined from "@mui/icons-material/SaveOutlined"
import OpenInNewOutlined from "@mui/icons-material/OpenInNewOutlined"
import CodeOutlined from "@mui/icons-material/CodeOutlined"
import PrintOutlined from "@mui/icons-material/PrintOutlined"
import ContentCopyOutlined from "@mui/icons-material/ContentCopyOutlined"
import HorizontalRuleOutlined from "@mui/icons-material/HorizontalRuleOutlined"

import ViewColumnOutlined from "@mui/icons-material/ViewColumnOutlined"
import ViewSidebarOutlined from "@mui/icons-material/ViewSidebarOutlined"
import ChevronLeftOutlined from "@mui/icons-material/ChevronLeftOutlined"
import ArchiveOutlined from "@mui/icons-material/ArchiveOutlined"
import FilterListOutlined from "@mui/icons-material/FilterListOutlined"
import CompareArrowsOutlined from "@mui/icons-material/CompareArrowsOutlined"
import CategoryOutlined from "@mui/icons-material/CategoryOutlined"
import CalendarTodayOutlined from "@mui/icons-material/CalendarTodayOutlined"
import Inventory2Outlined from "@mui/icons-material/Inventory2Outlined"
import DirectionsCarOutlined from "@mui/icons-material/DirectionsCarOutlined"
import HistoryOutlined from "@mui/icons-material/HistoryOutlined"
import FileCopyOutlined from "@mui/icons-material/FileCopyOutlined"
import ArrowForwardOutlined from "@mui/icons-material/ArrowForwardOutlined"
import ExpandMoreOutlined from "@mui/icons-material/ExpandMoreOutlined"
import ExpandLessOutlined from "@mui/icons-material/ExpandLessOutlined"
import UnfoldMoreOutlined from "@mui/icons-material/UnfoldMoreOutlined"
import CalculateOutlined from "@mui/icons-material/CalculateOutlined"
import TerminalOutlined from "@mui/icons-material/TerminalOutlined"
import CreditCardOutlined from "@mui/icons-material/CreditCardOutlined"

import { cn } from "@/lib/utils"
import "./icon.css"

// Map of icon names to their MUI Outlined components
const iconMap = {
  add: AddOutlined,
  check: CheckOutlined,
  close: CloseOutlined,
  download: DownloadOutlined,
  file_download: FileDownloadOutlined,
  settings: SettingsOutlined,
  home: HomeOutlined,
  build: BuildOutlined,
  person: PersonOutlined,
  folder: FolderOutlined,
  more_vert: MoreVertOutlined,
  chevron_right: ChevronRightOutlined,
  visibility: VisibilityOutlined,
  edit: EditOutlined,
  delete: DeleteOutlined,
  check_circle: CheckCircleOutlined,
  star: StarOutlined,
  favorite: FavoriteOutlined,
  share: ShareOutlined,
  thumb_up: ThumbUpOutlined,
  comment: CommentOutlined,
  email: EmailOutlined,
  pause: PauseOutlined,
  search: SearchOutlined,
  notifications: NotificationsOutlined,
  phone: PhoneOutlined,
  location_on: LocationOnOutlined,
  warning: WarningOutlined,
  refresh: RefreshOutlined,
  remove: RemoveOutlined,
  account_circle: AccountCircleOutlined,
  face: FaceOutlined,
  group: GroupOutlined,
  business: BusinessOutlined,
  radio_button_checked: CircleIcon,
  payment: PaymentOutlined,
  keyboard_shortcut: KeyboardOutlined,
  support_agent: SupportAgentOutlined,
  api: ApiOutlined,
  logout: LogoutOutlined,
  menu: MenuOutlined,
  save: SaveOutlined,
  open_in_new: OpenInNewOutlined,
  code: CodeOutlined,
  print: PrintOutlined,
  content_copy: ContentCopyOutlined,
  horizontal_rule: HorizontalRuleOutlined,
  view_column: ViewColumnOutlined,
  view_sidebar: ViewSidebarOutlined,
  chevron_left: ChevronLeftOutlined,
  archive: ArchiveOutlined,
  filter_list: FilterListOutlined,
  compare_arrows: CompareArrowsOutlined,
  category: CategoryOutlined,
  calendar_today: CalendarTodayOutlined,
  inventory_2: Inventory2Outlined,
  directions_car: DirectionsCarOutlined,
  history: HistoryOutlined,
  file_copy: FileCopyOutlined,
  arrow_forward: ArrowForwardOutlined,
  expand_more: ExpandMoreOutlined,
  expand_less: ExpandLessOutlined,
  unfold_more: UnfoldMoreOutlined,
  calculate: CalculateOutlined,
  terminal: TerminalOutlined,
  credit_card: CreditCardOutlined,
  // Add more mappings as needed
} as const

export interface IconProps extends Omit<SvgIconProps, 'children'> {
  children?: React.ReactNode | keyof typeof iconMap
  size?: number
}

export const Icon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, children, size, ...props }, ref) => {
    // Determine fontSize from className or size prop
    let fontSize = size || 16 // Default to 16px
    
    // Extract size from className if present
    if (className?.includes('size-4')) {
      fontSize = 16
    } else if (className?.includes('size-5')) {
      fontSize = 20
    } else if (className?.includes('size-6')) {
      fontSize = 24
    } else if (className?.includes('size-8')) {
      fontSize = 32
    }

    // If children is a string and exists in iconMap, use MUI icon
    if (typeof children === 'string' && children in iconMap) {
      const IconComponent = iconMap[children as keyof typeof iconMap]
      return (
        <IconComponent
          ref={ref}
          className={cn("icon-sharp", className)}
          style={{ fontSize }}
          {...props}
        />
      )
    }

    // Fallback to custom SVG if children is a path
    return (
      <SvgIcon
        ref={ref}
        className={cn("icon-sharp", className)}
        viewBox="0 -960 960 960"
        style={{ fontSize }}
        {...props}
      >
        {children}
      </SvgIcon>
    )
  }
)
Icon.displayName = "Icon"