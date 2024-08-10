(this.webpackJsonpPokedex = this.webpackJsonpPokedex || []).push([
  [0],
  {
    104: function (e, t, a) {},
    105: function (e, t, a) {},
    106: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a(0),
        r = a.n(n),
        o = a(13),
        c = a(14),
        l = a(27),
        i = a(88),
        s = a(37),
        m = a(18),
        u = a.n(m),
        p = a(50),
        E = {
          DATA_REQUESTED: "DATA_REQUESTED",
          DATA_LOADED: "DATA_LOADED",
          API_ERROR: "API_ERROR",
          RESET_DATA: "RESET_DATA",
          SET_FILTER: "SET_FILTER",
          SET_POKEMON: "SET_POKEMON",
          FETCH_DESCRIPTION: "FETCH_DESCRIPTION",
          FETCHED_DESCRIPTION: "FETCHED_DESCRIPTION",
          LOAD_MOVES: "LOAD_MOVES",
          MOVE_REQUEST: "MOVE_REQUEST",
          MOVE_LOADING: "LOADING_MOVE",
          MOVE_LOADED: "MOVE_LOADED",
        },
        d = u.a.mark(h),
        g = u.a.mark(A);
      function h() {
        return u.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), Object(p.c)(E.DATA_REQUESTED, A);
              case 2:
              case "end":
                return e.stop();
            }
        }, d);
      }
      function A() {
        var e;
        return u.a.wrap(
          function (t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  return (t.prev = 0), (t.next = 3), Object(p.a)(f);
                case 3:
                  return (
                    (e = t.sent),
                    (t.next = 6),
                    Object(p.b)({ type: E.DATA_LOADED, payload: e })
                  );
                case 6:
                  t.next = 12;
                  break;
                case 8:
                  return (
                    (t.prev = 8),
                    (t.t0 = t.catch(0)),
                    (t.next = 12),
                    Object(p.b)({ type: E.API_ERROR, payload: t.t0 })
                  );
                case 12:
                case "end":
                  return t.stop();
              }
          },
          g,
          null,
          [[0, 8]]
        );
      }
      function f() {
        return v.apply(this, arguments);
      }
      function v() {
        return (v = Object(s.a)(
          u.a.mark(function e() {
            var t, a, n, r, o;
            return u.a.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (t = []),
                        (a = performance.now()),
                        (e.prev = 2),
                        (e.next = 5),
                        fetch("https://pokeapi.co/api/v2/pokemon?limit=150")
                      );
                    case 5:
                      return (n = e.sent), (e.next = 8), n.json();
                    case 8:
                      return (
                        (r = e.sent),
                        (o = r.results),
                        e.abrupt(
                          "return",
                          Promise.all(
                            o.map(
                              (function () {
                                var e = Object(s.a)(
                                  u.a.mark(function e(a) {
                                    var n;
                                    return u.a.wrap(function (e) {
                                      for (;;)
                                        switch ((e.prev = e.next)) {
                                          case 0:
                                            return (e.next = 2), b(a);
                                          case 2:
                                            (n = e.sent), t.push(n);
                                          case 4:
                                          case "end":
                                            return e.stop();
                                        }
                                    }, e);
                                  })
                                );
                                return function (t) {
                                  return e.apply(this, arguments);
                                };
                              })()
                            )
                          ).then(function () {
                            var e = performance.now(),
                              n = parseInt(e - a);
                            return { pokemons: t, timer: n };
                          })
                        )
                      );
                    case 13:
                      throw (
                        ((e.prev = 13),
                        (e.t0 = e.catch(2)),
                        new Error("fetching list of pokemons went wrong"))
                      );
                    case 16:
                    case 17:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[2, 13]]
            );
          })
        )).apply(this, arguments);
      }
      function b(e) {
        return k.apply(this, arguments);
      }
      function k() {
        return (k = Object(s.a)(
          u.a.mark(function e(t) {
            var a;
            return u.a.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (e.next = 3),
                        fetch(
                          "https://pokeapi.co/api/v2/pokemon/".concat(t.name)
                        )
                      );
                    case 3:
                      return (a = e.sent), (e.next = 6), a.json();
                    case 6:
                      return e.abrupt("return", e.sent);
                    case 9:
                      throw (
                        ((e.prev = 9),
                        (e.t0 = e.catch(0)),
                        new Error(
                          "fetching ".concat(t.name, "'s details went wrong")
                        ))
                      );
                    case 12:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[0, 9]]
            );
          })
        )).apply(this, arguments);
      }
      var O = a(80),
        y = a(81),
        w = a.n(y),
        D = a(24),
        x = {
          pokemons: [],
          filter: "",
          currentPokemon: null,
          loading: !1,
          timer: null,
          error: null,
        };
      var T = {
        description: "",
        showMoves: !1,
        loadingMove: !1,
        currentMove: "",
      };
      var R = Object(i.a)(),
        j = Object(l.c)({
          mainReducer: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : x,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case E.DATA_REQUESTED:
                return Object(D.a)({}, e, { loading: !0 });
              case E.DATA_LOADED:
                return Object(D.a)({}, e, {
                  pokemons: t.payload.pokemons,
                  timer: t.payload.timer,
                  loading: !1,
                });
              case E.API_ERROR:
                return Object(D.a)({}, e, { error: t.payload, loading: !1 });
              case E.RESET_DATA:
                return x;
              case E.SET_FILTER:
                return Object(D.a)({}, e, { filter: t.payload });
              case E.SET_POKEMON:
                return Object(D.a)({}, e, { currentPokemon: t.payload });
              default:
                return e;
            }
          },
          pokemonReducer: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : T,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case E.FETCHED_DESCRIPTION:
                return Object(D.a)({}, e, { description: t.payload });
              case E.LOAD_MOVES:
                return Object(D.a)({}, e, { showMoves: t.payload });
              case E.MOVE_REQUEST:
                return Object(D.a)({}, e, { loadingMove: !0 });
              case E.MOVE_LOADED:
                return Object(D.a)({}, e, {
                  loadingMove: !1,
                  currentMove: t.payload,
                });
              default:
                return e;
            }
          },
        }),
        I = Object(l.e)(j, Object(l.d)(Object(l.a)(R, O.a, w.a)));
      R.run(h);
      var N = I,
        C = a(22),
        M = a(34),
        S = a(87),
        P = a(165),
        B = a(15);
      var F = a(151),
        Q = a(149),
        H = a(150),
        K = a(146),
        V = a(107),
        G = a(63),
        q = a(167),
        _ = a(144),
        L = a(8),
        U = a(82),
        J = a.n(U),
        z = a(84),
        X = a.n(z),
        Y = a(42),
        Z = a(170),
        W = a(148),
        $ = a(166),
        ee = Object(_.a)({
          list: { width: 750 },
          fullList: { width: "auto" },
          linkText: { textDecoration: "none", color: "black" },
        }),
        te = function (e) {
          var t,
            a = e.navLinks,
            o = ee(),
            c = Object(n.useState)({ bottom: !1 }),
            l = Object(Y.a)(c, 2),
            i = l[0],
            s = l[1],
            m = function (e, t) {
              return function (a) {
                ("keydown" !== a.type ||
                  ("Tab" !== a.key && "Shift" !== a.key)) &&
                  s(Object(B.a)({}, e, t));
              };
            };
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(
              V.a,
              { edge: "start", "aria-label": "menu", onClick: m("bottom", !0) },
              r.a.createElement(
                G.a,
                { variant: "subtitle1", style: { color: "white" } },
                "My Pokemon"
              )
            ),
            r.a.createElement(
              $.a,
              {
                anchor: "bottom",
                open: i.bottom,
                onOpen: m("bottom", !0),
                onClose: m("bottom", !1),
              },
              ((t = "bottom"),
              r.a.createElement(
                "div",
                {
                  className: o.list,
                  role: "presentation",
                  onClick: m(t, !1),
                  onKeyDown: m(t, !1),
                },
                r.a.createElement(
                  K.a,
                  { component: "nav" },
                  a.map(function (e) {
                    var t = e.title,
                      a = e.path;
                    return r.a.createElement(
                      "a",
                      { href: a, key: t, className: o.linkText },
                      r.a.createElement(
                        Z.a,
                        { button: !0 },
                        r.a.createElement(W.a, { primary: t })
                      )
                    );
                  })
                )
              ))
            )
          );
        },
        ae = Object(_.a)(function (e) {
          return {
            root: { flexGrow: 1 },
            menuButton: { width: "40px", marginRight: e.spacing(2) },
            title: Object(B.a)({ display: "none" }, e.breakpoints.up("sm"), {
              display: "block",
            }),
            search: {
              position: "relative",
              borderRadius: e.shape.borderRadius,
              backgroundColor: Object(L.c)(e.palette.common.white, 0.15),
              "&:hover": {
                backgroundColor: Object(L.c)(e.palette.common.white, 0.25),
              },
              marginLeft: "4rem",
              width: "70vw",
            },
            MyPokeButton: { marginLeft: "4rem" },
            searchIcon: {
              width: e.spacing(7),
              height: "100%",
              position: "absolute",
              pointerEvents: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            },
            inputRoot: { color: "inherit" },
            inputInput: {
              padding: e.spacing(1, 1, 1, 7),
              transition: e.transitions.create("width"),
              "&:disabled": { color: "white" },
            },
            btn: { marginLeft: "3rem" },
            try: {
              marginLeft: "3rem",
              opacity: ".5",
              fontSize: "rem",
              fontStyle: "italic",
            },
          };
        }),
        ne = [{ title: "My Catched Pokemon" }];
      var re = Object(c.b)(
          function (e) {
            return { pokemons: e.mainReducer.pokemons };
          },
          {
            setFilter: function (e) {
              return { type: E.SET_FILTER, payload: e };
            },
          }
        )(function (e) {
          var t = e.pokemons,
            a = e.setFilter,
            n = e.filter,
            o = e.page,
            c = ae(),
            l = t.length < 1 ? "Catch some Pokemon" : "Search Pokemon",
            i = t.length < 1;
          return r.a.createElement(
            "div",
            { className: c.root },
            r.a.createElement(
              Q.a,
              { position: "static" },
              r.a.createElement(
                H.a,
                null,
                r.a.createElement(
                  V.a,
                  {
                    edge: "start",
                    className: c.menuButton,
                    color: "inherit",
                    "aria-label": "open drawer",
                  },
                  r.a.createElement(J.a, null)
                ),
                r.a.createElement(
                  G.a,
                  { className: c.title, variant: "h6", noWrap: !0 },
                  r.a.createElement(C.b, { to: "/" }, "Pok\xe9dex")
                ),
                "pokemon" !== o
                  ? r.a.createElement(
                      "div",
                      { className: c.search },
                      r.a.createElement(
                        "div",
                        { className: c.searchIcon },
                        r.a.createElement(X.a, null)
                      ),
                      r.a.createElement(q.a, {
                        disabled: i,
                        placeholder: l,
                        value: n,
                        onChange: function (e) {
                          return a(e.target.value);
                        },
                        classes: { root: c.inputRoot, input: c.inputInput },
                        inputProps: { "aria-label": "search" },
                      })
                    )
                  : r.a.createElement(
                      r.a.Fragment,
                      null,
                      r.a.createElement(
                        C.b,
                        { to: "/" },
                        r.a.createElement(
                          F.a,
                          { variant: "contained", className: c.btn },
                          "Back"
                        )
                      ),
                      r.a.createElement(G.a, {
                        variant: "h6",
                        className: c.try,
                      })
                    ),
                r.a.createElement(K.a, {
                  component: "nav",
                  "aria-labelledby": "main navigation",
                  className: c.navDisplayFlex,
                }),
                r.a.createElement(te, { navLinks: ne })
              )
            )
          );
        }),
        oe = a(157),
        ce = a(90),
        le = a(152),
        ie = a(153),
        se = a(156),
        me = a(154),
        ue = {
          normal: "darkseagreen",
          fire: "orange",
          fighting: "darkred",
          water: "blue",
          flying: "bisque",
          grass: "green",
          poison: "purple",
          electric: "yellow",
          ground: "darkgoldenrod",
          psychic: "pink",
          rock: "darkbrown",
          ice: "ghostwhite",
          bug: "khaki",
          dragon: "dodgerblue",
          ghost: "indigo",
          dark: "saddlebrown",
          steel: "darkgray",
          faire: "salmon",
        },
        pe = a(169),
        Ee = Object(_.a)({
          chip: {
            marginRight: "10px",
            textTransform: "uppercase",
            color: "white",
          },
        });
      function de(e) {
        var t = Ee(),
          a = e.types;
        return r.a.createElement(
          r.a.Fragment,
          null,
          a
            ? a.map(function (e, a) {
                var n = e.type.name;
                return r.a.createElement(pe.a, {
                  className: t.chip,
                  label: n,
                  style: { backgroundColor: "".concat(ue[n]) },
                });
              })
            : ""
        );
      }
      var ge = a(155),
        he = Object(_.a)({
          root: { maxWidth: 240, margin: ".5rem" },
          media: { height: 140, backgroundSize: "contain" },
        });
      function Ae(e) {
        var t = e.pokemon,
          a = he(),
          n = t.id,
          o = t.name,
          c = t.types,
          l =
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(
              n,
              ".png"
            );
        return r.a.createElement(
          le.a,
          { className: a.root },
          r.a.createElement(
            ie.a,
            null,
            r.a.createElement(me.a, { className: a.media, image: l }),
            r.a.createElement(
              ge.a,
              { container: !0, item: !0, xs: 12, justify: "space-evenly" },
              r.a.createElement(
                F.a,
                { size: "small", variant: "outlined", color: "primary" },
                r.a.createElement(C.b, { to: "/pokemon/".concat(n) }, "View")
              ),
              r.a.createElement(
                F.a,
                {
                  size: "small",
                  onClick: function () {
                    console.log("Hehe");
                  },
                  variant: "outlined",
                  color: "secondary",
                },
                "Catch"
              )
            ),
            r.a.createElement(
              se.a,
              null,
              r.a.createElement(
                G.a,
                { gutterBottom: !0, variant: "h5", component: "h2" },
                o
              ),
              c ? r.a.createElement(de, { types: c }) : ""
            )
          )
        );
      }
      var fe = a(28),
        ve = a.n(fe),
        be = Object(_.a)(function () {
          return {
            container: { display: "flex", flexWrap: "wrap", padding: "1rem" },
            options: {
              display: "flex",
              alignItems: "center",
              padding: ".5rem",
              marginTop: "1rem",
              "& > *": { marginRight: "1rem" },
            },
            pokeball: { width: "30px", height: "30px", marginRight: "1rem" },
          };
        });
      var ke = {
          resetData: function () {
            return { type: E.RESET_DATA };
          },
          fetchAll: function () {
            return { type: E.DATA_REQUESTED };
          },
        },
        Oe = Object(c.b)(function (e) {
          return {
            pokemons: e.mainReducer.pokemons,
            loading: e.mainReducer.loading,
            timer: e.mainReducer.timer,
            filter: e.mainReducer.filter,
            error: e.mainReducer.error,
          };
        }, ke)(function (e) {
          var t = e.fetchAll,
            a = e.resetData,
            n = e.pokemons,
            o = e.loading,
            c = e.timer,
            l = e.filter,
            i = e.error,
            s = be(),
            m = n.filter(function (e) {
              return e.name.includes(l);
            });
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(
              oe.a,
              { maxWidth: "lg" },
              r.a.createElement(
                ce.a,
                { className: s.options },
                r.a.createElement(
                  F.a,
                  { variant: "outlined", onClick: t },
                  "Catch Pokemon"
                ),
                r.a.createElement(
                  F.a,
                  { variant: "outlined", onClick: a },
                  "Reset"
                ),
                r.a.createElement(
                  G.a,
                  null,
                  i
                    ? r.a.createElement(
                        "span",
                        null,
                        "Error occured: ",
                        i.message
                      )
                    : r.a.createElement(
                        "span",
                        null,
                        "Catched in: ",
                        c ? c / 1e3 : "...",
                        " s"
                      )
                )
              )
            ),
            r.a.createElement(
              oe.a,
              { maxWidth: "lg", className: s.container },
              o
                ? r.a.createElement(
                    r.a.Fragment,
                    null,
                    r.a.createElement("img", {
                      alt: ve.a,
                      className: s.pokeball,
                      src: ve.a,
                    }),
                    r.a.createElement(G.a, null, "Catching...")
                  )
                : "",
              m.map(function (e, t) {
                return r.a.createElement(Ae, { key: e.name, pokemon: e });
              })
            )
          );
        }),
        ye = function () {
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(re, null),
            r.a.createElement(Oe, null)
          );
        };
      function we(e) {
        return { type: E.LOAD_MOVES, payload: e };
      }
      function De(e) {
        return (function () {
          var t = Object(s.a)(
            u.a.mark(function t(a) {
              var n, r, o, c;
              return u.a.wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (c = function (e) {
                            return a({ type: E.API_ERROR, payload: e }), e;
                          }),
                          (o = function (e) {
                            return a({ type: E.MOVE_LOADED, payload: e }), e;
                          }),
                          a({ type: E.MOVE_REQUEST }),
                          (t.prev = 3),
                          (t.next = 6),
                          fetch("https://pokeapi.co/api/v2/move/".concat(e))
                        );
                      case 6:
                        return (n = t.sent), (t.next = 9), n.json();
                      case 9:
                        return (r = t.sent), t.abrupt("return", o(r));
                      case 13:
                        return (
                          (t.prev = 13),
                          (t.t0 = t.catch(3)),
                          t.abrupt("return", c(t.t0))
                        );
                      case 16:
                      case "end":
                        return t.stop();
                    }
                },
                t,
                null,
                [[3, 13]]
              );
            })
          );
          return function (e) {
            return t.apply(this, arguments);
          };
        })();
      }
      var xe = a(73),
        Te = a.n(xe),
        Re = Object(_.a)(function (e) {
          return {
            root: { flexGrow: 1 },
            paper: { padding: e.spacing(2), textAlign: "center" },
            sprite: { width: "200px" },
            iconContainer: {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            },
            arrow: { fontSize: "3rem", color: e.palette.primary.main },
            name: { marginBottom: "1rem" },
            pokeball: { width: "30px", height: "30px", marginRight: "1rem" },
            description: { marginTop: "1rem", display: "block" },
          };
        });
      function je(e) {
        for (
          var t = Object.keys(e), a = Object.values(e), n = t.length;
          n > 0;
          n--
        )
          if (void 0 !== a[n] && null !== a[n]) return a[n];
      }
      var Ie = Object(c.b)(
          function (e) {
            var t = (function (e, t) {
                for (
                  var a = e.mainReducer.pokemons, n = Object.values(a), r = 0;
                  r < n.length;
                  r++
                )
                  if (n[r].id === t) return n[r];
              })(e, e.mainReducer.currentPokemon),
              a = e.pokemonReducer.description;
            return {
              id: t.id,
              types: t.types,
              sprite: je(t.sprites),
              name: t.name,
              description: a,
            };
          },
          {
            fetchDescription: function (e) {
              return (function () {
                var t = Object(s.a)(
                  u.a.mark(function t(a) {
                    var n, r, o, c, l;
                    return u.a.wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (l = function (e) {
                                  return (
                                    a({ type: E.API_ERROR, payload: e }), e
                                  );
                                }),
                                (c = function (e) {
                                  return (
                                    a({
                                      type: E.FETCHED_DESCRIPTION,
                                      payload: e,
                                    }),
                                    e
                                  );
                                }),
                                (t.prev = 2),
                                (t.next = 5),
                                fetch(
                                  "https://pokeapi.co/api/v2/characteristic/".concat(
                                    e
                                  )
                                )
                              );
                            case 5:
                              return (n = t.sent), (t.next = 8), n.json();
                            case 8:
                              return (
                                (r = t.sent),
                                (o = r.descriptions[2].description),
                                t.abrupt("return", c(o))
                              );
                            case 13:
                              return (
                                (t.prev = 13),
                                (t.t0 = t.catch(2)),
                                t.abrupt("return", l(t.t0))
                              );
                            case 16:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      null,
                      [[2, 13]]
                    );
                  })
                );
                return function (e) {
                  return t.apply(this, arguments);
                };
              })();
            },
          }
        )(function (e) {
          var t = e.types,
            a = (e.sprite, e.name),
            o = e.description,
            c = e.fetchDescription,
            l = Re(),
            i = Object(M.g)(),
            s = parseInt(i.pokemonId),
            m = s > 1 ? s - 1 : 1,
            u = s + 1;
          return (
            Object(n.useEffect)(function () {
              c(s);
            }),
            r.a.createElement(
              "div",
              { className: l.root },
              r.a.createElement(
                ge.a,
                { container: !0, spacing: 3 },
                r.a.createElement(
                  ge.a,
                  { item: !0, xs: 12 },
                  r.a.createElement(
                    ce.a,
                    { className: l.paper },
                    r.a.createElement(
                      ge.a,
                      { container: !0, spacing: 3 },
                      r.a.createElement(
                        ge.a,
                        { item: !0, xs: 4, className: l.iconContainer },
                        r.a.createElement(
                          C.b,
                          { to: "/pokemon/".concat(m) },
                          r.a.createElement(Te.a, {
                            className: l.arrow,
                            style: { transform: "rotate(180deg)" },
                          })
                        )
                      ),
                      r.a.createElement(
                        ge.a,
                        { item: !0, xs: 4 },
                        r.a.createElement("img", {
                          alt: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(
                            s,
                            ".png"
                          ),
                          src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(
                            s,
                            ".png"
                          ),
                          className: l.sprite,
                        })
                      ),
                      r.a.createElement(
                        ge.a,
                        { item: !0, xs: 4, className: l.iconContainer },
                        r.a.createElement(
                          C.b,
                          { to: "/pokemon/".concat(u) },
                          r.a.createElement(Te.a, { className: l.arrow })
                        )
                      )
                    ),
                    r.a.createElement(
                      G.a,
                      { variant: "h2", className: l.name },
                      a
                    ),
                    r.a.createElement(de, { types: t }),
                    r.a.createElement(
                      "div",
                      { className: l.description },
                      o
                        ? r.a.createElement(G.a, { variant: "h6" }, o)
                        : r.a.createElement(
                            r.a.Fragment,
                            null,
                            r.a.createElement("img", {
                              alt: ve.a,
                              className: l.pokeball,
                              src: ve.a,
                            }),
                            r.a.createElement(G.a, null, "Catching...")
                          )
                    )
                  )
                )
              )
            )
          );
        }),
        Ne = a(159),
        Ce = a(160),
        Me = a(162),
        Se = a(158),
        Pe = a(161),
        Be = Object(_.a)(function (e) {
          return {
            root: { flexGrow: 1 },
            paper: { padding: e.spacing(2), textAlign: "center" },
            table: {
              "& td:first-child": { textAlign: "right" },
              "& td:nth-child(3)": { textAlign: "right" },
            },
            heading: { marginTop: "1rem", marginBottom: "1rem" },
          };
        });
      var Fe = Object(c.b)(function (e) {
          var t = (function (e, t) {
              for (
                var a = e.mainReducer.pokemons, n = Object.values(a), r = 0;
                r < n.length;
                r++
              )
                if (n[r].id === t) return n[r];
            })(e, e.mainReducer.currentPokemon),
            a = t.abilities.length
              ? t.abilities
                  .map(function (e) {
                    return e.ability.name;
                  })
                  .join(", ")
              : "none",
            n = t.held_items.length
              ? t.held_items
                  .map(function (e) {
                    return e.item.name;
                  })
                  .join(", ")
              : "none";
          return {
            height: t.height,
            weight: t.weight,
            base_exp: t.base_experience,
            abilities: a,
            held_items: n,
          };
        })(function (e) {
          var t = e.height,
            a = e.weight,
            n = e.base_exp,
            o = e.abilities,
            c = e.held_items,
            l = Be();
          return r.a.createElement(
            "div",
            { className: l.root },
            r.a.createElement(
              ge.a,
              { container: !0, spacing: 3 },
              r.a.createElement(
                ge.a,
                { item: !0, xs: 12 },
                r.a.createElement(
                  ce.a,
                  { className: l.paper },
                  r.a.createElement(
                    oe.a,
                    { maxWidth: "sm" },
                    r.a.createElement(
                      G.a,
                      { variant: "h4", className: l.heading },
                      "Profile"
                    ),
                    r.a.createElement(
                      Se.a,
                      { component: ce.a },
                      r.a.createElement(
                        Ne.a,
                        { className: l.table, "aria-label": "simple table" },
                        r.a.createElement(
                          Ce.a,
                          null,
                          r.a.createElement(
                            Pe.a,
                            null,
                            r.a.createElement(
                              Me.a,
                              null,
                              r.a.createElement("strong", null, "Height")
                            ),
                            r.a.createElement(Me.a, null, t),
                            r.a.createElement(
                              Me.a,
                              null,
                              r.a.createElement("strong", null, "Weight")
                            ),
                            r.a.createElement(Me.a, null, a)
                          ),
                          r.a.createElement(
                            Pe.a,
                            null,
                            r.a.createElement(
                              Me.a,
                              null,
                              r.a.createElement(
                                "strong",
                                null,
                                "Base Experience"
                              )
                            ),
                            r.a.createElement(Me.a, null, n),
                            r.a.createElement(
                              Me.a,
                              null,
                              r.a.createElement("strong", null, "Abilities")
                            ),
                            r.a.createElement(Me.a, null, o)
                          ),
                          r.a.createElement(
                            Pe.a,
                            null,
                            r.a.createElement(
                              Me.a,
                              null,
                              r.a.createElement("strong", null, "Held items")
                            ),
                            r.a.createElement(Me.a, null, c),
                            r.a.createElement(
                              Me.a,
                              null,
                              r.a.createElement("strong", null, "Abilities")
                            ),
                            r.a.createElement(Me.a, null, o)
                          )
                        )
                      )
                    )
                  )
                )
              )
            )
          );
        }),
        Qe = a(85),
        He = a.n(Qe),
        Ke =
          (a(104),
          Object(_.a)(function (e) {
            return {
              root: { flexGrow: 1 },
              paper: { padding: e.spacing(2), textAlign: "center" },
              container: { display: "flex", flexWrap: "wrap" },
              heading: { marginTop: "1rem", marginBottom: "1rem" },
              progressHolder: {
                width: "150px",
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              },
              progressText: { position: "absolute" },
              statTitle: { fontSize: ".7rem" },
            };
          }));
      var Ve = Object(c.b)(function (e) {
          return {
            stats: (function (e, t) {
              for (
                var a = e.mainReducer.pokemons, n = Object.values(a), r = 0;
                r < n.length;
                r++
              )
                if (n[r].id === t) return n[r];
            })(e, e.mainReducer.currentPokemon).stats,
          };
        })(function (e) {
          var t = e.stats,
            a = Ke();
          return r.a.createElement(
            "div",
            { className: a.root },
            r.a.createElement(
              ge.a,
              { container: !0, spacing: 3 },
              r.a.createElement(
                ge.a,
                { item: !0, xs: 12 },
                r.a.createElement(
                  ce.a,
                  { className: a.paper },
                  r.a.createElement(
                    G.a,
                    { variant: "h4", className: a.heading },
                    "Stats"
                  ),
                  r.a.createElement(
                    oe.a,
                    { maxWidth: "md", className: a.container },
                    t.map(function (e) {
                      return r.a.createElement(
                        "div",
                        { className: a.progressHolder },
                        r.a.createElement(
                          "div",
                          { className: a.progressText },
                          r.a.createElement(
                            G.a,
                            { variant: "h6", className: a.statTitle },
                            r.a.createElement("strong", null, e.stat.name)
                          ),
                          r.a.createElement(G.a, { variant: "h5" }, e.base_stat)
                        ),
                        r.a.createElement(He.a, {
                          className: a.progress,
                          radius: 100,
                          progress: e.base_stat,
                          strokeWidth: 18,
                          strokeColor: "#ee1515",
                          trackStrokeWidth: 18,
                        })
                      );
                    })
                  )
                )
              )
            )
          );
        }),
        Ge = a(168),
        qe = a(163),
        _e = a(164),
        Le = a(86),
        Ue = a.n(Le);
      var Je = Object(c.b)(
          function (e) {
            return { currentMove: e.pokemonReducer.currentMove };
          },
          { loadMove: De }
        )(function (e) {
          var t = e.currentMove.flavor_text_entries[2].flavor_text;
          return r.a.createElement(G.a, null, t);
        }),
        ze = Object(_.a)(function (e) {
          return {
            root: { flexGrow: 1 },
            paper: { padding: e.spacing(2), textAlign: "center" },
            container: { display: "flex", flexWrap: "wrap" },
            title: { marginTop: "1rem", marginBottom: "1rem" },
            pokeball: { width: "30px", height: "30px", marginRight: "1rem" },
          };
        });
      var Xe = Object(c.b)(
          function (e) {
            return {
              loadingMove: e.pokemonReducer.loadingMove,
              currentMove: e.pokemonReducer.currentMove,
            };
          },
          { loadMove: De }
        )(function (e) {
          var t = e.move,
            a = e.loadMove,
            o = e.loadingMove,
            c = e.currentMove,
            l = ze(),
            i = t.move.name,
            s = Object(n.useState)(!1),
            m = Object(Y.a)(s, 2),
            u = m[0],
            p = m[1];
          return r.a.createElement(
            Ge.a,
            {
              expanded: u === i,
              onChange: (function (e, t) {
                return function (n, r) {
                  r && a(t.name), p(!!r && e);
                };
              })(i, { name: i }),
              style: { width: "100%" },
            },
            r.a.createElement(
              qe.a,
              {
                expandIcon: r.a.createElement(Ue.a, null),
                "aria-controls": "panel1a-content",
                id: "panel1a-header",
              },
              r.a.createElement(G.a, { className: l.heading }, i)
            ),
            r.a.createElement(
              _e.a,
              null,
              r.a.createElement(
                G.a,
                null,
                o
                  ? r.a.createElement(
                      "div",
                      { style: { display: "flex" } },
                      r.a.createElement("img", {
                        alt: ve.a,
                        className: l.pokeball,
                        src: ve.a,
                      }),
                      r.a.createElement(G.a, null, "Loading...")
                    )
                  : "",
                c.name === i ? r.a.createElement(Je, null) : ""
              )
            )
          );
        }),
        Ye = Object(_.a)(function (e) {
          return {
            root: { flexGrow: 1 },
            paper: { padding: e.spacing(2), textAlign: "center" },
            container: { display: "flex", flexWrap: "wrap" },
            title: { marginTop: "1rem", marginBottom: "1rem" },
          };
        });
      function Ze(e, t) {
        window.addEventListener("scroll", function () {
          return (function (t, a) {
            if (!e) {
              window.pageYOffset > t - 1e3 && a(!0);
            }
          })(a, t);
        });
        var a = document.getElementById("moves").offsetTop;
      }
      var We = Object(c.b)(
          function (e) {
            return {
              moves: (function (e, t) {
                for (
                  var a = e.mainReducer.pokemons, n = Object.values(a), r = 0;
                  r < n.length;
                  r++
                )
                  if (n[r].id === t) return n[r];
              })(e, e.mainReducer.currentPokemon).moves,
              showMoves: e.pokemonReducer.showMoves,
            };
          },
          { loadMoves: we }
        )(function (e) {
          var t = e.moves,
            a = e.showMoves,
            o = e.loadMoves,
            c = Ye();
          return (
            Object(n.useEffect)(function () {
              Ze(a, o);
            }),
            r.a.createElement(
              "div",
              { className: c.root, id: "moves" },
              r.a.createElement(
                ge.a,
                { container: !0, spacing: 3 },
                r.a.createElement(
                  ge.a,
                  { item: !0, xs: 12 },
                  r.a.createElement(
                    ce.a,
                    { className: c.paper },
                    r.a.createElement(
                      G.a,
                      { variant: "h4", className: c.title },
                      "Moves (",
                      t.length,
                      ")"
                    ),
                    r.a.createElement(
                      oe.a,
                      { maxWidth: "md", className: c.container },
                      a
                        ? t.map(function (e) {
                            return r.a.createElement(Xe, { move: e });
                          })
                        : r.a.createElement(
                            G.a,
                            { variant: "h6" },
                            "Scroll down to load moves ..."
                          )
                    )
                  )
                )
              )
            )
          );
        }),
        $e = Object(_.a)(function () {
          return { container: { marginTop: "1.5rem" } };
        });
      var et = Object(c.b)(
          function (e) {
            return { pokemons: e.mainReducer.pokemons };
          },
          {
            setPokemon: function (e) {
              return { type: E.SET_POKEMON, payload: e };
            },
            loadMoves: we,
          }
        )(function (e) {
          var t = e.pokemons,
            a = e.setPokemon,
            n = e.loadMoves,
            o = Object(M.g)();
          a(parseInt(o.pokemonId)), n(!1);
          var c = $e();
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(re, { page: "pokemon" }),
            r.a.createElement(
              oe.a,
              { maxWidth: "lg", className: c.container },
              t.length < 1
                ? r.a.createElement(M.a, { to: "/" })
                : r.a.createElement(
                    r.a.Fragment,
                    null,
                    r.a.createElement(Ie, null),
                    r.a.createElement(Fe, null),
                    r.a.createElement(Ve, null),
                    r.a.createElement(We, null)
                  )
            )
          );
        }),
        tt =
          (a(105), Object(S.a)({ palette: { primary: { main: "#ee1515" } } }));
      Object(o.render)(
        r.a.createElement(
          c.a,
          { store: N },
          r.a.createElement(
            P.a,
            { theme: tt },
            r.a.createElement(
              C.a,
              null,
              r.a.createElement(
                M.d,
                null,
                r.a.createElement(
                  M.b,
                  { path: "/pokemon/:pokemonId" },
                  r.a.createElement(et, null)
                ),
                r.a.createElement(
                  M.b,
                  { path: "/" },
                  r.a.createElement(ye, null)
                )
              )
            )
          )
        ),
        document.getElementById("root")
      );
    },
    28: function (e, t) {
      e.exports =
        "data:image/gif;base64,R0lGODlhMgAyAPMOAAAAAH9/f94SHewXIu0nMe45Q/BKU/FUW8PDw8nJydPT09/f3+jo6O/v7////wAAACH5BAkKAA8AIf8LTkVUU0NBUEUyLjADAQAAACwAAAAAMgAyAAAE/vDJSau9OOvNu/9gKI5kaZ5oqq5s61pALMcvJh94jsu1FOuGoFBHcwFwwmBhWUjmAK3jQcmsMocHqEpKJXi/36thl+Ialt6Bej0IN8fZkxlNGAju+LV3GSST5gVeeIN5bQR8Y1ojR10EhI8CantNfiFcdGyZmoZvlR+MZ2mGYKSibYhxllNokodWVqKTiaqrpIhJQnRglKkeoK+dOkhnwH2KHaC4wTOAuMYgUsJYAA7V1WZ9wr3IzFw71QHh18M73dDd0dQOAQvtAeNP6NAJ9PXM6+0I7g7d9fbzCRQIVHCPHYKDC97NGDiQ3jFkAdtJlIFvgb6E/GJIlKggwUOIjAIXMBg5Uh27ffxIklwg0KMIAPQUtGPQoGYDk+L42Wwwsl1Hly8DyiRZk5+1a9Vq9mTZ8aOvmBJH2rznQCkDnz+dPh04U2qDozaXtgRaAqbQqDR38hSbtUzMkCJVrsTqcIXZs2g3NiS7xSxDvXv5srgrlKG/IjVk+DuMuMcEdFodS55MubLly5gzl4gAACH5BAkKAA8ALAAAAAAyADIAAAT+8MlJq7046827/2AojmRpnmiqruwHvPDbavBh3zY8Uy9u/ECcbAawAX+FZOF4A7SKB6RyqgwenCqolMDtdquGXEprSHIH6PTguwxfT2QzYSCo29Pc5E9Mihe4doF3awR6YVgjRVsEgo0CaHlLfCFacmqXmIRtky5RZWeEXqKga4ZvlFFmkIVUVKCRh6ipooZHQHJekqceimWtezhGvr+xnbZIwDF+x8W8wcJuAA7T02TAwYgdyj1ROdMB4NXCOdsg29xX3wvrAeJN5+YJ8vPKDgHrCOwO2/P08QkKAiqodw+BwQXtYggUKC+bNoDrIsKwh08fjIgRFSRw+DDgAgaMIEFKo6hvX8iQCwJuFAFAnoJ1DBrIbDASXLt9MxuAXKdxJUuAL0PK3Eet2jSZO1Nq5MjLZUSQM+s5QMqAZ0+mTQXChNqg6MykKn2WaAn0acycOsFeHePS48eTKK02XEG2rFmMDMVmIbsQb169LOoCXdhvyI4HMPoVNnyYB7zGkCNLnky5suXLmDNLiAAAIfkECQoADwAsAAAAADIAMgAABP7wyUmrvTjrzbv/YCiOZGmeaKqSQOu2K+cedE27sdXaRu/bsNwDQPP1CsiCsQbIEQ/HpDT5OzRVzyhhy+VSDbdU1oDcDs7ogVcJtp7GZcJAQK+jt8hemFUkF7Z1gXZqBHlgVyNEWgSCjQJneEp7IVlxaZeYhGyTH4pkZoRdoqBqhm6UUGWQhVNToJGHqKmihkY+cV2Spx6erZs2fb6biB2etr8vcGy2u8XAfW0ADtPTY3rPxDLJWTfTAd/VfTfbINs73Q4BC+sB4Uzm5Qny88np6wjsDtvz9PEJCgAV1FOHoOCCdi8CBpSXTca/dRBd2FuA76C+FhAhKkjQ0CHABY8MQoaUNtGiPpEiFwDkKAKAPAXrGDSY2YDkt3b6aDYIuW4jy5b/YIqcqY9atWkzearc2LHYS4ghadZzkJRBT59NnQaMGbWBUZpKV/4s4TIoVJk6d4bFKublR5AoU15luKKs2bMZF47FUlZhXr17Y9gNqpBfECESXPAzfBhxBXNZHUueTLmy5cuYM2vezJlDBAAh+QQJCgAPACwAAAAAMgAyAAAE/vDJSau9OOvNu/9gKI5kaZ5oCazsmnrsIc8y+2Irbew87d4TgIy3KxgLxBkA+BAeisfosXdYvpxQgna7nRpqKazBqB2Yz4Mu8ls9icmEgWBOP2uNOzDpXdDS/3VpBHhfViNCWQSAiwJmd0h6IVhwaJWWgmuRH4hjZYJcoJ5phG2ST2SOg1JSno+FpqeghEQ8cFyQpTBPY6t5NEO8va+bu7SZVS3As0mGHU6/VAAO09Nivr/NHC0xTzXTAeDVwDXb2RvlOd4OAQvtAeJK6CAACfX22+vtCO4O5fb38+opGKgAHzsECBe8a0GQYD1z5xIoaEeRRb4F+xT2W0GRooIElBAjDlzAoGRJaRc19jNpcsFAkCLoSWzHoIHNBijBvet3s0HJdh9hxpQ40aTNftSqTbP50+XHkNoEUix5E58DpgyABoUalSBNqg2S3mz6UqgKgRO/9sSa1enDMGjTsmTpcesNmUQ7NtVqF8iKuGn5BjXLBC/Rhv9+MAny9989xYstoOMaubLly5gza97MubPnz6AXRwAAIfkECQoADwAsAAAAADIAMgAABP7wyUmrvTjrzbv/YCiOZGmeaKqSQOu2K+cedE27sdXaRu/bsNwDQPP1CsiCsQbIEQ/HpDT5OzRVzyhhy+VSDbdU1oDcDs7ogVcJtp7GZcJAQK+jt8hemFUkF7Z1gXZqBHlgVyNEWgSCjQJneEp7IVlxaZeYhGyTH4pkZoRdoqBqhm6UUGWQhVNToJGHqKmihkY+cV2Spx6erZs2fb6biB2etr8vcGy2u8XAfW0ADtPTY3rPxDLJWTfTAd/VfTfbINs73Q4BC+sB4Uzm5Qny88np6wjsDtvz9PEJCgAV1FOHoOCCdi8CBpSXTca/dRBd2FuA76C+FhAhKkjQ0CHABY8MQoaUNtGiPpEiFwDkKAKAPAXrGDSY2YDkt3b6aDYIuW4jy5b/YIqcqY9atWkzearc2LHYS4ghadZzkJRBT59NnQaMGbWBUZpKV/4s4TIoVJk6d4bFKublR5AoU15luKKs2bMZF47FUlZhXr17Y9gNqpBfECESXPAzfBhxBXNZHUueTLmy5cuYM2vezJlDBAAh+QQJCgAPACwAAAAAMgAyAAAE/vDJSau9OOvNu/9gKI5kaZ5oqq7sB7zw22rwYd82PFMvbvxAnGwGsAF/hWTheAO0igekcqoMHpwqqJTA7XarhlxKa0hyB+j04LsMX09kM2EgqNvT3ORPTIoXuHaBd2sEemFYI0VbBIKNAmh5S3whWnJql5iEbZMuUWVnhF6ioGuGb5RRZpCFVFSgkYeoqaKGR0ByXpKnHoplrXs4Rr6/sZ22SMAxfsfFvMHCbgAO09NkwMGIHco9UTnTAeDVwjnbINvcV98L6wHiTefmCfLzyg4B6wjsDtvz9PEJCgIqqHcPgcEF7WIIFCgvmzaA6yLCsIdPH4yIERUkcPgw4AIGjCBBSqOob1/IkAsCbhQBQJ6CdQwayGwwEly7fTMbgFyncSVLgC9DytxHrdo0mTtTauTIy2VEkDPrOUDKgGdPpk0FwoTaoOjMpCp9lmgJ9GnMnDrBXh3j0uPHkyitNlxBtqxZjAzFZiG7EG9evSzqAl3Yb8iOBzD6FTZ8mAe8xpAjS55MubLly5gzS4gAADs=";
    },
    92: function (e, t, a) {
      e.exports = a(106);
    },
  },
  [[92, 1, 2]],
]);
//# sourceMappingURL=main.0722fe86.chunk.js.map
