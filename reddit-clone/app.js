/* global angular */
/* eslint-disable max-len */
'use strict';


const app = angular.module(`ribbetApp`, [`angularMoment`]);

app.controller(`ribbetController`, [`$scope`, function($scope) {
  $scope.view = {};
  $scope.view.form = {};
  $scope.view.showForm = false;
  $scope.view.formSubmitted = false;
  $scope.view.search = ``;
  $scope.view.selected = `votes`;
  $scope.view.blogs = [{
    author: `Taco Man`,
    comments: [{
      author: `Mr. Kitty`,
      body: `first`
    }, {
      author: `Scotty`,
      body: `Doesn't Know`
    }],
    date: `2016-10-27T18:14:17.966Z`,
    description: `Air plant hammock kombucha umami, hot chicken +1 normcore. Yuccie plaid cronut, offal four dollar toast readymade food truck four loko tousled. Twee scenester man braid biodiesel letterpress, put a bird on it dreamcatcher leggings fashion axe blue bottle disrupt pug iPhone hot chicken. Pok pok hella jean shorts locavore PBR&B. Heirloom chartreuse iPhone wolf, bicycle rights four dollar toast leggings. Neutra tilde waistcoat, salvia kale chips XOXO butcher. Quinoa hexagon iPhone, narwhal pug deep v coloring book chambray four loko fingerstache la croix meditation craft beer.

    Everyday carry pok pok biodiesel snackwave slow - carb,
    subway tile meh selfies lo - fi next level lomo stumptown viral fap kogi.Forage tumblr quinoa,
    vaporware butcher meditation twee trust fund tofu tousled vexillologist shoreditch raw denim.Venmo health goth brooklyn,
    glossier fam next level humblebrag narwhal enamel pin lomo fanny pack af post - ironic chambray.Chicharrones typewriter literally humblebrag,
    chambray chartreuse austin.Waistcoat cronut drinking vinegar,
    keffiyeh 8 - bit biodiesel health goth 90 's tattooed sartorial. XOXO fam woke meditation bitters, cardigan affogato chambray literally try-hard coloring book tattooed banjo. Cray try-hard roof party, 8-bit cronut vegan authentic ugh before they sold out bitters dreamcatcher wayfarers.`,
    title: `Go Cubs Go`,
    votes: 10000,
  }, {
    author: `What the Funk`,
    comments: [{
      author: `Brightin`,
      body: `Wow this is so cool!`
    }],
    date: `2016-10-25T07:29:34.444Z`,
    description: `Fam bitters salvia vape hammock.Vice chicharrones small batch,
  cornhole lumbersexual quinoa woke hexagon DIY celiac thundercats hashtag.Pork belly organic heirloom leggings humblebrag.Vice banh mi snackwave,
  synth hexagon mlkshk air plant mixtape.Austin jean shorts sustainable single - origin coffee,
  tilde helvetica iceland wayfarers bitters.Meggings twee coloring book post - ironic,
  master cleanse sustainable tbh letterpress selfies.Forage bushwick helvetica etsy,
  man bun ethical scenester unicorn.`,
    title: `shit post`,
    votes: -1,
  }, {
    author: `Billy Murray`,
    comments: [],
    date: `2016-10-31T23:59:48.001Z`,
    description: `Small batch roof party quinoa enamel pin fanny pack.Next level roof party truffaut pork belly celiac listicle.Quinoa yr raw denim,
    ramps four dollar toast church - key prism hammock VHS schlitz tilde.Echo park vape meh iPhone hell of raclette vice,
    cliche vaporware waistcoat ennui asymmetrical fixie.Occupy squid mixtape,
    schlitz wolf semiotics beard thundercats sustainable woke twee.Four loko meggings roof party,
    live - edge waistcoat tofu venmo hammock semiotics fap freegan snackwave narwhal knausgaard.Humblebrag forage kitsch,
    YOLO meggings kickstarter hashtag.`,
    image: `http://www.fillmurray.com/g/201/300`,
    title: `meh`,
    votes: 0,
  }, ];

  $scope.newPost = function() {
    $scope.view.formSubmitted = true;
    if ($scope.postForm.$valid) {
      const post = {
        author: $scope.view.form.author,
        comments: [],
        date: new Date(),
        description: $scope.view.form.description,
        image: $scope.view.form.image,
        title: $scope.view.form.title,
        votes: 0,
      };
      $scope.view.blogs.push(post);
      $scope.view.showForm = false;
      $scope.view.form = {};
      $scope.postForm.$setPristine();
      $scope.view.formSubmitted = false;
    }
  };

  $scope.newComment = function() {
    this.blog.commentSubmitted = true;
    if (this.commentForm.$valid) {
      const comment = {
        author: this.blog.comment.author,
        body: this.blog.comment.body,
      };
      this.blog.comments.push(comment);
      this.blog.addComment = false;
      this.blog.comment = {};
      this.blog.commentSubmitted = false;
      this.commentForm.$setPristine();
    }
  };

  $scope.upVote = function() {
    this.blog.votes += 1;
  };
  $scope.downVote = function() {
    this.blog.votes -= 1;
  };
}]);

$(document).ready(() => {
  $(`.button-collapse`).sideNav();
  $(`.tooltipped`).tooltip({
    delay: 0
  });
  $(`select`).material_select();
});
