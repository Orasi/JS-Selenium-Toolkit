/**
 * Created by charles.sexton on 2/26/2016.
 */
/**
 * This function stops the node.js thread from performing asynchronous events/requests.
 * @param time The amount of time in seconds
 * @param callback Callback Function
 */
function sleep(seconds, callback)
{
    var stop = new Date().getTime();
    while (new Date().getTime() < stop + seconds * 1000)
    {
        ;
    }
    callback();
}

module.exports = sleep;