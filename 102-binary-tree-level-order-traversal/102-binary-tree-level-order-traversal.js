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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (root === null) return []
    let results = []
    let quenue = [root]
    while (quenue.length){
        let len = quenue.length
        results.push(quenue.map(node => node.val))
        while (len--){
            let node = quenue.shift()
            if (node.left) quenue.push(node.left)
            if (node.right) quenue.push(node.right)
        }
    }
    return results
};