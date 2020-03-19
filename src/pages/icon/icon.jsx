import React from 'react';
import './icon.scss';

import { 
    StepBackwardOutlined,
    StepForwardOutlined,
    FastBackwardOutlined,
    FastForwardOutlined,
    DownOutlined,
    UpOutlined,
    LeftOutlined,
    RightOutlined,
    CaretUpOutlined,
    CaretDownOutlined,
    CaretLeftOutlined,
    CaretRightOutlined,
    UpCircleOutlined,
    DownCircleOutlined,
    LeftCircleOutlined,
    RightCircleOutlined,
    VerticalLeftOutlined,
    VerticalRightOutlined,
    ForwardOutlined,
    BackwardOutlined,
    ArrowUpOutlined,
    ArrowDownOutlined,
    ArrowLeftOutlined,
    ArrowRightOutlined,
    UpSquareOutlined,
    DownSquareOutlined,
    LeftSquareOutlined,
    RightSquareOutlined,
    QuestionOutlined,
    QuestionCircleOutlined,
    PlusOutlined,
    PlusCircleOutlined,
    PauseOutlined,
    PauseCircleOutlined,
    MinusOutlined,
    MinusCircleOutlined,
    PlusSquareOutlined,
    MinusSquareOutlined,
    CloseOutlined,
    CheckOutlined,
    EditOutlined,
    FormOutlined,
    CopyOutlined,
    ScissorOutlined,
    DeleteOutlined,
    SnippetsOutlined,
    DiffOutlined,
    HighlightOutlined,
    BgColorsOutlined,
    BoldOutlined,
    ItalicOutlined,
    ZoomInOutlined,
    ZoomOutOutlined,
    FontSizeOutlined,
    AndroidOutlined,
    AppleOutlined,
    WindowsOutlined,
    IeOutlined,
    ChromeOutlined,
    GithubOutlined,
    QqOutlined,
    WechatOutlined,
    FacebookOutlined,
    InstagramOutlined,
    YoutubeOutlined,
    RedditOutlined,
    AccountBookOutlined,
    AppstoreAddOutlined,
    AppstoreOutlined,
    AudioOutlined,
    AudioMutedOutlined,
    BankOutlined,
    BellOutlined,
    BookOutlined,
    BulbOutlined,
    CalendarOutlined,
    CameraOutlined,
    CarryOutOutlined,
    ClearOutlined,
    CloudDownloadOutlined,
    CloudUploadOutlined,
    CommentOutlined,
    EnvironmentOutlined,
    WifiOutlined,
    HeartTwoTone,
    SmileOutlined,
    SyncOutlined
} from '@ant-design/icons';

export default class Icon extends React.Component {
    constructor (props) {
        super (props)

        this.state = {
            
        }
    }

    render () {
        return (
            <div className='icon'>
                <div className='dire'>
                    <p>方向性图标</p>
                    <hr/>
                    <StepBackwardOutlined />
                    <StepForwardOutlined />
                    <FastBackwardOutlined />
                    <FastForwardOutlined />
                    <DownOutlined />
                    <UpOutlined />
                    <LeftOutlined />
                    <RightOutlined />
                    <CaretUpOutlined />
                    <CaretDownOutlined />
                    <CaretLeftOutlined />
                    <CaretRightOutlined />
                    <UpCircleOutlined />
                    <DownCircleOutlined />
                    <LeftCircleOutlined />
                    <RightCircleOutlined />
                    <VerticalLeftOutlined />
                    <VerticalRightOutlined />
                    <ForwardOutlined />
                    <BackwardOutlined />
                    <ArrowUpOutlined />
                    <ArrowDownOutlined />
                    <ArrowLeftOutlined />
                    <ArrowRightOutlined />
                    <UpSquareOutlined />
                    <DownSquareOutlined />
                    <LeftSquareOutlined />
                    <RightSquareOutlined />
                </div>
                <div className='hint'>
                    <p>提示建议性图标</p>
                    <hr/>
                    <QuestionOutlined />
                    <QuestionCircleOutlined />
                    <PlusOutlined />
                    <PlusCircleOutlined />
                    <PauseOutlined />
                    <PauseCircleOutlined />
                    <MinusOutlined />
                    <MinusCircleOutlined />
                    <PlusSquareOutlined />
                    <MinusSquareOutlined />
                    <CloseOutlined />
                    <CheckOutlined />
                </div>
                <div className='edit'>
                    <p>编辑类图标</p>
                    <hr/>
                    <EditOutlined />
                    <FormOutlined />
                    <CopyOutlined />
                    <ScissorOutlined />
                    <DeleteOutlined />
                    <SnippetsOutlined />
                    <DiffOutlined />
                    <HighlightOutlined />
                    <BgColorsOutlined />
                    <BoldOutlined />
                    <ItalicOutlined />
                    <ZoomInOutlined />
                    <ZoomOutOutlined />
                    <FontSizeOutlined />
                </div>
                <div className='brand'>
                    <p>品牌和标识</p>
                    <hr/>
                    <AndroidOutlined />
                    <AppleOutlined />
                    <WindowsOutlined />
                    <IeOutlined />
                    <ChromeOutlined />
                    <GithubOutlined />
                    <QqOutlined />
                    <WechatOutlined />
                    <FacebookOutlined />
                    <InstagramOutlined />
                    <YoutubeOutlined />
                    <RedditOutlined />
                </div>
                <div className='common'>
                    <p>网站通用图标</p>
                    <hr/>
                    <AccountBookOutlined />
                    <AppstoreAddOutlined />
                    <AppstoreOutlined />
                    <AudioOutlined />
                    <AudioMutedOutlined />
                    <BankOutlined />
                    <BellOutlined />
                    <BookOutlined />
                    <BulbOutlined />
                    <CalendarOutlined />
                    <CameraOutlined />
                    <CarryOutOutlined />
                    <ClearOutlined />
                    <CloudDownloadOutlined />
                    <CloudUploadOutlined />
                    <CommentOutlined />
                    <EnvironmentOutlined />
                    <WifiOutlined />
                </div>
                <div className='demo'>
                    <p>颜色和旋转</p>
                    <hr/>
                    <SmileOutlined />
                    <SmileOutlined rotate={180} />
                    <SyncOutlined spin />
                    <HeartTwoTone twoToneColor="#eb2f96" />
                </div>
            </div>
        );
    }
}