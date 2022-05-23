export default {
  f1: {
    language: 'sol',
    code: `pragma solidity 0.8.4;
        pragma abicoder v2;
        
        import "../lzApp/NonblockingLzApp.sol";
        
        /// @title A LayerZero example sending a cross chain message from a source chain to a destination chain to increment a counter
        contract OmniCounter is NonblockingLzApp {
            uint public counter;
        
            constructor(address _lzEndpoint) NonblockingLzApp(_lzEndpoint) {}
        
            function _nonblockingLzReceive(uint16, bytes memory, uint64, bytes memory) internal override {
                // _nonblockingLzReceive is how we provide custom logic to lzReceive()
                // in this case, increment a counter when a message is received.
                counter += 1;
            }
        
            function incrementCounter(uint16 _dstChainId) public payable {
                // _lzSend calls endpoint.send()
                _lzSend(_dstChainId, bytes(""), payable(msg.sender), address(0x0), bytes(""));
            }
        }`,
  },
  f2: {
    language: 'sol',
    code: `// an endpoint is the contract which has the send() function
        ILayerZeroEndpoint public endpoint;
        // call send() to send a message/payload to another chain
        endpoint.send{value:msg.value}(
            10001,               // destination LayerZero chainId
            dstContractAddress,  // send to this address on the destination          
            bytes("hello"),      // bytes payload
            msg.sender,          // refund address
            address(0x0),        // future parameter
            bytes("")            // adapterParams (see "Advanced Features")
         );`,
  },
};
