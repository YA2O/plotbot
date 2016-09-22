module.exports = (robot) => {
  const resturants = [
    'Vappe',
    'Sushi o glass',
    'Texas',
    'Gnällgrottan ... (sadpanda) ',
    'Wiggo',
    'Dumplings',
    'Wraps på dramatens trappa och njuta av utsikten'
  ]

  const randomRestaurant = (res) => {
    res.send(
      `${res.random(resturants)}?`
    )
  }

  robot.hear(/mat/i, randomRestaurant)
  robot.hear(/lunch/i, randomRestaurant)
}
