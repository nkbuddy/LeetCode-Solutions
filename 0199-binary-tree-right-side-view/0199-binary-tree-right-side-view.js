/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    if (!root) return []
    let queue = [[0,root]],result=[]


while(queue.length>0){
	let [level, current] = queue.shift()
	result[level] = current.val

	if(current.left) queue.push([level+1,current.left])
	if(current.right) queue.push([level+1,current.right])

}
return result
}