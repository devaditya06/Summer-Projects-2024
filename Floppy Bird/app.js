document.addEventListener('DOMContentLoaded' , () => {
    const bird = document.querySelector('.bird')
    const gameDisplay = document.querySelector('.game-container')
    const ground = document.querySelector('.ground-moving')

    let birdLeft = 220
    let birdBottom = 100
    let gravity = 3
    let isGameOver = false
    let gap = 440
    let score = 0 // Initialize score
    const scoreDisplay = document.createElement('div') // Score display element

    // Style and add the score display to the game
    scoreDisplay.classList.add('score')
    scoreDisplay.textContent = score
    gameDisplay.appendChild(scoreDisplay)

    function startGame() {
        birdBottom -= gravity
        bird.style.bottom = birdBottom + 'px'
        bird.style.left = birdLeft + 'px'
    }
    let gameTimerId = setInterval(startGame, 20)

    function control(e) {
        if (e.keyCode === 32) {
            jump()
        }
    }

    function jump() {
        if (birdBottom < 500) birdBottom += 50
        bird.style.bottom = birdBottom + 'px'
    }
    document.addEventListener('keyup', control)


    function generateObstacle() {
        let obstacleLeft = 500
        let randomHeight = Math.random() * 60
        let obstacleBottom = randomHeight
        const obstacle = document.createElement('div')
        const topObstacle = document.createElement('div')
        if (!isGameOver) {
            obstacle.classList.add('obstacle')
            topObstacle.classList.add('topObstacle')
        }
        gameDisplay.appendChild(obstacle)
        gameDisplay.appendChild(topObstacle)
        obstacle.style.left = obstacleLeft + 'px'
        topObstacle.style.left = obstacleLeft + 'px'
        obstacle.style.bottom = obstacleBottom + 'px'
        topObstacle.style.bottom = obstacleBottom + gap + 'px'

        function moveObstacle() {
            obstacleLeft -=2
            obstacle.style.left = obstacleLeft + 'px'
            topObstacle.style.left = obstacleLeft + 'px'

            // Check if the bird passes the obstacle
            if (obstacleLeft === 220) {
                score++
                scoreDisplay.textContent = score // Update the score on the screen
            }

            if (obstacleLeft === -60) {
                clearInterval(timerId)
                gameDisplay.removeChild(obstacle)
                gameDisplay.removeChild(topObstacle)
            }

            // Check for collision
            if (
                obstacleLeft > 200 && obstacleLeft < 280 && birdLeft === 220 &&
                (birdBottom < obstacleBottom + 153 || birdBottom > obstacleBottom + gap -200) ||
                birdBottom === 0 
            ) {
                gameOver()
                clearInterval(timerId) 
            }
        }

        let timerId = setInterval(moveObstacle, 20) 
        if (!isGameOver) setTimeout(generateObstacle, 3000)
    }

    generateObstacle()

    function gameOver() {
        clearInterval(gameTimerId)
        isGameOver = true
        document.removeEventListener('keyup', control)
        ground.classList.add('ground')
        ground.classList.remove('ground-moving')
        console.log('game over')
    }
})
