const TransferListItem = props => {
    return (
        <li><a>{props.name}
        <button className="is-small is-light button">Move</button>
        </a></li>
    );
};
    export default TransferListItem;