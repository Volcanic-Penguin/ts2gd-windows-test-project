// No uses of "res://compiled/test.gd" found.


declare type NodePathToType[object Object] = {

}    

  
import { [object Object] } from 'src/test'

declare module 'src/test' {
  enum ADD_A_GENERIC_TYPE_TO_GET_NODE_FOR_THIS_TO_WORK {}

  interface [object Object] {
    /**
     * Gets a node by a string path. There are two ways to use this function:
     * 
     * 1. this.get_node("KnownNode") - Use this when ts2gd can prove there's a
     * node at the path you provide
     * 
     * 2. this.get_node<Label>("DynamicNode") - Use this when ts2gd can't prove
     * there's a node at the provided path, but you know that it is there. Be
     * sure to add the type parameter (e.g. <Label>) to indicate to ts2gd what
     * type of node you're retrieving - otherwise there will be an error!
     * 
     * N.B. It *should* be possible to use ts2gd without *ever* having to revert
     * to the second get_node call with the type parameter. Please open a GitHub
     * issue if you feel this isn't the case.
     */
    get_node<T extends keyof NodePathToType[object Object]>(path: T): (
      NodePathToType[object Object][T]
    );
    get_node<T extends Node | ADD_A_GENERIC_TYPE_TO_GET_NODE_FOR_THIS_TO_WORK = ADD_A_GENERIC_TYPE_TO_GET_NODE_FOR_THIS_TO_WORK>(path: string & (T extends ADD_A_GENERIC_TYPE_TO_GET_NODE_FOR_THIS_TO_WORK ? ADD_A_GENERIC_TYPE_TO_GET_NODE_FOR_THIS_TO_WORK : string)): T;

    /**
     * @deprecated - please use get_node<T> instead.
     */
    get_node_unsafe<T>(path: string): T
  }

  namespace [object Object] {
    export function _new(): [object Object];

    export { _new as new };
  }
}
