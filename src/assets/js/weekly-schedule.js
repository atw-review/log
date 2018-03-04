! function(e) {
  e.fn.weekly_schedule = function(t) {
    function s(t, s) {
      for (var r = e(t).attr("class").split(" ")[1], n = e(".day"), d = 0; d < n.length; d++)
        if (!e(n[d]).hasClass(r))
          for (var l = e(n[d]).children(), h = 0; h < l.length; h++) e(l[h]).addClass("disabled");
      s && e(t).on("mouseleave", function() {
        a(), o = !1, i = !1
      })
    }

    function a() {
      for (var t = e(".day"), s = 0; s < t.length; s++)
        for (var a = e(t[s]).children(), r = 0; r < a.length; r++) e(a[r]).removeClass("disabled")
    }
    var r = e.extend({
        days: ["sun", "mon", "tue", "wed", "thu", "fri", "sat"],
        hours: "7:00AM-10:00PM",
        fontFamily: "Montserrat",
        fontColor: "black",
        fontWeight: "100",
        fontSize: "0.8em",
        hoverColor: "#727bad",
        selectionColor: "#9aa7ee",
        headerBackgroundColor: "transparent",
        triggerMethod: "click-and-drag",
        onSelected: function() {},
        onRemoved: function() {}
      }, t || {}),
      n = function(e) {
        var t = [],
          s = [],
          a = e.toUpperCase().split("-"),
          r = parseInt(a[0].split(":")[0]),
          n = parseInt(a[1].split(":")[0]),
          o = a[0].includes("PM") ? r + 12 : r,
          i = a[1].includes("PM") ? n + 12 : n,
          d = o;
        for (d; d <= i; d++) {
          var l = {
              start: d,
              end: d + 1
            },
            h = "";
          h += d > 12 ? (d - 12).toString() + ":00PM" : 12 == d ? d.toString() + ":00PM" : d.toString() + ":00AM", t.push(h), s.push(l)
        }
        return {
          str: t,
          det: s
        }
      }(r.hours);
    r.hoursParsed = n.str, r.hoursDetail = n.det;
    var o = !1,
      i = !1,
      d = this;
    if ("string" == typeof t) switch (t) {
      case "getSelectedHour":
        return function() {
          for (var t = e(".day"), s = {}, a = 0; a < t.length; a++) {
            for (var r = e(t[a]).children(), n = [], o = 0; o < r.length; o++) e(r[o]).hasClass("selected") && n.push(r[o]);
            s[a] = n
          }
          return s
        }();
      case "dump":
        return function() {
          for (var t = e(".day"), s = "", a = 0; a < t.length; a++)
            for (var r = e(t[a]).data("day"), n = e(t[a]).children(), o = !1, i = [], d = 0; d < n.length; d++) {
              var l = e(n[d]),
                h = e(l).hasClass("selected"),
                c = e(l).next();
              e(c).hasClass("selected");
              0 == c.length && h ? (o = !1, i.push(e(l)), s += r + " " + e(i[0]).data("start") + " start, " + r + " " + e(i[i.length - 1]).data("end") + " end, ", i = []) : !o && h ? (o = !0, i.push(e(l))) : o && h ? i.push(e(l)) : o && !h && (o = !1, s += r + " " + e(i[0]).data("start") + " start, " + r + " " + e(i[i.length - 1]).data("end") + " end, ", i = [])
            }
          return s
        }();
      default:
        throw "Weekly schedule method unrecognized!"
    } else {
      var l = r.days,
        h = r.hoursParsed,
        c = r.hoursDetail,
        u = r.triggerMethod;
      e(d).addClass("schedule");
      var p = e("<div></div>", {
          class: "header"
        }),
        g = e("<div></div>", {
          class: "align-block"
        });
      p.append(g);
      for (x = 0; x < l.length; ++x) {
        var f = e("<div></div>", {
            class: "header-item " + l[x] + "-header"
          }),
          v = e("<h3>" + function(e) {
            return e.charAt(0).toUpperCase() + e.slice(1)
          }(l[x]) + "</h3>");
        f.append(v), p.append(f)
      }
      var m = e("<div></div>", {
          class: "days-wrapper"
        }),
        C = e("<div></div>", {
          class: "hour-header"
        });
      m.append(C);
      for (x = 0; x < h.length; x++) {
        var y = e("<div></div>", {
            class: "hour-header-item " + h[x]
          }),
          v = e("<h5>" + h[x] + "</h5>");
        y.append(v), C.append(y)
      }
      for (var x = 0; x < l.length; x++) {
        var k = e("<div></div>", {
          class: "day " + l[x]
        });
        e(k).data("day", l[x]);
        for (var b = 0; b < h.length; b++) {
          var w = e("<div></div>", {
            class: "hour " + h[b]
          });
          e(w).data("start", c[b].start), e(w).data("end", c[b].end), k.append(w)
        }
        m.append(k)
      }
      switch (e(d).append(p), e(d).append(m), e(".schedule").css({
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start"
      }), e(".header").css({
        height: "30px",
        width: "100%",
        background: r.headerBackgroundColor,
        marginBottom: "5px",
        display: "flex",
        flexDirection: "row"
      }), e(".align-block").css({
        width: "100%",
        height: "100%",
        background: r.headerBackgroundColor,
        margin: "3px"
      }), e(".header-item").css({
        width: "100%",
        height: "100%",
        margin: "2px"
      }), e(".header-item h3").css({
        margin: 0,
        textAlign: "center",
        verticalAlign: "middle",
        position: "relative",
        top: "50%",
        color: r.fontColor,
        fontFamily: r.fontFamily,
        fontSize: r.fontSize,
        fontWeight: r.fontWeight,
        transform: "translateY(-50%)",
        userSelect: "none"
      }), e(".hour-header").css({
        display: "flex",
        flexDirection: "column",
        margin: "2px",
        marginRight: "1px",
        background: r.headerBackgroundColor,
        width: "100%"
      }), e(".days-wrapper").css({
        width: "100%",
        height: "100%",
        background: "transparent",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        position: "relative"
      }), e(".hour-header-item").css({
        width: "100%",
        height: "100%",
        border: "none",
        borderColor: "none",
        borderStyle: "none"
      }), e(".hour-header-item h5").css({
        color: r.fontColor,
        margin: "0",
        textAlign: "right",
        verticalAlign: "middle",
        position: "relative",
        fontFamily: r.fontFamily,
        fontSize: r.fontSize,
        fontWeight: r.fontWeight,
        paddingRight: "10%",
        userSelect: "none"
      }), e(".day").css({
        display: "flex",
        flexDirection: "column",
        marginRight: "1px",
        marginBottom: "1px",
        background: "transparent",
        width: "100%"
      }), e(".hour").css({
        background: "#dddddd",
        marginBottom: "1px",
        width: "100%",
        height: "100%",
        userSelect: "none"
      }), e("<style type='text/css' scoped> .hover { background: " + r.hoverColor + " !important;} .selected { background: " + r.selectionColor + " !important; } .disabled { pointer-events: none !important; opacity: 0.3 !important; box-shadow: none !important; }</style>").appendTo(d), e(".schedule").on("contextmenu", function() {
        return !1
      }), u) {
        case "click-and-drag":
          ! function() {
            e(".hour").on("mouseenter", function() {
              o ? i ? e(this).removeClass("selected") : e(this).addClass("selected") : e(this).addClass("hover")
            }).on("mousedown", function() {
              o = !0, s(e(this).parent(), !0), e(this).hasClass("selected") ? (d.trigger("selectionremoved"), e(this).removeClass("selected"), i = !0) : (d.trigger("selectionmade"), e(this).addClass("selected")), e(this).removeClass("hover")
            }).on("mouseup", function() {
              i = !1, o = !1, a()
            }).on("mouseleave", function() {
              o || e(this).removeClass("hover")
            })
          }();
          break;
        case "click-hover-and-click":
          ! function() {
            e(".hour").on("click", function() {
              o ? (i ? e(this).removeClass("selected") : e(this).addClass("selected"), a(), o = !1, i = !1) : (o = !0, s(e(this).parent(), !0), e(this).hasClass("selected") ? (d.trigger("selectionremoved"), e(this).removeClass("selected"), i = !0) : (d.trigger("selectionmade"), e(this).addClass("selected"))), e(this).removeClass("hover")
            }).on("mouseenter", function() {
              o ? i ? e(this).removeClass("selected") : e(this).addClass("selected") : e(this).addClass("hover")
            }).on("mouseleave", function() {
              e(this).removeClass("hover")
            })
          }();
          break;
        case "click-click":
          ! function() {
            var t, r, n, o = !1,
              i = !1;
            e(".hour").on("click", function() {
              if (o || i) {
                if (e(this).parent()[0] == n[0]) {
                  r = e(this);
                  var d = e(n).children(),
                    l = !1,
                    h = e(t).data("start");
                  e(this).data("start") < h && (r = t, t = e(this));
                  for (var c = 0; c < d.length; c++) d[c] == t[0] && (l = !0), l && (o ? e(d[c]).addClass("selected") : i && e(d[c]).removeClass("selected")), d[c] == r[0] && (l = !1), a()
                }
                t = null, n = null, o = !1, i = !1
              } else s(e(this).parent(), !1), e(this).hasClass("selected") ? (o = !1, i = !0, t = e(this), n = e(this).parent()) : (o = !0, removeClass = !1, t = e(this), n = e(this).parent())
            }).on("mouseenter", function() {
              e(this).addClass("hover")
            }).on("mouseleave", function() {
              e(this).removeClass("hover")
            })
          }()
      }
    }
  }
}(jQuery);
