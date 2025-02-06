import React from 'react'
import { cn } from '../lib/css'

const CyprusFlag: React.FC<Icon> = ({ className }) => {
    return (
        <svg className={cn(className)} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><rect x="1" y="4" width="30" height="24" rx="4" ry="4" fill="#fff"></rect><path d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z" opacity=".15"></path><path fill="#4e5b31" d="M11.037 20.847L11.037 20.847 11.038 20.848 11.037 20.847z"></path><path d="M10.094,19.888c-.017,0-.034,.003-.051,.006h0c.033,.371,.301,.61,.521,.745,.148,.09,.307,.16,.473,.207-.17-.385-.361-.659-.568-.817-.162-.123-.297-.142-.362-.142-.005,0-.009,0-.013,0Z" fill="#4e5b31"></path><path d="M9.396,19.483c.181,.104,.345,.175,.438,.191,.003,0,.007,0,.01,0h0c.006,0,.012-.001,.017-.003,.007-.004,.012-.01,.015-.018,.007-.023,.007-.048,0-.07-.018-.079-.045-.155-.08-.227-.07-.158-.16-.32-.171-.339v-.002c-.091-.11-.186-.216-.286-.316-.079-.08-.165-.153-.257-.218-.101-.069-.175-.101-.245-.102-.018,0-.035,.002-.052,.008-.009,.094-.01,.189-.003,.284,.015,.209,.067,.365,.154,.464,.095,.109,.259,.233,.46,.348Z" fill="#4e5b31"></path><path d="M11.609,20.826h.001s0,0,0,0c-.141-.448-.306-.776-.491-.976-.161-.174-.307-.214-.402-.216-.006,0-.012,0-.018,0-.004,0-.008,0-.012,0-.04,.002-.078,.012-.114,.028,.144,.356,.371,.673,.662,.924,.113,.098,.239,.179,.375,.241h0Z" fill="#4e5b31"></path><path d="M9.893,20.242h0c-.011-.103-.055-.199-.127-.274-.116-.126-.364-.28-.89-.295h0c.013,.085,.037,.168,.071,.248,.051,.116,.147,.26,.317,.291,.146,.025,.293,.038,.441,.038h0c.113,0,.187-.007,.188-.007Z" fill="#4e5b31"></path><path d="M10.254,20.898c-.01,0-.019,0-.029,0-.14,.001-.279,.019-.414,.053h-.001c-.001,.015,0,.029,.001,.043,.006,.036,.02,.07,.041,.1,.048,.073,.161,.173,.423,.238,.155,.038,.314,.057,.473,.057h0c.162,0,.323-.018,.48-.056h0c-.157-.206-.382-.349-.635-.402-.112-.022-.225-.033-.339-.033Z" fill="#4e5b31"></path><path d="M13.322,21.63h0s0,0,0,0c-.234-.703-.692-.817-.944-.823-.007,0-.015,0-.022,0-.007,0-.014,0-.021,0-.052,0-.104,.007-.154,.019,.043,.129,.114,.247,.206,.346,.15,.167,.434,.382,.935,.459Z" fill="#4e5b31"></path><path d="M15.29,22.497h0s0,0,0,0c-.45-.852-.918-.944-1.1-.944-.035,0-.071,.004-.105,.012h0c-.011,.14,.026,.279,.104,.395,.123,.191,.414,.439,1.102,.538Z" fill="#4e5b31"></path><path fill="#4e5b31" d="M12.645 21.693L12.645 21.693 12.645 21.693 12.645 21.693z"></path><path d="M11.503,21.014h-.015c-.052,0-.104,.008-.154,.023h0c.008,.034,.02,.066,.036,.097,.042,.082,.099,.155,.168,.216,.162,.145,.485,.322,1.108,.344h0c-.504-.591-.932-.679-1.142-.679Z" fill="#4e5b31"></path><path d="M14.173,22.524c-.224,0-.363,.068-.439,.125-.046,.033-.085,.074-.114,.123h0s0,0,0,0c.238,.142,.51,.218,.788,.22,.259,.001,.513-.068,.735-.2-.375-.178-.7-.268-.965-.268h-.005Z" fill="#4e5b31"></path><path d="M12.133,21.864c-.02,0-.039,0-.058,0-.207,.007-.413,.034-.615,.082h0c.265,.266,.691,.36,1,.36h0s.024,0,.024,0c.168-.003,.287-.03,.354-.08,.029-.018,.045-.051,.042-.085-.014-.046-.045-.085-.086-.11-.148-.111-.37-.167-.66-.167Z" fill="#4e5b31"></path><path d="M13.217,22.211c.147,.1,.371,.15,.664,.15h0c.153-.001,.305-.012,.456-.033h0c-.364-.353-.709-.427-.936-.427-.016,0-.031,0-.046,.001-.106,.004-.21,.026-.307,.065,.004,.028,.011,.055,.023,.08,.033,.067,.083,.123,.146,.163Z" fill="#4e5b31"></path><path fill="#4e5b31" d="M20.962 20.848L20.963 20.847 20.963 20.847 20.962 20.848z"></path><path d="M19.613,21.172c.093-.099,.163-.217,.206-.346-.051-.012-.102-.018-.154-.019-.007,0-.014,0-.021,0s-.014,0-.022,0c-.252,.006-.71,.12-.944,.823h0c.501-.076,.785-.291,.935-.458Z" fill="#4e5b31"></path><path fill="#4e5b31" d="M19.355 21.693L19.355 21.693 19.355 21.693 19.355 21.693z"></path><path d="M19.355,21.693c.623-.022,.946-.199,1.108-.344,.069-.061,.126-.134,.168-.216,.016-.031,.028-.063,.036-.097h0c-.05-.015-.102-.023-.154-.023h-.015c-.21,0-.638,.088-1.142,.679h0Z" fill="#4e5b31"></path><path d="M21.436,20.64c.219-.135,.488-.374,.521-.745h0c-.017-.004-.034-.006-.051-.006-.004,0-.009,0-.013,0-.066,0-.2,.018-.362,.142-.206,.157-.397,.432-.568,.816,.166-.047,.326-.117,.473-.207Z" fill="#4e5b31"></path><path d="M22.156,19.674h0s.007,0,.01,0c.093-.016,.257-.087,.438-.191,.201-.115,.365-.239,.46-.348,.087-.099,.139-.256,.154-.464,.007-.094,.005-.189-.003-.284-.017-.005-.034-.008-.052-.008-.07,.001-.144,.033-.245,.102-.092,.065-.178,.138-.257,.218-.101,.1-.196,.205-.285,.316v.002c-.012,.019-.102,.181-.172,.339-.035,.073-.062,.149-.08,.227-.007,.023-.007,.047,0,.07,.003,.007,.008,.014,.015,.018,.005,.002,.011,.004,.017,.004Z" fill="#4e5b31"></path><path d="M19.925,21.865c-.019,0-.039,0-.058,0-.29,0-.512,.056-.66,.167-.041,.025-.072,.064-.086,.11-.003,.034,.013,.067,.042,.085,.067,.05,.186,.077,.354,.08h.024s0,0,0,0c.31,0,.735-.095,1-.36h0s0,0,0,0c-.202-.048-.407-.075-.615-.082Z" fill="#4e5b31"></path><path d="M18.598,21.901c-.227,0-.572,.074-.936,.427h0s0,0,0,0c.151,.021,.304,.032,.456,.033h0c.294,0,.517-.051,.664-.15,.063-.04,.113-.097,.146-.163,.012-.025,.02-.052,.023-.08-.098-.04-.202-.062-.307-.065-.015,0-.03-.001-.047-.001Z" fill="#4e5b31"></path><path d="M16.332,22.875l.224-.105-.12-.135-.412,.176-.024,.005-.024-.005-.412-.176-.12,.135,.224,.105,.034,.01-.554,.408h0s.083,.069,.164,.143c.036,.033,.082,.075,.114,.11,.013,.014,.026,.029,.037,.045,.007,.011,.013,.023,.018,.035h0c.005-.002,.01-.006,.014-.01l.005-.005c.022-.021,.043-.042,.063-.065,.053-.06,.123-.148,.186-.225,.123-.154,.225-.286,.244-.311l.007-.009,.007,.009c.019,.025,.121,.157,.244,.311,.062,.077,.133,.165,.186,.225,.02,.023,.041,.044,.063,.065l.005,.005s.009,.008,.014,.01h0c.006-.012,.012-.024,.018-.035,.011-.016,.024-.031,.037-.045,.032-.035,.078-.077,.114-.11,.081-.074,.163-.142,.164-.143h0s-.554-.408-.554-.408l.034-.01Z" fill="#4e5b31"></path><path d="M17.827,22.524h-.005c-.265,0-.59,.09-.965,.268,.222,.132,.476,.201,.735,.2,.277-.003,.549-.079,.788-.22h0c-.029-.049-.068-.091-.114-.123-.077-.056-.215-.124-.439-.125Z" fill="#4e5b31"></path><path d="M17.812,21.96c.078-.116,.115-.255,.104-.394h0s0,0,0,0c-.035-.008-.07-.012-.105-.012-.183,0-.65,.092-1.101,.944h0s0,0,0,0c.687-.098,.978-.346,1.102-.538Z" fill="#4e5b31"></path><path d="M22.233,19.968c-.072,.075-.116,.171-.127,.274h0s.075,.007,.188,.007h0c.148,0,.295-.012,.441-.038,.17-.031,.266-.175,.317-.291,.034-.079,.058-.162,.071-.248h0c-.526,.015-.774,.169-.89,.295Z" fill="#4e5b31"></path><path d="M21.774,20.899c-.009,0-.019,0-.029,0-.114,0-.227,.011-.339,.033-.253,.053-.479,.195-.635,.401h0s0,0,0,0c.157,.038,.318,.057,.48,.056h0c.159,0,.319-.018,.473-.056,.262-.066,.375-.166,.423-.238,.021-.03,.035-.064,.041-.1,.002-.014,.003-.028,.001-.042h-.001c-.135-.034-.275-.052-.414-.053Z" fill="#4e5b31"></path><path d="M21.314,19.633s-.008,0-.012,0c-.006,0-.012,0-.018,0-.095,.003-.241,.042-.402,.216-.185,.2-.35,.528-.491,.976h0s.001,0,.001,0h0c.136-.062,.262-.143,.375-.241,.291-.251,.518-.567,.662-.924-.036-.017-.075-.026-.114-.028Z" fill="#4e5b31"></path><path d="M27.038,7.682c-.657,.25-1.178,.473-1.824,.725-.433,.246-.903,.68-1.462,.666-.602,.259-1.428,1.108-2.328,1.237-1.56,.269-2.742,.88-4.367,.862-1.37-.252-2.808-.058-4.021-.659,.292,.809,.279,2.847-1.045,2.472-.652-.487-1.509-.401-2.072-.149-1.215,2.919-3.06-.873-2.031,1.64,.143,.499-.068,1.188,.545,1.415,.353,.183,.06,.888,.454,.952,.586,.5,1.462,.652,2.244,1.003,1.251-.156,1.765-.571,2.157,.735,1.633,.156-.661-.647,1.531-1.334,1.553,.277,2.645-.801,3.994-1.054,.394-.416,.087-1.184,.654-1.473,.537-.143,1.081,.001,1.51,.299,.43-.32,.929-.556,1.455-.314,.473,.225,.401,.198,.306-.188-.507-.774-1.423-1.285-1.476-2.067,.104-1.066,.626-.998,1.407-1.192,.425-1.278,2.308-1.373,2.961-2.416,.399-.553,1.327-.428,1.407-1.161Z" fill="#d57800"></path><path d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z" fill="#fff" opacity=".2"></path></svg>
    )
}

export default CyprusFlag