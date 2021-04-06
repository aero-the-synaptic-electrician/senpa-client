/**
 * @author Aero
 * 
 * Decompilation seed: 453832a2
 * Generated at: Apr 05 2021
 * Origin: https://senpa.io
 */

 (this.webpackJsonp = this.webpackJsonp || []).push([
    [0],
    [, function(e, t, a) {
        "use strict";
        var n = {};
        window.settings = n, t.a = n
    }, , , , function(e, t, a) {
        "use strict";
        var n = a(15),
            i = a(11),
            r = a(3),
            s = a(4),
            o = a(7),
            c = a(14),
            l = a(19),
            u = a(33),
            h = a(26),
            d = a(1),
            f = a(16),
            m = a(24),
            v = a(2),
            p = a.n(v),
            g = function() {
                function e() {
                    Object(r.a)(this, e), this.nick = "", this.teamTag = "", this.teamCode = "", this.skin1 = "https://i.imgur.com/vX3zql0.png", this.skin2 = "https://i.imgur.com/vX3zql0.png", this.x = 0, this.y = 0, this.activeTab = 0, this.score = 0, this.mass = 0, this.biggestCellMass = 0, this.isTR = !1, this.isStopped = !1, this.isSpectating = !1
                }
                return Object(s.a)(e, [{
                    key: "setPlayerInfo",
                    value: function(e) {
                        var t = e.nick,
                            a = e.skin1,
                            n = e.skin2;
                        this.nick = t || "", this.skin1 = a || "", this.skin2 = n || ""
                    }
                }, {
                    key: "tagChange",
                    value: function(e) {
                        this.teamTag = e, m.a.tagChange()
                    }
                }, {
                    key: "myCellCount",
                    get: function() {
                        var e, t = 0,
                            a = Object(i.a)(o.a.myCells);
                        try {
                            for (a.s(); !(e = a.n()).done;) t += e.value.size
                        } catch (e) {
                            a.e(e)
                        } finally {
                            a.f()
                        }
                        return t
                    }
                }, {
                    key: "isAlive",
                    get: function() {
                        return this.myCellCount > 0
                    }
                }, {
                    key: "update",
                    value: function() {
                        if (this.isAlive) {
                            var e = o.a.clientsList.get(o.a.myClientID) || new u.a;
                            this.isTR = h.a.trainingMode && e.tag === h.a.trainingModeTag;
                            var t = 0;
                            this.x = 0, this.y = 0, this.mass = 0, this.biggestCellMass = 0;
                            var a, r = Object(i.a)(o.a.myCells);
                            try {
                                for (r.s(); !(a = r.n()).done;) {
                                    var s, l = a.value,
                                        d = Object(i.a)(l);
                                    try {
                                        for (d.s(); !(s = d.n()).done;) {
                                            var f = Object(n.a)(s.value, 2),
                                                m = (f[0], f[1]);
                                            t += m.radius, this.x += m.x, this.y += m.y, this.mass += m.mass, this.biggestCellMass < m.mass && (this.biggestCellMass = m.mass)
                                        }
                                    } catch (e) {
                                        d.e(e)
                                    } finally {
                                        d.f()
                                    }
                                }
                            } catch (e) {
                                r.e(e)
                            } finally {
                                r.f()
                            }
                            this.x /= this.myCellCount, this.y /= this.myCellCount, this.score < this.mass && (this.score = this.mass);
                            var v = Math.pow(Math.min(64 / t, 1), .4) * Math.max(window.innerWidth / 1920, window.innerHeight / 1080);
                            c.a.autoZoom = v
                        }
                    }
                }, {
                    key: "onSpawn",
                    value: function() {
                        this.score = 0, this.mass = 0, this.biggestCellMass = 0, this.isSpectating = !1, c.a.targetZoom = .25, l.a.onSpawn(), d.a.hideHUD || p()(".teamplayers-hud").fadeIn(300)
                    }
                }, {
                    key: "onDeath",
                    value: function() {
                        f.a.clear(!1), l.a.onDeath(), this.isTR = !1, this.activeTab = 0
                    }
                }]), e
            }();
        t.a = new g
    }, function(e, t, a) {
        "use strict";
        var n = a(3),
            i = a(4),
            r = function() {
                function e() {
                    Object(n.a)(this, e), this.left = 0, this.top = 0, this.right = 14e3, this.bottom = 14e3, this.width = 14142, this.height = 14142
                }
                return Object(i.a)(e, [{
                    key: "update",
                    value: function(e, t, a, n) {
                        this.left = e, this.top = t, this.right = a, this.bottom = n, this.width = a - e, this.height = n - t
                    }
                }]), e
            }();
        t.a = new r
    }, function(e, t, a) {
        "use strict";
        var n = a(15),
            i = a(11),
            r = a(3),
            s = a(4),
            o = a(81),
            c = a(5),
            l = a(9),
            u = a(1),
            h = function() {
                function e() {
                    Object(r.a)(this, e), this.clientsList = new Map, this.playersList = new Map, this.myClientID = -1, this.myPlayerIDs = [], this.myCells = [], this.cells = new Map, this.sortedCells = []
                }
                return Object(s.a)(e, [{
                    key: "newCell",
                    value: function(e, t, a, n, i) {
                        if (l.a.isReplay && this.cells.has(e)) return this.cells.get(e);
                        var r = new o.a(e, t, a, n, i);
                        return this.cells.set(e, r), r
                    }
                }, {
                    key: "getCell",
                    value: function(e) {
                        return this.cells.get(e)
                    }
                }, {
                    key: "eatCell",
                    value: function(e, t) {
                        var a = this.cells.get(e),
                            n = this.cells.get(t);
                        if (u.a.eatAnimation) n && (a ? (n.update(a.x, a.y, n.radius), n.removed = !0, this.cells.delete(t), n.isOwn >= 0 && (this.onOwnCellDeath(n), 0 === c.a.myCellCount && c.a.onDeath()), this.cells.set("".concat(t, ":removed"), n)) : this.removeCell(t));
                        else {
                            var i = this.cells.get(t);
                            if (!i) return;
                            i.removed = !0, this.cells.delete(t), i.isOwn >= 0 && (this.onOwnCellDeath(i), 0 === c.a.myCellCount && c.a.onDeath())
                        }
                    }
                }, {
                    key: "removeCell",
                    value: function(e) {
                        var t = this.cells.get(e);
                        t && (t.removed = !0, this.cells.delete(e), t.isOwn >= 0 && (this.onOwnCellDeath(t), 0 === c.a.myCellCount && c.a.onDeath()), this.cells.set("".concat(e, ":removed"), t))
                    }
                }, {
                    key: "onOwnCellDeath",
                    value: function(e) {
                        var t = this.myCells[e.isOwn];
                        if (t.delete(e.id), e.isOwn === c.a.activeTab && 0 === t.size && u.a.autoSwitchCells) {
                            for (var a = (e.isOwn + 1) % this.myPlayerIDs.length, n = 0; !(a === e.isOwn && n !== this.myPlayerIDs.length || this.myCells[a].size > 0);) a = (a + 1) % this.myPlayerIDs.length, n++;
                            c.a.activeTab = a
                        }
                    }
                }, {
                    key: "ownCellCheck",
                    value: function(e) {
                        var t = this.myPlayerIDs.indexOf(e.parentPlayerID);
                        if (!(t < 0)) {
                            e.isOwn = t;
                            var a = c.a.myCellCount;
                            this.myCells[t].set(e.id, e), 0 === a && c.a.onSpawn()
                        }
                    }
                }, {
                    key: "update",
                    value: function() {
                        this.sortedCells = [];
                        var e, t = Object(i.a)(this.playersList.values());
                        try {
                            for (t.s(); !(e = t.n()).done;) {
                                var a = e.value;
                                if (a.parentClientID !== a.parentClient.id) {
                                    var r = this.clientsList.get(a.parentClientID);
                                    void 0 !== r && (a.parentClient = r)
                                }
                            }
                        } catch (e) {
                            t.e(e)
                        } finally {
                            t.f()
                        }
                        var s, o = Object(i.a)(this.cells);
                        try {
                            for (o.s(); !(s = o.n()).done;) {
                                var c = Object(n.a)(s.value, 2),
                                    l = c[0],
                                    u = c[1];
                                if (u.parentPlayerID !== u.parentPlayer.id) {
                                    var h = this.playersList.get(u.parentPlayerID);
                                    void 0 !== h && (u.parentPlayer = h)
                                }
                                u.removed && 1 === u.dt ? this.cells.delete(l) : (u.animate(), this.sortedCells.push(u))
                            }
                        } catch (e) {
                            o.e(e)
                        } finally {
                            o.f()
                        }
                        this.sortedCells.sort(this.sort)
                    }
                }, {
                    key: "sort",
                    value: function(e, t) {
                        return e.radius - t.radius
                    }
                }]), e
            }();
        t.a = new h
    }, , function(e, t, a) {
        "use strict";
        var n = a(23),
            i = a.n(n),
            r = a(29),
            s = a(3),
            o = a(4),
            c = a(12),
            l = a(25),
            u = a(6),
            h = a(7),
            d = new(function() {
                function e() {
                    Object(s.a)(this, e)
                }
                return Object(o.a)(e, [{
                    key: "handle",
                    value: function(e) {
                        var t = e.readUInt32();
                        u.a.update(0, 0, t, t), h.a.myClientID = e.readUInt16(), h.a.myPlayerIDs = [], h.a.myCells = [];
                        for (var a = e.readUInt8(), n = 0; n < a; n++) {
                            var i = e.readUInt16(),
                                r = new Map;
                            h.a.myPlayerIDs.push(i), h.a.myCells.push(r)
                        }
                        c.a.playerInfo()
                    }
                }]), e
            }()),
            f = a(75),
            m = a(74),
            v = a(73),
            p = a(26),
            g = a(33),
            y = a(54),
            k = new(function() {
                function e() {
                    Object(s.a)(this, e)
                }
                return Object(o.a)(e, [{
                    key: "handle",
                    value: function(e) {
                        y.a.reset();
                        for (var t = e.readUInt8(), a = 0; a < t; a++) {
                            var n = e.readUInt16(),
                                i = h.a.clientsList.get(n) || new g.a,
                                r = i.nick || p.a.defaultCellName,
                                s = i.teamColor,
                                o = e.readUInt32();
                            y.a.add(r, o, s)
                        }
                    }
                }]), e
            }()),
            w = a(46),
            b = new(function() {
                function e() {
                    Object(s.a)(this, e)
                }
                return Object(o.a)(e, [{
                    key: "handle",
                    value: function(e) {
                        for (var t = e.readUInt8(), a = 0; a < t; a++) {
                            var n = e.readUInt16(),
                                i = e.readInt32(),
                                r = e.readInt32(),
                                s = e.readUInt16();
                            w.a.updatePlayer(n, i, r, s)
                        }
                    }
                }]), e
            }()),
            E = a(14),
            x = new(function() {
                function e() {
                    Object(s.a)(this, e)
                }
                return Object(o.a)(e, [{
                    key: "handle",
                    value: function(e) {
                        E.a.spectatePoint.x = e.readInt32(), E.a.spectatePoint.y = e.readInt32()
                    }
                }]), e
            }()),
            A = new(function() {
                function e() {
                    Object(s.a)(this, e)
                }
                return Object(o.a)(e, [{
                    key: "handle",
                    value: function() {
                        ve.latency = performance.now() - ve.pingTime | 0
                    }
                }]), e
            }()),
            C = a(24),
            I = new(function() {
                function e() {
                    Object(s.a)(this, e)
                }
                return Object(o.a)(e, [{
                    key: "handle",
                    value: function(e) {
                        var t = e.readUInt16(),
                            a = h.a.clientsList.get(t) || new g.a,
                            n = e.readUInt8(),
                            i = e.readUInt8(),
                            r = e.readString16(),
                            s = a.nick || p.a.defaultCellName,
                            o = a.teamColor;
                        C.a.normal(s, r, n, i, "", o)
                    }
                }]), e
            }()),
            S = new(function() {
                function e() {
                    Object(s.a)(this, e), this.text = ""
                }
                return Object(o.a)(e, [{
                    key: "update",
                    value: function(e) {
                        this.element = document.getElementById("server-message"), console.log(this.element), this.element.innerHTML = e;
                        for (var t = this.element.getElementsByTagName("script"), a = 0; a < t.length; a++) {
                            var n = t[a],
                                i = document.createElement("script");
                            n.src ? i.src = n.src : i.innerText = n.innerText, document.head.append(i), n.parentNode.removeChild(n)
                        }
                    }
                }]), e
            }()),
            N = a(18),
            O = a(30),
            T = new(function() {
                function e() {
                    Object(s.a)(this, e)
                }
                return Object(o.a)(e, [{
                    key: "handle",
                    value: function(e) {
                        var t = e.readUInt8(),
                            a = e.readString16();
                        switch (t) {
                            case 0:
                                S.update(a);
                                break;
                            case 1:
                                C.a.normal("SERVER", a, 1, O.a.teamChat);
                                break;
                            case 2:
                                var n = a.split("|");
                                C.a.normal("SERVER", n[1], 1, O.a.teamChat), N.a.updateNick(n[0])
                        }
                    }
                }]), e
            }()),
            j = a(71),
            U = a(70),
            P = new(function() {
                function e() {
                    Object(s.a)(this, e)
                }
                return Object(o.a)(e, [{
                    key: "handle",
                    value: function(e) {
                        var t = e.readUInt8(),
                            a = e.readUInt8(),
                            n = e.readUInt8(),
                            i = e.readUInt8(),
                            r = a - t;
                        j.a.text = "".concat(a, "/").concat(n, " (play: ").concat(t, ", spec: ").concat(r, ") bot: ").concat(i), U.a.text = [].join("\n")
                    }
                }]), e
            }()),
            B = new(function() {
                function e() {
                    Object(s.a)(this, e)
                }
                return Object(o.a)(e, [{
                    key: "handle",
                    value: function(e) {
                        p.a.leaderboardTitle = e.readString16(), p.a.trainingMode = 1 === e.readUInt8(), p.a.trainingModeTag = e.readString16(), p.a.onChange()
                    }
                }]), e
            }()),
            L = a(10),
            D = new(function() {
                function e() {
                    Object(s.a)(this, e)
                }
                return Object(o.a)(e, [{
                    key: "handle",
                    value: function(e) {
                        var t = e.readUInt32();
                        L.a.addExp(t)
                    }
                }]), e
            }()),
            V = a(38),
            R = a(19),
            M = a(35),
            z = new(function() {
                function e() {
                    Object(s.a)(this, e)
                }
                return Object(o.a)(e, [{
                    key: "handle",
                    value: function(e) {
                        var t, a = e.readUInt8(),
                            n = Array(a + 1);
                        for (n[0] = 0, t = 0; t < a; t++) n[t + 1] = e.readUInt16();
                        var i = e.readUInt8(),
                            r = Array(i + 1);
                        for (r[0] = 0, t = 0; t < i; t++) r[t + 1] = e.readUInt16();
                        var s = e.readUInt8(),
                            o = Array(s + 1);
                        for (o[0] = 0, t = 0; t < s; t++) o[t + 1] = e.readUInt16();
                        var c = e.readUInt8(),
                            l = Array(c + 1);
                        for (l[0] = 0, t = 0; t < c; t++) l[t + 1] = e.readUInt16();
                        var u = e.readUInt8(),
                            h = e.readUInt8(),
                            d = Array(h),
                            f = new Map;
                        for (t = 0; t < h; t++) {
                            var m = e.readString8();
                            d[t] = m;
                            var v = [];
                            f.set(m, v);
                            for (var p = 0; p < u; p++) {
                                var g = e.readUInt16();
                                v[p] = g
                            }
                        }
                        var y = e.readUInt16();
                        V.a.onSepServer = !0, V.a.fetchServers(), M.a.update(f, n, r, l, o, d, y), !R.a.hiding && R.a.isOpen || M.a.show()
                    }
                }]), e
            }()),
            F = a(28),
            H = a(32),
            G = new(function() {
                function e() {
                    Object(s.a)(this, e)
                }
                return Object(o.a)(e, [{
                    key: "authorise",
                    value: function(e) {
                        var t = new F.a(4);
                        t.writeInt32(H.a.$728340984(e)), ve.send(t.buffer)
                    }
                }]), e
            }()),
            q = new(function() {
                function e() {
                    Object(s.a)(this, e)
                }
                return Object(o.a)(e, [{
                    key: "handle",
                    value: function(e) {
                        var t = e.readUInt32();
                        G.authorise && G.authorise(t)
                    }
                }]), e
            }()),
            W = new(function() {
                function e() {
                    Object(s.a)(this, e)
                }
                return Object(o.a)(e, [{
                    key: "handle",
                    value: function(e) {
                        var t = e.readUInt32();
                        u.a.update(0, 0, t, t)
                    }
                }]), e
            }()),
            Q = a(16),
            K = new(function() {
                function e() {
                    Object(s.a)(this, e)
                }
                return Object(o.a)(e, [{
                    key: "handle",
                    value: function(e) {
                        var t = e.readUInt16();
                        ve.customGameLobby = ve.url, ve.onCustomGame = !0, ve.connect(ve.host + ":" + t, M.a.lastPassword, !0), M.a.lastPassword = "", console.log("ConnectTo", ve.host, t)
                    }
                }]), e
            }()),
            Y = (a(36), a(27), a(17)),
            X = new(function() {
                function e() {
                    Object(s.a)(this, e)
                }
                return Object(o.a)(e, [{
                    key: "handle",
                    value: function(e) {
                        var t = e.readUInt8();
                        if (e.readUInt8()) {
                            var a = Y.a.get(h.a.myClientID);
                            Y.a.gameStarted = !0, a && 0 != a.team ? a && 0 !== a.team && R.a.onPlay() : R.a.onSpectate()
                        } else if (t) Y.a.isHost = !0, Y.a.show();
                        else {
                            Y.a.isHost || Y.a.show(!1);
                            for (var n = e.readUInt8(), i = 0; i < n; i++) {
                                var r = e.readUInt32(),
                                    s = e.readUInt8();
                                Y.a.updatePlayer(r, s)
                            }
                        }
                        Y.a.isClanWarsGame = !0
                    }
                }]), e
            }()),
            J = new(function() {
                function e() {
                    Object(s.a)(this, e)
                }
                return Object(o.a)(e, [{
                    key: "handle",
                    value: function(e) {
                        var t = e.readUInt32();
                        R.a.setTimeLeft(t)
                    }
                }]), e
            }()),
            Z = new(function() {
                function e() {
                    Object(s.a)(this, e)
                }
                return Object(o.a)(e, [{
                    key: "handle",
                    value: (t = Object(r.a)(i.a.mark(function e(t) {
                        var a, n, r, s, o;
                        return i.a.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return a = t.readUInt32(), n = t.readUInt32(), Object(H.c)(a), r = new F.a(8), e.next = 6, H.b;
                                case 6:
                                    return s = e.sent.run_0(n), e.next = 9, H.b;
                                case 9:
                                    o = e.sent.run_1(n), r.writeInt32(s), r.writeInt32(o), ve.send(r.buffer);
                                case 13:
                                case "end":
                                    return e.stop()
                            }
                        }, e)
                    })), function(e) {
                        return t.apply(this, arguments)
                    })
                }]), e;
                var t
            }()),
            _ = new(function() {
                function e() {
                    Object(s.a)(this, e)
                }
                return Object(o.a)(e, [{
                    key: "handle",
                    value: function(e) {
                        var t = e.readUInt32(),
                            a = e.readUInt32();
                        Object(H.e)(t, a), c.a.scramblingStart()
                    }
                }]), e
            }()),
            $ = new(function() {
                function e(t, a) {
                    Object(s.a)(this, e), this.promise = null, this.bpPublicKey = t, this.enabled = a
                }
                return Object(o.a)(e, [{
                    key: "waitForBotProtect",
                    value: function() {
                        var e, t = this;
                        return this.enabled ? new Promise((e = Object(r.a)(i.a.mark(function e(a) {
                            return i.a.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        window.BotProtect && window.BotProtect.ready ? window.BotProtect.ready(a) : (console.log("Waiting for botprotect libs."), clearTimeout(t.timeout), t.timeout = setTimeout(Object(r.a)(i.a.mark(function e() {
                                            return i.a.wrap(function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        return e.next = 2, t.waitForBotProtect();
                                                    case 2:
                                                        a();
                                                    case 3:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }, e)
                                        })), 250));
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        })), function(t) {
                            return e.apply(this, arguments)
                        })) : new Promise(function(e) {
                            return e()
                        })
                    }
                }, {
                    key: "auth",
                    value: function() {
                        var e, t = this;
                        return this.enabled ? (this.promise || (this.promise = new Promise((e = Object(r.a)(i.a.mark(function e(a) {
                            return i.a.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, t.waitForBotProtect();
                                    case 2:
                                        return e.t0 = a, e.next = 5, window.BotProtect.exec({
                                            publicKey: t.bpPublicKey,
                                            showVisualOnError: !1,
                                            watermark: !1,
                                            showVisual: !1
                                        }).catch(function(e) {
                                            return console.log(e)
                                        });
                                    case 5:
                                        e.t1 = e.sent, (0, e.t0)(e.t1), t.promise = null;
                                    case 8:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        })), function(t) {
                            return e.apply(this, arguments)
                        }))), this.promise) : new Promise(function(e) {
                            return e("")
                        })
                    }
                }]), e
            }())("FSi6eVh5pLsNv1gd80HqqrIxqaie7QCm", !0),
            ee = new(function() {
                function e() {
                    Object(s.a)(this, e)
                }
                return Object(o.a)(e, [{
                    key: "handle",
                    value: (t = Object(r.a)(i.a.mark(function e(t) {
                        return i.a.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (c.a.handshakeDone = !0, null != L.a.authToken && c.a.auth(), !$.enabled) {
                                        e.next = 14;
                                        break
                                    }
                                    if (console.log("Need token"), e.t0 = c.a, e.t1 = ve.bpAuthToken, e.t1) {
                                        e.next = 10;
                                        break
                                    }
                                    return e.next = 9, $.auth();
                                case 9:
                                    e.t1 = e.sent;
                                case 10:
                                    e.t2 = e.t1, e.t0.auth2.call(e.t0, e.t2), ve.bpAuthToken = null, console.log("Sent and reset token");
                                case 14:
                                case "end":
                                    return e.stop()
                            }
                        }, e)
                    })), function(e) {
                        return t.apply(this, arguments)
                    })
                }]), e;
                var t
            }()),
            te = new(function() {
                function e() {
                    Object(s.a)(this, e), this.hashmap = new Map([
                        [0, d.handle],
                        [1, W.handle],
                        [2, z.handle],
                        [3, K.handle],
                        [4, X.handle],
                        [5, J.handle],
                        [8, ee.handle],
                        [9, _.handle],
                        [10, f.a.handle],
                        [11, m.a.handle],
                        [20, v.a.handle],
                        [21, k.handle],
                        [22, b.handle],
                        [23, x.handle],
                        [30, A.handle],
                        [40, I.handle],
                        [41, T.handle],
                        [42, P.handle],
                        [43, B.handle],
                        [51, D.handle],
                        [254, Z.handle],
                        [255, q.handle]
                    ])
                }
                return Object(o.a)(e, [{
                    key: "parse",
                    value: function(e) {
                        var t = new l.a(e),
                            a = t.readUInt8(),
                            n = this.hashmap.get(a);
                        "function" == typeof n && (ve.isReplay || Q.a.add(a, t.view.buffer), n(t))
                    }
                }]), e
            }()),
            ae = a(5),
            ne = a(20),
            ie = ["kkesH", "JJXzl", "|1|0|", "HNvyg", "4|0|3", "HxzVB", "tion", "{}.co", "pqwIF", "oBHvu", "QpZxf", "YqmHM", "toStr", "BVWmH", "WKXRp", "lengt", "159826gFkPhF", "CxRgq", "type", "uCAoU", "OxXMf", "250492WJBBXN", "FaErj", "HMgwu", "76eCNceX", "hrIZM", "2755KoHmih", "mDnvU", "138622kKvrnQ", "nctio", "QeCVs", "trace", "ycqTY", "conso", "lEgUu", "3|5|2", "tsvYq", "RUpHO", "MSsOL", "eGFWh", "MNSha", "giizV", "logg", "nstru", "ructo", "QuAJM", "now", "VrRPG", "1883UjJFuL", 'is")(', "HvpdO", "345294wuHumA", "proto", "UcCsa", "gVLxM", "ESODT", "excep", "ing", "IOfKx", "warnn", "n() ", "ePjJp", "mCmng", "CJoeE", "oSeyk", "JnWHB", "ZmwIP", "ctor(", "BceBh", "KlDvw", "DWQJw", "retur", "split", "bind", "dIvzg", "127673LmeMrb", "CMxlA", "dKZJJ", "jUmHY", "asHyV", "fVaYM", "toAqB", "FsovQ", "2NYshhL", "__pro", "info", "gRlZN", "MBiyC", "apply", "ctHie", "|5|1|", "WnUnv", "to__", "table", "gnNLr", "IEJjq", "TaeRS", "rn th", "VDqGp", "hIxdd", "ldMHm", "GWBAu", "pSrxz", '"retu', "uDVWy", "rFdei", "rFbYr", "Rrpgj", "LtLHK", "lqYWm", "auVMU", "errorr", "const", "BjWme", "2zTZkTE", "LkyBI", "n (fu", "13hIVjgL"],
            re = function(e, t) {
                return ie[e -= 466]
            };
        ! function(e, t) {
            for (var a = function(e, t, a, n) {
                    return re(n - -218)
                }, n = function(e, t, a, n) {
                    return re(n - -218)
                };;) try {
                if (194438 === -parseInt(a(0, 0, 0, 271)) * parseInt(a(0, 0, 0, "0x14e")) + parseInt(a(0, 0, 0, 357)) + -parseInt(n(0, 0, 0, 332)) * -parseInt(a(0, 0, 0, 330)) + parseInt(n(0, 0, 0, "0x142")) * parseInt(a(0, 0, 0, 302)) + -parseInt(n(0, 0, 0, "0x147")) + -parseInt(("0x107", re(481))) + -parseInt(n(0, 0, 0, 354)) * parseInt(n(0, 0, 0, "0x131"))) break;
                e.push(e.shift())
            } catch (t) {
                e.push(e.shift())
            }
        }(ie);
        var se = function() {
            var e = function(e, t, a, n) {
                    return re(a - -740)
                },
                t = function(e, t, a, n) {
                    return re(a - -740)
                },
                a = function(e, t, a, n) {
                    return re(a - -740)
                },
                n = function(e, t, a, n) {
                    return re(a - -740)
                },
                i = {};
            i[e(0, 0, -233)] = t(0, 0, -181) + t(0, 0, -214) + "4", i[t(0, 0, -255)] = function(e) {
                return e()
            }, i[e(0, 0, -260)] = function(e, t) {
                return e / t
            }, i[t(0, 0, -264)] = function(e, t) {
                return e !== t
            }, i[e(0, 0, -254)] = t(0, 0, -238), i[t(0, 0, -205)] = t(0, 0, -271), i[e(0, 0, -228)] = function(e, t) {
                return e === t
            }, i[e(0, 0, -178)] = n(0, 0, -265), i[n(0, 0, -169)] = a(0, 0, -196), i[n(0, 0, -186)] = function(e, t) {
                return e !== t
            }, i[a(0, 0, -166)] = a(0, 0, -213), i[a(0, 0, -176)] = t(0, 0, -207);
            var r = i,
                s = !0;
            return function(n, i) {
                var o = function(e, t, n, i) {
                        return a(0, 0, e - "0x5c")
                    },
                    c = function(e, t, n, i) {
                        return a(0, 0, e - 92)
                    },
                    l = function(t, a, n, i) {
                        return e(0, 0, t - 92)
                    },
                    u = function(e, a, n, i) {
                        return t(0, 0, e - "0x5c")
                    },
                    h = {};
                h[o(-137)] = function(e) {
                    return r[o(-163)](e)
                }, h[c(-143)] = function(e, t) {
                    return r[c(-168)](e, t)
                }, h[c(-69)] = function(e, t) {
                    return r[l(-172)](e, t)
                }, h[l(-144)] = r[o(-162)], h[c(-166)] = r[u(-113)], h[l(-180)] = function(e, t) {
                    return r[c(-136)](e, t)
                }, h[c(-142)] = r[o(-86)], h[c(-124)] = r[u(-77)];
                var d = h;
                if (r[c(-94)](r[c(-74)], r[l(-84)])) {
                    var f = s ? function() {
                        var e = function(e, t, a, n) {
                                return u(n - 798)
                            },
                            t = function(e, t, a, n) {
                                return u(n - "0x31e")
                            };
                        if ({} [e(0, 0, 0, "0x28b")] = function(t, a) {
                                return d[e(0, 0, 0, 655)](t, a)
                            }, d[e(0, 0, 0, 729)](d[t(0, 0, 0, 654)], d[e(0, 0, 0, "0x278")]) && i && !d[t(0, 0, 0, 618)](d[e(0, 0, 0, 656)], d[t(0, 0, 0, "0x2a2")])) {
                            var a = i[t(0, 0, 0, 644)](n, arguments);
                            return i = null, a
                        }
                    } : function() {};
                    return s = !1, f
                }
            }
        }();

        function oe() {
            return Date
        }

        function ce() {
            var e = {};
            return e[re(532)] = function(e) {
                return e()
            }, e[re(532)](oe)[re(570)]
        }

        function le() {
            var e = function(e, t, a, n) {
                    return re(t - -876)
                },
                t = {};
            return t[e(0, -333)] = function(e) {
                return e()
            }, t[e(0, -333)](ce)
        }

        function ue(e) {
            var t = {};
            return t[re(560)] = function(e, t) {
                return e / t
            }, t[re(560)](e, 5e3)
        }

        function he() {
            var e = function(e, t, a, n) {
                    return re(a - 550)
                },
                t = {};
            t[re(514)] = function(e, t) {
                return e(t)
            }, t[e(0, 0, 1084)] = function(e) {
                return e()
            };
            var a = t;
            return a[re(514)](ue, a[e(0, 0, 1084)](le)())
        }

        function de() {
            var e = {};
            return e[("0x33a", re(551))] = function(e) {
                return e()
            }, e[re(551)](he)
        }
        se(void 0, function() {
            var e = function(e, t, a, n) {
                    return re(a - -890)
                },
                t = function(e, t, a, n) {
                    return re(a - -890)
                },
                a = function(e, t, a, n) {
                    return re(a - -890)
                },
                n = function(e, t, a, n) {
                    return re(a - -890)
                },
                i = {};
            i[e(0, 0, -402)] = function(e) {
                return e()
            }, i[e(0, 0, -419)] = function(e, t) {
                return e(t)
            }, i[t(0, 0, -395)] = function(e, t) {
                return e + t
            }, i[n(0, 0, -397)] = function(e, t) {
                return e + t
            }, i[t(0, 0, -349)] = t(0, 0, -413) + t(0, 0, -368) + e(0, 0, -337) + n(0, 0, -424), i[e(0, 0, -403)] = t(0, 0, -359) + a(0, 0, -323) + a(0, 0, -417) + n(0, 0, -381) + e(0, 0, -387) + t(0, 0, -317) + " )", i[e(0, 0, -308)] = function(e, t) {
                return e !== t
            }, i[n(0, 0, -334)] = t(0, 0, -416), i[t(0, 0, -380)] = t(0, 0, -406), i[t(0, 0, -353)] = n(0, 0, -321), i[t(0, 0, -369)] = a(0, 0, -329), i[a(0, 0, -332)] = function(e, t) {
                return e(t)
            }, i[a(0, 0, -377)] = function(e, t) {
                return e === t
            }, i[a(0, 0, -343)] = t(0, 0, -375), i[a(0, 0, -312)] = n(0, 0, -390), i[e(0, 0, -365)] = function(e, t) {
                return e ^ t
            }, i[n(0, 0, -313)] = function(e) {
                return e()
            }, i[e(0, 0, -423)] = function(e) {
                return e()
            }, i[n(0, 0, -418)] = n(0, 0, -324), i[n(0, 0, -371)] = a(0, 0, -307), i[n(0, 0, -398)] = t(0, 0, -399), i[t(0, 0, -382)] = a(0, 0, -373), i[t(0, 0, -327)] = a(0, 0, -310) + n(0, 0, -360), i[n(0, 0, -393)] = a(0, 0, -391), i[t(0, 0, -352)] = e(0, 0, -335), i[n(0, 0, -325)] = function(e, t) {
                return e < t
            }, i[t(0, 0, -407)] = function(e, t) {
                return e === t
            }, i[e(0, 0, -341)] = n(0, 0, -361), i[a(0, 0, -374)] = e(0, 0, -362) + e(0, 0, -394) + "2";
            for (var r = i, s = r[n(0, 0, -423)](function() {
                    var a = function(e, t, a, i) {
                            return n(0, 0, a - 688)
                        },
                        i = function(e, a, n, i) {
                            return t(0, 0, n - 688)
                        },
                        s = function(e, a, n, i) {
                            return t(0, 0, n - 688)
                        },
                        o = function(t, a, n, i) {
                            return e(0, 0, n - "0x2b0")
                        };
                    if (r[a(0, 0, 380)](r[i(0, 0, "0x162")], r[s(0, 0, "0x134")])) {
                        var c;
                        try {
                            r[a(0, 0, 380)](r[a(0, 0, 335)], r[s(0, 0, "0x13f")]) && (c = r[i(0, 0, "0x164")](Function, r[s(0, 0, 291)](r[o(0, 0, 291)](r[o(0, 0, 339)], r[a(0, 0, 285)]), ");"))())
                        } catch (e) {
                            r[i(0, 0, 311)](r[s(0, 0, "0x159")], r[o(0, 0, "0x178")]) || (c = window)
                        }
                        return c
                    }
                }), o = s[a(0, 0, -333) + "le"] = s[a(0, 0, -333) + "le"] || {}, c = [r[t(0, 0, -418)], r[t(0, 0, -371)], r[n(0, 0, -398)], r[e(0, 0, -382)], r[t(0, 0, -327)], r[a(0, 0, -393)], r[t(0, 0, -352)]], l = 0; r[t(0, 0, -325)](l, c[n(0, 0, -351) + "h"]); l++)
                if (r[e(0, 0, -407)](r[t(0, 0, -341)], r[e(0, 0, -341)]))
                    for (var u = r[a(0, 0, -374)][t(0, 0, -412)]("|"), h = 0;;) {
                        switch (u[h++]) {
                            case "0":
                                var d = c[l];
                                continue;
                            case "1":
                                m[a(0, 0, -354) + t(0, 0, -309)] = f[e(0, 0, -354) + a(0, 0, -309)][a(0, 0, -411)](f);
                                continue;
                            case "2":
                                o[d] = m;
                                continue;
                            case "3":
                                var f = o[d] || m;
                                continue;
                            case "4":
                                var m = se[n(0, 0, -372) + e(0, 0, -322) + "r"][e(0, 0, -314) + e(0, 0, -348)][n(0, 0, -411)](se);
                                continue;
                            case "5":
                                m[t(0, 0, -400) + n(0, 0, -392)] = se[e(0, 0, -411)](se);
                                continue
                        }
                        break
                    }
        })();
        var fe = function() {
                var e;
                return function() {
                    var e = function(e, t, a, n) {
                            return re(a - -631)
                        },
                        t = {};
                    t[re(546)] = function(e, t) {
                        return e ^ t
                    }, t[e(0, 0, -161)] = function(e) {
                        return e()
                    };
                    var a = t;
                    return a[e(0, 0, -85)](a[re(470)](de), 1616752255)
                } [(e = "0x474", re(e - "0x286"))](null, arguments)
            },
            me = function() {
                function e() {
                    Object(s.a)(this, e), this.ws = null, this.host = "", this.url = "", this.pingTime = 0, this.latency = 0, this.maxReconnectWait = 1e4, this.reconnectWait = 1e3, this.serverVersion = 0, this.scrambling = !1, this.passwordProtected = !1, this.isReplay = !1
                }
                return Object(o.a)(e, [{
                    key: "connect",
                    value: (t = Object(r.a)(i.a.mark(function e(t) {
                        var a, n, r, s, o = this,
                            c = arguments;
                        return i.a.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return a = c.length > 1 && void 0 !== c[1] ? c[1] : "", n = c.length > 2 && void 0 !== c[2] && c[2], "" != a && (this.passwordProtected = !0), Object(H.f)(), e.next = 6, H.b;
                                case 6:
                                    return r = e.sent.run_0(3735929054), e.next = 9, H.b;
                                case 9:
                                    s = e.sent.run_1(), this.cleanUp(), window.game_server = t, this.url = t, this.isReplay = !1, $.enabled && $.auth().then(function(e) {
                                        o.bpAuthToken = e
                                    }), ne.a ? (n || (this.url = t = "localhost:4000"), this.ws = new WebSocket("ws://".concat(t, "?key=").concat(r, "&password=").concat(a, "&key2=").concat(fe(), "&bpAuth=").concat(this.bpAuthToken), s)) : this.ws = new WebSocket("wss://".concat(t, "?key=").concat(r, "&password=").concat(a, "&key2=").concat(fe(), "&bpAuth=").concat(this.bpAuthToken), s), this.host = this.url.substr(0, this.url.indexOf(":")), this.ws.binaryType = "arraybuffer", this.ws.onopen = function() {
                                        o.passwordProtected = !1, o.onOpen()
                                    }, this.ws.onmessage = function(e) {
                                        o.onMessage(e)
                                    }, this.ws.onclose = function() {
                                        o.onClose()
                                    }, this.ws.onerror = function() {
                                        o.onError()
                                    };
                                case 22:
                                case "end":
                                    return e.stop()
                            }
                        }, e, this)
                    })), function(e) {
                        return t.apply(this, arguments)
                    })
                }, {
                    key: "cleanUp",
                    value: function() {
                        this.ws && (this.ws.onopen = null, this.ws.onmessage = null, this.ws.onclose = null, this.ws.onerror = null, this.ws.close(), this.ws = null), this.isReplay || Q.a.clear(), this.serverVersion = 0, M.a.hide(), Y.a.reset(), Y.a.hide(), h.a.clientsList.clear(), h.a.playersList.clear(), h.a.myClientID = -1, h.a.myPlayerIDs = [], h.a.myCells = [], h.a.cells.clear(), h.a.sortedCells = [], V.a.onSepServer = !1, ae.a.isSpectating = !1, C.a.clear(), S.update(""), w.a.playerList.clear()
                    }
                }, {
                    key: "onOpen",
                    value: function() {
                        c.a.initialize(), 
                        console.log("[Game server] Connected to ".concat(this.url)),
                        C.a.normal('Axon', 'Currently using a decompiled version of Senpa.io')
                    }
                }, {
                    key: "onMessage",
                    value: function(e) {
                        if (this.scrambling) {
                            var t = new Uint8Array(e.data);
                            Object(H.g)(t, !1);
                            var a = Object(H.d)(e.data.byteLength);
                            te.parse(a.buffer)
                        } else te.parse(e.data)
                    }
                }, {
                    key: "send",
                    value: function(e) {
                        if (this.scrambling) {
                            var t = new Uint8Array(e);
                            Object(H.g)(t, !0);
                            var a = Object(H.d)(e.byteLength);
                            this.ws.send(a)
                        } else this.ws.send(e)
                    }
                }, {
                    key: "onClose",
                    value: function() {
                        var e = this;
                        this.passwordProtected && (this.passwordProtected = !1, C.a.normal("SERVER", "Incorrect password!", 1, O.a.teamChat));
                        var t = this.onCustomGame;
                        this.isReplay || (console.log("[Game server] Connection to ".concat(this.url, " closed. Trying to reconnect...")), setTimeout(function() {
                            e.ws.readyState != WebSocket.OPEN && (e.connect(t ? e.customGameLobby : e.url), e.customGameLobby = null)
                        }, this.reconnectWait), this.reconnectWait = Math.min(2 * this.reconnectWait, this.maxReconnectWait), R.a.show()), V.a.onSepServer = !1, M.a.hide(), Y.a.reset(), Y.a.hide()
                    }
                }, {
                    key: "onError",
                    value: function() {
                        console.log("[Game server] connection to ".concat(this.url, " errored out."))
                    }
                }, {
                    key: "connected",
                    get: function() {
                        return this.ws && this.ws.readyState === this.ws.OPEN
                    }
                }]), e;
                var t
            }(),
            ve = t.a = new me
    }, function(e, t, a) {
        "use strict";
        var n = a(3),
            i = a(4),
            r = a(37),
            s = a.n(r),
            o = new(function() {
                function e() {
                    Object(n.a)(this, e)
                }
                return Object(i.a)(e, [{
                    key: "btoa16",
                    value: function(e) {
                        var t = new Uint16Array(e.length);
                        return Array.prototype.forEach.call(t, function(t, a, n) {
                            n[a] = e.charCodeAt(a)
                        }), btoa(String.fromCharCode.apply(null, new Uint8Array(t.buffer)))
                    }
                }, {
                    key: "atob16",
                    value: function(e) {
                        var t = atob(e),
                            a = new Uint8Array(t.length);
                        return Array.prototype.forEach.call(a, function(e, a, n) {
                            n[a] = t.charCodeAt(a)
                        }), String.fromCharCode.apply(null, new Uint16Array(a.buffer))
                    }
                }]), e
            }()),
            c = a(18),
            l = a(20),
            u = function() {
                function e() {
                    Object(n.a)(this, e), this.accountVersion = 1.1, this.cookieDuration = 365, this.errors = [0, 1, 2], this.authToken = null, this.profile = null, this.onTokenChange = null, this.onExpChange = null, this.profileUpdateListeners = []
                }
                return Object(i.a)(e, [{
                    key: "registerProfileListener",
                    value: function(e) {
                        0 === this.profileUpdateListeners.filter(function(t) {
                            return t === e
                        }).length && this.profileUpdateListeners.push(e)
                    }
                }, {
                    key: "unregisterProfileListener",
                    value: function(e) {
                        this.profileUpdateListeners = this.profileUpdateListeners.filter(function(t) {
                            return t !== e
                        })
                    }
                }, {
                    key: "notifyChanges",
                    value: function() {
                        var e = this;
                        this.profileUpdateListeners.forEach(function(t) {
                            return t(e.profile)
                        })
                    }
                }, {
                    key: "fetchData",
                    value: function() {
                        var e = this;
                        this.loadAuthToken().then(function() {
                            return e.loadAccountProfile()
                        }).then(function(e) {}).catch(function(e) {}).then(function() {
                            e.authToken && e.fetchProfileData(l.b.AuthAccount).then(function() {})
                        })
                    }
                }, {
                    key: "fetchProfileData",
                    value: function(e) {
                        var t = this;
                        return console.log("-> Fetching profile data"), new Promise(function(a, n) {
                            fetch(e, {
                                method: "GET",
                                headers: {
                                    auth: t.authToken
                                }
                            }).then(function(e) {
                                return e.json()
                            }).then(function(e) {
                                e.ver = t.accountVersion, s.a.set("profile", o.btoa16(JSON.stringify(e)), {
                                    expires: t.cookieDuration
                                }), t.profile = e, c.a.updateProfilesFromAccount(), t.notifyChanges(), a(t)
                            }).catch(function(e) {
                                n(e)
                            })
                        })
                    }
                }, {
                    key: "loadAuthToken",
                    value: function() {
                        var e = this;
                        return new Promise(function(t, a) {
                            "undefined" === s.a.get("auth") && (s.a.remove("auth"), s.a.remove("profile"));
                            var n = s.a.get("auth");
                            n ? (e.authToken = n, t(e.authToken)) : a({
                                code: e.errors[0],
                                msg: "Auth token not stored in cookies"
                            })
                        })
                    }
                }, {
                    key: "loadAccountProfile",
                    value: function() {
                        var e = this;
                        return new Promise(function(t, a) {
                            !1 !== s.a.get("profile") ? (e.profile = JSON.parse(o.atob16(s.a.get("profile"))), e.profile.ver && e.profile.ver === e.accountVersion ? (e.notifyChanges(), t(e.profile)) : (e.profile = null, e.notifyChanges(), s.a.remove("profile"), a({
                                code: e.errors[1],
                                msg: "Out of date profile version! A fresh profile needs to be loaded from the API."
                            }))) : a({
                                code: e.errors[2],
                                msg: "Account Profile not stored in cookies"
                            })
                        })
                    }
                }, {
                    key: "setAuthToken",
                    value: function(e) {
                        var t = this.authToken;
                        s.a.set("auth", e, {
                            expires: this.cookieDuration
                        }), this.authToken = e, t !== e && this.onTokenChange && this.onTokenChange()
                    }
                }, {
                    key: "reset",
                    value: function() {
                        this.profile = null, this.setAuthToken(null), s.a.remove("auth"), s.a.remove("profile"), c.a.resetSkins(), c.a.saveProfiles(), this.notifyChanges()
                    }
                }, {
                    key: "addExp",
                    value: function(e) {
                        this.profile && this.authToken && (this.profile.experience += e, this.flushProfile(), this.onExpChange && this.onExpChange(), this.notifyChanges())
                    }
                }, {
                    key: "flushProfile",
                    value: function() {
                        s.a.set("profile", o.btoa16(JSON.stringify(this.profile)), {
                            expires: this.cookieDuration
                        })
                    }
                }, {
                    key: "getId",
                    value: function() {
                        return this.profile && this.profile.id ? this.profile.id : -1
                    }
                }]), e
            }();
        t.a = new u
    }, , function(e, t, a) {
        "use strict";
        var n = a(23),
            i = a.n(n),
            r = a(29),
            s = a(3),
            o = a(4),
            c = a(9),
            l = a(28),
            u = a(5),
            h = a(7),
            d = a(10),
            f = a(30),
            m = a(17),
            v = a(27),
            p = function() {
                function e() {
                    Object(s.a)(this, e), this.handshakeDone = !1
                }
                return Object(o.a)(e, [{
                    key: "initialize",
                    value: (t = Object(r.a)(i.a.mark(function e() {
                        var t = this;
                        return i.a.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    this.handshakeDone = !1, c.a.scrambling = !1, this.handshake1(), d.a.onTokenChange = function() {
                                        t.auth()
                                    };
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }, e, this)
                    })), function() {
                        return t.apply(this, arguments)
                    })
                }, {
                    key: "handshake1",
                    value: function() {
                        var e = new l.a(1);
                        e.writeUInt8(2), c.a.send(e.buffer)
                    }
                }, {
                    key: "scramblingStart",
                    value: function() {
                        var e = new l.a(1);
                        e.writeUInt8(9), c.a.send(e.buffer), c.a.scrambling = !0
                    }
                }, {
                    key: "auth",
                    value: function() {
                        if (c.a.connected && this.handshakeDone) {
                            var e = d.a.authToken + "",
                                t = new l.a(1 + 2 * (e.length + 1));
                            t.writeUInt8(13), t.writeString16(e), c.a.send(t.buffer)
                        }
                    }
                }, {
                    key: "auth2",
                    value: function(e) {
                        if (c.a.connected && e) {
                            var t = new l.a(2 + e.length);
                            t.writeUInt8(150), t.writeString8(e), c.a.send(t.buffer)
                        }
                    }
                }, {
                    key: "playerInfo",
                    value: function() {
                        this.nick(), this.tag(), this.skin(0), this.skin(1)
                    }
                }, {
                    key: "spawn",
                    value: function(e) {
                        if (c.a.connected && this.handshakeDone) {
                            void 0 === e && (e = u.a.activeTab), this.playerInfo();
                            var t = new l.a(2);
                            t.writeUInt8(0), t.writeUInt8(e), c.a.send(t.buffer)
                        }
                    }
                }, {
                    key: "nick",
                    value: function() {
                        if (c.a.connected && this.handshakeDone && !u.a.isAlive) {
                            var e = null != d.a.authToken,
                                t = 1 + 2 * (u.a.nick.length + 1);
                            e && (t += 2 * (d.a.authToken.length + 1));
                            var a = new l.a(t);
                            a.writeUInt8(10), a.writeString16(u.a.nick), e && a.writeString16(d.a.authToken), c.a.send(a.buffer)
                        }
                    }
                }, {
                    key: "tag",
                    value: function() {
                        if (c.a.connected && this.handshakeDone && !u.a.isAlive) {
                            var e = new l.a(1 + 2 * (u.a.teamTag.length + 1));
                            e.writeUInt8(11), e.writeString16(u.a.teamTag), c.a.send(e.buffer)
                        }
                    }
                }, {
                    key: "cursor",
                    value: function(e, t, a) {
                        if (c.a.connected && this.handshakeDone && (u.a.isAlive || u.a.isSpectating)) {
                            void 0 === a && (a = u.a.activeTab);
                            var n = !u.a.isAlive,
                                i = new l.a(n ? 10 : 11);
                            i.writeUInt8(20), i.writeUInt8(n ? v.b.specMode : 0), n || i.writeUInt8(a), i.writeInt32(e), i.writeInt32(t), c.a.send(i.buffer)
                        }
                    }
                }, {
                    key: "customGameInfo",
                    value: function(e, t, a, n, i, r, s, o, u, h) {
                        if (c.a.connected && this.handshakeDone) {
                            var d = new l.a(8 + 2 * (t.length + 1) + 2 * (e.length + 1));
                            d.writeUInt8(2), d.writeUInt8(0 | a), d.writeString16(e), a || (d.writeString16(t), d.writeUInt8(n ? 1 : 0), console.log(n ? 1 : 0), d.writeUInt8(i), d.writeUInt8(r), d.writeUInt8(s), d.writeUInt8(o), d.writeUInt8(u), d.writeUInt8(h)), c.a.send(d.buffer)
                        }
                    }
                }, {
                    key: "clanWarsInfo",
                    value: function(e) {
                        var t = new l.a(3 + 5 * m.a.data.size);
                        t.writeUInt8(4), t.writeUInt8(m.a.data.size), t.writeUInt8(e), m.a.data.forEach(function(e, a) {
                            t.writeUInt32(a), t.writeUInt8(0 | e.team)
                        }), c.a.send(t.buffer)
                    }
                }, {
                    key: "skin",
                    value: function(e) {
                        if (c.a.connected && this.handshakeDone && !u.a.isAlive && (void 0 === e && (e = u.a.activeTab), !(e >= h.a.myPlayerIDs.length))) {
                            var t = 0 === e ? u.a.skin1 : 1 === e ? u.a.skin2 : "",
                                a = null != d.a.authToken,
                                n = 2 + t.length + 1;
                            a && (n += 2 * (d.a.authToken.length + 1));
                            var i = new l.a(n);
                            i.writeUInt8(21), i.writeUInt8(e), i.writeString8(t), a && i.writeString16(d.a.authToken), c.a.send(i.buffer)
                        }
                    }
                }, {
                    key: "split",
                    value: function(e, t) {
                        if (c.a.connected && this.handshakeDone) {
                            void 0 === e && (e = u.a.activeTab);
                            var a = new l.a(3);
                            a.writeUInt8(22), a.writeUInt8(e), a.writeUInt8(t), c.a.send(a.buffer)
                        }
                    }
                }, {
                    key: "feed",
                    value: function(e, t, a) {
                        if (c.a.connected && this.handshakeDone) {
                            void 0 === e && (e = u.a.activeTab);
                            var n = new l.a(t ? 3 : 4);
                            n.writeUInt8(23), n.writeUInt8(e), n.writeUInt8(t ? 0 : 1), t || n.writeUInt8(a), c.a.send(n.buffer)
                        }
                    }
                }, {
                    key: "ping",
                    value: function() {
                        if (c.a.connected && this.handshakeDone) {
                            var e = new l.a(1);
                            e.writeUInt8(30), c.a.send(e.buffer), c.a.pingTime = performance.now()
                        }
                    }
                }, {
                    key: "chat",
                    value: function(e, t) {
                        var a = t.toLowerCase();
                        if (a.includes("astr") || a.includes("astr.io") || a.includes("astrio") || a.includes("a s t r"))
                            t = "Acydwarp is a pedophile";
                        if (c.a.connected && this.handshakeDone) {
                            var n = new l.a(2 + 2 * (t.length + 1));
                            n.writeUInt8(40);
                            n.writeUInt8(e);
                            n.writeUInt8(f.a.teamChat ? 1 : 0);
                            n.writeString16(t);
                            c.a.send(n.buffer)
                        }
                    }
                }]), e;
                var t
            }();
        t.a = new p
    }, function(e, t, a) {
        "use strict";
        var n = a(3),
            i = a(4),
            r = a(12),
            s = a(51),
            o = a(14),
            c = a(5),
            l = a(1),
            u = a(34),
            h = a(7),
            d = a(16),
            f = a(9),
            m = a(24),
            v = a(30),
            p = function() {
                function e() {
                    Object(n.a)(this, e), this.isMacroFeeding = !1, this.specMode = 1, this.lastChatType = "chatroom", window.e = this
                }
                return Object(i.a)(e, [{
                    key: "toggleSpectateMode",
                    value: function() {
                        this.specMode = !(this.specMode - 1) + 1, console.log(this.specMode)
                    }
                }, {
                    key: "replay",
                    value: function() {
                        f.a.isReplay || d.a.save() && m.a.normal("CLIENT", "Replay saved!")
                    }
                }, {
                    key: "feed",
                    value: function() {
                        r.a.feed(c.a.activeTab, !0)
                    }
                }, {
                    key: "macroFeed",
                    value: function(e) {
                        this.isMacroFeeding = e, r.a.feed(c.a.activeTab, !1, e ? 1 : 0)
                    }
                }, {
                    key: "split",
                    value: function() {
                        r.a.split(c.a.activeTab, 1)
                    }
                }, {
                    key: "doubleSplit",
                    value: function() {
                        r.a.split(c.a.activeTab, 2)
                    }
                }, {
                    key: "tripleSplit",
                    value: function() {
                        r.a.split(c.a.activeTab, 3)
                    }
                }, {
                    key: "split16",
                    value: function() {
                        r.a.split(c.a.activeTab, 4)
                    }
                }, {
                    key: "split32",
                    value: function() {
                        r.a.split(c.a.activeTab, 5)
                    }
                }, {
                    key: "split64",
                    value: function() {
                        r.a.split(c.a.activeTab, 6)
                    }
                }, {
                    key: "togglePlayer",
                    value: function() {
                        if (!f.a.isReplay) {
                            var e = this.isMacroFeeding;
                            e && this.macroFeed(!1);
                            var t = h.a.myPlayerIDs.length,
                                a = (c.a.activeTab + 1) % t;
                            c.a.activeTab = a, h.a.myCells[a].size < 1 && r.a.spawn(a), e && this.macroFeed(!0)
                        }
                    }
                }, {
                    key: "sendMouse",
                    value: function() {
                        if (!c.a.isStopped) {
                            var e = o.a.zoom * l.a.graphicsQuality,
                                t = o.a.x + (u.a.mouse.x * l.a.graphicsQuality - (s.a.canvas.width >> 1)) / e,
                                a = o.a.y + (u.a.mouse.y * l.a.graphicsQuality - (s.a.canvas.height >> 1)) / e;
                            r.a.cursor(t, a, c.a.activeTab)
                        }
                    }
                }, {
                    key: "command",
                    value: function(e) {
                        r.a.chat(2, e)
                    }
                }, {
                    key: "zoom",
                    value: function(e) {
                        o.a.targetZoom = e
                    }
                }, {
                    key: "toggleNick",
                    value: function() {
                        var e = c.a.isAlive ? l.a.ownCellNick : l.a.cellNick;
                        l.a.ownCellNick = !e, l.a.cellNick = !e
                    }
                }, {
                    key: "toggleMass",
                    value: function() {
                        var e = c.a.isAlive ? l.a.ownCellMass : l.a.cellMass;
                        l.a.ownCellMass = !e, l.a.cellMass = !e
                    }
                }, {
                    key: "toggleSectors",
                    value: function() {
                        l.a.mapSectors = !l.a.mapSectors
                    }
                }, {
                    key: "toggleHUDs",
                    value: function() {
                        l.a.hideHUD = !l.a.hideHUD
                    }
                }, {
                    key: "toggleSkin",
                    value: function() {
                        l.a.cellSkin = !l.a.cellSkin
                    }
                }, {
                    key: "toggleEnemySkin",
                    value: function() {
                        l.a.enemyCellSkin = !l.a.enemyCellSkin
                    }
                }, {
                    key: "toggleChatMessages",
                    value: function() {
                        "off" === l.a.chatType ? l.a.chatType = this.lastChatType : (this.lastChatType = l.a.chatType, l.a.chatType = "off")
                    }
                }, {
                    key: "toggleChatMode",
                    value: function() {
                        v.a.toggleMode()
                    }
                }, {
                    key: "stop",
                    value: function() {
                        c.a.isStopped ? c.a.isStopped = !1 : (c.a.isStopped = !0, r.a.cursorAim(c.a.x, c.a.y))
                    }
                }]), e
            }();
        t.a = new p
    }, function(e, t, a) {
        "use strict";
        var n = a(3),
            i = a(4),
            r = a(5),
            s = a(1),
            o = a(49),
            c = a(6),
            l = function() {
                function e() {
                    Object(n.a)(this, e), this.x = 7e3, this.y = 7e3, this.zoom = .04, this.targetZoom = .04, this.autoZoom = 1, this.spectatePoint = {
                        x: 0,
                        y: 0
                    }, this.attachEvents()
                }
                return Object(i.a)(e, [{
                    key: "attachEvents",
                    value: function() {
                        var e = this;
                        document.addEventListener("wheel", function(t) {
                            o.a.open || e.onMouseWheel(t)
                        }, {
                            passive: !0
                        })
                    }
                }, {
                    key: "onMouseWheel",
                    value: function(e) {
                        var t = this.targetZoom,
                            a = 14142 / (c.a.right - c.a.left) * .02;
                        e.deltaY > 0 ? t *= s.a.zoomSpeed : t /= s.a.zoomSpeed, t = t > .6 ? .6 : t < a ? a : t, this.targetZoom = t
                    }
                }, {
                    key: "update",
                    value: function() {
                        r.a.isAlive ? (this.x += (r.a.x - this.x) / (31 - s.a.cameraSpeed), this.y += (r.a.y - this.y) / (31 - s.a.cameraSpeed)) : (this.x = (29 * this.x + this.spectatePoint.x) / 30, this.y = (29 * this.y + this.spectatePoint.y) / 30);
                        var e = s.a.autoZoom ? this.targetZoom * this.autoZoom : this.targetZoom;
                        this.zoom += (e - this.zoom) / 8
                    }
                }, {
                    key: "setSpectatePoint",
                    value: function(e, t) {
                        this.spectatePoint.x = e, this.spectatePoint.y = t
                    }
                }]), e
            }();
        t.a = new l
    }, , function(e, t, a) {
        "use strict";
        (function(e) {
            var n = a(52),
                i = a(3),
                r = a(4),
                s = a(2),
                o = a.n(s),
                c = a(93),
                l = a.n(c),
                u = a(9),
                h = a(5),
                d = a(73),
                f = a(7),
                m = a(74),
                v = a(75),
                p = a(65),
                g = a(6),
                y = function() {
                    function t() {
                        Object(i.a)(this, t), this.list = new Map, this.opacity = 1, this.paused = !1, this.tick = 0, this.replayLength = 1e4, this.currentReplay = null, this.packets = {
                            preinfo: null,
                            worldUpdate: [],
                            newWorldUpdates: [],
                            newClientUpdate: [],
                            newPlayerUpdate: []
                        }
                    }
                    return Object(r.a)(t, [{
                        key: "cancel",
                        value: function() {
                            console.log("CANCELINg"), clearInterval(this.interval), this.paused = !1, u.a.isReplay = !1, o()("#huds").fadeIn(300), o()("#replay-controls").fadeOut(300), o()("#packets").val(0), o()("#replay-text").text("Packet 0 / 0"), o()("#packets").attr("min", 1), o()("#packets").attr("max", 0), o()("#packets").attr("step", 1)
                        }
                    }, {
                        key: "save",
                        value: function() {
                            var e = String(Date.now()),
                                t = {
                                    preinfo: this.packets.preinfo,
                                    worldUpdate: this.packets.worldUpdate,
                                    newWorldUpdates: this.packets.newWorldUpdates,
                                    newClientUpdate: this.packets.newClientUpdate[0],
                                    newPlayerUpdate: this.packets.newPlayerUpdate[0]
                                };
                            if (t.worldUpdate && t.newWorldUpdates && t.newClientUpdate && t.newPlayerUpdate) {
                                var a = {
                                    time: Date.now(),
                                    img: this.createImage(),
                                    packets: t
                                };
                                return this.list.set(e, a), this.localForage.setItem(e, this.createExport(a)).then(function() {
                                    p.a.addReplay(e, a)
                                }), !0
                            }
                            return !1
                        }
                    }, {
                        key: "initialize",
                        value: function() {
                            var e = this;
                            this.localForage = l.a.createInstance({
                                name: "replays-new"
                            }), this.canvas = document.createElement("canvas"), this.ctx = this.canvas.getContext("2d"), this.localForage.iterate(function(t, a) {
                                e.list.set(a, e.parse(t))
                            }).then(function() {
                                e.list = new Map(Object(n.a)(e.list.entries()).sort(function(e, t) {
                                    return e.time - t.time
                                })), p.a.addReplays()
                            })
                        }
                    }, {
                        key: "createImage",
                        value: function() {
                            var e = this.canvas,
                                t = this.ctx;
                            return t.clearRect(0, 0, e.width, e.height), e.width = 240, e.height = 135, t.drawImage(document.getElementById("screen"), 0, 0, e.width, e.height), e.toDataURL()
                        }
                    }, {
                        key: "clear",
                        value: function() {
                            var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0] ? null : this.packets.preinfo;
                            this.packets = {
                                preinfo: e,
                                worldUpdate: [],
                                newWorldUpdates: [],
                                newClientUpdate: [],
                                newPlayerUpdate: []
                            }
                        }
                    }, {
                        key: "add",
                        value: function(e, t) {
                            switch (e) {
                                case 0:
                                    this.packets.preinfo || (this.packets.preinfo = t);
                                    break;
                                case 10:
                                    h.a.isAlive && (this.packets.newClientUpdate.push(v.a.create(Array.from(f.a.clientsList.values()))), this.packets.newClientUpdate = this.packets.newClientUpdate.slice(Math.max(this.packets.newClientUpdate.length - this.replayLength / 1e3, 0)));
                                    break;
                                case 11:
                                    h.a.isAlive && (this.packets.newPlayerUpdate.push(m.a.create(Array.from(f.a.playersList.values()))), this.packets.newPlayerUpdate = this.packets.newPlayerUpdate.slice(Math.max(this.packets.newPlayerUpdate.length - this.replayLength / 1e3, 0)));
                                    break;
                                case 20:
                                    if (h.a.isAlive) {
                                        var a = [];
                                        f.a.cells.forEach(function(e, t) {
                                            "number" == typeof t && a.push(e)
                                        });
                                        var n = new ArrayBuffer(t.byteLength + 5);
                                        new Uint8Array(n).set(new Uint8Array(t));
                                        var i = new DataView(n);
                                        i.setUint8(n.byteLength - 5, h.a.activeTab), i.setUint32(n.byteLength - 4, g.a.right, !0), this.packets.worldUpdate.push(n), this.packets.worldUpdate = this.packets.worldUpdate.slice(Math.max(this.packets.worldUpdate.length - this.packetCount, 0)), this.packets.newWorldUpdates.push(d.a.create([], a, [], [])), this.packets.newWorldUpdates = this.packets.newWorldUpdates.slice(Math.max(this.packets.newWorldUpdates.length - this.packetCount, 0))
                                    }
                            }
                        }
                    }, {
                        key: "run",
                        value: function(e) {
                            var t = this;
                            console.log("RUNNING REPLAY 2"), this.currentReplay = e, clearInterval(this.interval), o()("#huds").fadeOut(300), o()("#replay-controls").fadeIn(300), this.tick = 0, u.a.isReplay = !0, console.log("SET", u.a.isReplay), u.a.ws && u.a.ws.close(), u.a.cleanUp(), u.a.onMessage({
                                data: e.packets.preinfo
                            }), u.a.onMessage({
                                data: e.packets.newClientUpdate
                            }), u.a.onMessage({
                                data: e.packets.newPlayerUpdate
                            }), u.a.onMessage({
                                data: e.packets.newWorldUpdates[0]
                            }), o()("#packets").attr("step", 1), o()("#packets").attr("min", 0), o()("#packets").attr("max", e.packets.worldUpdate.length), this.interval = setInterval(function() {
                                t.paused || t.nextTick(e, t.tick)
                            }, 40), console.log("THINGY", u.a.isReplay)
                        }
                    }, {
                        key: "nextTick",
                        value: function(e, t) {
                            var a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                            if (t + 1 > e.packets.worldUpdate.length) return clearInterval(this.interval), this.run(e);
                            a && (f.a.myCells = [new Map, new Map], f.a.cells.forEach(function(e) {
                                e.hidden = !0
                            }), u.a.onMessage({
                                data: e.packets.newWorldUpdates[t]
                            })), u.a.onMessage({
                                data: e.packets.worldUpdate[t++]
                            }), o()("#packets").val(t), o()("#replay-text").text("Packet ".concat(t, " / ").concat(e.packets.worldUpdate.length)), this.tick = t
                        }
                    }, {
                        key: "packetCount",
                        get: function() {
                            return this.replayLength / 1e3 * 25
                        }
                    }, {
                        key: "parse",
                        value: function(t) {
                            if (t.startsWith("REPLAY")) {
                                for (var a = t.split("|"), n = 1, i = a[n++], r = a[n++], s = new e(a[n++], "base64").buffer, o = a[n++], c = [], l = 0; l < o; l++) c.push(new e(a[n++], "base64").buffer);
                                for (var u = a[n++], h = [], d = 0; d < u; d++) h.push(new e(a[n++], "base64").buffer);
                                return {
                                    img: i,
                                    time: r,
                                    packets: {
                                        preinfo: s,
                                        worldUpdate: c,
                                        newWorldUpdates: h,
                                        newClientUpdate: new e(a[n++], "base64").buffer,
                                        newPlayerUpdate: new e(a[n++], "base64").buffer
                                    }
                                }
                            }
                        }
                    }, {
                        key: "createExport",
                        value: function(t) {
                            var a = "REPLAY",
                                n = function() {
                                    a += "|"
                                };
                            return n(), a += t.img, n(), a += t.time, n(), a += e.from(t.packets.preinfo).toString("base64"), n(), a += t.packets.worldUpdate.length, n(), t.packets.worldUpdate.forEach(function(t) {
                                a += e.from(t).toString("base64"), n()
                            }), a += t.packets.newWorldUpdates.length, n(), t.packets.newWorldUpdates.forEach(function(t) {
                                a += e.from(t).toString("base64"), n()
                            }), a += e.from(t.packets.newClientUpdate).toString("base64"), n(), a += e.from(t.packets.newPlayerUpdate).toString("base64")
                        }
                    }]), t
                }();
            t.a = new y
        }).call(this, a(80).Buffer)
    }, function(e, t, a) {
        "use strict";
        var n = a(3),
            i = a(4),
            r = a(7),
            s = a(2),
            o = a.n(s),
            c = a(19),
            l = a(12),
            u = function() {
                function e() {
                    Object(n.a)(this, e), this.isClanWarsGame = !1, this.gameStarted = !1, this.isHost = !1, this.isOpen = !1, this.data = new Map
                }
                return Object(i.a)(e, [{
                    key: "initialize",
                    value: function() {
                        var e = this;
                        document.querySelector("#player-list-container .close-button").addEventListener("click", function() {
                            return e.hide()
                        }), o()("#startGame").click(function() {
                            l.a.clanWarsInfo(1)
                        }), this.isHost = !1
                    }
                }, {
                    key: "show",
                    value: function() {
                        var e = this;
                        o()("#player-list-container").fadeIn(250, function() {
                            e.isOpen = !0
                        }), c.a.isOpen = !0, c.a.hide();
                        var t = o()("#player-list-container .panel.right")[0],
                            a = o()("#player-list-container .panel.left")[0];
                        this.isHost ? (t.style.display = "inline-block", a.style.width = "80%") : (t.style.display = "none", a.style.width = "100%"), this.update()
                    }
                }, {
                    key: "hide",
                    value: function() {
                        var e = this,
                            t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                        o()("#player-list-container").fadeOut(250, function() {
                            e.isOpen = !1
                        }), t && c.a.show()
                    }
                }, {
                    key: "update",
                    value: function() {
                        var e = this,
                            t = "template-player-list" + (this.isHost ? "-host" : ""),
                            a = document.getElementsByName(t)[0].outerHTML,
                            n = o()("#table-player-list");
                        n.empty();
                        var i = 0;
                        r.a.clientsList.forEach(function(t) {
                            if (!t.isBot) {
                                var r = e.htmlFromTemplate(a, {
                                        name: t.nick,
                                        id: ++i
                                    }),
                                    s = o()(r);
                                s.removeClass("template");
                                var c = e.get(t.id);
                                if (c.row = s, e.updatePlayer(t.id, c.team || 0), n.append(s), e.isHost) {
                                    s.addClass("isHost");
                                    var u = s[0].querySelector("select");
                                    u.value = c.team, u.addEventListener("change", function() {
                                        e.updatePlayer(t.id, u.value), l.a.clanWarsInfo(0)
                                    })
                                }
                            }
                        })
                    }
                }, {
                    key: "updatePlayer",
                    value: function(e, t) {
                        var a = this.get(e),
                            n = a.row[0],
                            i = "";
                        1 == t ? (n.style.color = "#ff0000", i = "Red Team") : 2 == t ? (n.style.color = "#0000ff", i = "Blue Team") : (n.style.color = "#ffffff", i = "Spectator"), this.isHost || (a.row[0].children[1].innerText = i), a.team = t
                    }
                }, {
                    key: "htmlFromTemplate",
                    value: function(e, t) {
                        for (var a = e, n = 0, i = Object.keys(t); n < i.length; n++) {
                            var r = i[n],
                                s = t[r];
                            a = a.replace("**".concat(r, "**"), s)
                        }
                        return a
                    }
                }, {
                    key: "get",
                    value: function(e) {
                        return this.data.get(e) || this.data.set(e, {}).get(e)
                    }
                }, {
                    key: "reset",
                    value: function() {
                        this.isClanWarsGame = !1, this.gameStarted = !1, this.isHost = !1, this.data.clear()
                    }
                }]), e
            }();
        t.a = new u
    }, function(e, t, a) {
        "use strict";
        var n = a(3),
            i = a(4),
            r = a(2),
            s = a.n(r),
            o = a(5),
            c = [{
                nick: "Profile 1",
                skin1: "",
                skin2: ""
            }, {
                nick: "Profile 2",
                skin1: "",
                skin2: ""
            }, {
                nick: "Profile 3",
                skin1: "",
                skin2: ""
            }, {
                nick: "Profile 4",
                skin1: "",
                skin2: ""
            }, {
                nick: "Profile 5",
                skin1: "",
                skin2: ""
            }, {
                nick: "Profile 6",
                skin1: "",
                skin2: ""
            }, {
                nick: "Profile 7",
                skin1: "",
                skin2: ""
            }, {
                nick: "Profile 8",
                skin1: "",
                skin2: ""
            }, {
                nick: "Profile 9",
                skin1: "",
                skin2: ""
            }, {
                nick: "Profile 10",
                skin1: "",
                skin2: ""
            }],
            l = a(12),
            u = a(49),
            h = a(10),
            d = a(20),
            f = function() {
                function e() {
                    var t = this;
                    Object(n.a)(this, e), this.onSkinClicked = function(e) {
                        t.selectedSkinUnit = e, u.a.show()
                    }, this.list = [], this.tag = "", this.selected = 0, this.count = 10, this.storeName = "senpaio:profiles", this.selectedSkinUnit = 0, this.systemVersion = 1.01, this.onChange = null, d.a ? this.config = {
                        saveProfile: "http://localhost/account/save-profile",
                        skinBase: "https://auth.senpa.io/u/"
                    } : this.config = {
                        saveProfile: "https://auth.senpa.io/account/save-profile",
                        skinBase: "https://auth.senpa.io/u/"
                    }
                }
                return Object(i.a)(e, [{
                    key: "initialize",
                    value: function() {
                        this.createProfiles(), this.attachEvents(), this.loadProfiles(), o.a.setPlayerInfo(this.list[this.selected]), o.a.teamTag = this.tag
                    }
                }, {
                    key: "getSelectedSkinInputEl",
                    value: function() {
                        return 0 === this.selectedSkinUnit ? s()("#skinURL1") : s()("#skinURL2")
                    }
                }, {
                    key: "getSelectedSkinURL",
                    value: function() {
                        return this.getSelectedSkinInputEl().val()
                    }
                }, {
                    key: "createProfiles",
                    value: function() {
                        for (var e = 0; e < this.count; e++) {
                            var t = c[e] || {},
                                a = t.nick || "Profile ".concat(e + 1),
                                n = t.skin1 || "",
                                i = t.skin2 || "";
                            this.list.push({
                                nick: a,
                                skin1: n,
                                skin2: i
                            })
                        }
                    }
                }, {
                    key: "attachEvents",
                    value: function() {}
                }, {
                    key: "updateNick",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                            t = this.list[this.selected];
                        s()("#name").val(e), t.nick = e, o.a.nick = e, this.saveProfiles()
                    }
                }, {
                    key: "setDOMvalues",
                    value: function() {
                        s()("#name").val(o.a.nick), s()("#skinURL").val(1 === this.tab ? o.a.skin1 : o.a.skin2), console.log("test")
                    }
                }, {
                    key: "saveProfiles",
                    value: function() {
                        for (var e = {
                                selected: this.selected,
                                tag: this.tag,
                                list: [],
                                version: this.systemVersion
                            }, t = 0; t < this.list.length; t++) {
                            var a = this.list[t];
                            e.list[t] = {
                                nick: a.nick,
                                skin1: a.skin1,
                                skin2: a.skin2
                            }
                        }
                        var n = JSON.stringify(e);
                        localStorage.setItem(this.storeName, n)
                    }
                }, {
                    key: "activateTheme",
                    value: function(e) {
                        if (!o.a.isAlive) {
                            var t = this.list[this.selected];
                            0 === this.selectedSkinUnit ? (o.a.skin1 = e, t.skin1 = e) : (o.a.skin2 = e, t.skin2 = e), this.saveProfiles(), l.a.skin(this.selectedSkinUnit), this.saveProfileChange(), this.notifyChanges()
                        }
                    }
                }, {
                    key: "saveProfileChange",
                    value: function() {
                        if (null != h.a.authToken) {
                            var e = this.list[this.selected],
                                t = {
                                    profileId: this.selected,
                                    profile: {
                                        route1: e.skin1.replace(this.config.skinBase, ""),
                                        route2: e.skin2.replace(this.config.skinBase, "")
                                    }
                                };
                            this.saveProfileToAccount(t)
                        }
                    }
                }, {
                    key: "saveProfileToAccount",
                    value: function(e) {
                        fetch(this.config.saveProfile, {
                            method: "POST",
                            headers: {
                                auth: h.a.authToken,
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify(e)
                        }).then(function(e) {
                            return e.json()
                        }).then(function(e) {})
                    }
                }, {
                    key: "updateProfilesFromAccount",
                    value: function() {
                        if (!(null == h.a.profile || null == h.a.profile.skinProfiles || h.a.profile.skinProfiles.length < 1)) {
                            for (var e = 0; e < this.list.length; e++) null != h.a.profile.skinProfiles[e] && (h.a.profile.skinRoutes[h.a.profile.skinProfiles[e].skinId1] && (this.list[e].skin1 = this.config.skinBase + h.a.profile.skinRoutes[h.a.profile.skinProfiles[e].skinId1]), h.a.profile.skinRoutes[h.a.profile.skinProfiles[e].skinId2] && (this.list[e].skin2 = this.config.skinBase + h.a.profile.skinRoutes[h.a.profile.skinProfiles[e].skinId2]));
                            o.a.setPlayerInfo(this.list[this.selected]), this.notifyChanges()
                        }
                    }
                }, {
                    key: "resetSkins",
                    value: function() {
                        for (var e = 0; e < this.list.length; e++) this.list[e].skin1 = "", this.list[e].skin2 = "";
                        this.notifyChanges()
                    }
                }, {
                    key: "loadProfiles",
                    value: function() {
                        var e = {
                            selected: 0,
                            tag: "",
                            code: "",
                            list: []
                        };
                        try {
                            var t = localStorage.getItem(this.storeName),
                                a = JSON.parse(t);
                            if (a) {
                                if (!a.version || a.version !== this.systemVersion) throw "Out of date profile system";
                                e.selected = 0 | a.selected, e.tag = a.tag || "", e.list = a.list
                            }
                        } catch (e) {
                            localStorage.removeItem(this.storeName)
                        }
                        if (this.selected = e.selected, this.tag = e.tag, e.list.length) {
                            e.list = e.list.slice(0, this.count);
                            for (var n = 0; n < e.list.length; n++) {
                                var i = e.list[n],
                                    r = this.list[n];
                                r.nick = i.nick, r.skin1 = i.skin1, r.skin2 = i.skin2
                            }
                        }
                        this.notifyChanges()
                    }
                }, {
                    key: "notifyChanges",
                    value: function(e) {
                        var t = e || {
                            tag: this.tag,
                            nick: o.a.nick,
                            skin1: o.a.skin1,
                            skin2: o.a.skin2
                        };
                        this.onChange && this.onChange(t)
                    }
                }]), e
            }();
        t.a = new f
    }, function(e, t, a) {
        "use strict";
        var n = a(11),
            i = a(3),
            r = a(4),
            s = a(2),
            o = a.n(s),
            c = a(27),
            l = a(12),
            u = a(9),
            h = a(18),
            d = a(38),
            f = a(53),
            m = a(65),
            v = a(17),
            p = a(35),
            g = function() {
                function e() {
                    Object(i.a)(this, e), this.isOpen = !0, this.timePenaltyOver = 0, this.penaltyTimeoutId = -1, this.adRefreshTimer = -1, this.mainMenuDisabled = !1, this.finalScale = 1, this.waitPenalty(c.a.adDelayGameStart, !0)
                }
                return Object(r.a)(e, [{
                    key: "initialize",
                    value: function() {
                        m.a.initialize(), h.a.initialize(), d.a.initialize(), p.a.initialize(), v.a.initialize(), this.setMenuSize(), this.attachEvents()
                    }
                }, {
                    key: "attachEvents",
                    value: function() {
                        var e = this;
                        o()("#play").on("click", function() {
                            e.onPlay()
                        }), o()("#spectate").on("click", function() {
                            e.onSpectate()
                        }), o()("#ad-button-continue").on("click", function() {
                            e.mainMenuDisabled = !1, e.show(), o()("#endGame").fadeOut(500)
                        }), window.addEventListener("resize", function() {
                            e.setMenuSize()
                        }), document.querySelector("#chat-room-inner").addEventListener("wheel", function(e) {
                            e.stopPropagation()
                        }), document.querySelector("#settings-panel").addEventListener("wheel", function(e) {
                            e.stopPropagation()
                        }), document.querySelector("#replays-panel").addEventListener("wheel", function(e) {
                            e.stopPropagation()
                        })
                    }
                }, {
                    key: "setMenuSize",
                    value: function() {
                        var e = document.querySelector("#skin-modal .content"),
                            t = document.getElementsByClassName("main-menu")[0],
                            a = document.getElementById("settings-panel"),
                            i = document.getElementById("new-panel"),
                            r = document.getElementById("replays-panel"),
                            s = document.getElementById("music-panel"),
                            o = document.getElementsByClassName("minimap-hud")[0],
                            c = document.getElementsByClassName("leaderboard-hud")[0],
                            l = document.getElementsByClassName("teamplayers-hud")[0],
                            u = document.getElementById("server-info"),
                            h = document.getElementById("stats-hud"),
                            d = document.getElementById("chat-room"),
                            f = document.querySelectorAll("div.minicolors-panel"),
                            m = t.offsetWidth / window.innerWidth,
                            v = t.offsetHeight / window.innerHeight;
                        if (m > .7 || v > .7) {
                            var p = .7 * window.innerWidth,
                                g = .7 * window.innerHeight,
                                y = p / t.offsetWidth,
                                k = g / t.offsetHeight,
                                w = Math.min(y, k);
                            this.finalScale = w, t.style.transform = "translate(-50%, -50%) scale(".concat(w, ")"), a.style.transform = "translate(-50%, -50%) scale(".concat(w, ")"), i && (i.style.transform = "translate(-50%, -50%) scale(".concat(w, ")")), r.style.transform = "translate(-50%, -50%) scale(".concat(w, ")"), s.style.transform = "translate(-50%, -50%) scale(".concat(w, ")"), o.style.transform = "scale(".concat(w, ")"), c.style.transform = "scale(".concat(w, ")"), l.style.transform = "scale(".concat(w, ")"), u.style.transform = "scale(".concat(w, ")"), h.style.transform = "scale(".concat(w, ")"), d.style.transform = "scale(".concat(w, ")");
                            var b, E = Object(n.a)(f);
                            try {
                                for (E.s(); !(b = E.n()).done;) b.value.style.transform = "scale(".concat(1 / w, ")")
                            } catch (e) {
                                E.e(e)
                            } finally {
                                E.f()
                            }
                            e.style.transform = "scale(".concat(w, ")")
                        } else {
                            this.finalScale = 1, t.style.transform = "translate(-50%, -50%) scale(1)", a.style.transform = "translate(-50%, -50%) scale(1)", i && (i.style.transform = "translate(-50%, -50%) scale(1)"), s.style.transform = "translate(-50%, -50%) scale(1)", r.style.transform = "translate(-50%, -50%) scale(1)", o.style.transform = "scale(1)", c.style.transform = "scale(1)", l.style.transform = "scale(1)", u.style.transform = "scale(1)", h.style.transform = "scale(1)", d.style.transform = "scale(1)";
                            var x, A = Object(n.a)(f);
                            try {
                                for (A.s(); !(x = A.n()).done;) x.value.style.transform = "scale(1)"
                            } catch (e) {
                                A.e(e)
                            } finally {
                                A.f()
                            }
                        }
                    }
                }, {
                    key: "setTimeLeft",
                    value: function(e) {
                        e /= 1e3;
                        var t = Math.floor(e / 3600).toString().padStart(2, "0");
                        e %= 3600;
                        var a = Math.floor(e / 60).toString().padStart(2, "0"),
                            n = Math.floor(e % 60).toString().padStart(2, "0");
                        document.querySelector(".timeleft").innerText = "".concat(t, ":").concat(a, ":").concat(n)
                    }
                }, {
                    key: "onPlay",
                    value: function() {
                        d.a.onSepServer ? p.a.show() : !v.a.isClanWarsGame || v.a.gameStarted ? (v.a.hide(!1), this.hide(), c.c.isAlive || l.a.spawn()) : v.a.show()
                    }
                }, {
                    key: "onSpectate",
                    value: function() {
                        d.a.onSepServer ? p.a.show() : !v.a.isClanWarsGame || v.a.gameStarted ? (v.a.hide(!1), this.hide(), c.c.isAlive || (c.c.isSpectating = !0), o()(".teamplayers-hud").fadeOut(300)) : v.a.show()
                    }
                }, {
                    key: "onSettingsToggle",
                    value: function() {
                        f.a.toggle()
                    }
                }, {
                    key: "hide",
                    value: function() {
                        var e = this;
                        if (this.isOpen) {
                            this.hiding = !0;
                            try {
                                o()("#gameadsbanner")[0].style.display = "none"
                            } catch (e) {
                                console.log(e)
                            }
                            o()("#menu").fadeOut(250, function() {
                                e.isOpen = !1, e.hiding = !1
                            });
                            try {
                                var t = o()(".arc-iframe")[0];
                                t.classList && t.classList.remove("is-visible")
                            } catch (e) {}
                        }
                    }
                }, {
                    key: "show",
                    value: function() {
                        var e = this;
                        if (!this.isOpen) {
                            o()("#menu").fadeIn(250, function() {
                                e.isOpen = !0
                            });
                            try {
                                o()("#gameadsbanner")[0].style.display = ""
                            } catch (e) {}
                            this.waitPenalty(c.a.adDelayMainPanelOpened, !0);
                            try {
                                var t = o()(".arc-iframe")[0];
                                t.classList && t.classList.add("is-visible")
                            } catch (e) {}
                        }
                    }
                }, {
                    key: "toggle",
                    value: function() {
                        console.log("TOGGLING", u.a.isReplay), u.a.isReplay ? window.confirm("Press ok to stop watching the replay") && (c.d.cancel(), u.a.connect(localStorage.getItem("senpaio:server")), this.show()) : (this.refreshAds(), this.isOpen ? this.hide() : this.mainMenuDisabled || this.show())
                    }
                }, {
                    key: "refreshAds",
                    value: function() {
                        Date.now() - this.adRefreshTimer > c.a.adRefreshCooldown ? console.log("Refreshed ads") : console.log("Didnt refresh ads - " + (Date.now() - this.adRefreshTimer))
                    }
                }, {
                    key: "onSpawn",
                    value: function() {}
                }, {
                    key: "onDeath",
                    value: function() {
                        this.refreshAds(), this.waitPenalty(c.a.adDelayDeathPenalty + 0), o()("#endGame").fadeIn(500);
                        try {
                            o()("#gameadsbanner")[0].style.display = ""
                        } catch (e) {}
                    }
                }, {
                    key: "waitPenalty",
                    value: function(e) {
                        var t = this,
                            a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]; - 1 != this.penaltyTimeoutId && clearTimeout(this.penaltyTimeoutId), this.timePenaltyOver = Date.now() + e, o()("#spectate").attr("disabled", !0), o()("#play").attr("disabled", !0), o()("#ad-button-continue").attr("disabled", !0), this.mainMenuDisabled = !0, this.penaltyTimeoutId = setTimeout(function() {
                            o()("#spectate").attr("disabled", !1), o()("#play").attr("disabled", !1), o()("#ad-button-continue").attr("disabled", !1), a && (t.mainMenuDisabled = !1)
                        }, e)
                    }
                }, {
                    key: "isWaiting",
                    value: function() {
                        return Date.now() - this.timePenaltyOver <= 0
                    }
                }]), e
            }();
        t.a = new g
    }, function(e, t, a) {
        "use strict";
        a.d(t, "a", function() {
            return n
        }), a.d(t, "b", function() {
            return r
        }), a.d(t, "d", function() {
            return o
        }), a.d(t, "c", function() {
            return l
        });
        var n = !1,
            i = "https://auth.senpa.io",
            r = {
                AuthFacebook: "".concat(i, "/auth/facebook"),
                AuthDiscord: "".concat(i, "/auth/discord"),
                AuthAccount: "".concat(i, "/account/")
            },
            s = [],
            o = function() {
                s.push({})
            },
            c = [],
            l = function(e) {
                "complete" !== document.readyState ? c.push(e) : e()
            };
        window.addEventListener("load", function() {
            setTimeout(function() {
                c.forEach(function(e) {
                    return e()
                }), c.length = 0
            }, 300)
        }), l(function() {
            for (var e = window.adsbygoogle || [], t = s.length - 1; t >= 0; t--) e.push({});
            window.adsbygoogle = e, s = window.adsbygoogle
        })
    }, function(e, t, a) {
        "use strict";
        var n = a(3),
            i = a(4),
            r = a(1),
            s = function() {
                function e() {
                    Object(n.a)(this, e), this.textures = {
                        food: document.createElement("canvas"),
                        virus: document.createElement("canvas"),
                        border: document.createElement("canvas")
                    }
                }
                return Object(i.a)(e, [{
                    key: "init",
                    value: function() {
                        this.createFoodTexture(), this.createVirusTexture()
                    }
                }, {
                    key: "createFoodTexture",
                    value: function() {
                        var e = this.textures.food,
                            t = e.getContext("2d");
                        t.clearRect(0, 0, e.width, e.height), e.width = e.height = 256;
                        var a = r.a.useFoodGlow;
                        t.fillStyle = r.a.foodColor, a && (t.shadowBlur = r.a.foodGlowDistance, t.shadowColor = r.a.foodGlowColor), t.arc(128, 128, 15, 0, 2 * Math.PI, !1);
                        for (var n = a ? r.a.foodGlowStrength : 1, i = 0; i < n; i++) t.fill()
                    }
                }, {
                    key: "createVirusTexture",
                    value: function() {
                        var e = this.textures.virus,
                            t = e.getContext("2d");
                        t.clearRect(0, 0, e.width, e.height), e.width = e.height = 512;
                        var a = r.a.useVirusGlow;
                        t.beginPath(), t.fillStyle = r.a.virusColor2, t.globalAlpha = .8, t.arc(256, 256, 100, 0, 2 * Math.PI, !1), t.fill(), t.globalAlpha = 1, a && (t.shadowColor = r.a.virusGlowColor, t.shadowBlur = r.a.virusGlowDistance), t.strokeStyle = r.a.virusColor1, t.lineWidth = r.a.virusBorderWidth;
                        for (var n = a ? r.a.virusGlowStrength : 1, i = 0; i < n; i++) t.stroke();
                        t.closePath()
                    }
                }, {
                    key: "createBorderTexture",
                    value: function() {
                        var e = r.a.useBorderGlow,
                            t = r.a.borderWidth,
                            a = r.a.borderGlowDistance,
                            n = this.textures.border;
                        n.getContext("2d").clearRect(0, 0, n.width, n.height), n.width = n.height = 2304;
                        var i = n.getContext("2d");
                        i.translate(n.width / 2, n.height / 2);
                        var s = n.width / 14142;
                        i.shadowBlur = a * s, i.shadowColor = r.a.borderGlowColor, i.lineWidth = t / 2 * s, i.strokeStyle = r.a.borderColor, i.rect(-1024, -1024, 2048, 2048);
                        for (var o = e ? r.a.borderGlowStrength : 1, c = 0; c < o; c++) i.stroke()
                    }
                }]), e
            }();
        t.a = new s
    }, , , function(e, t, a) {
        "use strict";
        var n = a(3),
            i = a(4),
            r = a(2),
            s = a.n(r),
            o = a(1),
            c = a(50),
            l = a(30),
            u = a(5);
        window.jQuery = s.a, a(103);
        var h = function() {
            function e() {
                Object(n.a)(this, e), this.isInitialized = !1, this.rolePrefixes = {
                    ROLE_0: "[banned] ",
                    ROLE_1: "",
                    ROLE_2: "<span style='color: yellow'>[VIP]</span> ",
                    ROLE_3: "<span style='color: orange'>[YT]</span> ",
                    ROLE_90: "<span style='color: lightblue'>[Mod]</span> ",
                    ROLE_100: "<span style='color: red'>[Admin]</span> "
                }
            }
            return Object(i.a)(e, [{
                key: "initialize",
                value: function() {
                    this.isInitialized || (this.isInitialized = !0, this.chatroomInner = document.getElementById("chat-room-inner"), this.chatroom = document.getElementById("chat-room"), this.chatroomAll = document.getElementById("chat-all-room"), this.chatroomTeam = document.getElementById("chat-party-room"), l.a.initialize())
                }
            }, {
                key: "rolePrefixFromType",
                value: function(e) {
                    switch (e) {
                        case 0:
                            return this.rolePrefixes.ROLE_0;
                        case 1:
                            return this.rolePrefixes.ROLE_1;
                        case 2:
                            return this.rolePrefixes.ROLE_2;
                        case 3:
                            return this.rolePrefixes.ROLE_3;
                        case 90:
                            return this.rolePrefixes.ROLE_90;
                        case 100:
                            return this.rolePrefixes.ROLE_100
                    }
                    return ""
                }
            }, {
                key: "normal",
                value: function(e, t, a, n, i, r) {
                    var u = this.rolePrefixFromType(a);
                    if (e = c.a.clean(e), t = c.a.clean(t), i && (i = c.a.clean(i), "" === u && (u = i)), this.isInitialized) {
                        var h = r && a >= 2 ? "style='color: ".concat(r, "'") : "",
                            d = "<div msg><span class='time'>".concat(this.getTime(), "</span><span ").concat(h, " class='nick'>").concat(u).concat(e, " :</span><span class='message'>").concat(t, "</span></div>");
                        (n ? this.chatroomTeam : this.chatroomAll).innerHTML += d, this.chatroomInner.scrollTop = this.chatroomInner.scrollHeight
                    }
                    "pop-up" === o.a.chatType && !!n === l.a.teamChat && s.a.toast({
                        text: "<strong>".concat(e, "</strong> ").concat(t),
                        hideAfter: 7e3,
                        loader: !1,
                        stack: 8,
                        bgColor: "rgba(20, 20, 20, 0.4)",
                        showHideTransition: "slide",
                        position: {
                            left: 5,
                            bottom: 30
                        },
                        allowToastClose: !1
                    })
                }
            }, {
                key: "fixScroll",
                value: function() {
                    this.chatroomInner.scrollTop = this.chatroomInner.scrollHeight
                }
            }, {
                key: "getTime",
                value: function() {
                    var e = new Date,
                        t = e.getHours().toString().padStart(2, "0"),
                        a = e.getMinutes().toString().padStart(2, "0");
                    return "".concat(t, ":").concat(a)
                }
            }, {
                key: "clear",
                value: function() {
                    s()(this.chatroomAll).children("div[msg]").remove(), s()(this.chatroomTeam).children("div[msg]").remove(), this.fixScroll(), this.partyMessage()
                }
            }, {
                key: "partyMessage",
                value: function() {
                    var e = "Connected to party chat for no tag";
                    "" !== u.a.teamTag && (e = e.replace("no tag", "[".concat(u.a.teamTag, "]"))), this.normal("SERVER", e, 1, !0)
                }
            }, {
                key: "modeToast",
                value: function() {
                    if ("pop-up" === o.a.chatType) {
                        var e = "Connected to global chat";
                        l.a.teamChat && (e = "Connected to party chat for no tag"), "" !== u.a.teamTag && (e = e.replace("no tag", "[".concat(u.a.teamTag, "]"))), s.a.toast({
                            text: "<strong>SERVER</strong> ".concat(e),
                            hideAfter: 7e3,
                            loader: !1,
                            stack: 8,
                            bgColor: "rgba(20, 20, 20, 0.4)",
                            showHideTransition: "slide",
                            position: {
                                left: 5,
                                bottom: 30
                            },
                            allowToastClose: !1
                        })
                    }
                }
            }, {
                key: "tagChange",
                value: function() {
                    l.a.teamChat && this.partyMessage()
                }
            }]), e
        }();
        t.a = new h
    }, function(e, t, a) {
        "use strict";
        var n = a(3),
            i = a(4),
            r = function() {
                function e(t) {
                    Object(n.a)(this, e), this.view = new DataView(t), this.index = 0, this.maxIndex = t.byteLength
                }
                return Object(i.a)(e, [{
                    key: "readInt8",
                    value: function() {
                        var e = this.view.getInt8(this.index, !0);
                        return this.index += 1, e
                    }
                }, {
                    key: "readUInt8",
                    value: function() {
                        var e = this.view.getUint8(this.index, !0);
                        return this.index += 1, e
                    }
                }, {
                    key: "readInt16",
                    value: function() {
                        var e = this.view.getInt16(this.index, !0);
                        return this.index += 2, e
                    }
                }, {
                    key: "readUInt16",
                    value: function() {
                        var e = this.view.getUint16(this.index, !0);
                        return this.index += 2, e
                    }
                }, {
                    key: "readInt32",
                    value: function() {
                        var e = this.view.getInt32(this.index, !0);
                        return this.index += 4, e
                    }
                }, {
                    key: "readUInt32",
                    value: function() {
                        var e = this.view.getUint32(this.index, !0);
                        return this.index += 4, e
                    }
                }, {
                    key: "readFloat",
                    value: function() {
                        var e = this.view.getFloat32(this.index, !0);
                        return this.index += 4, e
                    }
                }, {
                    key: "readDouble",
                    value: function() {
                        var e = this.view.getFloat64(this.index, !0);
                        return this.index += 8, e
                    }
                }, {
                    key: "readString8",
                    value: function() {
                        for (var e = this.readUInt8(), t = "", a = 0; a < e && !this.end; a++) {
                            var n = this.readUInt8();
                            t += String.fromCharCode(n)
                        }
                        return t
                    }
                }, {
                    key: "readLongString8",
                    value: function() {
                        for (var e = this.readUInt16(), t = "", a = 0; a < e && !this.end; a++) {
                            var n = this.readUInt8();
                            t += String.fromCharCode(n)
                        }
                        return t
                    }
                }, {
                    key: "readString16",
                    value: function() {
                        for (var e = this.readUInt8(), t = "", a = 0; a < e && !this.end; a++) {
                            var n = this.readUInt16();
                            t += String.fromCharCode(n)
                        }
                        return t
                    }
                }, {
                    key: "readLongString16",
                    value: function() {
                        for (var e = this.readUInt16(), t = "", a = 0; a < e && !this.end; a++) {
                            var n = this.readUInt16();
                            t += String.fromCharCode(n)
                        }
                        return t
                    }
                }, {
                    key: "decodeString",
                    value: function(e) {
                        return decodeURI(e)
                    }
                }, {
                    key: "bytesLeft",
                    get: function() {
                        return this.maxIndex - this.index
                    }
                }, {
                    key: "end",
                    get: function() {
                        return this.index === this.maxIndex
                    }
                }]), e
            }();
        t.a = r
    }, function(e, t, a) {
        "use strict";
        var n = a(3),
            i = a(4),
            r = a(54),
            s = function() {
                function e() {
                    Object(n.a)(this, e), this.leaderboardTitle = "SENPA.IO", this.trainingMode = !0, this.trainingModeTag = "TR", this.defaultCellName = "Unnamed cell", this.adDelayDeathPenalty = 0, this.adDelayGameStart = 0, this.adDelayMainPanelOpened = 0, this.adRefreshCooldown = 0
                }
                return Object(i.a)(e, [{
                    key: "onChange",
                    value: function() {
                        r.a.setTitle(this.leaderboardTitle)
                    }
                }]), e
            }();
        t.a = new s
    }, function(e, t, a) {
        "use strict";
        a(58);
        var n = a(26);
        a.d(t, "a", function() {
            return n.a
        }), a(34);
        var i = a(13);
        a.d(t, "b", function() {
            return i.a
        });
        var r = a(5);
        a.d(t, "c", function() {
            return r.a
        });
        var s = a(16);
        a.d(t, "d", function() {
            return s.a
        })
    }, function(e, t, a) {
        "use strict";
        var n = a(3),
            i = a(4),
            r = function() {
                function e() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 128;
                    Object(n.a)(this, e);
                    var a = new ArrayBuffer(t);
                    this.view = new DataView(a), this.index = 0, this.maxIndex = t
                }
                return Object(i.a)(e, [{
                    key: "writeInt8",
                    value: function(e) {
                        this.view.setInt8(this.index, e, !0), this.index += 1
                    }
                }, {
                    key: "writeUInt8",
                    value: function(e) {
                        this.view.setUint8(this.index, e, !0), this.index += 1
                    }
                }, {
                    key: "writeInt16",
                    value: function(e) {
                        this.view.setInt16(this.index, e, !0), this.index += 2
                    }
                }, {
                    key: "writeUInt16",
                    value: function(e) {
                        this.view.setUint16(this.index, e, !0), this.index += 2
                    }
                }, {
                    key: "writeInt32",
                    value: function(e) {
                        this.view.setInt32(this.index, e, !0), this.index += 4
                    }
                }, {
                    key: "writeUInt32",
                    value: function(e) {
                        this.view.setUint32(this.index, e, !0), this.index += 4
                    }
                }, {
                    key: "writeFloat",
                    value: function(e) {
                        this.view.setFloat32(this.index, e, !0), this.index += 4
                    }
                }, {
                    key: "writeDouble",
                    value: function(e) {
                        this.view.setFloat64(this.index, e, !0), this.index += 8
                    }
                }, {
                    key: "writeString8",
                    value: function(e) {
                        this.writeUInt8(e.length);
                        for (var t = 0; t < e.length; t++) {
                            var a = e.charCodeAt(t);
                            this.writeUInt8(a)
                        }
                    }
                }, {
                    key: "writeLongString8",
                    value: function(e) {
                        this.writeUInt16(e.length);
                        for (var t = 0; t < e.length; t++) {
                            var a = e.charCodeAt(t);
                            this.writeUInt8(a)
                        }
                    }
                }, {
                    key: "writeString16",
                    value: function(e) {
                        this.writeUInt8(e.length);
                        for (var t = 0; t < e.length; t++) {
                            var a = e.charCodeAt(t);
                            this.writeUInt16(a)
                        }
                    }
                }, {
                    key: "writeLongString16",
                    value: function(e) {
                        this.writeUInt16(e.length);
                        for (var t = 0; t < e.length; t++) {
                            var a = e.charCodeAt(t);
                            this.writeUInt16(a)
                        }
                    }
                }, {
                    key: "encodeString",
                    value: function(e) {
                        return encodeURI(e)
                    }
                }, {
                    key: "reset",
                    value: function() {
                        this.index = 0
                    }
                }, {
                    key: "buffer",
                    get: function() {
                        var e = this.view.buffer;
                        return this.index === this.maxIndex ? e : e.slice(0, this.index)
                    }
                }]), e
            }();
        t.a = r
    }, , function(e, t, a) {
        "use strict";
        var n = a(3),
            i = a(4),
            r = a(2),
            s = a.n(r),
            o = a(12),
            c = a(10),
            l = a(24),
            u = function() {
                function e() {
                    Object(n.a)(this, e), this.teamChat = !1, this.isOpen = !1, this.isFocused = !1
                }
                return Object(i.a)(e, [{
                    key: "initialize",
                    value: function() {
                        this.input = s()("#chat-box"), this.teamButton = s()("#chat-control button:contains('Party')"), this.allButton = s()("#chat-control button:contains('All')"), this.attachEvents()
                    }
                }, {
                    key: "attachEvents",
                    value: function() {
                        var e = this;
                        this.input.focus(function() {
                            e.isFocused = !0
                        }), this.input.blur(function() {
                            e.isFocused = !1
                        }), this.allButton.click(function() {
                            e.all()
                        }), this.teamButton.click(function() {
                            e.team()
                        }), this.teamChat && this.team()
                    }
                }, {
                    key: "toggleMode",
                    value: function() {
                        this.teamChat ? this.all() : this.team(), l.a && l.a.fixScroll(), l.a.modeToast()
                    }
                }, {
                    key: "team",
                    value: function() {
                        this.teamChat = !0, this.teamButton.addClass("active"), this.allButton.removeClass("active"), s()("#chat-all-room").hide(), s()("#chat-party-room").show(), l.a && l.a.fixScroll()
                    }
                }, {
                    key: "all",
                    value: function() {
                        this.teamChat = !1, this.teamButton.removeClass("active"), this.allButton.addClass("active"), s()("#chat-all-room").show(), s()("#chat-party-room").hide(), l.a && l.a.fixScroll()
                    }
                }, {
                    key: "toggle",
                    value: function() {
                        if (this.isOpen)
                            if (this.isFocused) {
                                var e = this.input.val();
                                e.length && ("/" === e[0] ? this.handleSlashCommand(e) : o.a.chat(1, e), this.input.val("")), this.input.fadeOut(250), this.input.blur(), this.isOpen = !1
                            } else this.input.focus();
                        else this.input.fadeIn(250), this.input.focus(), this.isOpen = !0
                    }
                }, {
                    key: "handleSlashCommand",
                    value: function(e) {
                        if ('/axon' === e)
                            l.a.normal('Axon', 'Currently running a decompiled version of Senpa.io');
                        else if ("/id" === e) {
                            var t = c.a.getId();
                            t > 0 ? l.a.normal("PROFILE", "Your id is ".concat(t)) : l.a.normal("PROFILE", "You are not logged in.")
                        } else o.a.chat(3, e)
                    }
                }]), e
            }();
        t.a = new u
    }, function(e, t, a) {
        "use strict";
        a.d(t, "a", function() {
            return d
        });
        var n = a(23),
            i = a.n(n),
            r = a(29),
            s = a(52),
            o = a(3),
            c = a(4),
            l = a(76),
            u = "8df0d68fcc1920c92fc389b89e7ce20f",
            h = 2 * Math.PI,
            d = function() {
                function e() {
                    Object(o.a)(this, e)
                }
                return Object(c.a)(e, null, [{
                    key: "initialize",
                    value: function() {
                        this.lines = [], this.lineAmount = 200, this.radius = [100, 360, 400], this.animated = Object(s.a)(this.radius);
                        var e = new(window.AudioContext || window.webkitAudioContext);
                        this.analyser = e.createAnalyser(), e.createMediaElementSource(l.a.audio).connect(this.analyser), this.analyser.connect(e.destination), this.analyser.fftSize = 1024, this.bufferArray = new Uint8Array(this.analyser.frequencyBinCount), this.initialized = !0
                    }
                }, {
                    key: "uppdate",
                    value: function() {
                        if (this.initialized) {
                            this.lines = [], this.analyser.getByteFrequencyData(this.bufferArray);
                            var e = this.bufferArray.map(function(e) {
                                return 100 * e / 256
                            }).reduce(function(e, t) {
                                return e + t
                            }, 0) / (this.analyser.fftSize / 8);
                            this.radius[0] = e, this.radius[1] = e + 260, this.radius[2] = e + 300, this.animated[0] = this.lerp(this.animated[0], this.radius[0], .15), this.animated[1] = this.lerp(this.animated[1], this.radius[1], .15), this.animated[2] = this.lerp(this.animated[2], this.radius[2], .15);
                            for (var t = Math.min(this.lineAmount, this.bufferArray.length), a = 0; a < t; a++) {
                                var n = h / t,
                                    i = this.radius[2],
                                    r = n * a,
                                    s = Math.cos(r),
                                    o = Math.sin(r),
                                    c = this.bufferArray[a] * (.7 * i / 250),
                                    l = s * i,
                                    u = o * i,
                                    d = s * (i + c),
                                    f = o * (i + c);
                                this.lines.push({
                                    x: l,
                                    y: u,
                                    xEnd: d,
                                    yEnd: f
                                })
                            }
                        }
                    }
                }, {
                    key: "lerp",
                    value: function(e, t, a) {
                        return (1 - a) * e + a * t
                    }
                }, {
                    key: "getTrack",
                    value: (a = Object(r.a)(i.a.mark(function e(t) {
                        var a, n, r, s, o;
                        return i.a.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (a = null, -1 === t.search("soundcloud.com") || -1 !== t.search("api.soundcloud.com")) {
                                        e.next = 13;
                                        break
                                    }
                                    if (3 !== (n = t.replace(/http:\/\/|https:\/\//gi, "").split("/")).length) {
                                        e.next = 13;
                                        break
                                    }
                                    return r = "http://" + n[0] + "/" + n[1], s = n[2], e.next = 8, fetch("https://api.soundcloud.com/resolve.json?url=".concat(r, "&client_id=").concat(u)).then(function(e) {
                                        return e.json()
                                    }).then(function(e) {
                                        return e.id
                                    });
                                case 8:
                                    return o = e.sent, e.next = 11, fetch("https://api.soundcloud.com/users/".concat(o, "/tracks.json?client_id=").concat(u)).then(function(e) {
                                        return e.json()
                                    });
                                case 11:
                                    e.sent.forEach(function(e) {
                                        e.permalink === s && (a = {
                                            title: e.title,
                                            url: "".concat(e.stream_url, "?client_id=").concat(u),
                                            artwork: e.artwork_url
                                        })
                                    });
                                case 13:
                                    return e.abrupt("return", a);
                                case 14:
                                case "end":
                                    return e.stop()
                            }
                        }, e)
                    })), function(e) {
                        return a.apply(this, arguments)
                    })
                }, {
                    key: "getPlaylist",
                    value: (t = Object(r.a)(i.a.mark(function e(t) {
                        var a, n, r, s, o;
                        return i.a.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (a = [], n = t.replace(/http:\/\/|https:\/\//gi, "").split("/"), -1 === t.indexOf("soundcloud.com") || t.includes("api.")) {
                                        e.next = 10;
                                        break
                                    }
                                    return r = "http://" + n[0] + "/" + n[1], s = n[3], e.next = 7, fetch("https://api.soundcloud.com/resolve.json?url=".concat(r, "&client_id=").concat(u)).then(function(e) {
                                        return e.json()
                                    }).then(function(e) {
                                        return e.id
                                    });
                                case 7:
                                    return o = e.sent, e.next = 10, fetch("https://api.soundcloud.com/users/".concat(o, "/playlists.json?client_id=").concat(u)).then(function(e) {
                                        return e.json()
                                    }).then(function(e) {
                                        e.forEach(function(e) {
                                            e.permalink === s && e.tracks.forEach(function(e) {
                                                a.push({
                                                    title: e.title,
                                                    url: "".concat(e.stream_url, "?client_id=").concat(u),
                                                    artwork: e.artwork_url
                                                })
                                            })
                                        })
                                    });
                                case 10:
                                    return e.abrupt("return", a.reverse());
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }, e)
                    })), function(e) {
                        return t.apply(this, arguments)
                    })
                }]), e;
                var t, a
            }()
    }, function(e, t, a) {
        "use strict";
        (function(e) {
            a.d(t, "a", function() {
                return r
            }), a.d(t, "b", function() {
                return z
            }), a.d(t, "g", function() {
                return L
            }), a.d(t, "f", function() {
                return D
            }), a.d(t, "d", function() {
                return V
            }), a.d(t, "e", function() {
                return R
            }), a.d(t, "c", function() {
                return M
            });
            var n, i, r, s, o, c, l, u, h, d, f, m, v, p, g = a(23),
                y = a.n(g),
                k = a(29),
                w = a(22);
            for (s = Date.now, o = Math.ceil, c = new ArrayBuffer(8), l = new Int32Array(c), new Float32Array(c), u = new Float64Array(c), h = 34; h < 86;) switch (h) {
                case 19:
                    h = 0 <= m ? 8 : 86;
                    break;
                case 8:
                    h = 33, f[48 + m] = 52 + m, f[65 + m] = m, f[97 + m] = 26 + m;
                    break;
                case 34:
                    h = 19, d = new ArrayBuffer(65536), f = new Uint8Array(123), m = 25;
                    break;
                case 33:
                    h = 19, --m
            }

            function b(e, t, a) {
                for (n = 0, i = t, s = t + (3 * (r = a.length) >> 2), "=" == a[r - 2] && --s, o = 44; o < 113;) switch (o) {
                    case 43:
                        o = 54, n += 4, i += 3;
                        break;
                    case 46:
                        o = 43, t = f[a.charCodeAt(n + 1)], c = f[a.charCodeAt(n + 2)], 
                        e[i] = f[a.charCodeAt(n)] << 2 | t >> 4, i + 1 < s && (e[i + 1] = t << 4 | c >> 2), i + 2 < s && (e[i + 2] = c << 6 | f[a.charCodeAt(n + 3)]);
                        break;
                    case 54:
                        o = n < r ? 46 : 113;
                        break;
                    case 44:
                        o = 54, "=" == a[r - 1] && --s
                }
                var n, i, r, s, o, c
            }

            function E(e) {
                return l[e]
            }
            f[43] = 62, f[47] = 63, b(v = new Uint8Array(d), 1024, "HgAAAAEAAAABAAAAHgAAAH4AbABpAGIALwByAHQALwBwAHUAcgBlAC4AdABz"), b(v, 1072, "HgAAAAEAAAABAAAAHgAAAH4AbABpAGIALwByAHQALwB0AGwAcwBmAC4AdABz"), b(v, 1120, "KAAAAAEAAAABAAAAKAAAAGEAbABsAG8AYwBhAHQAaQBvAG4AIAB0AG8AbwAgAGwAYQByAGcAZQ=="), b(v, 1184, "QAAAAAEAAAAAAAAAQAAAAAEAAAADAAAADz4AAAkAAAAHDQAAUw0AAJgMAABHNgAA3tANAKqwAAAyIwEADgAAAA0AAAAAAAAAAgAAAAw="), b(v, 1264, "EAAAAAEAAAADAAAAEAAAALAEAACwBAAAQAAAABA="), b(v, 1296, "QAAAAAEAAAAAAAAAQAAAAJkcAACADQAA3gAAAAQAAADdfxQACQAAAGUEAACJEAAACgAAAAEAAAAFAAAArVsCAAgAAACENAAA8QUAAJgM"), b(v, 1376, "EAAAAAEAAAADAAAAEAAAACAFAAAgBQAAQAAAABA="), b(v, 1408, "JAAAAAEAAAABAAAAJAAAAEkAbgBkAGUAeAAgAG8AdQB0ACAAbwBmACAAcgBhAG4AZwBl"), b(v, 1472, "GgAAAAEAAAABAAAAGgAAAH4AbABpAGIALwBhAHIAcgBhAHkALgB0AHM="), b(v, 1520, "HAAAAAEAAAABAAAAHAAAAEkAbgB2AGEAbABpAGQAIABsAGUAbgBnAHQAaA=="), b(v, 1568, "BAAAACAAAAAAAAAAIAAAAAAAAAAgAAAAAAAAACIJ"), (p = function(e, t, a) {
                var n, i, r, s, o, c, l, h, d, f, m, v, p, g, y, k, b, x, A;

                function C(e, t, a) {
                    var n, i;
                    i = 0, (!(t >>> 0 <= a >>> 0) || 15 & t | 0 || 15 & a | 0) && g(), (n = o[(e + 1568 | 0) >> 2]) ? (t >>> 0 < (n + 16 | 0) >>> 0 && g(), (t - 16 | 0) == (0 | n) && (i = o[n >> 2], t = t - 16 | 0)) : t >>> 0 < (e + 1572 | 0) >>> 0 && g(), 48 > (a = a - t | 0) >>> 0 || (o[t >> 2] = 2 & i | 0 | a - 32 | 1, o[(t + 16 | 0) >> 2] = 0, o[(t + 20 | 0) >> 2] = 0, o[(a = (t + a | 0) - 16 | 0) >> 2] = 2, o[(e + 1568 | 0) >> 2] = a, U(e, t))
                }

                function I(e, t, a) {
                    for (u = 29; u < 114;) switch (u) {
                        case 4:
                            for (u = 114, 0 > (0 | t) && g(), h = i = t + 1 | 0, d = o[(e + 8 | 0) >> 2], f = 49; f < 62;) switch (f) {
                                case 49:
                                    f = h >>> 0 > (d >>> 2 | 0) >>> 0 ? 1 : 62;
                                    break;
                                case 1:
                                    f = 62, 268435452 < h >>> 0 && g(), m = o[e >> 2], v = O(), p = m - 16 | 0, (!m || 15 & m | 0 || 1 & o[p >> 2] | 0 || -268435456 & o[(p + 4 | 0) >> 2] | 0) && g(), y = p;
                                    e: for (1073741808 <= (k = p = h << 2 | 0) >>> 0 && g(), h = 16 < (h = -16 & (k + 15 | 0) | 0) >>> 0 ? h : 16, w = o[y >> 2], b = 83; b < 102;) switch (b) {
                                        case 83:
                                            b = h >>> 0 <= (-4 & w | 0) >>> 0 ? 50 : 41;
                                            break;
                                        case 50:
                                            b = 102, j(v, y, h), o[(y + 12 | 0) >> 2] = k, v = y;
                                            break;
                                        case 41:
                                            for (b = 102, E = (y + 16 | 0) + (-4 & o[y >> 2] | 0) | 0, x = o[E >> 2], A = 84; A < 141;) switch (A) {
                                                case 20:
                                                    A = 141, N(v, E), o[y >> 2] = x | 3 & w | 0, o[(y + 12 | 0) >> 2] = k, j(v, y, h), v = y;
                                                    break e;
                                                case 84:
                                                    A = 1 & x | 0 && (x = (16 + (-4 & w | 0) | 0) + (-4 & x | 0) | 0) >>> 0 >= h >>> 0 ? 20 : 141
                                            }
                                            h = S(v, k, o[(y + 8 | 0) >> 2]), o[(h + 4 | 0) >> 2] = o[(y + 4 | 0) >> 2], x = h + 16 | 0, w = y + 16 | 0;
                                            t: for (var n = 29; n < 148;) switch (n) {
                                                case 29:
                                                    n = (0 | x) != (0 | w) ? 9 : 148;
                                                    break;
                                                case 9:
                                                    for (n = 148, C = 83; C < 152;) switch (C) {
                                                        case 58:
                                                            C = 152, I = 51;
                                                            a: for (; I < 155;) switch (I) {
                                                                case 51:
                                                                    for (I = 51, T = 15; T < 83;) switch (T) {
                                                                        case 20:
                                                                            T = 83, E = x, x = x + 1 | 0, P = w, w = w + 1 | 0, r[E >> 0] = c[P >> 0], k = k - 1 | 0;
                                                                            continue a;
                                                                        case 15:
                                                                            T = k && 3 & w | 0 ? 20 : 83
                                                                    }
                                                                    break a
                                                            }
                                                            for (B = 68; B < 107;) switch (B) {
                                                                case 85:
                                                                    for (B = 107, L = 20; L < 100;) switch (L) {
                                                                        case 20:
                                                                            L = 32 <= k >>> 0 ? 14 : 100;
                                                                            break;
                                                                        case 14:
                                                                            L = 100;
                                                                            a: {
                                                                                n: {
                                                                                    i: {
                                                                                        for (E = 3 & x | 0, D = 38; D < 121;) switch (D) {
                                                                                            case 38:
                                                                                                D = 1 != (0 | E) ? 10 : 121;
                                                                                                break;
                                                                                            case 10:
                                                                                                for (D = 121, V = 77; V < 168;) switch (V) {
                                                                                                    case 77:
                                                                                                        V = 2 == (0 | E) ? 14 : 168;
                                                                                                        break;
                                                                                                    case 14:
                                                                                                        V = 168;
                                                                                                        break i
                                                                                                }
                                                                                                for (R = 4; R < 170;) switch (R) {
                                                                                                    case 73:
                                                                                                        R = 170;
                                                                                                        break n;
                                                                                                    case 4:
                                                                                                        R = 3 == (0 | E) ? 73 : 170
                                                                                                }
                                                                                                break a
                                                                                        }
                                                                                        M = o[w >> 2],
                                                                                        r[x >> 0] = c[w >> 0],
                                                                                        P = w + 1 | 0,
                                                                                        r[(E = x + 1 | 0) >> 0] = c[P >> 0],
                                                                                        x = E + 2 | 0,
                                                                                        w = P + 2 | 0,
                                                                                        r[(E + 1 | 0) >> 0] = c[(P + 1 | 0) >> 0],
                                                                                        k = k - 3 | 0,
                                                                                        z = 74;r: for (; z < 154;) switch (z) {
                                                                                            case 74:
                                                                                                for (z = 74, F = 82; F < 174;) switch (F) {
                                                                                                    case 88:
                                                                                                        F = 174, E = o[(w + 1 | 0) >> 2], o[x >> 2] = E << 8 | 0 | M >>> 24 | 0, P = E >>> 24 | 0, E = o[(w + 5 | 0) >> 2], o[(x + 4 | 0) >> 2] = P | E << 8 | 0, P = E >>> 24 | 0, E = o[(w + 9 | 0) >> 2], o[(x + 8 | 0) >> 2] = P | E << 8 | 0, M = o[(w + 13 | 0) >> 2], o[(x + 12 | 0) >> 2] = M << 8 | 0 | E >>> 24 | 0, w = w + 16 | 0, x = x + 16 | 0, k = k - 16 | 0;
                                                                                                        continue r;
                                                                                                    case 82:
                                                                                                        F = 17 <= k >>> 0 ? 88 : 174
                                                                                                }
                                                                                                break r
                                                                                        }
                                                                                        break a
                                                                                    }
                                                                                    M = o[w >> 2],
                                                                                    r[x >> 0] = c[w >> 0],
                                                                                    E = x,
                                                                                    x = x + 2 | 0,
                                                                                    P = w,
                                                                                    w = w + 2 | 0,
                                                                                    r[(E + 1 | 0) >> 0] = c[(P + 1 | 0) >> 0],
                                                                                    k = k - 2 | 0,
                                                                                    H = 24;i: for (; H < 99;) switch (H) {
                                                                                        case 24:
                                                                                            for (H = 24, G = 85; G < 128;) switch (G) {
                                                                                                case 85:
                                                                                                    G = 18 <= k >>> 0 ? 84 : 128;
                                                                                                    break;
                                                                                                case 84:
                                                                                                    G = 128, E = o[(w + 2 | 0) >> 2], o[x >> 2] = E << 16 | 0 | M >>> 16 | 0, P = E >>> 16 | 0, E = o[(w + 6 | 0) >> 2], o[(x + 4 | 0) >> 2] = P | E << 16 | 0, P = E >>> 16 | 0, E = o[(w + 10 | 0) >> 2], o[(x + 8 | 0) >> 2] = P | E << 16 | 0, M = o[(w + 14 | 0) >> 2], o[(x + 12 | 0) >> 2] = M << 16 | 0 | E >>> 16 | 0, w = w + 16 | 0, x = x + 16 | 0, k = k - 16 | 0;
                                                                                                    continue i
                                                                                            }
                                                                                            break i
                                                                                    }
                                                                                    break a
                                                                                }
                                                                                M = o[w >> 2],
                                                                                E = x,
                                                                                x = x + 1 | 0,
                                                                                P = w,
                                                                                w = w + 1 | 0,
                                                                                r[E >> 0] = c[P >> 0],
                                                                                k = k - 1 | 0,
                                                                                q = 19;n: for (; q < 130;) switch (q) {
                                                                                    case 19:
                                                                                        for (q = 19, W = 52; W < 123;) switch (W) {
                                                                                            case 64:
                                                                                                W = 123, E = o[(w + 3 | 0) >> 2], o[x >> 2] = E << 24 | 0 | M >>> 8 | 0, P = E >>> 8 | 0, E = o[(w + 7 | 0) >> 2], o[(x + 4 | 0) >> 2] = P | E << 24 | 0, P = E >>> 8 | 0, E = o[(w + 11 | 0) >> 2], o[(x + 8 | 0) >> 2] = P | E << 24 | 0, M = o[(w + 15 | 0) >> 2], o[(x + 12 | 0) >> 2] = M << 24 | 0 | E >>> 8 | 0, w = w + 16 | 0, x = x + 16 | 0, k = k - 16 | 0;
                                                                                                continue n;
                                                                                            case 52:
                                                                                                W = 19 <= k >>> 0 ? 64 : 123
                                                                                        }
                                                                                        break n
                                                                                }
                                                                            }
                                                                    }
                                                                    16 & k | 0 && (r[x >> 0] = c[w >> 0], w = w + 1 | 0, r[(x = x + 1 | 0) >> 0] = c[w >> 0], w = w + 1 | 0, r[(x = x + 1 | 0) >> 0] = c[w >> 0], w = w + 1 | 0, r[(x = x + 1 | 0) >> 0] = c[w >> 0], w = w + 1 | 0, r[(x = x + 1 | 0) >> 0] = c[w >> 0], w = w + 1 | 0, r[(x = x + 1 | 0) >> 0] = c[w >> 0], w = w + 1 | 0, r[(x = x + 1 | 0) >> 0] = c[w >> 0], w = w + 1 | 0, r[(x = x + 1 | 0) >> 0] = c[w >> 0], w = w + 1 | 0, r[(x = x + 1 | 0) >> 0] = c[w >> 0], w = w + 1 | 0, r[(x = x + 1 | 0) >> 0] = c[w >> 0], w = w + 1 | 0, r[(x = x + 1 | 0) >> 0] = c[w >> 0], w = w + 1 | 0, r[(x = x + 1 | 0) >> 0] = c[w >> 0], w = w + 1 | 0, r[(x = x + 1 | 0) >> 0] = c[w >> 0], w = w + 1 | 0, r[(x = x + 1 | 0) >> 0] = c[w >> 0], E = w + 1 | 0, r[(x = x + 1 | 0) >> 0] = c[E >> 0], w = E + 2 | 0, r[(x + 1 | 0) >> 0] = c[(E + 1 | 0) >> 0], x = x + 2 | 0), 8 & k | 0 && (r[x >> 0] = c[w >> 0], w = w + 1 | 0, r[(x = x + 1 | 0) >> 0] = c[w >> 0], w = w + 1 | 0, r[(x = x + 1 | 0) >> 0] = c[w >> 0], w = w + 1 | 0, r[(x = x + 1 | 0) >> 0] = c[w >> 0], w = w + 1 | 0, r[(x = x + 1 | 0) >> 0] = c[w >> 0], w = w + 1 | 0, r[(x = x + 1 | 0) >> 0] = c[w >> 0], E = w + 1 | 0, r[(x = x + 1 | 0) >> 0] = c[E >> 0], w = E + 2 | 0, r[(x + 1 | 0) >> 0] = c[(E + 1 | 0) >> 0], x = x + 2 | 0), 4 & k | 0 && (r[x >> 0] = c[w >> 0], w = w + 1 | 0, r[(x = x + 1 | 0) >> 0] = c[w >> 0], E = w + 1 | 0, r[(x = x + 1 | 0) >> 0] = c[E >> 0], w = E + 2 | 0, r[(x + 1 | 0) >> 0] = c[(E + 1 | 0) >> 0], x = x + 2 | 0), 2 & k | 0 && (r[x >> 0] = c[w >> 0], E = w, w = w + 2 | 0, r[(x + 1 | 0) >> 0] = c[(E + 1 | 0) >> 0], x = x + 2 | 0);
                                                                    break;
                                                                case 98:
                                                                    B = 107, Q = 39;
                                                                    a: for (; Q < 167;) switch (Q) {
                                                                        case 39:
                                                                            for (Q = 39, K = 41; K < 99;) switch (K) {
                                                                                case 73:
                                                                                    K = 99, o[x >> 2] = o[w >> 2], o[(x + 4 | 0) >> 2] = o[(w + 4 | 0) >> 2], o[(x + 8 | 0) >> 2] = o[(w + 8 | 0) >> 2], o[(x + 12 | 0) >> 2] = o[(w + 12 | 0) >> 2], w = w + 16 | 0, x = x + 16 | 0, k = k - 16 | 0;
                                                                                    continue a;
                                                                                case 41:
                                                                                    K = 16 <= k >>> 0 ? 73 : 99
                                                                            }
                                                                            break a
                                                                    }
                                                                    8 & k | 0 && (o[x >> 2] = o[w >> 2], o[(x + 4 | 0) >> 2] = o[(w + 4 | 0) >> 2], w = w + 8 | 0, x = x + 8 | 0), 4 & k | 0 && (o[x >> 2] = o[w >> 2], w = w + 4 | 0, x = x + 4 | 0), 2 & k | 0 && (s[x >> 1] = l[w >> 1], w = w + 2 | 0, x = x + 2 | 0);
                                                                    break;
                                                                case 68:
                                                                    B = 3 & x | 0 ? 85 : 98
                                                            }
                                                            1 & k | 0 && (r[x >> 0] = c[w >> 0]);
                                                            break;
                                                        case 46:
                                                            for (C = 152, Y = 1; Y < 66;) switch (Y) {
                                                                case 27:
                                                                    for (Y = 66, X = 17; X < 72;) switch (X) {
                                                                        case 67:
                                                                            X = 72, J = 5;
                                                                            a: for (; J < 108;) switch (J) {
                                                                                case 5:
                                                                                    for (J = 5, Z = 66; Z < 139;) switch (Z) {
                                                                                        case 53:
                                                                                            for (Z = 139, _ = 93; _ < 147;) switch (_) {
                                                                                                case 93:
                                                                                                    _ = k ? 147 : 62;
                                                                                                    break;
                                                                                                case 62:
                                                                                                    _ = 147;
                                                                                                    break t
                                                                                            }
                                                                                            k = k - 1 | 0, E = x, x = x + 1 | 0, P = w, w = w + 1 | 0, r[E >> 0] = c[P >> 0];
                                                                                            continue a;
                                                                                        case 66:
                                                                                            Z = 7 & x | 0 ? 53 : 139
                                                                                    }
                                                                                    break a
                                                                            }
                                                                            $ = 34;
                                                                            a: for (; $ < 89;) switch ($) {
                                                                                case 34:
                                                                                    for ($ = 34, ee = 77; ee < 128;) switch (ee) {
                                                                                        case 77:
                                                                                            ee = 8 <= k >>> 0 ? 98 : 128;
                                                                                            break;
                                                                                        case 98:
                                                                                            ee = 128, E = o[(w + 4 | 0) >> 2], o[x >> 2] = o[w >> 2], o[(x + 4 | 0) >> 2] = E, k = k - 8 | 0, x = x + 8 | 0, w = w + 8 | 0;
                                                                                            continue a
                                                                                    }
                                                                                    break a
                                                                            }
                                                                            break;
                                                                        case 17:
                                                                            X = (7 & w | 0) == (7 & x | 0) ? 67 : 72
                                                                    }
                                                                    te = 37;
                                                                    a: for (; te < 168;) switch (te) {
                                                                        case 37:
                                                                            for (te = 37, ae = 12; ae < 52;) switch (ae) {
                                                                                case 12:
                                                                                    ae = k ? 32 : 52;
                                                                                    break;
                                                                                case 32:
                                                                                    ae = 52, E = x, x = x + 1 | 0, P = w, w = w + 1 | 0, r[E >> 0] = c[P >> 0], k = k - 1 | 0;
                                                                                    continue a
                                                                            }
                                                                            break a
                                                                    }
                                                                    break;
                                                                case 1:
                                                                    Y = x >>> 0 < w >>> 0 ? 27 : 60;
                                                                    break;
                                                                case 60:
                                                                    for (Y = 66, ne = 27; ne < 188;) switch (ne) {
                                                                        case 89:
                                                                            ne = 188, ie = 13;
                                                                            a: for (; ie < 102;) switch (ie) {
                                                                                case 13:
                                                                                    for (ie = 13, re = 44; re < 71;) switch (re) {
                                                                                        case 44:
                                                                                            re = 7 & (x + k | 0) | 0 ? 36 : 71;
                                                                                            break;
                                                                                        case 36:
                                                                                            for (re = 71, se = 38; se < 129;) switch (se) {
                                                                                                case 38:
                                                                                                    se = k ? 129 : 4;
                                                                                                    break;
                                                                                                case 4:
                                                                                                    se = 129;
                                                                                                    break t
                                                                                            }
                                                                                            E = (k = k - 1 | 0) + w | 0, r[(x + k | 0) >> 0] = c[E >> 0];
                                                                                            continue a
                                                                                    }
                                                                                    break a
                                                                            }
                                                                            oe = 11;
                                                                            a: for (; oe < 159;) switch (oe) {
                                                                                case 11:
                                                                                    for (oe = 11, ce = 29; ce < 98;) switch (ce) {
                                                                                        case 29:
                                                                                            ce = 8 <= k >>> 0 ? 40 : 98;
                                                                                            break;
                                                                                        case 40:
                                                                                            ce = 98, P = o[(4 + (E = (k = k - 8 | 0) + w | 0) | 0) >> 2], o[(M = x + k | 0) >> 2] = o[E >> 2], o[(M + 4 | 0) >> 2] = P;
                                                                                            continue a
                                                                                    }
                                                                                    break a
                                                                            }
                                                                            break;
                                                                        case 27:
                                                                            ne = (7 & w | 0) == (7 & x | 0) ? 89 : 188
                                                                    }
                                                                    le = 61;
                                                                    a: for (; le < 113;) switch (le) {
                                                                        case 61:
                                                                            for (le = 61, ue = 84; ue < 90;) switch (ue) {
                                                                                case 84:
                                                                                    ue = k ? 76 : 90;
                                                                                    break;
                                                                                case 76:
                                                                                    ue = 90, E = (k = k - 1 | 0) + w | 0, r[(x + k | 0) >> 0] = c[E >> 0];
                                                                                    continue a
                                                                            }
                                                                            break a
                                                                    }
                                                            }
                                                            break;
                                                        case 83:
                                                            C = (w + k | 0) >>> 0 <= x >>> 0 || (x + k | 0) >>> 0 <= w >>> 0 ? 58 : 46
                                                    }
                                            }
                                            1604 <= y >>> 0 && (o[y >> 2] |= 1, U(v, y)), v = h
                                    }
                                    for (v = (h = v + 16 | 0) + d | 0, d = p - d | 0, he = 77; he < 173;) switch (he) {
                                        case 77:
                                            he = !d || (r[v >> 0] = 0, r[(3 + (y = (v + d | 0) - 4 | 0) | 0) >> 0] = 0, 2 >= d >>> 0 || (r[(v + 1 | 0) >> 0] = 0, r[(v + 2 | 0) >> 0] = 0, r[(y + 2 | 0) >> 0] = 0, r[(y + 1 | 0) >> 0] = 0, 6 >= d >>> 0 || (r[(v + 3 | 0) >> 0] = 0, r[y >> 0] = 0, 8 >= d >>> 0 || (o[(v = (y = 3 & (0 - v | 0) | 0) + v | 0) >> 2] = 0, o[(24 + (d = ((y = -4 & (d - y | 0) | 0) + v | 0) - 28 | 0) | 0) >> 2] = 0, 8 >= y >>> 0 || (o[(v + 4 | 0) >> 2] = 0, o[(v + 8 | 0) >> 2] = 0, o[(d + 16 | 0) >> 2] = 0, o[(d + 20 | 0) >> 2] = 0, 24 >= y >>> 0))))) ? 173 : 35;
                                            break;
                                        case 35:
                                            he = 173, de = 76;
                                            e: for (; de < 82;) switch (de) {
                                                case 64:
                                                    for (de = 64, fe = 49; fe < 116;) switch (fe) {
                                                        case 49:
                                                            fe = 32 <= d >>> 0 ? 25 : 116;
                                                            break;
                                                        case 25:
                                                            fe = 116, o[v >> 2] = 0, o[(v + 4 | 0) >> 2] = 0, o[(v + 8 | 0) >> 2] = 0, o[(v + 12 | 0) >> 2] = 0, o[(v + 16 | 0) >> 2] = 0, o[(v + 20 | 0) >> 2] = 0, o[(v + 24 | 0) >> 2] = 0, o[(v + 28 | 0) >> 2] = 0, d = d - 32 | 0, v = v + 32 | 0;
                                                            continue e
                                                    }
                                                    break e;
                                                case 76:
                                                    de = 64, o[(v + 12 | 0) >> 2] = 0, o[(v + 16 | 0) >> 2] = 0, o[(v + 20 | 0) >> 2] = 0, o[(v + 24 | 0) >> 2] = 0, o[d >> 2] = 0, o[(d + 4 | 0) >> 2] = 0, o[(d + 8 | 0) >> 2] = 0, o[(d + 12 | 0) >> 2] = 0, v = (d = 24 + (4 & v | 0) | 0) + v | 0, d = y - d | 0
                                            }
                                    }(0 | h) != (0 | m) && (o[e >> 2] = h, o[(e + 4 | 0) >> 2] = h), o[(e + 8 | 0) >> 2] = p
                            }
                            o[(e + 12 | 0) >> 2] = i;
                            break;
                        case 29:
                            u = t >>> 0 >= o[(e + 12 | 0) >> 2] >>> 0 ? 4 : 114
                    }
                    var i, u, h, d, f, m, v, p, y, k, w, b, E, x, A, C, I, T, P, B, L, D, V, R, M, z, F, H, G, q, W, Q, K, Y, X, J, Z, _, $, ee, te, ae, ne, ie, re, se, oe, ce, le, ue, he, de, fe;
                    o[(o[(e + 4 | 0) >> 2] + (t << 2 | 0) | 0) >> 2] = a
                }

                function S(e, t, n) {
                    for (x && g(), i = t, 1073741808 <= t >>> 0 && g(), r = T(e, t = 16 < (t = -16 & (i + 15 | 0) | 0) >>> 0 ? t : 16), s = 27; s < 172;) switch (s) {
                        case 85:
                            s = 172, l = ((c = a.byteLength / 65536 | 0) << 16 | 0) - 16 | 0, 0 > (0 | P(0 | ((0 | c) > (0 | (r = (-65536 & (65535 + ((r = 536870904 > t >>> 0 ? t + ((1 << (27 - f(t) | 0) | 0) - 1 | 0) | 0 : t) + (16 << ((0 | o[(e + 1568 | 0) >> 2]) != (0 | l)) | 0) | 0) | 0) | 0) >>> 16 | 0)) ? c : r))) && 0 > (0 | P(0 | r)) && g(), C(e, c << 16 | 0, (a.byteLength / 65536 | 0) << 16 | 0), (r = T(e, t)) || g();
                            break;
                        case 27:
                            s = r || (x = 1, x = 0, r = T(e, t)) ? 172 : 85
                    }
                    return (-4 & o[r >> 2] | 0) >>> 0 < t >>> 0 && g(), o[(r + 4 | 0) >> 2] = 0, o[(r + 8 | 0) >> 2] = n, o[(r + 12 | 0) >> 2] = i, N(e, r), j(e, r, t), r;
                    var i, r, s, c, l
                }

                function N(e, t) {
                    var a, n, i, r;
                    a = 0, 1 & (i = o[t >> 2]) | 0 || g(), 16 <= (i = -4 & i | 0) >>> 0 && 1073741808 > i >>> 0 || g(), 256 > i >>> 0 ? i = i >>> 4 | 0 : (i = 16 ^ (i >>> ((a = 31 - f(i) | 0) - 4 | 0) | 0) | 0, a = a - 7 | 0), 23 > a >>> 0 && 16 > i >>> 0 || g(), r = o[(t + 20 | 0) >> 2], (n = o[(t + 16 | 0) >> 2]) && (o[(n + 20 | 0) >> 2] = r), r && (o[(r + 16 | 0) >> 2] = n), (0 | o[(96 + ((((a << 4 | 0) + i | 0) << 2 | 0) + e | 0) | 0) >> 2]) == (0 | t) && (o[(96 + ((((a << 4 | 0) + i | 0) << 2 | 0) + e | 0) | 0) >> 2] = r, r || (t = o[(4 + (r = (a << 2 | 0) + e | 0) | 0) >> 2] & (-1 ^ (1 << i | 0) | 0) | 0, (o[(r + 4 | 0) >> 2] = t) || (o[e >> 2] = o[e >> 2] & (-1 ^ (1 << a | 0) | 0) | 0)))
                }

                function O() {
                    for (e = 0, t = b, n = 79; n < 149;) switch (n) {
                        case 79:
                            n = t ? 149 : 74;
                            break;
                        case 74:
                            n = 149, (i = 1 > (0 | (i = a.byteLength / 65536 | 0)) ? 0 > (0 | P(1 - i | 0)) : 0) && g(), t = 1616, o[404] = 0, o[796] = 0, r = 28;
                            e: for (; r < 103;) switch (r) {
                                case 28:
                                    for (r = 28, s = 31; s < 58;) switch (s) {
                                        case 48:
                                            s = 58, i = o[(4 + (1616 + (e << 2 | 0) | 0) | 0) >> 2] = 0, c = 66;
                                            t: for (; c < 152;) switch (c) {
                                                case 66:
                                                    for (c = 66, l = 18; l < 129;) switch (l) {
                                                        case 31:
                                                            l = 129, o[(96 + (1616 + (((e << 4 | 0) + i | 0) << 2 | 0) | 0) | 0) >> 2] = 0, i = i + 1 | 0;
                                                            continue t;
                                                        case 18:
                                                            l = 16 > i >>> 0 ? 31 : 129
                                                    }
                                                    break t
                                            }
                                            e = e + 1 | 0;
                                            continue e;
                                        case 31:
                                            s = 23 > e >>> 0 ? 48 : 58
                                    }
                                    break e
                            }
                            C(1616, 3200, (a.byteLength / 65536 | 0) << 16 | 0), b = 1616
                    }
                    return t;
                    var e, t, n, i, r, s, c, l
                }

                function T(e, t) {
                    return a = 0, 256 > t >>> 0 ? t = t >>> 4 | 0 : (536870904 > t >>> 0 && (t = ((1 << (27 - f(t) | 0) | 0) + t | 0) - 1 | 0), t = 16 ^ (t >>> ((a = 31 - f(t) | 0) - 4 | 0) | 0) | 0, a = a - 7 | 0), 23 > a >>> 0 && 16 > t >>> 0 || g(), (t = o[(4 + ((a << 2 | 0) + e | 0) | 0) >> 2] & (-1 << t | 0) | 0) ? (t = t ? 31 - f((t + -1 | 0) ^ t | 0) | 0 : 32, e = o[(96 + (((t + (a << 4 | 0) | 0) << 2 | 0) + e | 0) | 0) >> 2]) : (t = o[e >> 2] & (-1 << (a + 1 | 0) | 0) | 0) ? (a = t ? 31 - f((t + -1 | 0) ^ t | 0) | 0 : 32, (t = o[(4 + ((a << 2 | 0) + e | 0) | 0) >> 2]) || g(), t = t ? 31 - f((t + -1 | 0) ^ t | 0) | 0 : 32, e = o[(96 + (((t + (a << 4 | 0) | 0) << 2 | 0) + e | 0) | 0) >> 2]) : e = 0, e;
                    var a
                }

                function j(e, t, a) {
                    var n, i;
                    n = o[t >> 2], 15 & a | 0 && g(), 32 <= (i = (-4 & n | 0) - a | 0) >>> 0 ? (o[t >> 2] = 2 & n | 0 | a | 0, o[(t = (t + 16 | 0) + a | 0) >> 2] = i - 16 | 1, U(e, t)) : (o[t >> 2] = -2 & n | 0, e = (t + 16 | 0) + (-4 & o[t >> 2] | 0) | 0, t = -3 & o[e >> 2] | 0, o[e >> 2] = t)
                }

                function U(e, t) {
                    for (a = 0, t || g(), 1 & (n = o[t >> 2]) | 0 || g(), i = (t + 16 | 0) + (-4 & o[t >> 2] | 0) | 0, r = o[i >> 2], s = 36; s < 91;) switch (s) {
                        case 36:
                            s = 1 & r | 0 ? 13 : 91;
                            break;
                        case 13:
                            s = 91, 1073741808 > (c = (16 + (-4 & n | 0) | 0) + (-4 & r | 0) | 0) >>> 0 && (N(e, i), n = c | 3 & n | 0, o[t >> 2] = n, i = (t + 16 | 0) + (-4 & o[t >> 2] | 0) | 0, r = o[i >> 2])
                    }
                    for (l = 78; l < 129;) switch (l) {
                        case 32:
                            l = 129, c = o[(t - 4 | 0) >> 2], 1 & (u = o[c >> 2]) | 0 || g(), 1073741808 > (h = (16 + (-4 & u | 0) | 0) + (-4 & n | 0) | 0) >>> 0 && (N(e, c), n = 3 & u | 0 | h | 0, o[c >> 2] = n, t = c);
                            break;
                        case 78:
                            l = 2 & n | 0 ? 32 : 129
                    }
                    var a, n, i, r, s, c, l, u, h;
                    o[i >> 2] = 2 | r, 16 <= (c = -4 & n | 0) >>> 0 && 1073741808 > c >>> 0 || g(), (c + (t + 16 | 0) | 0) != (0 | i) && g(), o[(i - 4 | 0) >> 2] = t, 256 > c >>> 0 ? c = c >>> 4 | 0 : (c = 16 ^ (c >>> ((n = 31 - f(c) | 0) - 4 | 0) | 0) | 0, a = n - 7 | 0), 23 > a >>> 0 && 16 > c >>> 0 || g(), n = o[(96 + ((((a << 4 | 0) + c | 0) << 2 | 0) + e | 0) | 0) >> 2], o[(t + 16 | 0) >> 2] = 0, (o[(t + 20 | 0) >> 2] = n) && (o[(n + 16 | 0) >> 2] = t), o[(96 + ((((a << 4 | 0) + c | 0) << 2 | 0) + e | 0) | 0) >> 2] = t, o[e >> 2] = o[e >> 2] | 1 << a | 0, t = o[(4 + (e = (a << 2 | 0) + e | 0) | 0) >> 2] | 1 << c | 0, o[(e + 4 | 0) >> 2] = t
                }
                return r = new e.Int8Array(a), s = new e.Int16Array(a), o = new e.Int32Array(a), c = new e.Uint8Array(a), l = new e.Uint16Array(a), new e.Uint32Array(a), new e.Float32Array(a), new e.Float64Array(a), h = e.Math.imul, d = e.Math.abs, f = e.Math.clz32, m = e.Math.min, v = e.Math.floor, p = e.Math.ceil, g = t.abort, y = t.now, k = t.ceil, b = 0, x = 0, A = 0,
                    function() {
                        e = 0, t = +y(), a = 1 <= d(t) ? 0 < t ? ~~m(v(t / 4294967296), 4294967295) >>> 0 : ~~p((t - +(~~t >>> 0 >>> 0)) / 4294967296) >>> 0 : 0, a = (t = (~~+k(+(+(~~t >>> 0 >>> 0) + 4294967296 * +(0 | a)) / 1e4) << 16 | 0) >> 16 | 0) >> 2 | 0, n = 36;
                        e: for (; n < 86;) switch (n) {
                            case 36:
                                for (n = 36, i = 82; i < 83;) switch (i) {
                                    case 82:
                                        i = 0 < (0 | a) ? 60 : 83;
                                        break;
                                    case 60:
                                        i = 83, r = o[e >> 2], e = e + 4 | 0, t = ((t = (((t = (65535 & r | 0) + t | 0) << 16 | 0) ^ ((r >> 16 | 0) << 11 | 0) | 0) ^ t | 0) >> 11 | 0) + t | 0, a = a - 1 | 0;
                                        continue e
                                }
                                break e
                        }
                        var e, t, a, n, i, r
                    }(), i = {}, Object(w.a)(i, "memory", Object.create(Object.prototype, (n = {}, Object(w.a)(n, "grow", Object(w.a)({}, "value", P)), Object(w.a)(n, "buffer", Object(w.a)({}, "get", function() {
                        return a
                    })), n))), Object(w.a)(i, "__alloc", function(e, t) {
                        return e |= 0, t |= 0, S(O(), e, t) + 16 | 0
                    }), Object(w.a)(i, "__retain", function(e) {
                        for (e |= 0, t = 4; t < 145;) switch (t) {
                            case 69:
                                t = 145, (-268435456 & (n = o[(4 + (a = e - 16 | 0) | 0) >> 2]) | 0) != (-268435456 & (n + 1 | 0) | 0) && g(), o[(a + 4 | 0) >> 2] = n + 1 | 0, 1 & o[a >> 2] | 0 && g();
                                break;
                            case 4:
                                t = 1604 < e >>> 0 ? 69 : 145
                        }
                        return 0 | e;
                        var t, a, n
                    }), Object(w.a)(i, "__release", function(e) {
                        1604 < (e |= 0) >>> 0 && function e(t) {
                            for (n = 268435455 & (a = o[(t + 4 | 0) >> 2]) | 0, 1 & o[t >> 2] | 0 && g(), i = 40; i < 123;) switch (i) {
                                case 36:
                                    i = 123, 0 >= n >>> 0 && g(), o[(t + 4 | 0) >> 2] = n - 1 | 0 | -268435456 & a | 0;
                                    break;
                                case 78:
                                    i = 123;
                                    e: {
                                        switch (0 | o[(t + 8 | 0) >> 2]) {
                                            case 2:
                                                (n = o[(t + 16 | 0) >> 2]) && 1604 <= n >>> 0 && e(n - 16 | 0);
                                                break e;
                                            case 3:
                                                1604 <= (n = o[(t + 16 | 0) >> 2]) >>> 0 && e(n - 16 | 0);
                                                break e;
                                            case 0:
                                            case 1:
                                                break e
                                        }
                                        g()
                                    } - 2147483648 & a | 0 && g(), o[t >> 2] |= 1, U(b, t);
                                    break;
                                case 40:
                                    i = 1 == (0 | n) ? 78 : 36
                            }
                            var a, n, i
                        }(e - 16 | 0)
                    }), Object(w.a)(i, "__collect", function() {}), Object(w.a)(i, "abort", function(e, t, a, n) {}), Object(w.a)(i, "$728340984", function(e) {
                        for (a = 0, n = 0, i = 97703429 + (e = +e), r = 23; r < 170;) switch (r) {
                            case 98:
                                for (r = 170, t = +e, u[0] = t, s = a = 0 | E(1), i = 0 | E(0), d = 2047 & (a >>> 20 | 0) | 0, f = 58; f < 76;) switch (f) {
                                    case 4:
                                        for (f = 76, m = 68; m < 89;) switch (m) {
                                            case 68:
                                                m = 1106 >= d >>> 0 ? 70 : 29;
                                                break;
                                            case 29:
                                                m = 89, a = 0;
                                                break;
                                            case 70:
                                                m = 89, a = i, d = 31 & (v = (d - 1023 | 0) - 20 | 0) | 0, a = e = 32 <= (63 & v | 0) >>> 0 ? a << d | 0 : ((1 << d | 0) - 1 | 0) & (a >>> (32 - d | 0) | 0) | 0 | (1048575 & s | 1048576) << d | 0, a = s >>> 31 | 0 ? 0 - a | 0 : a
                                        }
                                        break;
                                    case 43:
                                        f = 76, a = ~~e;
                                        break;
                                    case 58:
                                        f = 1053 >= d >>> 0 ? 43 : 4
                                }
                                a = h(a, 97703429);
                                break;
                            case 23:
                                r = 0 == i - i ? 98 : 170
                        }
                        var t, a, n, i, r, s, d, f, m, v, p, y, w, b, x;
                        I(1280, 1, (a << 16 | 0) >> 16 | 0), I(1392, 0, ((s = 8957153 ^ a | 0) << 24 | 0) >> 16 | 0), I(1392, 5, (((-65536 ^ (a + s | 0) | 0) >> 7 | 0) << 16 | 0) >> 16 | 0), I(1280, 7, ((97703429 ^ (a - s | 0) | 0) << 25 | 0) >> 16 | 0), i = 255 ^ s | 0, 0 >= o[351] >>> 0 && g(), i = i ^ (o[o[349] >> 2] << 16 | 0) | 0, 0 >= o[351] >>> 0 && g(), i = i ^ (o[o[349] >> 2] >>> 16 | 0) | 0, 0 >= o[351] >>> 0 && g(), i = i ^ (-65536 & o[o[349] >> 2] | 0) | 0, 1 >= o[351] >>> 0 && g(), i = i ^ (65535 & o[(o[349] + 4 | 0) >> 2] | 0) | 0, 2 >= o[351] >>> 0 && g(), i = i ^ o[(o[349] + 8 | 0) >> 2] | 0, 2 >= o[351] >>> 0 && g(), i = i ^ (o[(o[349] + 8 | 0) >> 2] >>> 16 | 0) | 0, 3 >= o[351] >>> 0 && g(), i = i ^ (o[(o[349] + 12 | 0) >> 2] << 16 | 0) | 0, 3 >= o[351] >>> 0 && g(), i = i ^ (o[(o[349] + 12 | 0) >> 2] >>> 16 | 0) | 0, 4 >= o[351] >>> 0 && g(), i = i ^ (o[(o[349] + 16 | 0) >> 2] << 16 | 0) | 0, 4 >= o[351] >>> 0 && g(), i = i ^ (o[(o[349] + 16 | 0) >> 2] >>> 16 | 0) | 0, 5 >= o[351] >>> 0 && g(), i = i ^ (o[(o[349] + 20 | 0) >> 2] << 16 | 0) | 0, 6 >= o[351] >>> 0 && g(), i = i ^ (o[(o[349] + 24 | 0) >> 2] << 16 | 0) | 0, 6 >= o[351] >>> 0 && g(), i = i ^ (o[(o[349] + 24 | 0) >> 2] >>> 16 | 0) | 0, 7 >= o[351] >>> 0 && g(), i = i ^ (-65536 & o[(o[349] + 28 | 0) >> 2] | 0) | 0, 7 >= o[351] >>> 0 && g(), i = i ^ (o[(o[349] + 28 | 0) >> 2] << 16 | 0) | 0, 7 >= o[351] >>> 0 && g(), i = i ^ (o[(o[349] + 28 | 0) >> 2] >>> 16 | 0) | 0, 0 >= o[323] >>> 0 && g(), i = i << (-65536 & o[o[321] >> 2] | 0) | 0, 0 >= o[323] >>> 0 && g(), a = o[o[321] >> 2] << 16 | 0, 1 >= o[323] >>> 0 && g(), a = a ^ (-65536 & o[(o[321] + 4 | 0) >> 2] | 0) | 0, 1 >= o[323] >>> 0 && g(), a = a ^ (o[(o[321] + 4 | 0) >> 2] << 16 | 0) | 0, 6 >= o[323] >>> 0 && g(), a = a ^ (o[(o[321] + 24 | 0) >> 2] << 16 | 0) | 0, 7 >= o[323] >>> 0 && g(), a = a ^ (-65536 & o[(o[321] + 28 | 0) >> 2] | 0) | 0, 7 >= o[323] >>> 0 && g(), d = A, a = (i = v = (~~(+k(+ +(i | a ^ (o[(o[321] + 28 | 0) >> 2] >>> 16 | 0) | 0) / 1e3) + 1) << 16 | 0) >> 16 | 0) >> 2 | 0, p = 2;
                        e: for (; p < 188;) switch (p) {
                            case 2:
                                for (p = 2, y = 71; y < 140;) switch (y) {
                                    case 43:
                                        y = 140, e = o[n >> 2], n = n + 4 | 0, i = ((i = (((i = (65535 & e | 0) + i | 0) << 16 | 0) ^ ((e >> 16 | 0) << 11 | 0) | 0) ^ i | 0) >> 11 | 0) + i | 0, a = a - 1 | 0;
                                        continue e;
                                    case 71:
                                        y = 0 < (0 | a) ? 43 : 140
                                }
                                break e
                        }
                        e: {
                            t: {
                                a: {
                                    for (a = 3 & v | 0, w = 8; w < 128;) switch (w) {
                                        case 8:
                                            w = 3 != (0 | a) ? 75 : 128;
                                            break;
                                        case 75:
                                            for (w = 128, b = 98; b < 155;) switch (b) {
                                                case 37:
                                                    b = 155;
                                                    break a;
                                                case 98:
                                                    b = 2 == (0 | a) ? 37 : 155
                                            }
                                            for (x = 17; x < 82;) switch (x) {
                                                case 57:
                                                    x = 82;
                                                    break t;
                                                case 17:
                                                    x = 1 == (0 | a) ? 57 : 82
                                            }
                                            break e
                                    }
                                    i = ((i = (((a = (a = i) + (65535 & (i = o[n >> 2]) | 0) | 0) << 16 | 0) ^ a | 0) ^ ((255 & (i >> 16 | 0) | 0) << 18 | 0) | 0) >> 11 | 0) + i | 0;
                                    break e
                                }
                                i = ((i = ((i = l[n >> 1] + i | 0) << 11 | 0) ^ i | 0) >> 17 | 0) + i | 0;
                                break e
                            }
                            i = ((i = ((i = c[n >> 0] + i | 0) << 10 | 0) ^ i | 0) >> 1 | 0) + i | 0
                        }
                        return A = (((i = ((i = ((i = ((i = ((i = (i << 3 | 0) ^ i | 0) >> 5 | 0) + i | 0) << 4 | 0) ^ i | 0) >> 17 | 0) + i | 0) << 25 | 0) ^ i | 0) >> 6 | 0) + i | 0) + d | 0, 0 | s
                    }), i;

                function P(t) {
                    for (t = (n = a.byteLength / 65536 | 0) + (0 | t) | 0, i = 35; i < 190;) switch (i) {
                        case 35:
                            i = n < t && 65536 > t ? 96 : 190;
                            break;
                        case 96:
                            i = 190, t = new ArrayBuffer(h(t, 65536)), (u = new e.Int8Array(t)).set(r), r = u, r = new e.Int8Array(t), s = new e.Int16Array(t), o = new e.Int32Array(t), c = new e.Uint8Array(t), l = new e.Uint16Array(t), new e.Uint32Array(t), new e.Float32Array(t), new e.Float64Array(t), a = t
                    }
                    return n;
                    var n, i, u
                }
            }((n = {}, Object(w.a)(n, "Math", Math), Object(w.a)(n, "Int8Array", Int8Array), Object(w.a)(n, "Uint8Array", Uint8Array), Object(w.a)(n, "Int16Array", Int16Array), Object(w.a)(n, "Uint16Array", Uint16Array), Object(w.a)(n, "Int32Array", Int32Array), Object(w.a)(n, "Uint32Array", Uint32Array), Object(w.a)(n, "Float32Array", Float32Array), Object(w.a)(n, "Float64Array", Float64Array), Object(w.a)(n, "NaN", NaN), Object(w.a)(n, "Infinity", 1 / 0), n), (i = {}, Object(w.a)(i, "abort", function() {
                throw Error("abort")
            }), Object(w.a)(i, "now", s), Object(w.a)(i, "ceil", o), i), d)).memory, p.__alloc, p.__retain, p.__release, p.__collect, p.abort, p.$728340984, r = p;
            var x = [0, 97, 115, 109, 1, 0, 0, 0, 1, 122, 21, 96, 2, 127, 127, 1, 127, 96, 1, 127, 1, 127, 96, 2, 127, 127, 0, 96, 3, 127, 127, 127, 0, 96, 3, 127, 127, 127, 1, 127, 96, 1, 127, 0, 96, 0, 0, 96, 0, 1, 124, 96, 4, 127, 127, 127, 127, 1, 127, 96, 3, 126, 126, 127, 1, 127, 96, 2, 124, 124, 1, 124, 96, 4, 127, 127, 127, 127, 0, 96, 3, 127, 126, 127, 0, 96, 4, 127, 126, 127, 127, 0, 96, 1, 126, 0, 96, 0, 1, 127, 96, 5, 127, 127, 127, 127, 127, 1, 127, 96, 2, 126, 127, 1, 127, 96, 1, 124, 1, 127, 96, 3, 124, 124, 124, 1, 127, 96, 1, 126, 1, 126, 2, 55, 4, 3, 101, 110, 118, 5, 97, 98, 111, 114, 116, 0, 11, 3, 101, 110, 118, 4, 115, 101, 101, 100, 0, 7, 3, 101, 110, 118, 13, 114, 117, 110, 95, 101, 110, 118, 95, 99, 104, 101, 99, 107, 0, 18, 4, 68, 97, 116, 101, 3, 110, 111, 119, 0, 7, 3, 104, 103, 2, 2, 4, 6, 1, 1, 0, 2, 3, 0, 1, 0, 1, 3, 3, 2, 4, 4, 0, 0, 5, 1, 5, 1, 20, 1, 14, 7, 3, 0, 0, 8, 4, 4, 8, 0, 0, 1, 1, 9, 1, 1, 0, 1, 6, 1, 3, 12, 17, 13, 0, 0, 1, 0, 0, 0, 1, 10, 10, 0, 0, 1, 1, 0, 0, 0, 1, 0, 16, 1, 5, 6, 15, 19, 1, 1, 1, 3, 3, 3, 0, 0, 3, 3, 2, 6, 5, 5, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 4, 1, 112, 0, 4, 5, 3, 1, 0, 1, 6, 238, 1, 41, 127, 1, 65, 0, 11, 127, 0, 65, 0, 11, 127, 0, 65, 0, 11, 127, 1, 65, 0, 11, 127, 1, 65, 0, 11, 126, 1, 66, 0, 11, 126, 1, 66, 0, 11, 127, 1, 65, 0, 11, 127, 1, 65, 0, 11, 127, 1, 65, 0, 11, 127, 1, 65, 0, 11, 127, 1, 65, 0, 11, 127, 0, 65, 35, 11, 127, 1, 65, 0, 11, 127, 1, 65, 0, 11, 127, 1, 65, 0, 11, 127, 1, 65, 0, 11, 127, 1, 65, 208, 2, 11, 127, 0, 65, 255, 255, 255, 255, 7, 11, 127, 1, 65, 0, 11, 127, 1, 65, 0, 11, 127, 1, 65, 0, 11, 127, 1, 65, 0, 11, 127, 1, 65, 0, 11, 127, 1, 65, 0, 11, 127, 0, 65, 128, 4, 11, 127, 0, 65, 160, 4, 11, 127, 1, 65, 0, 11, 127, 1, 65, 0, 11, 127, 0, 65, 251, 213, 186, 214, 2, 11, 127, 1, 65, 208, 4, 11, 127, 0, 65, 176, 5, 11, 127, 0, 65, 173, 215, 0, 11, 127, 0, 65, 255, 255, 3, 11, 127, 0, 65, 255, 255, 3, 11, 127, 0, 65, 255, 255, 3, 11, 127, 1, 65, 0, 11, 127, 1, 65, 0, 11, 124, 1, 68, 0, 0, 0, 0, 0, 0, 0, 0, 11, 127, 0, 65, 208, 196, 0, 11, 127, 0, 65, 148, 197, 0, 11, 7, 121, 12, 6, 109, 101, 109, 111, 114, 121, 2, 0, 5, 95, 95, 110, 101, 119, 0, 15, 7, 95, 95, 114, 101, 110, 101, 119, 0, 23, 8, 95, 95, 114, 101, 116, 97, 105, 110, 0, 25, 9, 95, 95, 114, 101, 108, 101, 97, 115, 101, 0, 26, 11, 95, 95, 114, 116, 116, 105, 95, 98, 97, 115, 101, 3, 39, 12, 100, 111, 95, 101, 110, 118, 95, 99, 104, 101, 99, 107, 0, 74, 5, 114, 101, 115, 101, 116, 0, 75, 5, 114, 117, 110, 95, 48, 0, 79, 5, 114, 117, 110, 95, 49, 0, 76, 5, 114, 117, 110, 95, 50, 0, 73, 6, 114, 111, 116, 97, 116, 101, 0, 88, 8, 1, 89, 9, 9, 1, 0, 65, 1, 11, 3, 36, 43, 46, 10, 246, 136, 1, 103, 129, 3, 1, 10, 127, 32, 1, 40, 2, 0, 33, 2, 65, 1, 26, 32, 2, 65, 1, 113, 69, 4, 64, 65, 0, 65, 160, 1, 65, 144, 2, 65, 14, 16, 0, 0, 11, 32, 2, 65, 3, 65, 127, 115, 113, 33, 3, 65, 1, 26, 32, 3, 65, 12, 79, 4, 127, 32, 3, 65, 252, 255, 255, 255, 3, 73, 5, 65, 0, 11, 69, 4, 64, 65, 0, 65, 160, 1, 65, 146, 2, 65, 14, 16, 0, 0, 11, 32, 3, 65, 128, 2, 73, 4, 64, 65, 0, 33, 4, 32, 3, 65, 4, 118, 33, 5, 5, 65, 31, 32, 3, 103, 107, 33, 4, 32, 3, 32, 4, 65, 4, 107, 118, 65, 1, 65, 4, 116, 115, 33, 5, 32, 4, 65, 8, 65, 1, 107, 107, 33, 4, 11, 65, 1, 26, 32, 4, 65, 23, 73, 4, 127, 32, 5, 65, 16, 73, 5, 65, 0, 11, 69, 4, 64, 65, 0, 65, 160, 1, 65, 159, 2, 65, 14, 16, 0, 0, 11, 32, 1, 40, 2, 4, 33, 6, 32, 1, 40, 2, 8, 33, 7, 32, 6, 4, 64, 32, 6, 32, 7, 54, 2, 8, 11, 32, 7, 4, 64, 32, 7, 32, 6, 54, 2, 4, 11, 32, 1, 2, 127, 32, 0, 33, 10, 32, 4, 33, 9, 32, 5, 33, 8, 32, 10, 32, 9, 65, 4, 116, 32, 8, 106, 65, 2, 116, 106, 40, 2, 96, 11, 70, 4, 64, 2, 64, 32, 0, 33, 11, 32, 4, 33, 10, 32, 5, 33, 9, 32, 7, 33, 8, 32, 11, 32, 10, 65, 4, 116, 32, 9, 106, 65, 2, 116, 106, 32, 8, 54, 2, 96, 11, 32, 7, 69, 4, 64, 2, 127, 32, 0, 33, 9, 32, 4, 33, 8, 32, 9, 32, 8, 65, 2, 116, 106, 40, 2, 4, 11, 33, 9, 2, 64, 32, 0, 33, 8, 32, 4, 33, 11, 32, 9, 65, 1, 32, 5, 116, 65, 127, 115, 113, 34, 9, 33, 10, 32, 8, 32, 11, 65, 2, 116, 106, 32, 10, 54, 2, 4, 11, 32, 9, 69, 4, 64, 32, 0, 32, 0, 40, 2, 0, 65, 1, 32, 4, 116, 65, 127, 115, 113, 54, 2, 0, 11, 11, 11, 11, 151, 5, 1, 12, 127, 65, 1, 26, 32, 1, 69, 4, 64, 65, 0, 65, 160, 1, 65, 200, 1, 65, 14, 16, 0, 0, 11, 32, 1, 40, 2, 0, 33, 2, 65, 1, 26, 32, 2, 65, 1, 113, 69, 4, 64, 65, 0, 65, 160, 1, 65, 202, 1, 65, 14, 16, 0, 0, 11, 2, 127, 32, 1, 33, 3, 32, 3, 65, 4, 106, 32, 3, 40, 2, 0, 65, 3, 65, 127, 115, 113, 106, 11, 33, 4, 32, 4, 40, 2, 0, 33, 5, 32, 5, 65, 1, 113, 4, 64, 32, 2, 65, 3, 65, 127, 115, 113, 65, 4, 106, 32, 5, 65, 3, 65, 127, 115, 113, 106, 33, 3, 32, 3, 65, 252, 255, 255, 255, 3, 73, 4, 64, 32, 0, 32, 4, 16, 4, 32, 1, 32, 2, 65, 3, 113, 32, 3, 114, 34, 2, 54, 2, 0, 2, 127, 32, 1, 33, 6, 32, 6, 65, 4, 106, 32, 6, 40, 2, 0, 65, 3, 65, 127, 115, 113, 106, 11, 33, 4, 32, 4, 40, 2, 0, 33, 5, 11, 11, 32, 2, 65, 2, 113, 4, 64, 2, 127, 32, 1, 33, 6, 32, 6, 65, 4, 107, 40, 2, 0, 11, 33, 6, 32, 6, 40, 2, 0, 33, 3, 65, 1, 26, 32, 3, 65, 1, 113, 69, 4, 64, 65, 0, 65, 160, 1, 65, 223, 1, 65, 16, 16, 0, 0, 11, 32, 3, 65, 3, 65, 127, 115, 113, 65, 4, 106, 32, 2, 65, 3, 65, 127, 115, 113, 106, 33, 7, 32, 7, 65, 252, 255, 255, 255, 3, 73, 4, 64, 32, 0, 32, 6, 16, 4, 32, 6, 32, 3, 65, 3, 113, 32, 7, 114, 34, 2, 54, 2, 0, 32, 6, 33, 1, 11, 11, 32, 4, 32, 5, 65, 2, 114, 54, 2, 0, 32, 2, 65, 3, 65, 127, 115, 113, 33, 8, 65, 1, 26, 32, 8, 65, 12, 79, 4, 127, 32, 8, 65, 252, 255, 255, 255, 3, 73, 5, 65, 0, 11, 69, 4, 64, 65, 0, 65, 160, 1, 65, 238, 1, 65, 14, 16, 0, 0, 11, 65, 1, 26, 32, 1, 65, 4, 106, 32, 8, 106, 32, 4, 70, 69, 4, 64, 65, 0, 65, 160, 1, 65, 239, 1, 65, 14, 16, 0, 0, 11, 32, 4, 65, 4, 107, 32, 1, 54, 2, 0, 32, 8, 65, 128, 2, 73, 4, 64, 65, 0, 33, 9, 32, 8, 65, 4, 118, 33, 10, 5, 65, 31, 32, 8, 103, 107, 33, 9, 32, 8, 32, 9, 65, 4, 107, 118, 65, 1, 65, 4, 116, 115, 33, 10, 32, 9, 65, 8, 65, 1, 107, 107, 33, 9, 11, 65, 1, 26, 32, 9, 65, 23, 73, 4, 127, 32, 10, 65, 16, 73, 5, 65, 0, 11, 69, 4, 64, 65, 0, 65, 160, 1, 65, 255, 1, 65, 14, 16, 0, 0, 11, 2, 127, 32, 0, 33, 7, 32, 9, 33, 3, 32, 10, 33, 6, 32, 7, 32, 3, 65, 4, 116, 32, 6, 106, 65, 2, 116, 106, 40, 2, 96, 11, 33, 11, 32, 1, 65, 0, 54, 2, 4, 32, 1, 32, 11, 54, 2, 8, 32, 11, 4, 64, 32, 11, 32, 1, 54, 2, 4, 11, 2, 64, 32, 0, 33, 12, 32, 9, 33, 7, 32, 10, 33, 3, 32, 1, 33, 6, 32, 12, 32, 7, 65, 4, 116, 32, 3, 106, 65, 2, 116, 106, 32, 6, 54, 2, 96, 11, 32, 0, 32, 0, 40, 2, 0, 65, 1, 32, 9, 116, 114, 54, 2, 0, 2, 64, 32, 0, 33, 13, 32, 9, 33, 12, 2, 127, 32, 0, 33, 3, 32, 9, 33, 6, 32, 3, 32, 6, 65, 2, 116, 106, 40, 2, 4, 11, 65, 1, 32, 10, 116, 114, 33, 7, 32, 13, 32, 12, 65, 2, 116, 106, 32, 7, 54, 2, 4, 11, 11, 154, 2, 1, 7, 127, 65, 1, 26, 32, 1, 32, 2, 77, 69, 4, 64, 65, 0, 65, 160, 1, 65, 252, 2, 65, 14, 16, 0, 0, 11, 32, 1, 65, 4, 106, 65, 15, 106, 65, 15, 65, 127, 115, 113, 65, 4, 107, 33, 1, 32, 2, 65, 15, 65, 127, 115, 113, 33, 2, 2, 127, 32, 0, 33, 3, 32, 3, 40, 2, 160, 12, 11, 33, 4, 65, 0, 33, 5, 32, 4, 4, 64, 65, 1, 26, 32, 1, 32, 4, 65, 4, 106, 79, 69, 4, 64, 65, 0, 65, 160, 1, 65, 131, 3, 65, 16, 16, 0, 0, 11, 32, 1, 65, 16, 107, 32, 4, 70, 4, 64, 32, 1, 65, 16, 107, 33, 1, 32, 4, 40, 2, 0, 33, 5, 5, 1, 11, 5, 65, 1, 26, 32, 1, 32, 0, 65, 164, 12, 106, 79, 69, 4, 64, 65, 0, 65, 160, 1, 65, 144, 3, 65, 5, 16, 0, 0, 11, 11, 32, 2, 32, 1, 107, 33, 6, 32, 6, 65, 4, 65, 12, 106, 65, 4, 106, 73, 4, 64, 65, 0, 15, 11, 32, 6, 65, 2, 65, 4, 108, 107, 33, 7, 32, 1, 33, 8, 32, 8, 32, 7, 65, 1, 114, 32, 5, 65, 2, 113, 114, 54, 2, 0, 32, 8, 65, 0, 54, 2, 4, 32, 8, 65, 0, 54, 2, 8, 32, 1, 65, 4, 106, 32, 7, 106, 33, 4, 32, 4, 65, 0, 65, 2, 114, 54, 2, 0, 2, 64, 32, 0, 33, 9, 32, 4, 33, 3, 32, 9, 32, 3, 54, 2, 160, 12, 11, 32, 0, 32, 8, 16, 5, 65, 1, 11, 133, 2, 1, 13, 127, 35, 40, 65, 15, 106, 65, 15, 65, 127, 115, 113, 33, 0, 63, 0, 33, 1, 32, 0, 65, 164, 12, 106, 65, 255, 255, 3, 106, 65, 255, 255, 3, 65, 127, 115, 113, 65, 16, 118, 33, 2, 32, 2, 32, 1, 74, 4, 127, 32, 2, 32, 1, 107, 64, 0, 65, 0, 72, 5, 65, 0, 11, 4, 64, 0, 11, 32, 0, 33, 3, 32, 3, 65, 0, 54, 2, 0, 2, 64, 32, 3, 33, 5, 65, 0, 33, 4, 32, 5, 32, 4, 54, 2, 160, 12, 11, 65, 0, 33, 5, 2, 64, 3, 64, 32, 5, 65, 23, 73, 33, 4, 32, 4, 4, 64, 2, 64, 2, 64, 32, 3, 33, 8, 32, 5, 33, 7, 65, 0, 33, 6, 32, 8, 32, 7, 65, 2, 116, 106, 32, 6, 54, 2, 4, 11, 65, 0, 33, 8, 2, 64, 3, 64, 32, 8, 65, 16, 73, 33, 7, 32, 7, 4, 64, 2, 64, 2, 64, 32, 3, 33, 11, 32, 5, 33, 10, 32, 8, 33, 9, 65, 0, 33, 6, 32, 11, 32, 10, 65, 4, 116, 32, 9, 106, 65, 2, 116, 106, 32, 6, 54, 2, 96, 11, 11, 32, 8, 65, 1, 106, 33, 8, 12, 1, 11, 11, 11, 11, 32, 5, 65, 1, 106, 33, 5, 12, 1, 11, 11, 11, 32, 0, 65, 164, 12, 106, 33, 12, 65, 0, 26, 32, 3, 32, 12, 63, 0, 65, 16, 116, 16, 6, 26, 32, 3, 36, 0, 11, 30, 0, 32, 0, 65, 12, 77, 4, 127, 65, 12, 5, 32, 0, 65, 4, 106, 65, 15, 106, 65, 15, 65, 127, 115, 113, 65, 4, 107, 11, 11, 35, 0, 32, 0, 65, 252, 255, 255, 255, 3, 79, 4, 64, 2, 64, 65, 32, 65, 160, 1, 65, 205, 3, 65, 30, 16, 0, 0, 11, 0, 11, 32, 0, 16, 8, 11, 196, 2, 1, 8, 127, 32, 1, 65, 128, 2, 73, 4, 64, 65, 0, 33, 2, 32, 1, 65, 4, 118, 33, 3, 5, 32, 1, 65, 254, 255, 255, 255, 1, 73, 4, 127, 32, 1, 65, 1, 65, 27, 32, 1, 103, 107, 116, 106, 65, 1, 107, 5, 32, 1, 11, 33, 4, 65, 31, 32, 4, 103, 107, 33, 2, 32, 4, 32, 2, 65, 4, 107, 118, 65, 1, 65, 4, 116, 115, 33, 3, 32, 2, 65, 8, 65, 1, 107, 107, 33, 2, 11, 65, 1, 26, 32, 2, 65, 23, 73, 4, 127, 32, 3, 65, 16, 73, 5, 65, 0, 11, 69, 4, 64, 65, 0, 65, 160, 1, 65, 205, 2, 65, 14, 16, 0, 0, 11, 2, 127, 32, 0, 33, 5, 32, 2, 33, 4, 32, 5, 32, 4, 65, 2, 116, 106, 40, 2, 4, 11, 65, 0, 65, 127, 115, 32, 3, 116, 113, 33, 6, 65, 0, 33, 7, 32, 6, 69, 4, 64, 32, 0, 40, 2, 0, 65, 0, 65, 127, 115, 32, 2, 65, 1, 106, 116, 113, 33, 5, 32, 5, 69, 4, 64, 65, 0, 33, 7, 5, 32, 5, 104, 33, 2, 2, 127, 32, 0, 33, 8, 32, 2, 33, 4, 32, 8, 32, 4, 65, 2, 116, 106, 40, 2, 4, 11, 33, 6, 65, 1, 26, 32, 6, 69, 4, 64, 65, 0, 65, 160, 1, 65, 218, 2, 65, 18, 16, 0, 0, 11, 2, 127, 32, 0, 33, 9, 32, 2, 33, 8, 32, 6, 104, 33, 4, 32, 9, 32, 8, 65, 4, 116, 32, 4, 106, 65, 2, 116, 106, 40, 2, 96, 11, 33, 7, 11, 5, 2, 127, 32, 0, 33, 9, 32, 2, 33, 8, 32, 6, 104, 33, 4, 32, 9, 32, 8, 65, 4, 116, 32, 4, 106, 65, 2, 116, 106, 40, 2, 96, 11, 33, 7, 11, 32, 7, 11, 146, 1, 1, 6, 127, 65, 0, 26, 32, 1, 65, 254, 255, 255, 255, 1, 73, 4, 64, 32, 1, 65, 1, 65, 27, 32, 1, 103, 107, 116, 65, 1, 107, 106, 33, 1, 11, 63, 0, 33, 2, 32, 1, 65, 4, 32, 2, 65, 16, 116, 65, 4, 107, 2, 127, 32, 0, 33, 3, 32, 3, 40, 2, 160, 12, 11, 71, 116, 106, 33, 1, 32, 1, 65, 255, 255, 3, 106, 65, 255, 255, 3, 65, 127, 115, 113, 65, 16, 118, 33, 4, 32, 2, 34, 3, 32, 4, 34, 5, 32, 3, 32, 5, 74, 27, 33, 6, 32, 6, 64, 0, 65, 0, 72, 4, 64, 32, 4, 64, 0, 65, 0, 72, 4, 64, 0, 11, 11, 63, 0, 33, 7, 32, 0, 32, 2, 65, 16, 116, 32, 7, 65, 16, 116, 16, 6, 26, 11, 180, 1, 1, 3, 127, 32, 1, 40, 2, 0, 33, 3, 65, 1, 26, 32, 2, 65, 4, 106, 65, 15, 113, 69, 69, 4, 64, 65, 0, 65, 160, 1, 65, 232, 2, 65, 14, 16, 0, 0, 11, 32, 3, 65, 3, 65, 127, 115, 113, 32, 2, 107, 33, 4, 32, 4, 65, 4, 65, 12, 106, 79, 4, 64, 32, 1, 32, 2, 32, 3, 65, 2, 113, 114, 54, 2, 0, 32, 1, 65, 4, 106, 32, 2, 106, 33, 5, 32, 5, 32, 4, 65, 4, 107, 65, 1, 114, 54, 2, 0, 32, 0, 32, 5, 16, 5, 5, 32, 1, 32, 3, 65, 1, 65, 127, 115, 113, 54, 2, 0, 2, 127, 32, 1, 33, 5, 32, 5, 65, 4, 106, 32, 5, 40, 2, 0, 65, 3, 65, 127, 115, 113, 106, 11, 2, 127, 32, 1, 33, 5, 32, 5, 65, 4, 106, 32, 5, 40, 2, 0, 65, 3, 65, 127, 115, 113, 106, 11, 40, 2, 0, 65, 2, 65, 127, 115, 113, 54, 2, 0, 11, 11, 113, 1, 2, 127, 32, 1, 16, 9, 33, 2, 32, 0, 32, 2, 16, 10, 33, 3, 32, 3, 69, 4, 64, 32, 0, 32, 2, 16, 11, 32, 0, 32, 2, 16, 10, 33, 3, 65, 1, 26, 32, 3, 69, 4, 64, 65, 0, 65, 160, 1, 65, 242, 3, 65, 16, 16, 0, 0, 11, 11, 65, 1, 26, 32, 3, 40, 2, 0, 65, 3, 65, 127, 115, 113, 32, 2, 79, 69, 4, 64, 65, 0, 65, 160, 1, 65, 244, 3, 65, 14, 16, 0, 0, 11, 32, 0, 32, 3, 16, 4, 32, 0, 32, 3, 32, 2, 16, 12, 65, 0, 26, 32, 3, 11, 19, 0, 35, 0, 69, 4, 64, 16, 7, 11, 35, 0, 32, 0, 16, 13, 65, 4, 106, 11, 82, 1, 2, 127, 32, 0, 65, 236, 255, 255, 255, 3, 75, 4, 64, 2, 64, 65, 32, 65, 224, 0, 65, 147, 2, 65, 30, 16, 0, 0, 11, 0, 11, 65, 16, 32, 0, 106, 16, 14, 33, 2, 32, 2, 65, 4, 107, 33, 3, 32, 3, 65, 0, 54, 2, 4, 32, 3, 65, 0, 54, 2, 8, 32, 3, 32, 1, 54, 2, 12, 32, 3, 32, 0, 54, 2, 16, 32, 2, 65, 16, 106, 11, 62, 1, 1, 127, 32, 0, 65, 4, 107, 33, 1, 32, 0, 65, 0, 71, 4, 127, 32, 0, 65, 15, 113, 69, 5, 65, 0, 11, 4, 127, 32, 1, 40, 2, 0, 65, 1, 113, 69, 5, 65, 0, 11, 69, 4, 64, 65, 0, 65, 160, 1, 65, 179, 4, 65, 3, 16, 0, 0, 11, 32, 1, 11, 160, 17, 1, 4, 127, 2, 64, 3, 64, 32, 2, 4, 127, 32, 1, 65, 3, 113, 5, 65, 0, 11, 33, 5, 32, 5, 4, 64, 2, 127, 32, 0, 34, 6, 65, 1, 106, 33, 0, 32, 6, 11, 2, 127, 32, 1, 34, 6, 65, 1, 106, 33, 1, 32, 6, 11, 45, 0, 0, 58, 0, 0, 32, 2, 65, 1, 107, 33, 2, 12, 1, 11, 11, 11, 32, 0, 65, 3, 113, 65, 0, 70, 4, 64, 2, 64, 3, 64, 32, 2, 65, 16, 79, 33, 5, 32, 5, 4, 64, 32, 0, 32, 1, 40, 2, 0, 54, 2, 0, 32, 0, 65, 4, 106, 32, 1, 65, 4, 106, 40, 2, 0, 54, 2, 0, 32, 0, 65, 8, 106, 32, 1, 65, 8, 106, 40, 2, 0, 54, 2, 0, 32, 0, 65, 12, 106, 32, 1, 65, 12, 106, 40, 2, 0, 54, 2, 0, 32, 1, 65, 16, 106, 33, 1, 32, 0, 65, 16, 106, 33, 0, 32, 2, 65, 16, 107, 33, 2, 12, 1, 11, 11, 11, 32, 2, 65, 8, 113, 4, 64, 32, 0, 32, 1, 40, 2, 0, 54, 2, 0, 32, 0, 65, 4, 106, 32, 1, 65, 4, 106, 40, 2, 0, 54, 2, 0, 32, 0, 65, 8, 106, 33, 0, 32, 1, 65, 8, 106, 33, 1, 11, 32, 2, 65, 4, 113, 4, 64, 32, 0, 32, 1, 40, 2, 0, 54, 2, 0, 32, 0, 65, 4, 106, 33, 0, 32, 1, 65, 4, 106, 33, 1, 11, 32, 2, 65, 2, 113, 4, 64, 32, 0, 32, 1, 47, 1, 0, 59, 1, 0, 32, 0, 65, 2, 106, 33, 0, 32, 1, 65, 2, 106, 33, 1, 11, 32, 2, 65, 1, 113, 4, 64, 2, 127, 32, 0, 34, 5, 65, 1, 106, 33, 0, 32, 5, 11, 2, 127, 32, 1, 34, 5, 65, 1, 106, 33, 1, 32, 5, 11, 45, 0, 0, 58, 0, 0, 11, 15, 11, 32, 2, 65, 32, 79, 4, 64, 2, 64, 2, 64, 2, 64, 2, 64, 32, 0, 65, 3, 113, 33, 5, 32, 5, 65, 1, 70, 13, 0, 32, 5, 65, 2, 70, 13, 1, 32, 5, 65, 3, 70, 13, 2, 12, 3, 11, 2, 64, 32, 1, 40, 2, 0, 33, 3, 2, 127, 32, 0, 34, 5, 65, 1, 106, 33, 0, 32, 5, 11, 2, 127, 32, 1, 34, 5, 65, 1, 106, 33, 1, 32, 5, 11, 45, 0, 0, 58, 0, 0, 2, 127, 32, 0, 34, 5, 65, 1, 106, 33, 0, 32, 5, 11, 2, 127, 32, 1, 34, 5, 65, 1, 106, 33, 1, 32, 5, 11, 45, 0, 0, 58, 0, 0, 2, 127, 32, 0, 34, 5, 65, 1, 106, 33, 0, 32, 5, 11, 2, 127, 32, 1, 34, 5, 65, 1, 106, 33, 1, 32, 5, 11, 45, 0, 0, 58, 0, 0, 32, 2, 65, 3, 107, 33, 2, 2, 64, 3, 64, 32, 2, 65, 17, 79, 33, 5, 32, 5, 4, 64, 32, 1, 65, 1, 106, 40, 2, 0, 33, 4, 32, 0, 32, 3, 65, 24, 118, 32, 4, 65, 8, 116, 114, 54, 2, 0, 32, 1, 65, 5, 106, 40, 2, 0, 33, 3, 32, 0, 65, 4, 106, 32, 4, 65, 24, 118, 32, 3, 65, 8, 116, 114, 54, 2, 0, 32, 1, 65, 9, 106, 40, 2, 0, 33, 4, 32, 0, 65, 8, 106, 32, 3, 65, 24, 118, 32, 4, 65, 8, 116, 114, 54, 2, 0, 32, 1, 65, 13, 106, 40, 2, 0, 33, 3, 32, 0, 65, 12, 106, 32, 4, 65, 24, 118, 32, 3, 65, 8, 116, 114, 54, 2, 0, 32, 1, 65, 16, 106, 33, 1, 32, 0, 65, 16, 106, 33, 0, 32, 2, 65, 16, 107, 33, 2, 12, 1, 11, 11, 11, 12, 3, 11, 0, 11, 2, 64, 32, 1, 40, 2, 0, 33, 3, 2, 127, 32, 0, 34, 5, 65, 1, 106, 33, 0, 32, 5, 11, 2, 127, 32, 1, 34, 5, 65, 1, 106, 33, 1, 32, 5, 11, 45, 0, 0, 58, 0, 0, 2, 127, 32, 0, 34, 5, 65, 1, 106, 33, 0, 32, 5, 11, 2, 127, 32, 1, 34, 5, 65, 1, 106, 33, 1, 32, 5, 11, 45, 0, 0, 58, 0, 0, 32, 2, 65, 2, 107, 33, 2, 2, 64, 3, 64, 32, 2, 65, 18, 79, 33, 5, 32, 5, 4, 64, 32, 1, 65, 2, 106, 40, 2, 0, 33, 4, 32, 0, 32, 3, 65, 16, 118, 32, 4, 65, 16, 116, 114, 54, 2, 0, 32, 1, 65, 6, 106, 40, 2, 0, 33, 3, 32, 0, 65, 4, 106, 32, 4, 65, 16, 118, 32, 3, 65, 16, 116, 114, 54, 2, 0, 32, 1, 65, 10, 106, 40, 2, 0, 33, 4, 32, 0, 65, 8, 106, 32, 3, 65, 16, 118, 32, 4, 65, 16, 116, 114, 54, 2, 0, 32, 1, 65, 14, 106, 40, 2, 0, 33, 3, 32, 0, 65, 12, 106, 32, 4, 65, 16, 118, 32, 3, 65, 16, 116, 114, 54, 2, 0, 32, 1, 65, 16, 106, 33, 1, 32, 0, 65, 16, 106, 33, 0, 32, 2, 65, 16, 107, 33, 2, 12, 1, 11, 11, 11, 12, 2, 11, 0, 11, 2, 64, 32, 1, 40, 2, 0, 33, 3, 2, 127, 32, 0, 34, 5, 65, 1, 106, 33, 0, 32, 5, 11, 2, 127, 32, 1, 34, 5, 65, 1, 106, 33, 1, 32, 5, 11, 45, 0, 0, 58, 0, 0, 32, 2, 65, 1, 107, 33, 2, 2, 64, 3, 64, 32, 2, 65, 19, 79, 33, 5, 32, 5, 4, 64, 32, 1, 65, 3, 106, 40, 2, 0, 33, 4, 32, 0, 32, 3, 65, 8, 118, 32, 4, 65, 24, 116, 114, 54, 2, 0, 32, 1, 65, 7, 106, 40, 2, 0, 33, 3, 32, 0, 65, 4, 106, 32, 4, 65, 8, 118, 32, 3, 65, 24, 116, 114, 54, 2, 0, 32, 1, 65, 11, 106, 40, 2, 0, 33, 4, 32, 0, 65, 8, 106, 32, 3, 65, 8, 118, 32, 4, 65, 24, 116, 114, 54, 2, 0, 32, 1, 65, 15, 106, 40, 2, 0, 33, 3, 32, 0, 65, 12, 106, 32, 4, 65, 8, 118, 32, 3, 65, 24, 116, 114, 54, 2, 0, 32, 1, 65, 16, 106, 33, 1, 32, 0, 65, 16, 106, 33, 0, 32, 2, 65, 16, 107, 33, 2, 12, 1, 11, 11, 11, 12, 1, 11, 0, 11, 11, 32, 2, 65, 16, 113, 4, 64, 2, 127, 32, 0, 34, 5, 65, 1, 106, 33, 0, 32, 5, 11, 2, 127, 32, 1, 34, 5, 65, 1, 106, 33, 1, 32, 5, 11, 45, 0, 0, 58, 0, 0, 2, 127, 32, 0, 34, 5, 65, 1, 106, 33, 0, 32, 5, 11, 2, 127, 32, 1, 34, 5, 65, 1, 106, 33, 1, 32, 5, 11, 45, 0, 0, 58, 0, 0, 2, 127, 32, 0, 34, 5, 65, 1, 106, 33, 0, 32, 5, 11, 2, 127, 32, 1, 34, 5, 65, 1, 106, 33, 1, 32, 5, 11, 45, 0, 0, 58, 0, 0, 2, 127, 32, 0, 34, 5, 65, 1, 106, 33, 0, 32, 5, 11, 2, 127, 32, 1, 34, 5, 65, 1, 106, 33, 1, 32, 5, 11, 45, 0, 0, 58, 0, 0, 2, 127, 32, 0, 34, 5, 65, 1, 106, 33, 0, 32, 5, 11, 2, 127, 32, 1, 34, 5, 65, 1, 106, 33, 1, 32, 5, 11, 45, 0, 0, 58, 0, 0, 2, 127, 32, 0, 34, 5, 65, 1, 106, 33, 0, 32, 5, 11, 2, 127, 32, 1, 34, 5, 65, 1, 106, 33, 1, 32, 5, 11, 45, 0, 0, 58, 0, 0, 2, 127, 32, 0, 34, 5, 65, 1, 106, 33, 0, 32, 5, 11, 2, 127, 32, 1, 34, 5, 65, 1, 106, 33, 1, 32, 5, 11, 45, 0, 0, 58, 0, 0, 2, 127, 32, 0, 34, 5, 65, 1, 106, 33, 0, 32, 5, 11, 2, 127, 32, 1, 34, 5, 65, 1, 106, 33, 1, 32, 5, 11, 45, 0, 0, 58, 0, 0, 2, 127, 32, 0, 34, 5, 65, 1, 106, 33, 0, 32, 5, 11, 2, 127, 32, 1, 34, 5, 65, 1, 106, 33, 1, 32, 5, 11, 45, 0, 0, 58, 0, 0, 2, 127, 32, 0, 34, 5, 65, 1, 106, 33, 0, 32, 5, 11, 2, 127, 32, 1, 34, 5, 65, 1, 106, 33, 1, 32, 5, 11, 45, 0, 0, 58, 0, 0, 2, 127, 32, 0, 34, 5, 65, 1, 106, 33, 0, 32, 5, 11, 2, 127, 32, 1, 34, 5, 65, 1, 106, 33, 1, 32, 5, 11, 45, 0, 0, 58, 0, 0, 2, 127, 32, 0, 34, 5, 65, 1, 106, 33, 0, 32, 5, 11, 2, 127, 32, 1, 34, 5, 65, 1, 106, 33, 1, 32, 5, 11, 45, 0, 0, 58, 0, 0, 2, 127, 32, 0, 34, 5, 65, 1, 106, 33, 0, 32, 5, 11, 2, 127, 32, 1, 34, 5, 65, 1, 106, 33, 1, 32, 5, 11, 45, 0, 0, 58, 0, 0, 2, 127, 32, 0, 34, 5, 65, 1, 106, 33, 0, 32, 5, 11, 2, 127, 32, 1, 34, 5, 65, 1, 106, 33, 1, 32, 5, 11, 45, 0, 0, 58, 0, 0, 2, 127, 32, 0, 34, 5, 65, 1, 106, 33, 0, 32, 5, 11, 2, 127, 32, 1, 34, 5, 65, 1, 106, 33, 1, 32, 5, 11, 45, 0, 0, 58, 0, 0, 2, 127, 32, 0, 34, 5, 65, 1, 106, 33, 0, 32, 5, 11, 2, 127, 32, 1, 34, 5, 65, 1, 106, 33, 1, 32, 5, 11, 45, 0, 0, 58, 0, 0, 11, 32, 2, 65, 8, 113, 4, 64, 2, 127, 32, 0, 34, 5, 65, 1, 106, 33, 0, 32, 5, 11, 2, 127, 32, 1, 34, 5, 65, 1, 106, 33, 1, 32, 5, 11, 45, 0, 0, 58, 0, 0, 2, 127, 32, 0, 34, 5, 65, 1, 106, 33, 0, 32, 5, 11, 2, 127, 32, 1, 34, 5, 65, 1, 106, 33, 1, 32, 5, 11, 45, 0, 0, 58, 0, 0, 2, 127, 32, 0, 34, 5, 65, 1, 106, 33, 0, 32, 5, 11, 2, 127, 32, 1, 34, 5, 65, 1, 106, 33, 1, 32, 5, 11, 45, 0, 0, 58, 0, 0, 2, 127, 32, 0, 34, 5, 65, 1, 106, 33, 0, 32, 5, 11, 2, 127, 32, 1, 34, 5, 65, 1, 106, 33, 1, 32, 5, 11, 45, 0, 0, 58, 0, 0, 2, 127, 32, 0, 34, 5, 65, 1, 106, 33, 0, 32, 5, 11, 2, 127, 32, 1, 34, 5, 65, 1, 106, 33, 1, 32, 5, 11, 45, 0, 0, 58, 0, 0, 2, 127, 32, 0, 34, 5, 65, 1, 106, 33, 0, 32, 5, 11, 2, 127, 32, 1, 34, 5, 65, 1, 106, 33, 1, 32, 5, 11, 45, 0, 0, 58, 0, 0, 2, 127, 32, 0, 34, 5, 65, 1, 106, 33, 0, 32, 5, 11, 2, 127, 32, 1, 34, 5, 65, 1, 106, 33, 1, 32, 5, 11, 45, 0, 0, 58, 0, 0, 2, 127, 32, 0, 34, 5, 65, 1, 106, 33, 0, 32, 5, 11, 2, 127, 32, 1, 34, 5, 65, 1, 106, 33, 1, 32, 5, 11, 45, 0, 0, 58, 0, 0, 11, 32, 2, 65, 4, 113, 4, 64, 2, 127, 32, 0, 34, 5, 65, 1, 106, 33, 0, 32, 5, 11, 2, 127, 32, 1, 34, 5, 65, 1, 106, 33, 1, 32, 5, 11, 45, 0, 0, 58, 0, 0, 2, 127, 32, 0, 34, 5, 65, 1, 106, 33, 0, 32, 5, 11, 2, 127, 32, 1, 34, 5, 65, 1, 106, 33, 1, 32, 5, 11, 45, 0, 0, 58, 0, 0, 2, 127, 32, 0, 34, 5, 65, 1, 106, 33, 0, 32, 5, 11, 2, 127, 32, 1, 34, 5, 65, 1, 106, 33, 1, 32, 5, 11, 45, 0, 0, 58, 0, 0, 2, 127, 32, 0, 34, 5, 65, 1, 106, 33, 0, 32, 5, 11, 2, 127, 32, 1, 34, 5, 65, 1, 106, 33, 1, 32, 5, 11, 45, 0, 0, 58, 0, 0, 11, 32, 2, 65, 2, 113, 4, 64, 2, 127, 32, 0, 34, 5, 65, 1, 106, 33, 0, 32, 5, 11, 2, 127, 32, 1, 34, 5, 65, 1, 106, 33, 1, 32, 5, 11, 45, 0, 0, 58, 0, 0, 2, 127, 32, 0, 34, 5, 65, 1, 106, 33, 0, 32, 5, 11, 2, 127, 32, 1, 34, 5, 65, 1, 106, 33, 1, 32, 5, 11, 45, 0, 0, 58, 0, 0, 11, 32, 2, 65, 1, 113, 4, 64, 2, 127, 32, 0, 34, 5, 65, 1, 106, 33, 0, 32, 5, 11, 2, 127, 32, 1, 34, 5, 65, 1, 106, 33, 1, 32, 5, 11, 45, 0, 0, 58, 0, 0, 11, 11, 169, 3, 1, 5, 127, 2, 64, 32, 0, 33, 5, 32, 1, 33, 4, 32, 2, 33, 3, 32, 5, 32, 4, 70, 4, 64, 12, 1, 11, 65, 0, 65, 1, 72, 26, 32, 4, 32, 5, 107, 32, 3, 107, 65, 0, 32, 3, 65, 1, 116, 107, 77, 4, 64, 32, 5, 32, 4, 32, 3, 16, 17, 12, 1, 11, 32, 5, 32, 4, 73, 4, 64, 65, 0, 65, 2, 72, 26, 32, 4, 65, 7, 113, 32, 5, 65, 7, 113, 70, 4, 64, 2, 64, 3, 64, 32, 5, 65, 7, 113, 33, 6, 32, 6, 4, 64, 32, 3, 69, 4, 64, 12, 6, 11, 32, 3, 65, 1, 107, 33, 3, 2, 127, 32, 5, 34, 7, 65, 1, 106, 33, 5, 32, 7, 11, 2, 127, 32, 4, 34, 7, 65, 1, 106, 33, 4, 32, 7, 11, 45, 0, 0, 58, 0, 0, 12, 1, 11, 11, 11, 2, 64, 3, 64, 32, 3, 65, 8, 79, 33, 6, 32, 6, 4, 64, 32, 5, 32, 4, 41, 3, 0, 55, 3, 0, 32, 3, 65, 8, 107, 33, 3, 32, 5, 65, 8, 106, 33, 5, 32, 4, 65, 8, 106, 33, 4, 12, 1, 11, 11, 11, 11, 2, 64, 3, 64, 32, 3, 33, 6, 32, 6, 4, 64, 2, 127, 32, 5, 34, 7, 65, 1, 106, 33, 5, 32, 7, 11, 2, 127, 32, 4, 34, 7, 65, 1, 106, 33, 4, 32, 7, 11, 45, 0, 0, 58, 0, 0, 32, 3, 65, 1, 107, 33, 3, 12, 1, 11, 11, 11, 5, 65, 0, 65, 2, 72, 26, 32, 4, 65, 7, 113, 32, 5, 65, 7, 113, 70, 4, 64, 2, 64, 3, 64, 32, 5, 32, 3, 106, 65, 7, 113, 33, 6, 32, 6, 4, 64, 32, 3, 69, 4, 64, 12, 6, 11, 32, 5, 32, 3, 65, 1, 107, 34, 3, 106, 32, 4, 32, 3, 106, 45, 0, 0, 58, 0, 0, 12, 1, 11, 11, 11, 2, 64, 3, 64, 32, 3, 65, 8, 79, 33, 6, 32, 6, 4, 64, 32, 3, 65, 8, 107, 33, 3, 32, 5, 32, 3, 106, 32, 4, 32, 3, 106, 41, 3, 0, 55, 3, 0, 12, 1, 11, 11, 11, 11, 2, 64, 3, 64, 32, 3, 33, 6, 32, 6, 4, 64, 32, 5, 32, 3, 65, 1, 107, 34, 3, 106, 32, 4, 32, 3, 106, 45, 0, 0, 58, 0, 0, 12, 1, 11, 11, 11, 11, 11, 11, 24, 0, 32, 1, 32, 1, 40, 2, 0, 65, 1, 114, 54, 2, 0, 65, 0, 26, 32, 0, 32, 1, 16, 5, 11, 54, 1, 1, 127, 32, 0, 32, 2, 16, 13, 33, 3, 32, 3, 65, 4, 106, 32, 1, 65, 4, 106, 32, 1, 40, 2, 0, 65, 3, 65, 127, 115, 113, 16, 18, 32, 1, 35, 40, 79, 4, 64, 65, 0, 26, 32, 0, 32, 1, 16, 19, 11, 32, 3, 11, 155, 1, 1, 6, 127, 32, 2, 16, 9, 33, 3, 32, 1, 40, 2, 0, 33, 4, 32, 4, 65, 3, 65, 127, 115, 113, 33, 5, 32, 3, 32, 5, 77, 4, 64, 32, 0, 32, 1, 32, 3, 16, 12, 65, 0, 26, 32, 1, 15, 11, 2, 127, 32, 1, 33, 6, 32, 6, 65, 4, 106, 32, 6, 40, 2, 0, 65, 3, 65, 127, 115, 113, 106, 11, 33, 7, 32, 7, 40, 2, 0, 33, 8, 32, 8, 65, 1, 113, 4, 64, 32, 5, 65, 4, 106, 32, 8, 65, 3, 65, 127, 115, 113, 106, 33, 6, 32, 6, 32, 3, 79, 4, 64, 32, 0, 32, 7, 16, 4, 32, 1, 32, 4, 65, 3, 113, 32, 6, 114, 54, 2, 0, 32, 0, 32, 1, 32, 3, 16, 12, 65, 0, 26, 32, 1, 15, 11, 11, 32, 0, 32, 1, 32, 2, 16, 20, 11, 42, 0, 35, 0, 69, 4, 64, 16, 7, 11, 32, 0, 35, 40, 73, 4, 127, 35, 0, 32, 0, 16, 16, 32, 1, 16, 20, 5, 35, 0, 32, 0, 16, 16, 32, 1, 16, 21, 11, 65, 4, 106, 11, 62, 1, 1, 127, 32, 1, 65, 236, 255, 255, 255, 3, 75, 4, 64, 2, 64, 65, 32, 65, 224, 0, 65, 160, 2, 65, 30, 16, 0, 0, 11, 0, 11, 32, 0, 65, 16, 107, 65, 16, 32, 1, 106, 16, 22, 33, 2, 32, 2, 65, 4, 107, 32, 1, 54, 2, 16, 32, 2, 65, 16, 106, 11, 98, 1, 1, 127, 32, 0, 40, 2, 4, 33, 1, 32, 1, 65, 255, 255, 255, 255, 0, 65, 127, 115, 113, 32, 1, 65, 1, 106, 65, 255, 255, 255, 255, 0, 65, 127, 115, 113, 70, 69, 4, 64, 65, 0, 65, 224, 0, 65, 237, 0, 65, 3, 16, 0, 0, 11, 32, 0, 32, 1, 65, 1, 106, 54, 2, 4, 65, 0, 26, 65, 1, 26, 32, 0, 40, 2, 0, 65, 1, 113, 69, 69, 4, 64, 65, 0, 65, 224, 0, 65, 240, 0, 65, 14, 16, 0, 0, 11, 11, 19, 0, 32, 0, 35, 40, 75, 4, 64, 32, 0, 65, 20, 107, 16, 24, 11, 32, 0, 11, 17, 0, 32, 0, 35, 40, 75, 4, 64, 32, 0, 65, 20, 107, 16, 91, 11, 11, 10, 0, 32, 0, 32, 0, 65, 1, 117, 115, 11, 64, 0, 32, 0, 32, 0, 66, 33, 136, 133, 33, 0, 32, 0, 66, 205, 153, 214, 234, 254, 250, 235, 168, 127, 126, 33, 0, 32, 0, 32, 0, 66, 33, 136, 133, 33, 0, 32, 0, 66, 211, 216, 151, 212, 225, 191, 174, 231, 68, 126, 33, 0, 32, 0, 32, 0, 66, 33, 136, 133, 33, 0, 32, 0, 11, 59, 0, 32, 0, 65, 245, 243, 173, 233, 6, 106, 33, 0, 32, 0, 32, 0, 65, 15, 118, 115, 32, 0, 65, 1, 114, 108, 33, 0, 32, 0, 32, 0, 32, 0, 32, 0, 65, 7, 118, 115, 32, 0, 65, 61, 114, 108, 106, 115, 33, 0, 32, 0, 32, 0, 65, 14, 118, 115, 11, 89, 0, 65, 1, 36, 4, 32, 0, 16, 28, 36, 5, 35, 5, 66, 127, 133, 16, 28, 36, 6, 32, 0, 167, 16, 29, 36, 7, 35, 7, 16, 29, 36, 8, 35, 5, 66, 0, 82, 4, 127, 35, 6, 66, 0, 82, 5, 65, 0, 11, 4, 127, 35, 7, 65, 0, 71, 5, 65, 0, 11, 4, 127, 35, 8, 65, 0, 71, 5, 65, 0, 11, 69, 4, 64, 65, 0, 65, 224, 1, 65, 247, 10, 65, 5, 16, 0, 0, 11, 11, 99, 1, 3, 126, 35, 4, 69, 4, 64, 16, 1, 189, 16, 30, 11, 35, 5, 33, 0, 35, 6, 33, 1, 32, 1, 36, 5, 32, 0, 32, 0, 66, 23, 134, 133, 33, 0, 32, 0, 32, 0, 66, 17, 136, 133, 33, 0, 32, 0, 32, 1, 133, 33, 0, 32, 0, 32, 1, 66, 26, 136, 133, 33, 0, 32, 0, 36, 6, 32, 1, 66, 12, 136, 66, 128, 128, 128, 128, 128, 128, 128, 248, 63, 132, 33, 2, 32, 2, 191, 68, 0, 0, 0, 0, 0, 0, 240, 63, 161, 11, 150, 3, 2, 7, 127, 1, 126, 2, 64, 32, 0, 33, 5, 32, 1, 33, 4, 32, 2, 33, 3, 65, 0, 65, 1, 74, 26, 2, 64, 32, 3, 69, 4, 64, 12, 2, 11, 32, 5, 32, 3, 106, 65, 4, 107, 33, 6, 32, 5, 32, 4, 58, 0, 0, 32, 6, 32, 4, 58, 0, 3, 32, 3, 65, 2, 77, 4, 64, 12, 2, 11, 32, 5, 32, 4, 58, 0, 1, 32, 5, 32, 4, 58, 0, 2, 32, 6, 32, 4, 58, 0, 2, 32, 6, 32, 4, 58, 0, 1, 32, 3, 65, 6, 77, 4, 64, 12, 2, 11, 32, 5, 32, 4, 58, 0, 3, 32, 6, 32, 4, 58, 0, 0, 32, 3, 65, 8, 77, 4, 64, 12, 2, 11, 65, 0, 32, 5, 107, 65, 3, 113, 33, 7, 32, 5, 32, 7, 106, 33, 5, 32, 3, 32, 7, 107, 33, 3, 32, 3, 65, 124, 113, 33, 3, 65, 127, 65, 255, 1, 110, 32, 4, 65, 255, 1, 113, 108, 33, 8, 32, 5, 32, 3, 106, 65, 28, 107, 33, 6, 32, 5, 32, 8, 54, 2, 0, 32, 6, 32, 8, 54, 2, 24, 32, 3, 65, 8, 77, 4, 64, 12, 2, 11, 32, 5, 32, 8, 54, 2, 4, 32, 5, 32, 8, 54, 2, 8, 32, 6, 32, 8, 54, 2, 16, 32, 6, 32, 8, 54, 2, 20, 32, 3, 65, 24, 77, 4, 64, 12, 2, 11, 32, 5, 32, 8, 54, 2, 12, 32, 5, 32, 8, 54, 2, 16, 32, 5, 32, 8, 54, 2, 20, 32, 5, 32, 8, 54, 2, 24, 32, 6, 32, 8, 54, 2, 0, 32, 6, 32, 8, 54, 2, 4, 32, 6, 32, 8, 54, 2, 8, 32, 6, 32, 8, 54, 2, 12, 65, 24, 32, 5, 65, 4, 113, 106, 33, 7, 32, 5, 32, 7, 106, 33, 5, 32, 3, 32, 7, 107, 33, 3, 32, 8, 173, 32, 8, 173, 66, 32, 134, 132, 33, 10, 2, 64, 3, 64, 32, 3, 65, 32, 79, 33, 9, 32, 9, 4, 64, 32, 5, 32, 10, 55, 3, 0, 32, 5, 32, 10, 55, 3, 8, 32, 5, 32, 10, 55, 3, 16, 32, 5, 32, 10, 55, 3, 24, 32, 3, 65, 32, 107, 33, 3, 32, 5, 65, 32, 106, 33, 5, 12, 1, 11, 11, 11, 11, 11, 11, 166, 1, 1, 5, 127, 2, 64, 32, 0, 69, 4, 64, 65, 16, 65, 3, 16, 15, 16, 25, 33, 0, 11, 32, 0, 65, 0, 54, 2, 0, 32, 0, 65, 0, 54, 2, 4, 32, 0, 65, 0, 54, 2, 8, 32, 0, 65, 0, 54, 2, 12, 11, 32, 1, 65, 252, 255, 255, 255, 3, 65, 2, 118, 75, 4, 64, 2, 64, 65, 128, 3, 65, 176, 3, 65, 57, 65, 60, 16, 0, 0, 11, 0, 11, 32, 1, 65, 2, 116, 33, 2, 32, 2, 65, 0, 16, 15, 33, 3, 32, 3, 65, 0, 32, 2, 16, 32, 32, 0, 34, 4, 2, 127, 32, 3, 34, 5, 32, 4, 40, 2, 0, 34, 6, 71, 4, 64, 32, 5, 16, 25, 33, 5, 32, 6, 16, 26, 11, 32, 5, 11, 54, 2, 0, 32, 0, 32, 3, 54, 2, 4, 32, 0, 32, 2, 54, 2, 8, 32, 0, 32, 1, 54, 2, 12, 32, 0, 11, 222, 2, 1, 3, 127, 65, 1, 33, 2, 65, 0, 65, 1, 72, 26, 32, 1, 65, 0, 76, 4, 64, 32, 0, 65, 127, 70, 4, 64, 65, 127, 65, 1, 32, 1, 65, 1, 113, 27, 15, 11, 32, 1, 65, 0, 70, 32, 0, 65, 1, 70, 114, 15, 5, 32, 1, 65, 1, 70, 4, 64, 32, 0, 15, 5, 32, 1, 65, 2, 70, 4, 64, 32, 0, 32, 0, 108, 15, 5, 32, 1, 65, 32, 72, 4, 64, 65, 32, 32, 1, 103, 107, 33, 3, 2, 64, 2, 64, 2, 64, 2, 64, 2, 64, 2, 64, 32, 3, 33, 4, 32, 4, 65, 5, 70, 13, 0, 32, 4, 65, 4, 70, 13, 1, 32, 4, 65, 3, 70, 13, 2, 32, 4, 65, 2, 70, 13, 3, 32, 4, 65, 1, 70, 13, 4, 12, 5, 11, 2, 64, 32, 1, 65, 1, 113, 4, 64, 32, 2, 32, 0, 108, 33, 2, 11, 32, 1, 65, 1, 118, 33, 1, 32, 0, 32, 0, 108, 33, 0, 11, 11, 2, 64, 32, 1, 65, 1, 113, 4, 64, 32, 2, 32, 0, 108, 33, 2, 11, 32, 1, 65, 1, 118, 33, 1, 32, 0, 32, 0, 108, 33, 0, 11, 11, 2, 64, 32, 1, 65, 1, 113, 4, 64, 32, 2, 32, 0, 108, 33, 2, 11, 32, 1, 65, 1, 118, 33, 1, 32, 0, 32, 0, 108, 33, 0, 11, 11, 2, 64, 32, 1, 65, 1, 113, 4, 64, 32, 2, 32, 0, 108, 33, 2, 11, 32, 1, 65, 1, 118, 33, 1, 32, 0, 32, 0, 108, 33, 0, 11, 11, 32, 1, 65, 1, 113, 4, 64, 32, 2, 32, 0, 108, 33, 2, 11, 11, 32, 2, 15, 11, 11, 11, 11, 2, 64, 3, 64, 32, 1, 33, 3, 32, 3, 4, 64, 32, 1, 65, 1, 113, 4, 64, 32, 2, 32, 0, 108, 33, 2, 11, 32, 1, 65, 1, 118, 33, 1, 32, 0, 32, 0, 108, 33, 0, 12, 1, 11, 11, 11, 32, 2, 11, 161, 1, 1, 4, 127, 32, 0, 40, 2, 4, 33, 4, 32, 0, 40, 2, 12, 33, 5, 32, 2, 65, 0, 72, 4, 127, 32, 5, 32, 2, 106, 34, 6, 65, 0, 34, 7, 32, 6, 32, 7, 74, 27, 5, 32, 2, 34, 7, 32, 5, 34, 6, 32, 7, 32, 6, 72, 27, 11, 33, 2, 32, 3, 65, 0, 72, 4, 127, 32, 5, 32, 3, 106, 34, 6, 65, 0, 34, 7, 32, 6, 32, 7, 74, 27, 5, 32, 3, 34, 7, 32, 5, 34, 6, 32, 7, 32, 6, 72, 27, 11, 33, 3, 65, 0, 26, 2, 64, 65, 4, 65, 1, 70, 26, 2, 64, 3, 64, 32, 2, 32, 3, 72, 33, 7, 32, 7, 4, 64, 2, 64, 32, 4, 32, 2, 65, 2, 116, 106, 32, 1, 54, 2, 0, 11, 32, 2, 65, 1, 106, 33, 2, 12, 1, 11, 11, 11, 11, 32, 0, 16, 25, 11, 41, 2, 1, 127, 1, 124, 32, 2, 16, 25, 33, 2, 2, 124, 16, 31, 68, 0, 0, 0, 254, 255, 255, 175, 65, 162, 33, 4, 32, 4, 156, 11, 170, 33, 3, 32, 2, 16, 26, 32, 3, 11, 27, 1, 1, 127, 32, 0, 32, 1, 16, 15, 33, 3, 32, 2, 4, 64, 32, 3, 32, 2, 32, 0, 16, 18, 11, 32, 3, 11, 61, 1, 3, 127, 65, 16, 32, 2, 16, 15, 33, 4, 32, 0, 32, 1, 116, 33, 5, 32, 5, 65, 0, 32, 3, 16, 37, 33, 6, 32, 4, 32, 6, 16, 25, 54, 2, 0, 32, 4, 32, 6, 54, 2, 4, 32, 4, 32, 5, 54, 2, 8, 32, 4, 32, 0, 54, 2, 12, 32, 4, 11, 148, 1, 1, 6, 127, 32, 1, 16, 25, 33, 1, 32, 0, 40, 2, 12, 33, 2, 32, 2, 65, 2, 65, 3, 65, 0, 16, 38, 16, 25, 33, 3, 32, 3, 40, 2, 4, 33, 4, 65, 0, 33, 5, 2, 64, 3, 64, 32, 5, 32, 2, 34, 6, 32, 0, 40, 2, 12, 34, 7, 32, 6, 32, 7, 72, 27, 72, 33, 6, 32, 6, 4, 64, 2, 64, 32, 0, 40, 2, 4, 32, 5, 65, 2, 116, 106, 40, 2, 0, 32, 5, 32, 0, 2, 127, 65, 3, 36, 19, 32, 1, 11, 40, 2, 0, 17, 4, 0, 33, 7, 65, 0, 26, 32, 4, 32, 5, 65, 2, 116, 106, 32, 7, 54, 2, 0, 11, 32, 5, 65, 1, 106, 33, 5, 12, 1, 11, 11, 11, 32, 3, 33, 5, 32, 1, 16, 26, 32, 5, 11, 166, 1, 1, 5, 127, 2, 64, 32, 0, 69, 4, 64, 65, 16, 65, 5, 16, 15, 16, 25, 33, 0, 11, 32, 0, 65, 0, 54, 2, 0, 32, 0, 65, 0, 54, 2, 4, 32, 0, 65, 0, 54, 2, 8, 32, 0, 65, 0, 54, 2, 12, 11, 32, 1, 65, 252, 255, 255, 255, 3, 65, 0, 118, 75, 4, 64, 2, 64, 65, 128, 3, 65, 176, 3, 65, 57, 65, 60, 16, 0, 0, 11, 0, 11, 32, 1, 65, 0, 116, 33, 2, 32, 2, 65, 0, 16, 15, 33, 3, 32, 3, 65, 0, 32, 2, 16, 32, 32, 0, 34, 4, 2, 127, 32, 3, 34, 5, 32, 4, 40, 2, 0, 34, 6, 71, 4, 64, 32, 5, 16, 25, 33, 5, 32, 6, 16, 26, 11, 32, 5, 11, 54, 2, 0, 32, 0, 32, 3, 54, 2, 4, 32, 0, 32, 2, 54, 2, 8, 32, 0, 32, 1, 54, 2, 12, 32, 0, 11, 109, 0, 32, 0, 69, 4, 64, 65, 36, 16, 14, 33, 0, 11, 32, 0, 65, 209, 218, 248, 228, 124, 54, 2, 0, 32, 0, 65, 147, 235, 156, 220, 1, 54, 2, 4, 32, 0, 65, 228, 214, 1, 54, 2, 8, 32, 0, 65, 127, 54, 2, 12, 32, 0, 65, 235, 148, 175, 175, 120, 54, 2, 16, 32, 0, 65, 181, 220, 202, 149, 124, 54, 2, 20, 32, 0, 65, 197, 224, 255, 213, 0, 54, 2, 24, 32, 0, 65, 197, 224, 255, 213, 0, 54, 2, 28, 32, 0, 65, 165, 226, 255, 133, 127, 54, 2, 32, 32, 0, 11, 213, 4, 0, 32, 0, 69, 4, 64, 65, 152, 2, 16, 14, 33, 0, 11, 32, 0, 65, 245, 228, 2, 54, 2, 0, 32, 0, 65, 175, 146, 21, 54, 2, 4, 32, 0, 65, 221, 128, 182, 240, 0, 54, 2, 8, 32, 0, 65, 25, 54, 2, 12, 32, 0, 65, 50, 54, 2, 16, 32, 0, 65, 228, 0, 54, 2, 20, 32, 0, 65, 220, 242, 21, 54, 2, 24, 32, 0, 65, 149, 201, 197, 2, 54, 2, 28, 32, 0, 65, 209, 184, 30, 54, 2, 32, 32, 0, 65, 149, 148, 41, 54, 2, 36, 32, 0, 65, 161, 178, 9, 54, 2, 40, 32, 0, 65, 201, 181, 59, 54, 2, 44, 32, 0, 65, 179, 188, 21, 54, 2, 48, 32, 0, 65, 236, 162, 52, 54, 2, 52, 32, 0, 65, 146, 27, 54, 2, 56, 32, 0, 65, 196, 174, 247, 6, 54, 2, 60, 32, 0, 65, 184, 213, 150, 1, 54, 2, 64, 32, 0, 65, 167, 176, 161, 192, 0, 54, 2, 68, 32, 0, 65, 217, 2, 54, 2, 72, 32, 0, 65, 222, 2, 54, 2, 76, 32, 0, 65, 200, 1, 54, 2, 80, 32, 0, 65, 235, 46, 54, 2, 84, 32, 0, 65, 15, 54, 2, 88, 32, 0, 65, 175, 41, 54, 2, 92, 32, 0, 65, 25, 54, 2, 96, 32, 0, 65, 224, 221, 0, 54, 2, 100, 32, 0, 65, 2, 54, 2, 104, 32, 0, 65, 175, 252, 14, 54, 2, 108, 32, 0, 65, 245, 1, 54, 2, 112, 32, 0, 65, 142, 249, 19, 54, 2, 116, 32, 0, 65, 28, 54, 2, 120, 32, 0, 65, 234, 221, 62, 54, 2, 124, 32, 0, 65, 225, 0, 54, 2, 128, 1, 32, 0, 65, 228, 207, 192, 0, 54, 2, 132, 1, 32, 0, 65, 46, 54, 2, 136, 1, 32, 0, 65, 155, 252, 14, 54, 2, 140, 1, 32, 0, 65, 135, 2, 54, 2, 144, 1, 32, 0, 65, 175, 187, 229, 6, 54, 2, 148, 1, 32, 0, 65, 218, 0, 54, 2, 152, 1, 32, 0, 65, 248, 204, 170, 37, 54, 2, 156, 1, 32, 0, 65, 53, 54, 2, 160, 1, 32, 0, 65, 130, 226, 204, 51, 54, 2, 164, 1, 32, 0, 68, 0, 0, 0, 0, 0, 0, 0, 0, 57, 3, 168, 1, 32, 0, 68, 154, 153, 153, 153, 153, 153, 169, 63, 57, 3, 176, 1, 32, 0, 68, 154, 153, 153, 153, 153, 153, 185, 63, 57, 3, 184, 1, 32, 0, 68, 154, 153, 153, 153, 153, 153, 201, 63, 57, 3, 192, 1, 32, 0, 68, 51, 51, 51, 51, 51, 51, 211, 63, 57, 3, 200, 1, 32, 0, 68, 154, 153, 153, 153, 153, 153, 217, 63, 57, 3, 208, 1, 32, 0, 68, 0, 0, 0, 0, 0, 0, 224, 63, 57, 3, 216, 1, 32, 0, 68, 154, 153, 153, 153, 153, 153, 225, 63, 57, 3, 224, 1, 32, 0, 68, 51, 51, 51, 51, 51, 51, 227, 63, 57, 3, 232, 1, 32, 0, 68, 102, 102, 102, 102, 102, 102, 230, 63, 57, 3, 240, 1, 32, 0, 68, 154, 153, 153, 153, 153, 153, 233, 63, 57, 3, 248, 1, 32, 0, 68, 205, 204, 204, 204, 204, 204, 236, 63, 57, 3, 128, 2, 32, 0, 68, 0, 0, 0, 0, 0, 0, 240, 63, 57, 3, 136, 2, 32, 0, 66, 187, 137, 248, 229, 242, 46, 55, 3, 144, 2, 32, 0, 11, 22, 1, 1, 124, 2, 124, 32, 0, 32, 1, 125, 185, 33, 3, 32, 3, 153, 11, 32, 2, 183, 101, 11, 70, 0, 32, 0, 69, 4, 64, 65, 20, 16, 14, 33, 0, 11, 32, 0, 65, 129, 198, 148, 186, 6, 54, 2, 0, 32, 0, 65, 137, 215, 182, 254, 126, 54, 2, 4, 32, 0, 65, 254, 185, 235, 197, 121, 54, 2, 8, 32, 0, 65, 246, 168, 201, 129, 1, 54, 2, 12, 32, 0, 65, 181, 228, 214, 17, 54, 2, 16, 32, 0, 11, 60, 0, 32, 0, 69, 4, 64, 65, 16, 16, 14, 33, 0, 11, 32, 0, 65, 149, 211, 199, 222, 5, 54, 2, 0, 32, 0, 65, 149, 211, 199, 222, 5, 54, 2, 4, 32, 0, 65, 149, 211, 199, 222, 5, 54, 2, 8, 32, 0, 65, 149, 211, 199, 222, 5, 54, 2, 12, 32, 0, 11, 16, 0, 32, 0, 65, 0, 32, 1, 107, 118, 32, 0, 32, 1, 116, 114, 11, 181, 2, 0, 32, 0, 69, 4, 64, 65, 140, 1, 16, 14, 33, 0, 11, 32, 0, 65, 219, 204, 4, 54, 2, 0, 32, 0, 65, 133, 168, 3, 54, 2, 4, 32, 0, 65, 182, 4, 54, 2, 8, 32, 0, 65, 195, 27, 54, 2, 12, 32, 0, 65, 203, 128, 1, 54, 2, 16, 32, 0, 65, 142, 55, 54, 2, 20, 32, 0, 65, 189, 199, 0, 54, 2, 24, 32, 0, 65, 243, 0, 54, 2, 28, 32, 0, 65, 139, 58, 54, 2, 32, 32, 0, 65, 242, 9, 54, 2, 36, 32, 0, 65, 215, 42, 54, 2, 40, 32, 0, 65, 131, 171, 3, 54, 2, 44, 32, 0, 65, 54, 54, 2, 48, 32, 0, 65, 242, 0, 54, 2, 52, 32, 0, 65, 221, 6, 54, 2, 56, 32, 0, 65, 192, 9, 54, 2, 60, 32, 0, 65, 144, 202, 26, 54, 2, 64, 32, 0, 65, 141, 164, 5, 54, 2, 68, 32, 0, 65, 236, 57, 54, 2, 72, 32, 0, 65, 248, 3, 54, 2, 76, 32, 0, 65, 188, 9, 54, 2, 80, 32, 0, 65, 221, 6, 54, 2, 84, 32, 0, 65, 203, 3, 54, 2, 88, 32, 0, 65, 253, 5, 54, 2, 92, 32, 0, 65, 193, 4, 54, 2, 96, 32, 0, 65, 254, 0, 54, 2, 100, 32, 0, 65, 1, 54, 2, 104, 32, 0, 65, 119, 54, 2, 108, 32, 0, 65, 156, 142, 199, 227, 1, 54, 2, 112, 32, 0, 65, 255, 255, 255, 255, 7, 54, 2, 116, 32, 0, 65, 2, 54, 2, 120, 32, 0, 65, 255, 1, 54, 2, 124, 32, 0, 65, 228, 0, 54, 2, 128, 1, 32, 0, 65, 255, 0, 54, 2, 132, 1, 32, 0, 65, 253, 0, 54, 2, 136, 1, 32, 0, 11, 186, 1, 1, 4, 127, 65, 0, 16, 27, 36, 3, 16, 31, 68, 0, 0, 0, 0, 0, 0, 73, 64, 162, 170, 65, 172, 2, 106, 36, 9, 16, 31, 68, 0, 0, 0, 0, 180, 36, 21, 65, 162, 170, 65, 151, 133, 15, 106, 36, 10, 16, 31, 68, 0, 0, 0, 0, 180, 36, 21, 65, 162, 170, 65, 151, 133, 15, 106, 36, 11, 16, 31, 68, 0, 0, 0, 0, 0, 0, 20, 64, 162, 170, 65, 6, 106, 36, 13, 16, 31, 68, 0, 0, 0, 0, 0, 0, 20, 64, 162, 170, 65, 20, 106, 36, 14, 65, 0, 65, 2, 65, 8, 16, 34, 16, 33, 34, 1, 65, 144, 206, 0, 65, 0, 35, 18, 16, 35, 34, 0, 65, 224, 3, 16, 39, 36, 20, 65, 0, 65, 2, 65, 16, 16, 34, 16, 40, 36, 21, 65, 0, 16, 41, 36, 22, 65, 0, 16, 42, 36, 24, 65, 0, 16, 44, 36, 27, 65, 0, 16, 45, 36, 28, 65, 0, 16, 47, 36, 36, 32, 0, 16, 26, 32, 1, 16, 26, 11, 98, 0, 32, 0, 65, 160, 141, 6, 73, 4, 64, 32, 0, 65, 228, 0, 73, 4, 64, 65, 1, 32, 0, 65, 10, 79, 106, 15, 5, 65, 3, 32, 0, 65, 144, 206, 0, 79, 106, 32, 0, 65, 232, 7, 79, 106, 15, 11, 0, 5, 32, 0, 65, 128, 173, 226, 4, 73, 4, 64, 65, 6, 32, 0, 65, 192, 132, 61, 79, 106, 15, 5, 65, 8, 32, 0, 65, 128, 148, 235, 220, 3, 79, 106, 32, 0, 65, 128, 194, 215, 47, 79, 106, 15, 11, 0, 11, 0, 11, 253, 1, 2, 7, 127, 2, 126, 2, 64, 3, 64, 32, 1, 65, 144, 206, 0, 79, 33, 3, 32, 3, 4, 64, 32, 1, 65, 144, 206, 0, 110, 33, 4, 32, 1, 65, 144, 206, 0, 112, 33, 5, 32, 4, 33, 1, 32, 5, 65, 228, 0, 110, 33, 6, 32, 5, 65, 228, 0, 112, 33, 7, 65, 172, 7, 32, 6, 65, 2, 116, 106, 53, 2, 0, 33, 10, 65, 172, 7, 32, 7, 65, 2, 116, 106, 53, 2, 0, 33, 11, 32, 2, 65, 4, 107, 33, 2, 32, 0, 32, 2, 65, 1, 116, 106, 32, 10, 32, 11, 66, 32, 134, 132, 55, 3, 0, 12, 1, 11, 11, 11, 32, 1, 65, 228, 0, 79, 4, 64, 32, 1, 65, 228, 0, 110, 33, 3, 32, 1, 65, 228, 0, 112, 33, 8, 32, 3, 33, 1, 32, 2, 65, 2, 107, 33, 2, 65, 172, 7, 32, 8, 65, 2, 116, 106, 40, 2, 0, 33, 9, 32, 0, 32, 2, 65, 1, 116, 106, 32, 9, 54, 2, 0, 11, 32, 1, 65, 10, 79, 4, 64, 32, 2, 65, 2, 107, 33, 2, 65, 172, 7, 32, 1, 65, 2, 116, 106, 40, 2, 0, 33, 9, 32, 0, 32, 2, 65, 1, 116, 106, 32, 9, 54, 2, 0, 5, 32, 2, 65, 1, 107, 33, 2, 65, 48, 32, 1, 106, 33, 9, 32, 0, 32, 2, 65, 1, 116, 106, 32, 9, 59, 1, 0, 11, 11, 92, 1, 1, 127, 2, 64, 3, 64, 32, 2, 65, 2, 79, 33, 3, 32, 3, 4, 64, 32, 2, 65, 2, 107, 33, 2, 32, 0, 32, 2, 65, 1, 116, 106, 65, 208, 10, 32, 1, 167, 65, 255, 1, 113, 65, 2, 116, 106, 40, 2, 0, 54, 2, 0, 32, 1, 66, 8, 136, 33, 1, 12, 1, 11, 11, 11, 32, 2, 65, 1, 113, 4, 64, 32, 0, 65, 208, 10, 32, 1, 167, 65, 6, 116, 106, 47, 1, 0, 59, 1, 0, 11, 11, 133, 1, 2, 2, 127, 2, 126, 2, 127, 32, 1, 33, 2, 32, 2, 105, 65, 1, 70, 11, 4, 64, 65, 63, 32, 0, 121, 167, 107, 65, 31, 32, 1, 103, 107, 110, 65, 1, 106, 15, 11, 32, 1, 172, 33, 4, 32, 4, 33, 5, 65, 1, 33, 3, 2, 64, 3, 64, 32, 0, 32, 5, 90, 33, 2, 32, 2, 4, 64, 32, 0, 32, 5, 128, 33, 0, 32, 5, 32, 5, 126, 33, 5, 32, 3, 65, 1, 116, 33, 3, 12, 1, 11, 11, 11, 2, 64, 3, 64, 32, 0, 66, 1, 90, 33, 2, 32, 2, 4, 64, 32, 0, 32, 4, 128, 33, 0, 32, 3, 65, 1, 106, 33, 3, 12, 1, 11, 11, 11, 32, 3, 65, 1, 107, 11, 162, 1, 2, 1, 127, 3, 126, 32, 3, 172, 33, 5, 32, 3, 32, 3, 65, 1, 107, 113, 65, 0, 70, 4, 64, 32, 3, 104, 65, 7, 113, 172, 33, 6, 32, 5, 66, 1, 125, 33, 7, 2, 64, 3, 64, 32, 2, 65, 1, 107, 33, 2, 32, 0, 32, 2, 65, 1, 116, 106, 65, 240, 18, 32, 1, 32, 7, 131, 167, 65, 1, 116, 106, 47, 1, 0, 59, 1, 0, 32, 1, 32, 6, 136, 33, 1, 32, 1, 66, 0, 82, 33, 4, 32, 4, 13, 0, 11, 11, 5, 3, 64, 32, 2, 65, 1, 107, 33, 2, 32, 1, 32, 5, 128, 33, 7, 32, 0, 32, 2, 65, 1, 116, 106, 65, 240, 18, 32, 1, 32, 7, 32, 5, 126, 125, 167, 65, 1, 116, 106, 47, 1, 0, 59, 1, 0, 32, 7, 33, 1, 32, 1, 66, 0, 82, 33, 4, 32, 4, 13, 0, 11, 11, 11, 249, 1, 1, 6, 127, 32, 1, 65, 2, 72, 4, 127, 65, 1, 5, 32, 1, 65, 36, 74, 11, 4, 64, 65, 224, 5, 65, 224, 6, 65, 245, 2, 65, 5, 16, 0, 0, 11, 32, 0, 69, 4, 64, 65, 160, 7, 15, 11, 32, 0, 65, 31, 118, 33, 2, 32, 2, 4, 64, 65, 0, 32, 0, 107, 33, 0, 11, 65, 0, 33, 3, 32, 1, 65, 10, 70, 4, 64, 32, 0, 16, 49, 32, 2, 106, 33, 4, 32, 4, 65, 1, 116, 65, 1, 16, 15, 33, 3, 2, 64, 32, 3, 33, 7, 32, 0, 33, 6, 32, 4, 33, 5, 65, 0, 65, 1, 78, 26, 32, 7, 32, 6, 32, 5, 16, 50, 11, 5, 32, 1, 65, 16, 70, 4, 64, 65, 31, 32, 0, 103, 107, 65, 2, 117, 65, 1, 106, 32, 2, 106, 33, 4, 32, 4, 65, 1, 116, 65, 1, 16, 15, 33, 3, 2, 64, 32, 3, 33, 7, 32, 0, 33, 6, 32, 4, 33, 5, 65, 0, 65, 1, 78, 26, 32, 7, 32, 6, 173, 32, 5, 16, 51, 11, 5, 32, 0, 33, 4, 32, 4, 173, 32, 1, 16, 52, 32, 2, 106, 33, 7, 32, 7, 65, 1, 116, 65, 1, 16, 15, 33, 3, 32, 3, 32, 4, 173, 32, 7, 32, 1, 16, 53, 11, 11, 32, 2, 4, 64, 32, 3, 65, 45, 59, 1, 0, 11, 32, 3, 16, 25, 11, 8, 0, 32, 0, 32, 1, 16, 54, 11, 13, 0, 32, 0, 65, 20, 107, 40, 2, 16, 65, 1, 118, 11, 138, 1, 1, 6, 127, 32, 1, 16, 25, 33, 1, 32, 1, 65, 0, 70, 4, 64, 2, 127, 65, 208, 19, 34, 2, 32, 1, 34, 3, 71, 4, 64, 32, 2, 16, 25, 33, 2, 32, 3, 16, 26, 11, 32, 2, 11, 33, 1, 11, 32, 0, 16, 56, 65, 1, 116, 33, 4, 32, 1, 16, 56, 65, 1, 116, 33, 5, 32, 4, 32, 5, 106, 33, 6, 32, 6, 65, 0, 70, 4, 64, 2, 64, 65, 240, 19, 16, 25, 33, 2, 32, 1, 16, 26, 32, 2, 15, 11, 0, 11, 32, 6, 65, 1, 16, 15, 16, 25, 33, 7, 32, 7, 32, 0, 32, 4, 16, 18, 32, 7, 32, 4, 106, 32, 1, 32, 5, 16, 18, 32, 7, 33, 2, 32, 1, 16, 26, 32, 2, 11, 43, 1, 1, 127, 32, 0, 16, 25, 33, 0, 32, 1, 16, 25, 33, 1, 32, 0, 65, 208, 19, 32, 0, 65, 0, 71, 27, 32, 1, 16, 57, 33, 2, 32, 0, 16, 26, 32, 1, 16, 26, 32, 2, 11, 26, 0, 32, 1, 32, 0, 16, 56, 79, 4, 64, 65, 127, 15, 11, 32, 0, 32, 1, 65, 1, 116, 106, 47, 1, 0, 11, 7, 0, 32, 0, 40, 2, 12, 11, 155, 16, 3, 6, 127, 10, 126, 27, 124, 32, 1, 153, 68, 0, 0, 0, 0, 0, 0, 0, 64, 101, 4, 64, 32, 1, 68, 0, 0, 0, 0, 0, 0, 0, 64, 97, 4, 64, 32, 0, 32, 0, 162, 15, 11, 32, 1, 68, 0, 0, 0, 0, 0, 0, 224, 63, 97, 4, 64, 32, 0, 159, 153, 68, 0, 0, 0, 0, 0, 0, 240, 127, 32, 0, 68, 0, 0, 0, 0, 0, 0, 240, 127, 154, 98, 27, 15, 11, 32, 1, 68, 0, 0, 0, 0, 0, 0, 240, 191, 97, 4, 64, 68, 0, 0, 0, 0, 0, 0, 240, 63, 32, 0, 163, 15, 11, 32, 1, 68, 0, 0, 0, 0, 0, 0, 240, 63, 97, 4, 64, 32, 0, 15, 11, 32, 1, 68, 0, 0, 0, 0, 0, 0, 0, 0, 97, 4, 64, 68, 0, 0, 0, 0, 0, 0, 240, 63, 15, 11, 11, 65, 0, 65, 1, 72, 26, 2, 124, 32, 0, 33, 19, 32, 1, 33, 18, 65, 0, 33, 2, 32, 19, 189, 33, 8, 32, 18, 189, 33, 9, 32, 8, 66, 52, 136, 33, 10, 32, 9, 66, 52, 136, 33, 11, 32, 10, 66, 1, 125, 66, 255, 15, 66, 1, 125, 90, 4, 127, 65, 1, 5, 32, 11, 66, 255, 15, 131, 66, 190, 7, 125, 66, 190, 8, 66, 190, 7, 125, 90, 11, 4, 64, 2, 127, 32, 9, 33, 12, 32, 12, 66, 1, 134, 66, 1, 125, 66, 128, 128, 128, 128, 128, 128, 128, 112, 66, 1, 125, 90, 11, 4, 64, 32, 9, 66, 1, 134, 66, 0, 81, 4, 64, 68, 0, 0, 0, 0, 0, 0, 240, 63, 12, 3, 11, 32, 8, 66, 128, 128, 128, 128, 128, 128, 128, 248, 63, 81, 4, 64, 68, 0, 0, 0, 0, 0, 0, 248, 127, 12, 3, 11, 32, 8, 66, 1, 134, 66, 128, 128, 128, 128, 128, 128, 128, 112, 86, 4, 127, 65, 1, 5, 32, 9, 66, 1, 134, 66, 128, 128, 128, 128, 128, 128, 128, 112, 86, 11, 4, 64, 32, 19, 32, 18, 160, 12, 3, 11, 32, 8, 66, 1, 134, 66, 128, 128, 128, 128, 128, 128, 128, 240, 255, 0, 81, 4, 64, 68, 0, 0, 0, 0, 0, 0, 248, 127, 12, 3, 11, 32, 8, 66, 1, 134, 66, 128, 128, 128, 128, 128, 128, 128, 240, 255, 0, 84, 32, 9, 66, 63, 136, 66, 0, 82, 69, 70, 4, 64, 68, 0, 0, 0, 0, 0, 0, 0, 0, 12, 3, 11, 32, 18, 32, 18, 162, 12, 2, 11, 2, 127, 32, 8, 33, 12, 32, 12, 66, 1, 134, 66, 1, 125, 66, 128, 128, 128, 128, 128, 128, 128, 112, 66, 1, 125, 90, 11, 4, 64, 32, 19, 32, 19, 162, 33, 20, 32, 8, 66, 63, 136, 167, 4, 127, 2, 127, 32, 9, 33, 12, 32, 12, 66, 52, 136, 66, 255, 15, 131, 33, 13, 32, 13, 66, 255, 7, 84, 4, 64, 65, 0, 12, 1, 11, 32, 13, 66, 255, 7, 66, 52, 124, 86, 4, 64, 65, 2, 12, 1, 11, 66, 1, 66, 255, 7, 66, 52, 124, 32, 13, 125, 134, 33, 13, 32, 12, 32, 13, 66, 1, 125, 131, 66, 0, 82, 4, 64, 65, 0, 12, 1, 11, 32, 12, 32, 13, 131, 66, 0, 82, 4, 64, 65, 1, 12, 1, 11, 65, 2, 11, 65, 1, 70, 5, 65, 0, 11, 4, 64, 32, 20, 154, 33, 20, 11, 32, 9, 66, 63, 136, 66, 0, 82, 4, 124, 68, 0, 0, 0, 0, 0, 0, 240, 63, 32, 20, 163, 5, 32, 20, 11, 12, 2, 11, 32, 8, 66, 63, 136, 66, 0, 82, 4, 64, 2, 127, 32, 9, 33, 12, 32, 12, 66, 52, 136, 66, 255, 15, 131, 33, 13, 32, 13, 66, 255, 7, 84, 4, 64, 65, 0, 12, 1, 11, 32, 13, 66, 255, 7, 66, 52, 124, 86, 4, 64, 65, 2, 12, 1, 11, 66, 1, 66, 255, 7, 66, 52, 124, 32, 13, 125, 134, 33, 13, 32, 12, 32, 13, 66, 1, 125, 131, 66, 0, 82, 4, 64, 65, 0, 12, 1, 11, 32, 12, 32, 13, 131, 66, 0, 82, 4, 64, 65, 1, 12, 1, 11, 65, 2, 11, 33, 3, 32, 3, 65, 0, 70, 4, 64, 32, 19, 32, 19, 161, 32, 19, 32, 19, 161, 163, 12, 3, 11, 32, 3, 65, 1, 70, 4, 64, 65, 128, 128, 16, 33, 2, 11, 32, 8, 66, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 131, 33, 8, 32, 10, 66, 255, 15, 131, 33, 10, 11, 32, 11, 66, 255, 15, 131, 66, 190, 7, 125, 66, 190, 8, 66, 190, 7, 125, 90, 4, 64, 32, 8, 66, 128, 128, 128, 128, 128, 128, 128, 248, 63, 81, 4, 64, 68, 0, 0, 0, 0, 0, 0, 240, 63, 12, 3, 11, 32, 11, 66, 255, 15, 131, 66, 190, 7, 84, 4, 64, 68, 0, 0, 0, 0, 0, 0, 240, 63, 12, 3, 11, 32, 8, 66, 128, 128, 128, 128, 128, 128, 128, 248, 63, 86, 32, 11, 66, 128, 16, 84, 70, 4, 124, 68, 0, 0, 0, 0, 0, 0, 240, 127, 5, 68, 0, 0, 0, 0, 0, 0, 0, 0, 11, 12, 2, 11, 32, 10, 66, 0, 81, 4, 64, 32, 19, 68, 0, 0, 0, 0, 0, 0, 48, 67, 162, 189, 33, 8, 32, 8, 66, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 131, 33, 8, 32, 8, 66, 52, 66, 52, 134, 125, 33, 8, 11, 11, 2, 124, 32, 8, 33, 12, 32, 12, 66, 128, 128, 128, 128, 208, 170, 165, 243, 63, 125, 33, 13, 32, 13, 66, 52, 66, 7, 125, 136, 66, 255, 0, 131, 167, 33, 3, 32, 13, 66, 52, 135, 33, 14, 32, 12, 32, 13, 66, 255, 31, 66, 52, 134, 131, 125, 33, 15, 32, 15, 191, 33, 20, 32, 14, 185, 33, 21, 65, 128, 20, 32, 3, 65, 2, 65, 3, 106, 116, 106, 43, 3, 0, 33, 22, 65, 128, 20, 32, 3, 65, 2, 65, 3, 106, 116, 106, 43, 3, 16, 33, 23, 65, 128, 20, 32, 3, 65, 2, 65, 3, 106, 116, 106, 43, 3, 24, 33, 24, 32, 15, 66, 128, 128, 128, 128, 8, 124, 66, 128, 128, 128, 128, 112, 131, 191, 33, 25, 32, 20, 32, 25, 161, 33, 26, 32, 25, 32, 22, 162, 68, 0, 0, 0, 0, 0, 0, 240, 63, 161, 33, 27, 32, 26, 32, 22, 162, 33, 28, 32, 27, 32, 28, 160, 33, 29, 32, 21, 68, 0, 56, 250, 254, 66, 46, 230, 63, 162, 32, 23, 160, 33, 30, 32, 30, 32, 29, 160, 33, 31, 32, 21, 68, 48, 103, 199, 147, 87, 243, 46, 61, 162, 32, 24, 160, 33, 32, 32, 30, 32, 31, 161, 32, 29, 160, 33, 33, 68, 0, 0, 0, 0, 0, 0, 224, 191, 32, 29, 162, 33, 34, 32, 29, 32, 34, 162, 33, 35, 32, 29, 32, 35, 162, 33, 36, 68, 0, 0, 0, 0, 0, 0, 224, 191, 32, 27, 162, 33, 37, 32, 27, 32, 37, 162, 33, 38, 32, 31, 32, 38, 160, 33, 39, 32, 28, 32, 34, 32, 37, 160, 162, 33, 40, 32, 31, 32, 39, 161, 32, 38, 160, 33, 41, 32, 36, 68, 96, 85, 85, 85, 85, 85, 229, 191, 32, 29, 68, 6, 0, 0, 0, 0, 0, 224, 63, 162, 160, 32, 35, 68, 78, 85, 89, 153, 153, 153, 233, 63, 32, 29, 68, 122, 164, 41, 85, 85, 85, 229, 191, 162, 160, 32, 35, 68, 233, 69, 72, 155, 91, 73, 242, 191, 32, 29, 68, 195, 63, 38, 139, 43, 0, 240, 63, 162, 160, 162, 160, 162, 160, 162, 33, 42, 32, 32, 32, 33, 160, 32, 40, 160, 32, 41, 160, 32, 42, 160, 33, 43, 32, 39, 32, 43, 160, 33, 44, 32, 39, 32, 44, 161, 32, 43, 160, 36, 38, 32, 44, 11, 33, 44, 35, 38, 33, 43, 32, 9, 66, 128, 128, 128, 64, 131, 191, 33, 40, 32, 18, 32, 40, 161, 33, 39, 32, 44, 189, 66, 128, 128, 128, 64, 131, 191, 33, 38, 32, 44, 32, 38, 161, 32, 43, 160, 33, 37, 32, 40, 32, 38, 162, 33, 42, 32, 39, 32, 38, 162, 32, 18, 32, 37, 162, 160, 33, 41, 2, 124, 32, 42, 33, 21, 32, 41, 33, 20, 32, 2, 33, 3, 32, 21, 189, 33, 12, 32, 12, 66, 52, 136, 167, 65, 255, 15, 113, 33, 4, 32, 4, 65, 201, 7, 107, 65, 63, 79, 4, 64, 32, 4, 65, 201, 7, 107, 65, 128, 128, 128, 128, 120, 79, 4, 64, 68, 0, 0, 0, 0, 0, 0, 240, 191, 68, 0, 0, 0, 0, 0, 0, 240, 63, 32, 3, 27, 12, 2, 11, 32, 4, 65, 137, 8, 79, 4, 64, 32, 12, 66, 63, 136, 66, 0, 82, 4, 124, 32, 3, 33, 6, 2, 124, 32, 6, 33, 7, 66, 128, 128, 128, 128, 128, 128, 128, 128, 16, 191, 33, 22, 32, 22, 154, 32, 22, 32, 7, 27, 32, 22, 162, 11, 5, 32, 3, 33, 7, 2, 124, 32, 7, 33, 6, 66, 128, 128, 128, 128, 128, 128, 128, 128, 240, 0, 191, 33, 23, 32, 23, 154, 32, 23, 32, 6, 27, 32, 23, 162, 11, 11, 12, 2, 11, 65, 0, 33, 4, 11, 68, 254, 130, 43, 101, 71, 21, 103, 64, 32, 21, 162, 33, 35, 32, 35, 68, 0, 0, 0, 0, 0, 0, 56, 67, 160, 33, 36, 32, 36, 189, 33, 15, 32, 36, 68, 0, 0, 0, 0, 0, 0, 56, 67, 161, 33, 36, 32, 21, 32, 36, 68, 0, 0, 250, 254, 66, 46, 118, 191, 162, 160, 32, 36, 68, 58, 59, 158, 188, 154, 247, 12, 189, 162, 160, 33, 34, 32, 34, 32, 20, 160, 33, 34, 32, 15, 66, 255, 0, 131, 66, 1, 134, 167, 33, 5, 32, 15, 32, 3, 173, 124, 66, 52, 66, 7, 125, 134, 33, 14, 65, 128, 52, 32, 5, 65, 3, 116, 106, 41, 3, 0, 191, 33, 31, 65, 128, 52, 32, 5, 65, 3, 116, 106, 41, 3, 8, 32, 14, 124, 33, 13, 32, 34, 32, 34, 162, 33, 33, 32, 31, 32, 34, 160, 32, 33, 68, 189, 253, 255, 255, 255, 255, 223, 63, 32, 34, 68, 60, 84, 85, 85, 85, 85, 197, 63, 162, 160, 162, 160, 32, 33, 32, 33, 162, 68, 145, 43, 23, 207, 85, 85, 165, 63, 32, 34, 68, 23, 208, 164, 103, 17, 17, 129, 63, 162, 160, 162, 160, 33, 30, 32, 4, 65, 0, 70, 4, 64, 2, 124, 32, 30, 33, 24, 32, 13, 33, 17, 32, 15, 33, 16, 32, 16, 66, 128, 128, 128, 128, 8, 131, 66, 0, 82, 69, 4, 64, 32, 17, 66, 241, 7, 66, 52, 134, 125, 33, 17, 32, 17, 191, 33, 23, 68, 0, 0, 0, 0, 0, 0, 0, 127, 32, 23, 32, 23, 32, 24, 162, 160, 162, 12, 1, 11, 32, 17, 66, 254, 7, 66, 52, 134, 124, 33, 17, 32, 17, 191, 33, 23, 32, 23, 32, 23, 32, 24, 162, 160, 33, 22, 32, 22, 153, 68, 0, 0, 0, 0, 0, 0, 240, 63, 99, 4, 64, 68, 0, 0, 0, 0, 0, 0, 240, 63, 32, 22, 166, 33, 29, 32, 23, 32, 22, 161, 32, 23, 32, 24, 162, 160, 33, 28, 32, 29, 32, 22, 160, 33, 27, 32, 29, 32, 27, 161, 32, 22, 160, 32, 28, 160, 33, 28, 32, 27, 32, 28, 160, 32, 29, 161, 33, 22, 32, 22, 68, 0, 0, 0, 0, 0, 0, 0, 0, 97, 4, 64, 32, 17, 66, 128, 128, 128, 128, 128, 128, 128, 128, 128, 127, 131, 191, 33, 22, 11, 11, 32, 22, 68, 0, 0, 0, 0, 0, 0, 16, 0, 162, 11, 12, 1, 11, 32, 13, 191, 33, 32, 32, 32, 32, 32, 32, 30, 162, 160, 11, 11, 15, 11, 174, 3, 3, 1, 127, 8, 126, 1, 124, 32, 1, 153, 68, 0, 0, 0, 0, 0, 0, 240, 63, 97, 4, 64, 32, 0, 32, 0, 157, 161, 32, 0, 166, 15, 11, 32, 0, 189, 33, 3, 32, 1, 189, 33, 4, 32, 3, 66, 52, 136, 66, 255, 15, 131, 33, 5, 32, 4, 66, 52, 136, 66, 255, 15, 131, 33, 6, 32, 3, 66, 63, 136, 33, 7, 32, 4, 66, 1, 134, 33, 8, 32, 8, 66, 0, 81, 4, 127, 65, 1, 5, 32, 5, 66, 255, 15, 81, 11, 4, 127, 65, 1, 5, 32, 1, 32, 1, 98, 11, 4, 64, 32, 0, 32, 1, 162, 33, 11, 32, 11, 32, 11, 163, 15, 11, 32, 3, 66, 1, 134, 33, 9, 32, 9, 32, 8, 88, 4, 64, 32, 0, 32, 9, 32, 8, 82, 184, 162, 15, 11, 32, 5, 66, 0, 82, 69, 4, 64, 32, 5, 32, 3, 66, 12, 134, 121, 125, 33, 5, 32, 3, 66, 1, 32, 5, 125, 134, 33, 3, 5, 32, 3, 66, 127, 66, 12, 136, 131, 33, 3, 32, 3, 66, 1, 66, 52, 134, 132, 33, 3, 11, 32, 6, 66, 0, 82, 69, 4, 64, 32, 6, 32, 4, 66, 12, 134, 121, 125, 33, 6, 32, 4, 66, 1, 32, 6, 125, 134, 33, 4, 5, 32, 4, 66, 127, 66, 12, 136, 131, 33, 4, 32, 4, 66, 1, 66, 52, 134, 132, 33, 4, 11, 2, 64, 3, 64, 32, 5, 32, 6, 85, 33, 2, 32, 2, 4, 64, 32, 3, 32, 4, 90, 4, 64, 32, 3, 32, 4, 81, 4, 64, 68, 0, 0, 0, 0, 0, 0, 0, 0, 32, 0, 162, 15, 11, 32, 3, 32, 4, 125, 33, 3, 11, 32, 3, 66, 1, 134, 33, 3, 32, 5, 66, 1, 125, 33, 5, 12, 1, 11, 11, 11, 32, 3, 32, 4, 90, 4, 64, 32, 3, 32, 4, 81, 4, 64, 68, 0, 0, 0, 0, 0, 0, 0, 0, 32, 0, 162, 15, 11, 32, 3, 32, 4, 125, 33, 3, 11, 32, 3, 66, 11, 134, 121, 33, 10, 32, 5, 32, 10, 125, 33, 5, 32, 3, 32, 10, 134, 33, 3, 32, 5, 66, 0, 85, 4, 64, 32, 3, 66, 1, 66, 52, 134, 125, 33, 3, 32, 3, 32, 5, 66, 52, 134, 132, 33, 3, 5, 32, 3, 66, 0, 32, 5, 125, 66, 1, 124, 136, 33, 3, 11, 32, 3, 32, 7, 66, 63, 134, 132, 191, 11, 73, 1, 2, 124, 68, 0, 0, 0, 0, 0, 0, 0, 64, 32, 1, 183, 16, 61, 33, 2, 2, 124, 32, 0, 183, 32, 2, 16, 62, 32, 2, 68, 0, 0, 0, 0, 0, 0, 0, 64, 163, 163, 33, 3, 32, 3, 156, 11, 189, 66, 1, 134, 66, 2, 125, 66, 254, 255, 255, 255, 255, 255, 255, 111, 88, 4, 127, 65, 1, 5, 65, 0, 11, 11, 236, 4, 1, 9, 127, 32, 0, 16, 25, 33, 0, 32, 0, 16, 56, 65, 3, 113, 33, 2, 32, 0, 16, 56, 32, 2, 107, 33, 3, 32, 1, 33, 4, 65, 0, 33, 9, 2, 64, 3, 64, 32, 9, 32, 3, 72, 33, 10, 32, 10, 4, 64, 32, 0, 32, 9, 16, 59, 65, 255, 1, 113, 32, 0, 32, 9, 65, 1, 106, 34, 9, 16, 59, 65, 255, 1, 113, 65, 8, 116, 114, 32, 0, 32, 9, 65, 1, 106, 34, 9, 16, 59, 65, 255, 1, 113, 65, 16, 116, 114, 32, 0, 32, 9, 65, 1, 106, 34, 9, 16, 59, 65, 255, 1, 113, 65, 24, 116, 114, 33, 8, 32, 9, 65, 1, 106, 33, 9, 32, 8, 35, 35, 113, 35, 22, 40, 2, 0, 108, 32, 8, 65, 16, 118, 35, 22, 40, 2, 0, 108, 35, 33, 113, 65, 16, 116, 106, 35, 22, 40, 2, 12, 113, 33, 8, 32, 8, 65, 15, 116, 32, 8, 65, 17, 118, 114, 33, 8, 32, 8, 35, 33, 113, 35, 22, 40, 2, 4, 108, 32, 8, 65, 16, 118, 35, 22, 40, 2, 4, 108, 35, 33, 113, 65, 16, 116, 106, 35, 22, 40, 2, 12, 113, 33, 8, 32, 4, 32, 8, 115, 33, 4, 32, 4, 65, 13, 116, 32, 4, 65, 19, 118, 114, 33, 4, 32, 4, 35, 33, 113, 65, 5, 108, 32, 4, 65, 16, 118, 65, 5, 108, 35, 34, 113, 65, 16, 116, 106, 35, 22, 40, 2, 12, 113, 33, 5, 32, 5, 35, 33, 113, 35, 22, 40, 2, 8, 106, 32, 5, 65, 16, 118, 65, 212, 204, 3, 106, 35, 33, 113, 65, 16, 116, 106, 33, 4, 12, 1, 11, 11, 11, 65, 0, 33, 8, 2, 64, 2, 64, 2, 64, 2, 64, 32, 2, 33, 10, 32, 10, 65, 3, 70, 13, 0, 32, 10, 65, 2, 70, 13, 1, 32, 10, 65, 1, 70, 13, 2, 12, 3, 11, 32, 8, 32, 0, 32, 9, 65, 2, 106, 16, 59, 65, 255, 1, 113, 65, 16, 116, 115, 33, 8, 11, 32, 8, 32, 0, 32, 9, 65, 1, 106, 16, 59, 65, 255, 1, 113, 65, 8, 116, 115, 33, 8, 11, 32, 8, 32, 0, 32, 9, 16, 59, 65, 255, 1, 113, 115, 33, 8, 32, 8, 35, 33, 113, 35, 22, 40, 2, 0, 108, 32, 8, 65, 16, 118, 35, 22, 40, 2, 0, 108, 35, 34, 113, 65, 16, 116, 106, 35, 22, 40, 2, 12, 113, 33, 8, 32, 8, 65, 15, 116, 32, 8, 65, 17, 118, 114, 33, 8, 32, 8, 35, 33, 113, 35, 22, 40, 2, 4, 108, 32, 8, 65, 16, 118, 35, 22, 40, 2, 4, 108, 35, 33, 113, 65, 16, 116, 106, 35, 22, 40, 2, 12, 113, 33, 8, 32, 4, 32, 8, 115, 33, 4, 11, 32, 4, 32, 0, 16, 56, 115, 33, 4, 32, 4, 32, 4, 65, 16, 118, 115, 33, 4, 32, 4, 35, 33, 113, 35, 22, 40, 2, 16, 108, 32, 4, 65, 16, 118, 35, 22, 40, 2, 16, 108, 35, 33, 113, 65, 16, 116, 106, 35, 22, 40, 2, 12, 113, 33, 4, 32, 4, 32, 4, 65, 13, 118, 115, 33, 4, 32, 4, 35, 33, 113, 35, 22, 40, 2, 20, 108, 32, 4, 65, 16, 118, 35, 22, 40, 2, 20, 108, 35, 35, 113, 65, 16, 116, 106, 35, 22, 40, 2, 12, 113, 33, 4, 32, 4, 32, 4, 65, 16, 118, 115, 33, 4, 32, 4, 65, 0, 118, 33, 10, 32, 0, 16, 26, 32, 10, 11, 21, 0, 32, 0, 32, 0, 65, 1, 117, 115, 33, 0, 32, 0, 65, 50, 106, 33, 0, 32, 0, 11, 91, 1, 3, 127, 65, 246, 3, 33, 1, 65, 0, 33, 2, 2, 64, 3, 64, 32, 2, 65, 10, 72, 33, 3, 32, 3, 4, 64, 2, 64, 32, 0, 65, 2, 108, 33, 0, 32, 0, 65, 50, 106, 33, 0, 32, 0, 33, 1, 32, 0, 65, 24, 117, 33, 0, 32, 0, 32, 1, 115, 33, 0, 32, 0, 65, 2, 109, 33, 0, 11, 32, 2, 65, 1, 106, 33, 2, 12, 1, 11, 11, 11, 32, 1, 32, 0, 114, 33, 1, 32, 1, 11, 16, 0, 32, 0, 40, 2, 4, 32, 1, 65, 2, 116, 106, 40, 2, 0, 11, 47, 1, 1, 127, 32, 1, 32, 0, 40, 2, 12, 79, 4, 64, 2, 64, 65, 160, 196, 0, 65, 176, 3, 65, 232, 0, 65, 42, 16, 0, 0, 11, 0, 11, 32, 0, 32, 1, 16, 67, 33, 2, 65, 0, 26, 32, 2, 11, 123, 1, 3, 127, 65, 0, 33, 2, 65, 1, 33, 3, 2, 64, 3, 64, 32, 3, 65, 32, 76, 33, 4, 32, 4, 4, 64, 2, 64, 32, 0, 32, 3, 16, 63, 4, 127, 32, 1, 32, 3, 16, 63, 69, 5, 65, 0, 11, 4, 127, 65, 1, 5, 32, 0, 32, 3, 16, 63, 69, 4, 127, 32, 1, 32, 3, 16, 63, 5, 65, 0, 11, 11, 4, 64, 32, 3, 65, 0, 70, 4, 64, 32, 2, 65, 1, 106, 33, 2, 5, 32, 2, 65, 2, 32, 3, 65, 1, 107, 116, 114, 33, 2, 11, 11, 11, 32, 3, 65, 1, 106, 33, 3, 12, 1, 11, 11, 11, 32, 2, 65, 2, 109, 11, 37, 0, 32, 0, 32, 0, 65, 16, 117, 115, 33, 0, 32, 0, 65, 2, 106, 33, 0, 32, 0, 35, 17, 32, 0, 35, 17, 16, 60, 111, 16, 68, 16, 69, 26, 32, 0, 11, 176, 1, 1, 6, 127, 32, 1, 16, 25, 33, 1, 32, 0, 65, 0, 118, 33, 4, 65, 0, 33, 5, 2, 64, 3, 64, 32, 5, 35, 17, 16, 60, 72, 33, 6, 32, 6, 4, 64, 2, 64, 32, 4, 65, 4, 16, 63, 4, 64, 32, 0, 32, 0, 65, 0, 118, 65, 10, 16, 55, 34, 7, 32, 5, 16, 64, 115, 33, 0, 32, 7, 16, 26, 5, 32, 0, 35, 32, 114, 33, 0, 11, 11, 32, 5, 65, 1, 106, 33, 5, 12, 1, 11, 11, 11, 32, 4, 16, 65, 33, 4, 32, 4, 32, 4, 65, 2, 117, 115, 33, 4, 32, 4, 32, 4, 65, 4, 117, 115, 33, 4, 32, 4, 32, 4, 65, 8, 117, 115, 33, 4, 32, 4, 65, 6, 117, 35, 32, 115, 16, 66, 33, 4, 32, 4, 16, 70, 33, 4, 32, 0, 65, 244, 3, 2, 127, 65, 2, 36, 19, 35, 30, 11, 40, 2, 0, 17, 0, 0, 33, 6, 32, 1, 16, 26, 32, 6, 11, 233, 3, 1, 8, 127, 32, 1, 16, 25, 33, 1, 32, 0, 65, 0, 118, 65, 10, 16, 55, 34, 5, 32, 1, 16, 58, 34, 6, 16, 25, 33, 7, 32, 7, 16, 56, 33, 8, 32, 2, 32, 8, 115, 33, 9, 65, 0, 33, 10, 2, 64, 3, 64, 32, 8, 65, 4, 78, 33, 12, 32, 12, 4, 64, 32, 7, 32, 10, 16, 59, 35, 36, 40, 2, 124, 113, 32, 7, 32, 10, 65, 1, 106, 34, 10, 16, 59, 35, 36, 40, 2, 124, 113, 65, 8, 116, 114, 32, 7, 32, 10, 65, 1, 106, 34, 10, 16, 59, 35, 36, 40, 2, 124, 113, 65, 16, 116, 114, 32, 7, 32, 10, 65, 1, 106, 34, 10, 16, 59, 35, 36, 40, 2, 124, 113, 65, 24, 116, 114, 33, 11, 32, 11, 35, 33, 113, 35, 28, 40, 2, 0, 108, 32, 11, 65, 16, 118, 35, 28, 40, 2, 0, 108, 35, 33, 113, 65, 16, 116, 106, 33, 11, 32, 11, 32, 11, 65, 24, 118, 115, 33, 11, 32, 11, 35, 33, 113, 35, 28, 40, 2, 8, 108, 32, 11, 65, 16, 118, 35, 28, 40, 2, 12, 108, 35, 35, 113, 65, 16, 116, 106, 33, 11, 32, 9, 35, 34, 113, 35, 28, 40, 2, 4, 108, 32, 9, 65, 16, 118, 35, 28, 40, 2, 0, 108, 35, 33, 113, 65, 16, 116, 106, 32, 11, 115, 33, 9, 32, 8, 65, 4, 107, 33, 8, 32, 10, 65, 1, 106, 33, 10, 12, 1, 11, 11, 11, 2, 64, 2, 64, 2, 64, 2, 64, 32, 8, 33, 12, 32, 12, 65, 3, 70, 13, 0, 32, 12, 65, 2, 70, 13, 1, 32, 12, 65, 1, 70, 13, 2, 12, 3, 11, 32, 9, 32, 7, 32, 10, 65, 2, 106, 16, 59, 35, 36, 40, 2, 124, 113, 65, 16, 116, 115, 33, 9, 11, 32, 9, 32, 7, 32, 10, 65, 1, 106, 16, 59, 35, 36, 40, 2, 124, 113, 65, 8, 116, 115, 33, 9, 11, 32, 9, 32, 7, 32, 10, 16, 59, 35, 36, 40, 2, 124, 113, 115, 33, 9, 32, 9, 35, 34, 113, 35, 28, 40, 2, 0, 108, 32, 9, 65, 16, 118, 35, 28, 40, 2, 4, 108, 35, 33, 113, 65, 16, 116, 106, 33, 9, 11, 32, 9, 32, 9, 65, 13, 118, 115, 33, 9, 32, 9, 35, 33, 113, 35, 28, 40, 2, 0, 108, 32, 9, 65, 16, 118, 35, 28, 40, 2, 8, 108, 35, 34, 113, 65, 16, 116, 106, 33, 9, 32, 9, 32, 9, 65, 15, 118, 115, 33, 9, 32, 5, 16, 26, 32, 6, 16, 26, 32, 9, 35, 29, 115, 35, 26, 16, 71, 35, 26, 32, 9, 65, 255, 1, 113, 16, 64, 115, 33, 6, 32, 1, 16, 26, 32, 7, 16, 26, 32, 6, 11, 14, 0, 32, 0, 35, 26, 35, 12, 35, 13, 35, 14, 16, 72, 11, 62, 0, 35, 22, 32, 0, 16, 73, 35, 22, 40, 2, 24, 2, 127, 65, 2, 36, 19, 35, 30, 11, 40, 2, 0, 17, 0, 0, 16, 65, 183, 16, 2, 35, 22, 40, 2, 24, 2, 127, 65, 2, 36, 19, 35, 30, 11, 40, 2, 0, 17, 0, 0, 35, 22, 40, 2, 32, 115, 54, 2, 28, 11, 12, 0, 35, 22, 35, 22, 40, 2, 24, 54, 2, 28, 11, 80, 0, 35, 16, 4, 64, 16, 31, 68, 0, 0, 0, 0, 160, 78, 230, 64, 162, 170, 65, 175, 146, 21, 106, 36, 11, 11, 65, 0, 36, 16, 35, 10, 65, 203, 219, 143, 1, 115, 35, 22, 40, 2, 28, 2, 127, 65, 2, 36, 19, 35, 30, 11, 40, 2, 0, 17, 0, 0, 65, 212, 196, 183, 188, 122, 2, 127, 65, 2, 36, 19, 35, 30, 11, 40, 2, 0, 17, 0, 0, 11, 18, 0, 32, 0, 32, 1, 102, 4, 127, 32, 0, 32, 2, 101, 5, 65, 0, 11, 11, 54, 0, 32, 0, 32, 0, 65, 1, 117, 115, 33, 0, 32, 0, 32, 0, 65, 2, 117, 115, 33, 0, 32, 0, 32, 0, 65, 4, 117, 115, 33, 0, 32, 0, 32, 0, 65, 8, 117, 115, 33, 0, 32, 0, 32, 0, 65, 16, 117, 115, 33, 0, 32, 0, 11, 197, 10, 3, 8, 127, 2, 126, 3, 124, 35, 15, 69, 4, 64, 65, 1, 36, 15, 16, 31, 35, 24, 40, 2, 0, 183, 162, 170, 35, 24, 40, 2, 4, 106, 36, 11, 11, 35, 17, 65, 4, 16, 68, 35, 24, 40, 2, 8, 71, 4, 64, 65, 1, 36, 23, 16, 76, 35, 11, 16, 69, 36, 11, 11, 16, 31, 35, 24, 40, 2, 12, 183, 162, 170, 35, 24, 40, 2, 16, 106, 33, 1, 65, 0, 33, 2, 2, 64, 3, 64, 32, 2, 32, 1, 72, 33, 3, 32, 3, 4, 64, 2, 64, 16, 1, 33, 11, 16, 1, 33, 12, 32, 11, 68, 0, 0, 0, 0, 0, 0, 0, 0, 99, 4, 127, 65, 1, 5, 32, 11, 68, 0, 0, 0, 0, 0, 0, 240, 63, 100, 11, 4, 127, 65, 1, 5, 32, 12, 68, 0, 0, 0, 0, 0, 0, 0, 0, 99, 11, 4, 127, 65, 1, 5, 32, 12, 68, 0, 0, 0, 0, 0, 0, 240, 63, 100, 11, 4, 127, 65, 1, 5, 32, 11, 32, 12, 97, 11, 4, 64, 16, 76, 35, 11, 16, 69, 36, 11, 35, 24, 40, 2, 20, 36, 3, 65, 1, 36, 23, 11, 11, 32, 2, 65, 1, 106, 33, 2, 12, 1, 11, 11, 11, 16, 31, 33, 13, 65, 0, 33, 4, 65, 0, 33, 5, 32, 13, 35, 24, 43, 3, 168, 1, 35, 24, 43, 3, 176, 1, 16, 77, 4, 64, 35, 24, 40, 2, 24, 33, 5, 16, 31, 35, 24, 40, 2, 72, 183, 162, 170, 35, 24, 40, 2, 76, 106, 33, 4, 5, 32, 13, 35, 24, 43, 3, 176, 1, 35, 24, 43, 3, 184, 1, 16, 77, 4, 64, 35, 24, 40, 2, 28, 33, 5, 16, 31, 35, 24, 40, 2, 80, 183, 162, 170, 35, 24, 40, 2, 84, 106, 33, 4, 5, 32, 13, 35, 24, 43, 3, 184, 1, 35, 24, 43, 3, 192, 1, 16, 77, 4, 64, 35, 24, 40, 2, 32, 33, 5, 16, 31, 35, 24, 40, 2, 88, 183, 162, 170, 35, 24, 40, 2, 92, 106, 33, 4, 5, 32, 13, 35, 24, 43, 3, 192, 1, 35, 24, 43, 3, 200, 1, 16, 77, 4, 64, 35, 24, 40, 2, 36, 33, 5, 16, 31, 35, 24, 40, 2, 96, 183, 162, 170, 35, 24, 40, 2, 100, 106, 33, 4, 5, 32, 13, 35, 24, 43, 3, 200, 1, 35, 24, 43, 3, 208, 1, 16, 77, 4, 64, 35, 24, 40, 2, 40, 33, 5, 16, 31, 35, 24, 40, 2, 104, 183, 162, 170, 35, 24, 40, 2, 108, 106, 33, 4, 5, 32, 13, 35, 24, 43, 3, 208, 1, 35, 24, 43, 3, 216, 1, 16, 77, 4, 64, 35, 24, 40, 2, 44, 33, 5, 16, 31, 35, 24, 40, 2, 112, 183, 162, 170, 35, 24, 40, 2, 116, 106, 33, 4, 5, 32, 13, 35, 24, 43, 3, 216, 1, 35, 24, 43, 3, 224, 1, 16, 77, 4, 64, 35, 24, 40, 2, 48, 33, 5, 16, 31, 35, 24, 40, 2, 120, 183, 162, 170, 35, 24, 40, 2, 124, 106, 33, 4, 5, 32, 13, 35, 24, 43, 3, 224, 1, 35, 24, 43, 3, 232, 1, 16, 77, 4, 64, 35, 24, 40, 2, 52, 33, 5, 16, 31, 35, 24, 40, 2, 128, 1, 183, 162, 170, 35, 24, 40, 2, 132, 1, 106, 33, 4, 5, 32, 13, 35, 24, 43, 3, 232, 1, 35, 24, 43, 3, 240, 1, 16, 77, 4, 64, 35, 24, 40, 2, 56, 33, 5, 16, 31, 35, 24, 40, 2, 136, 1, 183, 162, 170, 35, 24, 40, 2, 140, 1, 106, 33, 4, 5, 32, 13, 35, 24, 43, 3, 240, 1, 35, 24, 43, 3, 248, 1, 16, 77, 4, 64, 35, 24, 40, 2, 60, 33, 5, 16, 31, 35, 24, 40, 2, 144, 1, 183, 162, 170, 35, 24, 40, 2, 148, 1, 106, 33, 4, 5, 32, 13, 35, 24, 43, 3, 248, 1, 35, 24, 43, 3, 128, 2, 16, 77, 4, 64, 35, 24, 40, 2, 64, 33, 5, 16, 31, 35, 24, 40, 2, 152, 1, 183, 162, 170, 35, 24, 40, 2, 156, 1, 106, 33, 4, 5, 32, 13, 35, 24, 43, 3, 128, 2, 35, 24, 43, 3, 136, 2, 16, 77, 4, 64, 35, 24, 40, 2, 68, 33, 5, 16, 31, 35, 24, 40, 2, 160, 1, 183, 162, 170, 35, 24, 40, 2, 164, 1, 106, 33, 4, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 65, 0, 33, 2, 2, 64, 3, 64, 32, 2, 32, 1, 72, 33, 3, 32, 3, 4, 64, 2, 64, 2, 126, 16, 3, 176, 11, 33, 9, 2, 126, 16, 3, 176, 11, 33, 10, 32, 9, 32, 10, 65, 2, 2, 127, 65, 3, 36, 19, 35, 25, 11, 40, 2, 0, 17, 9, 0, 69, 4, 127, 65, 1, 5, 32, 9, 35, 24, 41, 3, 144, 2, 83, 11, 4, 127, 65, 1, 5, 32, 10, 35, 24, 41, 3, 144, 2, 83, 11, 4, 64, 32, 5, 65, 155, 172, 135, 139, 127, 115, 33, 5, 32, 5, 65, 144, 128, 202, 21, 114, 33, 5, 65, 228, 0, 36, 3, 65, 1, 36, 23, 11, 11, 32, 2, 65, 1, 106, 33, 2, 12, 1, 11, 11, 11, 35, 3, 16, 78, 65, 1, 106, 35, 9, 74, 4, 127, 65, 1, 5, 35, 11, 183, 68, 0, 0, 0, 0, 0, 11, 177, 64, 68, 0, 0, 0, 0, 0, 160, 117, 64, 68, 0, 0, 0, 0, 0, 11, 177, 64, 160, 16, 77, 11, 4, 127, 65, 1, 5, 35, 11, 183, 68, 0, 0, 0, 0, 188, 36, 21, 65, 68, 0, 0, 0, 0, 188, 36, 21, 65, 68, 0, 0, 0, 0, 160, 78, 230, 64, 160, 16, 77, 69, 11, 4, 64, 32, 5, 65, 204, 180, 189, 2, 106, 33, 5, 32, 5, 65, 172, 210, 144, 244, 0, 16, 69, 33, 5, 32, 5, 65, 150, 205, 2, 107, 33, 5, 32, 4, 65, 50, 109, 33, 4, 32, 4, 65, 132, 190, 196, 2, 16, 69, 33, 4, 65, 1, 36, 23, 5, 32, 5, 65, 130, 137, 150, 1, 115, 35, 22, 40, 2, 28, 2, 127, 65, 2, 36, 19, 35, 30, 11, 40, 2, 0, 17, 0, 0, 32, 0, 65, 192, 135, 196, 15, 115, 35, 22, 40, 2, 28, 2, 127, 65, 2, 36, 19, 35, 30, 11, 40, 2, 0, 17, 0, 0, 115, 32, 0, 65, 24, 116, 65, 0, 118, 115, 35, 22, 40, 2, 28, 2, 127, 65, 2, 36, 19, 35, 30, 11, 40, 2, 0, 17, 0, 0, 33, 5, 11, 16, 31, 68, 0, 0, 0, 0, 0, 160, 117, 64, 162, 170, 65, 139, 34, 106, 36, 11, 35, 27, 35, 22, 40, 2, 28, 54, 2, 16, 65, 195, 233, 250, 238, 1, 35, 22, 40, 2, 28, 115, 65, 228, 130, 155, 41, 115, 33, 3, 32, 4, 32, 0, 115, 35, 22, 40, 2, 28, 2, 127, 65, 2, 36, 19, 35, 30, 11, 40, 2, 0, 17, 0, 0, 33, 6, 32, 6, 32, 5, 32, 3, 115, 2, 127, 65, 2, 36, 19, 35, 30, 11, 40, 2, 0, 17, 0, 0, 33, 7, 35, 3, 16, 78, 65, 1, 106, 16, 27, 36, 3, 32, 7, 65, 144, 228, 165, 16, 115, 35, 22, 40, 2, 28, 2, 127, 65, 2, 36, 19, 35, 30, 11, 40, 2, 0, 17, 0, 0, 33, 8, 32, 13, 68, 0, 0, 0, 0, 30, 198, 45, 65, 162, 170, 32, 0, 115, 65, 203, 219, 143, 1, 115, 36, 10, 65, 1, 36, 16, 32, 8, 65, 236, 237, 216, 11, 2, 127, 65, 2, 36, 19, 35, 30, 11, 40, 2, 0, 17, 0, 0, 35, 22, 40, 2, 28, 115, 11, 241, 1, 2, 4, 127, 1, 124, 35, 36, 40, 2, 0, 35, 36, 40, 2, 4, 35, 36, 40, 2, 8, 35, 36, 40, 2, 12, 35, 36, 40, 2, 16, 32, 0, 114, 115, 108, 35, 36, 40, 2, 20, 115, 106, 35, 36, 40, 2, 24, 115, 106, 65, 1, 117, 33, 1, 35, 36, 40, 2, 28, 35, 36, 40, 2, 32, 35, 36, 40, 2, 36, 35, 36, 40, 2, 40, 35, 36, 40, 2, 44, 32, 0, 32, 1, 106, 114, 115, 113, 35, 36, 40, 2, 48, 115, 108, 115, 65, 1, 117, 33, 2, 35, 36, 40, 2, 52, 35, 36, 40, 2, 56, 35, 36, 40, 2, 60, 35, 36, 40, 2, 64, 35, 36, 40, 2, 68, 32, 0, 32, 1, 106, 114, 115, 106, 35, 36, 40, 2, 72, 107, 115, 113, 65, 1, 117, 33, 3, 35, 36, 40, 2, 76, 35, 36, 40, 2, 80, 35, 36, 40, 2, 84, 32, 0, 32, 3, 106, 32, 1, 106, 114, 115, 35, 36, 40, 2, 88, 107, 35, 36, 40, 2, 92, 113, 35, 36, 40, 2, 96, 115, 106, 35, 36, 40, 2, 100, 115, 65, 1, 117, 33, 4, 2, 124, 35, 36, 40, 2, 104, 32, 1, 106, 32, 2, 106, 32, 3, 106, 32, 4, 106, 35, 36, 40, 2, 108, 106, 183, 33, 5, 32, 5, 153, 11, 170, 35, 22, 40, 2, 12, 113, 11, 119, 1, 4, 127, 32, 0, 40, 2, 8, 33, 3, 32, 1, 32, 3, 32, 2, 118, 75, 4, 64, 32, 1, 65, 252, 255, 255, 255, 3, 32, 2, 118, 75, 4, 64, 2, 64, 65, 128, 3, 65, 176, 3, 65, 14, 65, 48, 16, 0, 0, 11, 0, 11, 32, 0, 40, 2, 0, 33, 4, 32, 1, 32, 2, 116, 33, 5, 32, 4, 32, 5, 16, 23, 33, 6, 32, 6, 32, 3, 106, 65, 0, 32, 5, 32, 3, 107, 16, 32, 32, 6, 32, 4, 71, 4, 64, 32, 0, 32, 6, 54, 2, 0, 32, 0, 32, 6, 54, 2, 4, 11, 32, 0, 32, 5, 54, 2, 8, 11, 11, 21, 0, 65, 0, 26, 32, 0, 40, 2, 4, 32, 1, 65, 2, 116, 106, 32, 2, 54, 2, 0, 11, 69, 0, 32, 1, 32, 0, 40, 2, 12, 79, 4, 64, 32, 1, 65, 0, 72, 4, 64, 2, 64, 65, 160, 196, 0, 65, 176, 3, 65, 248, 0, 65, 22, 16, 0, 0, 11, 0, 11, 32, 0, 32, 1, 65, 1, 106, 65, 2, 16, 81, 32, 0, 32, 1, 65, 1, 106, 54, 2, 12, 11, 32, 0, 32, 1, 32, 2, 16, 82, 11, 16, 0, 32, 0, 40, 2, 4, 32, 1, 65, 0, 116, 106, 45, 0, 0, 11, 47, 1, 1, 127, 32, 1, 32, 0, 40, 2, 12, 79, 4, 64, 2, 64, 65, 160, 196, 0, 65, 176, 3, 65, 232, 0, 65, 42, 16, 0, 0, 11, 0, 11, 32, 0, 32, 1, 16, 84, 33, 2, 65, 0, 26, 32, 2, 11, 21, 0, 65, 0, 26, 32, 0, 40, 2, 4, 32, 1, 65, 0, 116, 106, 32, 2, 58, 0, 0, 11, 69, 0, 32, 1, 32, 0, 40, 2, 12, 79, 4, 64, 32, 1, 65, 0, 72, 4, 64, 2, 64, 65, 160, 196, 0, 65, 176, 3, 65, 248, 0, 65, 22, 16, 0, 0, 11, 0, 11, 32, 0, 32, 1, 65, 1, 106, 65, 0, 16, 81, 32, 0, 32, 1, 65, 1, 106, 54, 2, 12, 11, 32, 0, 32, 1, 32, 2, 16, 86, 11, 255, 2, 1, 5, 127, 35, 37, 65, 255, 1, 65, 2, 109, 65, 1, 107, 113, 65, 2, 106, 33, 2, 35, 37, 35, 27, 40, 2, 16, 115, 16, 80, 36, 37, 35, 20, 65, 0, 16, 68, 65, 0, 71, 4, 127, 35, 20, 65, 1, 16, 68, 65, 0, 71, 5, 65, 0, 11, 4, 64, 35, 20, 32, 2, 35, 36, 40, 2, 132, 1, 106, 35, 20, 65, 0, 16, 68, 16, 80, 35, 27, 40, 2, 16, 115, 16, 83, 35, 20, 32, 2, 35, 20, 65, 1, 16, 68, 16, 80, 16, 83, 35, 20, 65, 0, 65, 0, 16, 83, 35, 20, 65, 1, 65, 0, 16, 83, 11, 35, 37, 65, 255, 1, 65, 2, 109, 65, 1, 107, 113, 65, 2, 106, 33, 4, 32, 0, 4, 64, 35, 20, 32, 2, 16, 68, 16, 80, 35, 27, 40, 2, 16, 115, 33, 3, 35, 20, 32, 2, 32, 3, 35, 20, 32, 2, 35, 36, 40, 2, 136, 1, 106, 16, 68, 16, 80, 115, 16, 83, 35, 20, 32, 4, 35, 36, 40, 2, 132, 1, 106, 35, 20, 32, 2, 35, 36, 40, 2, 132, 1, 106, 16, 68, 16, 83, 35, 20, 32, 4, 32, 3, 16, 83, 5, 35, 20, 32, 2, 35, 36, 40, 2, 132, 1, 106, 16, 68, 35, 27, 40, 2, 16, 115, 16, 80, 33, 3, 35, 20, 32, 2, 35, 36, 40, 2, 132, 1, 106, 32, 3, 35, 20, 32, 2, 35, 36, 40, 2, 128, 1, 106, 16, 68, 16, 80, 115, 16, 83, 35, 20, 32, 4, 35, 20, 32, 2, 16, 68, 16, 83, 35, 20, 32, 4, 35, 36, 40, 2, 132, 1, 106, 32, 3, 16, 83, 11, 65, 0, 33, 5, 2, 64, 3, 64, 32, 5, 32, 1, 72, 33, 6, 32, 6, 4, 64, 2, 64, 35, 21, 32, 5, 35, 21, 32, 5, 16, 85, 32, 3, 65, 0, 35, 36, 40, 2, 108, 107, 32, 5, 108, 35, 36, 40, 2, 112, 113, 107, 32, 5, 35, 36, 40, 2, 116, 113, 35, 36, 40, 2, 120, 116, 117, 115, 35, 36, 40, 2, 124, 113, 16, 87, 11, 32, 5, 65, 1, 106, 33, 5, 12, 1, 11, 11, 11, 11, 4, 0, 16, 48, 11, 11, 0, 65, 0, 26, 35, 0, 32, 0, 16, 19, 11, 163, 1, 1, 2, 127, 32, 0, 40, 2, 4, 33, 1, 32, 1, 65, 255, 255, 255, 255, 0, 113, 33, 2, 65, 0, 26, 65, 1, 26, 32, 0, 40, 2, 0, 65, 1, 113, 69, 69, 4, 64, 65, 0, 65, 224, 0, 65, 250, 0, 65, 14, 16, 0, 0, 11, 32, 2, 65, 1, 70, 4, 64, 32, 0, 65, 20, 106, 65, 1, 16, 106, 65, 1, 26, 2, 64, 65, 1, 26, 32, 1, 65, 128, 128, 128, 128, 120, 113, 69, 69, 4, 64, 65, 0, 65, 224, 0, 65, 254, 0, 65, 18, 16, 0, 0, 11, 32, 0, 16, 90, 11, 5, 65, 1, 26, 32, 2, 65, 0, 75, 69, 4, 64, 65, 0, 65, 224, 0, 65, 136, 1, 65, 16, 16, 0, 0, 11, 65, 1, 26, 32, 0, 32, 1, 65, 255, 255, 255, 255, 0, 65, 127, 115, 113, 32, 2, 65, 1, 107, 114, 54, 2, 4, 11, 11, 49, 0, 32, 0, 35, 40, 73, 4, 64, 15, 11, 65, 1, 26, 2, 64, 65, 1, 26, 32, 1, 65, 1, 70, 69, 4, 64, 65, 0, 65, 224, 0, 65, 197, 0, 65, 16, 16, 0, 0, 11, 32, 0, 65, 20, 107, 16, 91, 11, 11, 3, 0, 1, 11, 3, 0, 1, 11, 20, 1, 1, 127, 32, 0, 40, 2, 0, 34, 2, 4, 64, 32, 2, 32, 1, 16, 92, 11, 11, 14, 0, 65, 0, 26, 32, 0, 40, 2, 0, 32, 1, 16, 92, 11, 8, 0, 32, 0, 32, 1, 16, 96, 11, 11, 0, 32, 0, 40, 2, 4, 32, 1, 16, 92, 11, 8, 0, 32, 0, 32, 1, 16, 98, 11, 14, 0, 65, 0, 26, 32, 0, 40, 2, 0, 32, 1, 16, 92, 11, 8, 0, 32, 0, 32, 1, 16, 100, 11, 11, 0, 32, 0, 40, 2, 4, 32, 1, 16, 92, 11, 8, 0, 32, 0, 32, 1, 16, 102, 11, 11, 0, 32, 0, 40, 2, 4, 32, 1, 16, 92, 11, 8, 0, 32, 0, 32, 1, 16, 104, 11, 137, 1, 0, 2, 64, 2, 64, 2, 64, 2, 64, 2, 64, 2, 64, 2, 64, 2, 64, 2, 64, 32, 0, 65, 8, 107, 40, 2, 0, 14, 8, 0, 1, 2, 3, 4, 5, 6, 7, 8, 11, 2, 64, 32, 0, 32, 1, 16, 93, 15, 11, 0, 11, 2, 64, 32, 0, 32, 1, 16, 94, 15, 11, 0, 11, 2, 64, 32, 0, 32, 1, 16, 95, 15, 11, 0, 11, 2, 64, 32, 0, 32, 1, 16, 97, 15, 11, 0, 11, 2, 64, 32, 0, 32, 1, 16, 99, 15, 11, 0, 11, 2, 64, 32, 0, 32, 1, 16, 101, 15, 11, 0, 11, 2, 64, 32, 0, 32, 1, 16, 103, 15, 11, 0, 11, 2, 64, 32, 0, 32, 1, 16, 105, 15, 11, 0, 11, 0, 11, 11, 151, 70, 26, 0, 65, 12, 11, 64, 60, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 40, 0, 0, 0, 97, 0, 108, 0, 108, 0, 111, 0, 99, 0, 97, 0, 116, 0, 105, 0, 111, 0, 110, 0, 32, 0, 116, 0, 111, 0, 111, 0, 32, 0, 108, 0, 97, 0, 114, 0, 103, 0, 101, 0, 0, 0, 0, 0, 0, 65, 204, 0, 11, 64, 60, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 30, 0, 0, 0, 126, 0, 108, 0, 105, 0, 98, 0, 47, 0, 114, 0, 116, 0, 47, 0, 112, 0, 117, 0, 114, 0, 101, 0, 46, 0, 116, 0, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 65, 140, 1, 11, 64, 60, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 30, 0, 0, 0, 126, 0, 108, 0, 105, 0, 98, 0, 47, 0, 114, 0, 116, 0, 47, 0, 116, 0, 108, 0, 115, 0, 102, 0, 46, 0, 116, 0, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 65, 204, 1, 11, 48, 44, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 24, 0, 0, 0, 126, 0, 108, 0, 105, 0, 98, 0, 47, 0, 109, 0, 97, 0, 116, 0, 104, 0, 46, 0, 116, 0, 115, 0, 0, 0, 0, 0, 0, 65, 252, 1, 11, 64, 60, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 0, 0, 0, 189, 12, 69, 0, 23, 0, 0, 0, 66, 166, 0, 0, 31, 2, 0, 0, 61, 21, 0, 0, 52, 155, 33, 2, 1, 0, 0, 0, 43, 156, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 65, 188, 2, 11, 48, 44, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 16, 0, 0, 0, 16, 1, 0, 0, 16, 1, 0, 0, 32, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 65, 236, 2, 11, 48, 44, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 28, 0, 0, 0, 73, 0, 110, 0, 118, 0, 97, 0, 108, 0, 105, 0, 100, 0, 32, 0, 108, 0, 101, 0, 110, 0, 103, 0, 116, 0, 104, 0, 0, 65, 156, 3, 11, 48, 44, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 26, 0, 0, 0, 126, 0, 108, 0, 105, 0, 98, 0, 47, 0, 97, 0, 114, 0, 114, 0, 97, 0, 121, 0, 46, 0, 116, 0, 115, 0, 0, 0, 0, 65, 204, 3, 11, 32, 28, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 8, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 65, 236, 3, 11, 32, 28, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 8, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 65, 140, 4, 11, 48, 44, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 22, 0, 0, 0, 95, 0, 83, 0, 101, 0, 110, 0, 112, 0, 97, 0, 72, 0, 97, 0, 115, 0, 104, 0, 49, 0, 0, 0, 0, 0, 0, 0, 0, 65, 188, 4, 11, 32, 28, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 7, 0, 0, 0, 8, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 65, 220, 4, 11, 64, 60, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 40, 0, 0, 0, 184, 151, 0, 0, 127, 10, 0, 0, 185, 44, 0, 0, 16, 230, 0, 0, 17, 78, 0, 0, 210, 40, 0, 0, 0, 85, 0, 0, 18, 232, 0, 0, 108, 136, 0, 0, 177, 54, 0, 0, 0, 0, 0, 0, 0, 65, 156, 5, 11, 48, 44, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 16, 0, 0, 0, 112, 2, 0, 0, 112, 2, 0, 0, 40, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 65, 204, 5, 11, 128, 1, 124, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 100, 0, 0, 0, 116, 0, 111, 0, 83, 0, 116, 0, 114, 0, 105, 0, 110, 0, 103, 0, 40, 0, 41, 0, 32, 0, 114, 0, 97, 0, 100, 0, 105, 0, 120, 0, 32, 0, 97, 0, 114, 0, 103, 0, 117, 0, 109, 0, 101, 0, 110, 0, 116, 0, 32, 0, 109, 0, 117, 0, 115, 0, 116, 0, 32, 0, 98, 0, 101, 0, 32, 0, 98, 0, 101, 0, 116, 0, 119, 0, 101, 0, 101, 0, 110, 0, 32, 0, 50, 0, 32, 0, 97, 0, 110, 0, 100, 0, 32, 0, 51, 0, 54, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 65, 204, 6, 11, 64, 60, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 38, 0, 0, 0, 126, 0, 108, 0, 105, 0, 98, 0, 47, 0, 117, 0, 116, 0, 105, 0, 108, 0, 47, 0, 110, 0, 117, 0, 109, 0, 98, 0, 101, 0, 114, 0, 46, 0, 116, 0, 115, 0, 0, 0, 0, 0, 0, 0, 0, 65, 140, 7, 11, 32, 28, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 48, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 65, 172, 7, 11, 144, 3, 48, 0, 48, 0, 48, 0, 49, 0, 48, 0, 50, 0, 48, 0, 51, 0, 48, 0, 52, 0, 48, 0, 53, 0, 48, 0, 54, 0, 48, 0, 55, 0, 48, 0, 56, 0, 48, 0, 57, 0, 49, 0, 48, 0, 49, 0, 49, 0, 49, 0, 50, 0, 49, 0, 51, 0, 49, 0, 52, 0, 49, 0, 53, 0, 49, 0, 54, 0, 49, 0, 55, 0, 49, 0, 56, 0, 49, 0, 57, 0, 50, 0, 48, 0, 50, 0, 49, 0, 50, 0, 50, 0, 50, 0, 51, 0, 50, 0, 52, 0, 50, 0, 53, 0, 50, 0, 54, 0, 50, 0, 55, 0, 50, 0, 56, 0, 50, 0, 57, 0, 51, 0, 48, 0, 51, 0, 49, 0, 51, 0, 50, 0, 51, 0, 51, 0, 51, 0, 52, 0, 51, 0, 53, 0, 51, 0, 54, 0, 51, 0, 55, 0, 51, 0, 56, 0, 51, 0, 57, 0, 52, 0, 48, 0, 52, 0, 49, 0, 52, 0, 50, 0, 52, 0, 51, 0, 52, 0, 52, 0, 52, 0, 53, 0, 52, 0, 54, 0, 52, 0, 55, 0, 52, 0, 56, 0, 52, 0, 57, 0, 53, 0, 48, 0, 53, 0, 49, 0, 53, 0, 50, 0, 53, 0, 51, 0, 53, 0, 52, 0, 53, 0, 53, 0, 53, 0, 54, 0, 53, 0, 55, 0, 53, 0, 56, 0, 53, 0, 57, 0, 54, 0, 48, 0, 54, 0, 49, 0, 54, 0, 50, 0, 54, 0, 51, 0, 54, 0, 52, 0, 54, 0, 53, 0, 54, 0, 54, 0, 54, 0, 55, 0, 54, 0, 56, 0, 54, 0, 57, 0, 55, 0, 48, 0, 55, 0, 49, 0, 55, 0, 50, 0, 55, 0, 51, 0, 55, 0, 52, 0, 55, 0, 53, 0, 55, 0, 54, 0, 55, 0, 55, 0, 55, 0, 56, 0, 55, 0, 57, 0, 56, 0, 48, 0, 56, 0, 49, 0, 56, 0, 50, 0, 56, 0, 51, 0, 56, 0, 52, 0, 56, 0, 53, 0, 56, 0, 54, 0, 56, 0, 55, 0, 56, 0, 56, 0, 56, 0, 57, 0, 57, 0, 48, 0, 57, 0, 49, 0, 57, 0, 50, 0, 57, 0, 51, 0, 57, 0, 52, 0, 57, 0, 53, 0, 57, 0, 54, 0, 57, 0, 55, 0, 57, 0, 56, 0, 57, 0, 57, 0, 0, 65, 188, 10, 11, 160, 8, 28, 4, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 4, 0, 0, 48, 0, 48, 0, 48, 0, 49, 0, 48, 0, 50, 0, 48, 0, 51, 0, 48, 0, 52, 0, 48, 0, 53, 0, 48, 0, 54, 0, 48, 0, 55, 0, 48, 0, 56, 0, 48, 0, 57, 0, 48, 0, 97, 0, 48, 0, 98, 0, 48, 0, 99, 0, 48, 0, 100, 0, 48, 0, 101, 0, 48, 0, 102, 0, 49, 0, 48, 0, 49, 0, 49, 0, 49, 0, 50, 0, 49, 0, 51, 0, 49, 0, 52, 0, 49, 0, 53, 0, 49, 0, 54, 0, 49, 0, 55, 0, 49, 0, 56, 0, 49, 0, 57, 0, 49, 0, 97, 0, 49, 0, 98, 0, 49, 0, 99, 0, 49, 0, 100, 0, 49, 0, 101, 0, 49, 0, 102, 0, 50, 0, 48, 0, 50, 0, 49, 0, 50, 0, 50, 0, 50, 0, 51, 0, 50, 0, 52, 0, 50, 0, 53, 0, 50, 0, 54, 0, 50, 0, 55, 0, 50, 0, 56, 0, 50, 0, 57, 0, 50, 0, 97, 0, 50, 0, 98, 0, 50, 0, 99, 0, 50, 0, 100, 0, 50, 0, 101, 0, 50, 0, 102, 0, 51, 0, 48, 0, 51, 0, 49, 0, 51, 0, 50, 0, 51, 0, 51, 0, 51, 0, 52, 0, 51, 0, 53, 0, 51, 0, 54, 0, 51, 0, 55, 0, 51, 0, 56, 0, 51, 0, 57, 0, 51, 0, 97, 0, 51, 0, 98, 0, 51, 0, 99, 0, 51, 0, 100, 0, 51, 0, 101, 0, 51, 0, 102, 0, 52, 0, 48, 0, 52, 0, 49, 0, 52, 0, 50, 0, 52, 0, 51, 0, 52, 0, 52, 0, 52, 0, 53, 0, 52, 0, 54, 0, 52, 0, 55, 0, 52, 0, 56, 0, 52, 0, 57, 0, 52, 0, 97, 0, 52, 0, 98, 0, 52, 0, 99, 0, 52, 0, 100, 0, 52, 0, 101, 0, 52, 0, 102, 0, 53, 0, 48, 0, 53, 0, 49, 0, 53, 0, 50, 0, 53, 0, 51, 0, 53, 0, 52, 0, 53, 0, 53, 0, 53, 0, 54, 0, 53, 0, 55, 0, 53, 0, 56, 0, 53, 0, 57, 0, 53, 0, 97, 0, 53, 0, 98, 0, 53, 0, 99, 0, 53, 0, 100, 0, 53, 0, 101, 0, 53, 0, 102, 0, 54, 0, 48, 0, 54, 0, 49, 0, 54, 0, 50, 0, 54, 0, 51, 0, 54, 0, 52, 0, 54, 0, 53, 0, 54, 0, 54, 0, 54, 0, 55, 0, 54, 0, 56, 0, 54, 0, 57, 0, 54, 0, 97, 0, 54, 0, 98, 0, 54, 0, 99, 0, 54, 0, 100, 0, 54, 0, 101, 0, 54, 0, 102, 0, 55, 0, 48, 0, 55, 0, 49, 0, 55, 0, 50, 0, 55, 0, 51, 0, 55, 0, 52, 0, 55, 0, 53, 0, 55, 0, 54, 0, 55, 0, 55, 0, 55, 0, 56, 0, 55, 0, 57, 0, 55, 0, 97, 0, 55, 0, 98, 0, 55, 0, 99, 0, 55, 0, 100, 0, 55, 0, 101, 0, 55, 0, 102, 0, 56, 0, 48, 0, 56, 0, 49, 0, 56, 0, 50, 0, 56, 0, 51, 0, 56, 0, 52, 0, 56, 0, 53, 0, 56, 0, 54, 0, 56, 0, 55, 0, 56, 0, 56, 0, 56, 0, 57, 0, 56, 0, 97, 0, 56, 0, 98, 0, 56, 0, 99, 0, 56, 0, 100, 0, 56, 0, 101, 0, 56, 0, 102, 0, 57, 0, 48, 0, 57, 0, 49, 0, 57, 0, 50, 0, 57, 0, 51, 0, 57, 0, 52, 0, 57, 0, 53, 0, 57, 0, 54, 0, 57, 0, 55, 0, 57, 0, 56, 0, 57, 0, 57, 0, 57, 0, 97, 0, 57, 0, 98, 0, 57, 0, 99, 0, 57, 0, 100, 0, 57, 0, 101, 0, 57, 0, 102, 0, 97, 0, 48, 0, 97, 0, 49, 0, 97, 0, 50, 0, 97, 0, 51, 0, 97, 0, 52, 0, 97, 0, 53, 0, 97, 0, 54, 0, 97, 0, 55, 0, 97, 0, 56, 0, 97, 0, 57, 0, 97, 0, 97, 0, 97, 0, 98, 0, 97, 0, 99, 0, 97, 0, 100, 0, 97, 0, 101, 0, 97, 0, 102, 0, 98, 0, 48, 0, 98, 0, 49, 0, 98, 0, 50, 0, 98, 0, 51, 0, 98, 0, 52, 0, 98, 0, 53, 0, 98, 0, 54, 0, 98, 0, 55, 0, 98, 0, 56, 0, 98, 0, 57, 0, 98, 0, 97, 0, 98, 0, 98, 0, 98, 0, 99, 0, 98, 0, 100, 0, 98, 0, 101, 0, 98, 0, 102, 0, 99, 0, 48, 0, 99, 0, 49, 0, 99, 0, 50, 0, 99, 0, 51, 0, 99, 0, 52, 0, 99, 0, 53, 0, 99, 0, 54, 0, 99, 0, 55, 0, 99, 0, 56, 0, 99, 0, 57, 0, 99, 0, 97, 0, 99, 0, 98, 0, 99, 0, 99, 0, 99, 0, 100, 0, 99, 0, 101, 0, 99, 0, 102, 0, 100, 0, 48, 0, 100, 0, 49, 0, 100, 0, 50, 0, 100, 0, 51, 0, 100, 0, 52, 0, 100, 0, 53, 0, 100, 0, 54, 0, 100, 0, 55, 0, 100, 0, 56, 0, 100, 0, 57, 0, 100, 0, 97, 0, 100, 0, 98, 0, 100, 0, 99, 0, 100, 0, 100, 0, 100, 0, 101, 0, 100, 0, 102, 0, 101, 0, 48, 0, 101, 0, 49, 0, 101, 0, 50, 0, 101, 0, 51, 0, 101, 0, 52, 0, 101, 0, 53, 0, 101, 0, 54, 0, 101, 0, 55, 0, 101, 0, 56, 0, 101, 0, 57, 0, 101, 0, 97, 0, 101, 0, 98, 0, 101, 0, 99, 0, 101, 0, 100, 0, 101, 0, 101, 0, 101, 0, 102, 0, 102, 0, 48, 0, 102, 0, 49, 0, 102, 0, 50, 0, 102, 0, 51, 0, 102, 0, 52, 0, 102, 0, 53, 0, 102, 0, 54, 0, 102, 0, 55, 0, 102, 0, 56, 0, 102, 0, 57, 0, 102, 0, 97, 0, 102, 0, 98, 0, 102, 0, 99, 0, 102, 0, 100, 0, 102, 0, 101, 0, 102, 0, 102, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 65, 220, 18, 11, 96, 92, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 72, 0, 0, 0, 48, 0, 49, 0, 50, 0, 51, 0, 52, 0, 53, 0, 54, 0, 55, 0, 56, 0, 57, 0, 97, 0, 98, 0, 99, 0, 100, 0, 101, 0, 102, 0, 103, 0, 104, 0, 105, 0, 106, 0, 107, 0, 108, 0, 109, 0, 110, 0, 111, 0, 112, 0, 113, 0, 114, 0, 115, 0, 116, 0, 117, 0, 118, 0, 119, 0, 120, 0, 121, 0, 122, 0, 0, 0, 0, 0, 0, 65, 188, 19, 11, 32, 28, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 8, 0, 0, 0, 110, 0, 117, 0, 108, 0, 108, 0, 0, 0, 0, 0, 0, 65, 220, 19, 11, 32, 28, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 65, 128, 20, 11, 128, 32, 0, 0, 0, 0, 0, 160, 246, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 200, 185, 242, 130, 44, 214, 191, 128, 86, 55, 40, 36, 180, 250, 60, 0, 0, 0, 0, 0, 128, 246, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 88, 191, 189, 209, 213, 191, 32, 247, 224, 216, 8, 165, 28, 189, 0, 0, 0, 0, 0, 96, 246, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 88, 69, 23, 119, 118, 213, 191, 109, 80, 182, 213, 164, 98, 35, 189, 0, 0, 0, 0, 0, 64, 246, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 248, 45, 135, 173, 26, 213, 191, 213, 103, 176, 158, 228, 132, 230, 188, 0, 0, 0, 0, 0, 32, 246, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 120, 119, 149, 95, 190, 212, 191, 224, 62, 41, 147, 105, 27, 4, 189, 0, 0, 0, 0, 0, 0, 246, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 96, 28, 194, 139, 97, 212, 191, 204, 132, 76, 72, 47, 216, 19, 61, 0, 0, 0, 0, 0, 224, 245, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 168, 134, 134, 48, 4, 212, 191, 58, 11, 130, 237, 243, 66, 220, 60, 0, 0, 0, 0, 0, 192, 245, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 105, 85, 76, 166, 211, 191, 96, 148, 81, 134, 198, 177, 32, 61, 0, 0, 0, 0, 0, 160, 245, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128, 152, 154, 221, 71, 211, 191, 146, 128, 197, 212, 77, 89, 37, 61, 0, 0, 0, 0, 0, 128, 245, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 225, 186, 226, 232, 210, 191, 216, 43, 183, 153, 30, 123, 38, 61, 0, 0, 0, 0, 0, 96, 245, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 136, 222, 19, 90, 137, 210, 191, 63, 176, 207, 182, 20, 202, 21, 61, 0, 0, 0, 0, 0, 96, 245, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 136, 222, 19, 90, 137, 210, 191, 63, 176, 207, 182, 20, 202, 21, 61, 0, 0, 0, 0, 0, 64, 245, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 120, 207, 251, 65, 41, 210, 191, 118, 218, 83, 40, 36, 90, 22, 189, 0, 0, 0, 0, 0, 32, 245, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 152, 105, 193, 152, 200, 209, 191, 4, 84, 231, 104, 188, 175, 31, 189, 0, 0, 0, 0, 0, 0, 245, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 168, 171, 171, 92, 103, 209, 191, 240, 168, 130, 51, 198, 31, 31, 61, 0, 0, 0, 0, 0, 224, 244, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 174, 249, 139, 5, 209, 191, 102, 90, 5, 253, 196, 168, 38, 189, 0, 0, 0, 0, 0, 192, 244, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 144, 115, 226, 36, 163, 208, 191, 14, 3, 244, 126, 238, 107, 12, 189, 0, 0, 0, 0, 0, 160, 244, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 208, 180, 148, 37, 64, 208, 191, 127, 45, 244, 158, 184, 54, 240, 188, 0, 0, 0, 0, 0, 160, 244, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 208, 180, 148, 37, 64, 208, 191, 127, 45, 244, 158, 184, 54, 240, 188, 0, 0, 0, 0, 0, 128, 244, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 94, 109, 24, 185, 207, 191, 135, 60, 153, 171, 42, 87, 13, 61, 0, 0, 0, 0, 0, 96, 244, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 96, 220, 203, 173, 240, 206, 191, 36, 175, 134, 156, 183, 38, 43, 61, 0, 0, 0, 0, 0, 64, 244, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 240, 42, 110, 7, 39, 206, 191, 16, 255, 63, 84, 79, 47, 23, 189, 0, 0, 0, 0, 0, 32, 244, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 192, 79, 107, 33, 92, 205, 191, 27, 104, 202, 187, 145, 186, 33, 61, 0, 0, 0, 0, 0, 0, 244, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 160, 154, 199, 247, 143, 204, 191, 52, 132, 159, 104, 79, 121, 39, 61, 0, 0, 0, 0, 0, 0, 244, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 160, 154, 199, 247, 143, 204, 191, 52, 132, 159, 104, 79, 121, 39, 61, 0, 0, 0, 0, 0, 224, 243, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 144, 45, 116, 134, 194, 203, 191, 143, 183, 139, 49, 176, 78, 25, 61, 0, 0, 0, 0, 0, 192, 243, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 192, 128, 78, 201, 243, 202, 191, 102, 144, 205, 63, 99, 78, 186, 60, 0, 0, 0, 0, 0, 160, 243, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 176, 226, 31, 188, 35, 202, 191, 234, 193, 70, 220, 100, 140, 37, 189, 0, 0, 0, 0, 0, 160, 243, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 176, 226, 31, 188, 35, 202, 191, 234, 193, 70, 220, 100, 140, 37, 189, 0, 0, 0, 0, 0, 128, 243, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 80, 244, 156, 90, 82, 201, 191, 227, 212, 193, 4, 217, 209, 42, 189, 0, 0, 0, 0, 0, 96, 243, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 208, 32, 101, 160, 127, 200, 191, 9, 250, 219, 127, 191, 189, 43, 61, 0, 0, 0, 0, 0, 64, 243, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 224, 16, 2, 137, 171, 199, 191, 88, 74, 83, 114, 144, 219, 43, 61, 0, 0, 0, 0, 0, 64, 243, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 224, 16, 2, 137, 171, 199, 191, 88, 74, 83, 114, 144, 219, 43, 61, 0, 0, 0, 0, 0, 32, 243, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 208, 25, 231, 15, 214, 198, 191, 102, 226, 178, 163, 106, 228, 16, 189, 0, 0, 0, 0, 0, 0, 243, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 144, 167, 112, 48, 255, 197, 191, 57, 80, 16, 159, 67, 158, 30, 189, 0, 0, 0, 0, 0, 0, 243, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 144, 167, 112, 48, 255, 197, 191, 57, 80, 16, 159, 67, 158, 30, 189, 0, 0, 0, 0, 0, 224, 242, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 176, 161, 227, 229, 38, 197, 191, 143, 91, 7, 144, 139, 222, 32, 189, 0, 0, 0, 0, 0, 192, 242, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128, 203, 108, 43, 77, 196, 191, 60, 120, 53, 97, 193, 12, 23, 61, 0, 0, 0, 0, 0, 192, 242, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128, 203, 108, 43, 77, 196, 191, 60, 120, 53, 97, 193, 12, 23, 61, 0, 0, 0, 0, 0, 160, 242, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 144, 30, 32, 252, 113, 195, 191, 58, 84, 39, 77, 134, 120, 241, 60, 0, 0, 0, 0, 0, 128, 242, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 240, 31, 248, 82, 149, 194, 191, 8, 196, 113, 23, 48, 141, 36, 189, 0, 0, 0, 0, 0, 96, 242, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 96, 47, 213, 42, 183, 193, 191, 150, 163, 17, 24, 164, 128, 46, 189, 0, 0, 0, 0, 0, 96, 242, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 96, 47, 213, 42, 183, 193, 191, 150, 163, 17, 24, 164, 128, 46, 189, 0, 0, 0, 0, 0, 64, 242, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 144, 208, 124, 126, 215, 192, 191, 244, 91, 232, 136, 150, 105, 10, 61, 0, 0, 0, 0, 0, 64, 242, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 144, 208, 124, 126, 215, 192, 191, 244, 91, 232, 136, 150, 105, 10, 61, 0, 0, 0, 0, 0, 32, 242, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 224, 219, 49, 145, 236, 191, 191, 242, 51, 163, 92, 84, 117, 37, 189, 0, 0, 0, 0, 0, 0, 242, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 43, 110, 7, 39, 190, 191, 60, 0, 240, 42, 44, 52, 42, 61, 0, 0, 0, 0, 0, 0, 242, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 43, 110, 7, 39, 190, 191, 60, 0, 240, 42, 44, 52, 42, 61, 0, 0, 0, 0, 0, 224, 241, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 192, 91, 143, 84, 94, 188, 191, 6, 190, 95, 88, 87, 12, 29, 189, 0, 0, 0, 0, 0, 192, 241, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 224, 74, 58, 109, 146, 186, 191, 200, 170, 91, 232, 53, 57, 37, 61, 0, 0, 0, 0, 0, 192, 241, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 224, 74, 58, 109, 146, 186, 191, 200, 170, 91, 232, 53, 57, 37, 61, 0, 0, 0, 0, 0, 160, 241, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 160, 49, 214, 69, 195, 184, 191, 104, 86, 47, 77, 41, 124, 19, 61, 0, 0, 0, 0, 0, 160, 241, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 160, 49, 214, 69, 195, 184, 191, 104, 86, 47, 77, 41, 124, 19, 61, 0, 0, 0, 0, 0, 128, 241, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 96, 229, 138, 210, 240, 182, 191, 218, 115, 51, 201, 55, 151, 38, 189, 0, 0, 0, 0, 0, 96, 241, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 6, 63, 7, 27, 181, 191, 87, 94, 198, 97, 91, 2, 31, 61, 0, 0, 0, 0, 0, 96, 241, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 6, 63, 7, 27, 181, 191, 87, 94, 198, 97, 91, 2, 31, 61, 0, 0, 0, 0, 0, 64, 241, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 224, 27, 150, 215, 65, 179, 191, 223, 19, 249, 204, 218, 94, 44, 61, 0, 0, 0, 0, 0, 64, 241, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 224, 27, 150, 215, 65, 179, 191, 223, 19, 249, 204, 218, 94, 44, 61, 0, 0, 0, 0, 0, 32, 241, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128, 163, 238, 54, 101, 177, 191, 9, 163, 143, 118, 94, 124, 20, 61, 0, 0, 0, 0, 0, 0, 241, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128, 17, 192, 48, 10, 175, 191, 145, 142, 54, 131, 158, 89, 45, 61, 0, 0, 0, 0, 0, 0, 241, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128, 17, 192, 48, 10, 175, 191, 145, 142, 54, 131, 158, 89, 45, 61, 0, 0, 0, 0, 0, 224, 240, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128, 25, 113, 221, 66, 171, 191, 76, 112, 214, 229, 122, 130, 28, 61, 0, 0, 0, 0, 0, 224, 240, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128, 25, 113, 221, 66, 171, 191, 76, 112, 214, 229, 122, 130, 28, 61, 0, 0, 0, 0, 0, 192, 240, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 192, 50, 246, 88, 116, 167, 191, 238, 161, 242, 52, 70, 252, 44, 189, 0, 0, 0, 0, 0, 192, 240, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 192, 50, 246, 88, 116, 167, 191, 238, 161, 242, 52, 70, 252, 44, 189, 0, 0, 0, 0, 0, 160, 240, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 192, 254, 185, 135, 158, 163, 191, 170, 254, 38, 245, 183, 2, 245, 60, 0, 0, 0, 0, 0, 160, 240, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 192, 254, 185, 135, 158, 163, 191, 170, 254, 38, 245, 183, 2, 245, 60, 0, 0, 0, 0, 0, 128, 240, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 120, 14, 155, 130, 159, 191, 228, 9, 126, 124, 38, 128, 41, 189, 0, 0, 0, 0, 0, 128, 240, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 120, 14, 155, 130, 159, 191, 228, 9, 126, 124, 38, 128, 41, 189, 0, 0, 0, 0, 0, 96, 240, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128, 213, 7, 27, 185, 151, 191, 57, 166, 250, 147, 84, 141, 40, 189, 0, 0, 0, 0, 0, 64, 240, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 252, 176, 168, 192, 143, 191, 156, 166, 211, 246, 124, 30, 223, 188, 0, 0, 0, 0, 0, 64, 240, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 252, 176, 168, 192, 143, 191, 156, 166, 211, 246, 124, 30, 223, 188, 0, 0, 0, 0, 0, 32, 240, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 107, 42, 224, 127, 191, 228, 64, 218, 13, 63, 226, 25, 189, 0, 0, 0, 0, 0, 32, 240, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 107, 42, 224, 127, 191, 228, 64, 218, 13, 63, 226, 25, 189, 0, 0, 0, 0, 0, 0, 240, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 240, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 192, 239, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 137, 117, 21, 16, 128, 63, 232, 43, 157, 153, 107, 199, 16, 189, 0, 0, 0, 0, 0, 128, 239, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128, 147, 88, 86, 32, 144, 63, 210, 247, 226, 6, 91, 220, 35, 189, 0, 0, 0, 0, 0, 64, 239, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 201, 40, 37, 73, 152, 63, 52, 12, 90, 50, 186, 160, 42, 189, 0, 0, 0, 0, 0, 0, 239, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 231, 137, 93, 65, 160, 63, 83, 215, 241, 92, 192, 17, 1, 61, 0, 0, 0, 0, 0, 192, 238, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 46, 212, 174, 102, 164, 63, 40, 253, 189, 117, 115, 22, 44, 189, 0, 0, 0, 0, 0, 128, 238, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 192, 159, 20, 170, 148, 168, 63, 125, 38, 90, 208, 149, 121, 25, 189, 0, 0, 0, 0, 0, 64, 238, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 192, 221, 205, 115, 203, 172, 63, 7, 40, 216, 71, 242, 104, 26, 189, 0, 0, 0, 0, 0, 32, 238, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 192, 6, 192, 49, 234, 174, 63, 123, 59, 201, 79, 62, 17, 14, 189, 0, 0, 0, 0, 0, 224, 237, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 96, 70, 209, 59, 151, 177, 63, 155, 158, 13, 86, 93, 50, 37, 189, 0, 0, 0, 0, 0, 160, 237, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 224, 209, 167, 245, 189, 179, 63, 215, 78, 219, 165, 94, 200, 44, 61, 0, 0, 0, 0, 0, 96, 237, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 160, 151, 77, 90, 233, 181, 63, 30, 29, 93, 60, 6, 105, 44, 189, 0, 0, 0, 0, 0, 64, 237, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 192, 234, 10, 211, 0, 183, 63, 50, 237, 157, 169, 141, 30, 236, 60, 0, 0, 0, 0, 0, 0, 237, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 89, 93, 94, 51, 185, 63, 218, 71, 189, 58, 92, 17, 35, 61, 0, 0, 0, 0, 0, 192, 236, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 96, 173, 141, 200, 106, 187, 63, 229, 104, 247, 43, 128, 144, 19, 189, 0, 0, 0, 0, 0, 160, 236, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 188, 1, 88, 136, 188, 63, 211, 172, 90, 198, 209, 70, 38, 61, 0, 0, 0, 0, 0, 96, 236, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 10, 131, 57, 199, 190, 63, 224, 69, 230, 175, 104, 192, 45, 189, 0, 0, 0, 0, 0, 64, 236, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 224, 219, 57, 145, 232, 191, 63, 253, 10, 161, 79, 214, 52, 37, 189, 0, 0, 0, 0, 0, 0, 236, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 224, 39, 130, 142, 23, 193, 63, 242, 7, 45, 206, 120, 239, 33, 61, 0, 0, 0, 0, 0, 224, 235, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 240, 35, 126, 43, 170, 193, 63, 52, 153, 56, 68, 142, 167, 44, 61, 0, 0, 0, 0, 0, 160, 235, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128, 134, 12, 97, 209, 194, 63, 161, 180, 129, 203, 108, 157, 3, 61, 0, 0, 0, 0, 0, 128, 235, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 144, 21, 176, 252, 101, 195, 63, 137, 114, 75, 35, 168, 47, 198, 60, 0, 0, 0, 0, 0, 64, 235, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 176, 51, 131, 61, 145, 196, 63, 120, 182, 253, 84, 121, 131, 37, 61, 0, 0, 0, 0, 0, 32, 235, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 176, 161, 228, 229, 39, 197, 63, 199, 125, 105, 229, 232, 51, 38, 61, 0, 0, 0, 0, 0, 224, 234, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 140, 190, 78, 87, 198, 63, 120, 46, 60, 44, 139, 207, 25, 61, 0, 0, 0, 0, 0, 192, 234, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 112, 117, 139, 18, 240, 198, 63, 225, 33, 156, 229, 141, 17, 37, 189, 0, 0, 0, 0, 0, 160, 234, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 80, 68, 133, 141, 137, 199, 63, 5, 67, 145, 112, 16, 102, 28, 189, 0, 0, 0, 0, 0, 96, 234, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 57, 235, 175, 190, 200, 63, 209, 44, 233, 170, 84, 61, 7, 189, 0, 0, 0, 0, 0, 64, 234, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 247, 220, 90, 90, 201, 63, 111, 255, 160, 88, 40, 242, 7, 61, 0, 0, 0, 0, 0, 0, 234, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 224, 138, 60, 237, 147, 202, 63, 105, 33, 86, 80, 67, 114, 40, 189, 0, 0, 0, 0, 0, 224, 233, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 208, 91, 87, 216, 49, 203, 63, 170, 225, 172, 78, 141, 53, 12, 189, 0, 0, 0, 0, 0, 192, 233, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 224, 59, 56, 135, 208, 203, 63, 182, 18, 84, 89, 196, 75, 45, 189, 0, 0, 0, 0, 0, 160, 233, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 240, 198, 251, 111, 204, 63, 210, 43, 150, 197, 114, 236, 241, 188, 0, 0, 0, 0, 0, 96, 233, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 144, 212, 176, 61, 177, 205, 63, 53, 176, 21, 247, 42, 255, 42, 189, 0, 0, 0, 0, 0, 64, 233, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 231, 255, 14, 83, 206, 63, 48, 244, 65, 96, 39, 18, 194, 60, 0, 0, 0, 0, 0, 32, 233, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 221, 228, 173, 245, 206, 63, 17, 142, 187, 101, 21, 33, 202, 188, 0, 0, 0, 0, 0, 0, 233, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 176, 179, 108, 28, 153, 207, 63, 48, 223, 12, 202, 236, 203, 27, 61, 0, 0, 0, 0, 0, 192, 232, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 88, 77, 96, 56, 113, 208, 63, 145, 78, 237, 22, 219, 156, 248, 60, 0, 0, 0, 0, 0, 160, 232, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 96, 97, 103, 45, 196, 208, 63, 233, 234, 60, 22, 139, 24, 39, 61, 0, 0, 0, 0, 0, 128, 232, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 232, 39, 130, 142, 23, 209, 63, 28, 240, 165, 99, 14, 33, 44, 189, 0, 0, 0, 0, 0, 96, 232, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 248, 172, 203, 92, 107, 209, 63, 129, 22, 165, 247, 205, 154, 43, 61, 0, 0, 0, 0, 0, 64, 232, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 104, 90, 99, 153, 191, 209, 63, 183, 189, 71, 81, 237, 166, 44, 61, 0, 0, 0, 0, 0, 32, 232, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 184, 14, 109, 69, 20, 210, 63, 234, 186, 70, 186, 222, 135, 10, 61, 0, 0, 0, 0, 0, 224, 231, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 144, 220, 124, 240, 190, 210, 63, 244, 4, 80, 74, 250, 156, 42, 61, 0, 0, 0, 0, 0, 192, 231, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 96, 211, 225, 241, 20, 211, 63, 184, 60, 33, 211, 122, 226, 40, 189, 0, 0, 0, 0, 0, 160, 231, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 190, 118, 103, 107, 211, 63, 200, 119, 241, 176, 205, 110, 17, 61, 0, 0, 0, 0, 0, 128, 231, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 48, 51, 119, 82, 194, 211, 63, 92, 189, 6, 182, 84, 59, 24, 61, 0, 0, 0, 0, 0, 96, 231, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 232, 213, 35, 180, 25, 212, 63, 157, 224, 144, 236, 54, 228, 8, 61, 0, 0, 0, 0, 0, 64, 231, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 200, 113, 194, 141, 113, 212, 63, 117, 214, 103, 9, 206, 39, 47, 189, 0, 0, 0, 0, 0, 32, 231, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 48, 23, 158, 224, 201, 212, 63, 164, 216, 10, 27, 137, 32, 46, 189, 0, 0, 0, 0, 0, 0, 231, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 160, 56, 7, 174, 34, 213, 63, 89, 199, 100, 129, 112, 190, 46, 61, 0, 0, 0, 0, 0, 224, 230, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 208, 200, 83, 247, 123, 213, 63, 239, 64, 93, 238, 237, 173, 31, 61, 0, 0, 0, 0, 0, 192, 230, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 96, 89, 223, 189, 213, 213, 63, 220, 101, 164, 8, 42, 11, 10, 189, 0, 65, 128, 52, 11, 128, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 240, 63, 110, 191, 136, 26, 79, 59, 155, 60, 53, 51, 251, 169, 61, 246, 239, 63, 93, 220, 216, 156, 19, 96, 113, 188, 97, 128, 119, 62, 154, 236, 239, 63, 209, 102, 135, 16, 122, 94, 144, 188, 133, 127, 110, 232, 21, 227, 239, 63, 19, 246, 103, 53, 82, 210, 140, 60, 116, 133, 21, 211, 176, 217, 239, 63, 250, 142, 249, 35, 128, 206, 139, 188, 222, 246, 221, 41, 107, 208, 239, 63, 97, 200, 230, 97, 78, 247, 96, 60, 200, 155, 117, 24, 69, 199, 239, 63, 153, 211, 51, 91, 228, 163, 144, 60, 131, 243, 198, 202, 62, 190, 239, 63, 109, 123, 131, 93, 166, 154, 151, 60, 15, 137, 249, 108, 88, 181, 239, 63, 252, 239, 253, 146, 26, 181, 142, 60, 247, 71, 114, 43, 146, 172, 239, 63, 209, 156, 47, 112, 61, 190, 62, 60, 162, 209, 211, 50, 236, 163, 239, 63, 11, 110, 144, 137, 52, 3, 106, 188, 27, 211, 254, 175, 102, 155, 239, 63, 14, 189, 47, 42, 82, 86, 149, 188, 81, 91, 18, 208, 1, 147, 239, 63, 85, 234, 78, 140, 239, 128, 80, 188, 204, 49, 108, 192, 189, 138, 239, 63, 22, 244, 213, 185, 35, 201, 145, 188, 224, 45, 169, 174, 154, 130, 239, 63, 175, 85, 92, 233, 227, 211, 128, 60, 81, 142, 165, 200, 152, 122, 239, 63, 72, 147, 165, 234, 21, 27, 128, 188, 123, 81, 125, 60, 184, 114, 239, 63, 61, 50, 222, 85, 240, 31, 143, 188, 234, 141, 140, 56, 249, 106, 239, 63, 191, 83, 19, 63, 140, 137, 139, 60, 117, 203, 111, 235, 91, 99, 239, 63, 38, 235, 17, 118, 156, 217, 150, 188, 212, 92, 4, 132, 224, 91, 239, 63, 96, 47, 58, 62, 247, 236, 154, 60, 170, 185, 104, 49, 135, 84, 239, 63, 157, 56, 134, 203, 130, 231, 143, 188, 29, 217, 252, 34, 80, 77, 239, 63, 141, 195, 166, 68, 65, 111, 138, 60, 214, 140, 98, 136, 59, 70, 239, 63, 125, 4, 228, 176, 5, 122, 128, 60, 150, 220, 125, 145, 73, 63, 239, 63, 148, 168, 168, 227, 253, 142, 150, 60, 56, 98, 117, 110, 122, 56, 239, 63, 125, 72, 116, 242, 24, 94, 135, 60, 63, 166, 178, 79, 206, 49, 239, 63, 242, 231, 31, 152, 43, 71, 128, 60, 221, 124, 226, 101, 69, 43, 239, 63, 94, 8, 113, 63, 123, 184, 150, 188, 129, 99, 245, 225, 223, 36, 239, 63, 49, 171, 9, 109, 225, 247, 130, 60, 225, 222, 31, 245, 157, 30, 239, 63, 250, 191, 111, 26, 155, 33, 61, 188, 144, 217, 218, 208, 127, 24, 239, 63, 180, 10, 12, 114, 130, 55, 139, 60, 11, 3, 228, 166, 133, 18, 239, 63, 143, 203, 206, 137, 146, 20, 110, 60, 86, 47, 62, 169, 175, 12, 239, 63, 182, 171, 176, 77, 117, 77, 131, 60, 21, 183, 49, 10, 254, 6, 239, 63, 76, 116, 172, 226, 1, 66, 134, 60, 49, 216, 76, 252, 112, 1, 239, 63, 74, 248, 211, 93, 57, 221, 143, 60, 255, 22, 100, 178, 8, 252, 238, 63, 4, 91, 142, 59, 128, 163, 134, 188, 241, 159, 146, 95, 197, 246, 238, 63, 104, 80, 75, 204, 237, 74, 146, 188, 203, 169, 58, 55, 167, 241, 238, 63, 142, 45, 81, 27, 248, 7, 153, 188, 102, 216, 5, 109, 174, 236, 238, 63, 210, 54, 148, 62, 232, 209, 113, 188, 247, 159, 229, 52, 219, 231, 238, 63, 21, 27, 206, 179, 25, 25, 153, 188, 229, 168, 19, 195, 45, 227, 238, 63, 109, 76, 42, 167, 72, 159, 133, 60, 34, 52, 18, 76, 166, 222, 238, 63, 138, 105, 40, 122, 96, 18, 147, 188, 28, 128, 172, 4, 69, 218, 238, 63, 91, 137, 23, 72, 143, 167, 88, 188, 42, 46, 247, 33, 10, 214, 238, 63, 27, 154, 73, 103, 155, 44, 124, 188, 151, 168, 80, 217, 245, 209, 238, 63, 17, 172, 194, 96, 237, 99, 67, 60, 45, 137, 97, 96, 8, 206, 238, 63, 239, 100, 6, 59, 9, 102, 150, 60, 87, 0, 29, 237, 65, 202, 238, 63, 121, 3, 161, 218, 225, 204, 110, 60, 208, 60, 193, 181, 162, 198, 238, 63, 48, 18, 15, 63, 142, 255, 147, 60, 222, 211, 215, 240, 42, 195, 238, 63, 176, 175, 122, 187, 206, 144, 118, 60, 39, 42, 54, 213, 218, 191, 238, 63, 119, 224, 84, 235, 189, 29, 147, 60, 13, 221, 253, 153, 178, 188, 238, 63, 142, 163, 113, 0, 52, 148, 143, 188, 167, 44, 157, 118, 178, 185, 238, 63, 73, 163, 147, 220, 204, 222, 135, 188, 66, 102, 207, 162, 218, 182, 238, 63, 95, 56, 15, 189, 198, 222, 120, 188, 130, 79, 157, 86, 43, 180, 238, 63, 246, 92, 123, 236, 70, 18, 134, 188, 15, 146, 93, 202, 164, 177, 238, 63, 142, 215, 253, 24, 5, 53, 147, 60, 218, 39, 181, 54, 71, 175, 238, 63, 5, 155, 138, 47, 183, 152, 123, 60, 253, 199, 151, 212, 18, 173, 238, 63, 9, 84, 28, 226, 225, 99, 144, 60, 41, 84, 72, 221, 7, 171, 238, 63, 234, 198, 25, 80, 133, 199, 52, 60, 183, 70, 89, 138, 38, 169, 238, 63, 53, 192, 100, 43, 230, 50, 148, 60, 72, 33, 173, 21, 111, 167, 238, 63, 159, 118, 153, 97, 74, 228, 140, 188, 9, 220, 118, 185, 225, 165, 238, 63, 168, 77, 239, 59, 197, 51, 140, 188, 133, 85, 58, 176, 126, 164, 238, 63, 174, 233, 43, 137, 120, 83, 132, 188, 32, 195, 204, 52, 70, 163, 238, 63, 88, 88, 86, 120, 221, 206, 147, 188, 37, 34, 85, 130, 56, 162, 238, 63, 100, 25, 126, 128, 170, 16, 87, 60, 115, 169, 76, 212, 85, 161, 238, 63, 40, 34, 94, 191, 239, 179, 147, 188, 205, 59, 127, 102, 158, 160, 238, 63, 130, 185, 52, 135, 173, 18, 106, 188, 191, 218, 11, 117, 18, 160, 238, 63, 238, 169, 109, 184, 239, 103, 99, 188, 47, 26, 101, 60, 178, 159, 238, 63, 81, 136, 224, 84, 61, 220, 128, 188, 132, 148, 81, 249, 125, 159, 238, 63, 207, 62, 90, 126, 100, 31, 120, 188, 116, 95, 236, 232, 117, 159, 238, 63, 176, 125, 139, 192, 74, 238, 134, 188, 116, 129, 165, 72, 154, 159, 238, 63, 138, 230, 85, 30, 50, 25, 134, 188, 201, 103, 66, 86, 235, 159, 238, 63, 211, 212, 9, 94, 203, 156, 144, 60, 63, 93, 222, 79, 105, 160, 238, 63, 29, 165, 77, 185, 220, 50, 123, 188, 135, 1, 235, 115, 20, 161, 238, 63, 107, 192, 103, 84, 253, 236, 148, 60, 50, 193, 48, 1, 237, 161, 238, 63, 85, 108, 214, 171, 225, 235, 101, 60, 98, 78, 207, 54, 243, 162, 238, 63, 66, 207, 179, 47, 197, 161, 136, 188, 18, 26, 62, 84, 39, 164, 238, 63, 52, 55, 59, 241, 182, 105, 147, 188, 19, 206, 76, 153, 137, 165, 238, 63, 30, 255, 25, 58, 132, 94, 128, 188, 173, 199, 35, 70, 26, 167, 238, 63, 110, 87, 114, 216, 80, 212, 148, 188, 237, 146, 68, 155, 217, 168, 238, 63, 0, 138, 14, 91, 103, 173, 144, 60, 153, 102, 138, 217, 199, 170, 238, 63, 180, 234, 240, 193, 47, 183, 141, 60, 219, 160, 42, 66, 229, 172, 238, 63, 255, 231, 197, 156, 96, 182, 101, 188, 140, 68, 181, 22, 50, 175, 238, 63, 68, 95, 243, 89, 131, 246, 123, 60, 54, 119, 21, 153, 174, 177, 238, 63, 131, 61, 30, 167, 31, 9, 147, 188, 198, 255, 145, 11, 91, 180, 238, 63, 41, 30, 108, 139, 184, 169, 93, 188, 229, 197, 205, 176, 55, 183, 238, 63, 89, 185, 144, 124, 249, 35, 108, 188, 15, 82, 200, 203, 68, 186, 238, 63, 170, 249, 244, 34, 67, 67, 146, 188, 80, 78, 222, 159, 130, 189, 238, 63, 75, 142, 102, 215, 108, 202, 133, 188, 186, 7, 202, 112, 241, 192, 238, 63, 39, 206, 145, 43, 252, 175, 113, 60, 144, 240, 163, 130, 145, 196, 238, 63, 187, 115, 10, 225, 53, 210, 109, 60, 35, 35, 227, 25, 99, 200, 238, 63, 99, 34, 98, 34, 4, 197, 135, 188, 101, 229, 93, 123, 102, 204, 238, 63, 213, 49, 226, 227, 134, 28, 139, 60, 51, 45, 74, 236, 155, 208, 238, 63, 21, 187, 188, 211, 209, 187, 145, 188, 93, 37, 62, 178, 3, 213, 238, 63, 210, 49, 238, 156, 49, 204, 144, 60, 88, 179, 48, 19, 158, 217, 238, 63, 179, 90, 115, 110, 132, 105, 132, 60, 191, 253, 121, 85, 107, 222, 238, 63, 180, 157, 142, 151, 205, 223, 130, 188, 122, 243, 211, 191, 107, 227, 238, 63, 135, 51, 203, 146, 119, 26, 140, 60, 173, 211, 90, 153, 159, 232, 238, 63, 250, 217, 209, 74, 143, 123, 144, 188, 102, 182, 141, 41, 7, 238, 238, 63, 186, 174, 220, 86, 217, 195, 85, 188, 251, 21, 79, 184, 162, 243, 238, 63, 64, 246, 166, 61, 14, 164, 144, 188, 58, 89, 229, 141, 114, 249, 238, 63, 52, 147, 173, 56, 244, 214, 104, 188, 71, 94, 251, 242, 118, 255, 238, 63, 53, 138, 88, 107, 226, 238, 145, 188, 74, 6, 161, 48, 176, 5, 239, 63, 205, 221, 95, 10, 215, 255, 116, 60, 210, 193, 75, 144, 30, 12, 239, 63, 172, 152, 146, 250, 251, 189, 145, 188, 9, 30, 215, 91, 194, 18, 239, 63, 179, 12, 175, 48, 174, 110, 115, 60, 156, 82, 133, 221, 155, 25, 239, 63, 148, 253, 159, 92, 50, 227, 142, 60, 122, 208, 255, 95, 171, 32, 239, 63, 172, 89, 9, 209, 143, 224, 132, 60, 75, 209, 87, 46, 241, 39, 239, 63, 103, 26, 78, 56, 175, 205, 99, 60, 181, 231, 6, 148, 109, 47, 239, 63, 104, 25, 146, 108, 44, 107, 103, 60, 105, 144, 239, 220, 32, 55, 239, 63, 210, 181, 204, 131, 24, 138, 128, 188, 250, 195, 93, 85, 11, 63, 239, 63, 111, 250, 255, 63, 93, 173, 143, 188, 124, 137, 7, 74, 45, 71, 239, 63, 73, 169, 117, 56, 174, 13, 144, 188, 242, 137, 13, 8, 135, 79, 239, 63, 167, 7, 61, 166, 133, 163, 116, 60, 135, 164, 251, 220, 24, 88, 239, 63, 15, 34, 64, 32, 158, 145, 130, 188, 152, 131, 201, 22, 227, 96, 239, 63, 172, 146, 193, 213, 80, 90, 142, 60, 133, 50, 219, 3, 230, 105, 239, 63, 75, 107, 1, 172, 89, 58, 132, 60, 96, 180, 1, 243, 33, 115, 239, 63, 31, 62, 180, 7, 33, 213, 130, 188, 95, 155, 123, 51, 151, 124, 239, 63, 201, 13, 71, 59, 185, 42, 137, 188, 41, 161, 245, 20, 70, 134, 239, 63, 211, 136, 58, 96, 4, 182, 116, 60, 246, 63, 139, 231, 46, 144, 239, 63, 113, 114, 157, 81, 236, 197, 131, 60, 131, 76, 199, 251, 81, 154, 239, 63, 240, 145, 211, 143, 18, 247, 143, 188, 218, 144, 164, 162, 175, 164, 239, 63, 125, 116, 35, 226, 152, 174, 141, 188, 241, 103, 142, 45, 72, 175, 239, 63, 8, 32, 170, 65, 188, 195, 142, 60, 39, 90, 97, 238, 27, 186, 239, 63, 50, 235, 169, 195, 148, 43, 132, 60, 151, 186, 107, 55, 43, 197, 239, 63, 238, 133, 209, 49, 169, 100, 138, 60, 64, 69, 110, 91, 118, 208, 239, 63, 237, 227, 59, 228, 186, 55, 142, 188, 20, 190, 156, 173, 253, 219, 239, 63, 157, 205, 145, 77, 59, 137, 119, 60, 216, 144, 158, 129, 193, 231, 239, 63, 137, 204, 96, 65, 193, 5, 83, 60, 241, 113, 143, 43, 194, 243, 239, 63, 0, 65, 140, 196, 0, 11, 64, 60, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 36, 0, 0, 0, 73, 0, 110, 0, 100, 0, 101, 0, 120, 0, 32, 0, 111, 0, 117, 0, 116, 0, 32, 0, 111, 0, 102, 0, 32, 0, 114, 0, 97, 0, 110, 0, 103, 0, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 65, 208, 196, 0, 11, 68, 8, 0, 0, 0, 32, 0, 0, 0, 0, 0, 0, 0, 32, 0, 0, 0, 0, 0, 0, 0, 32, 0, 0, 0, 0, 0, 0, 0, 34, 9, 0, 0, 0, 0, 0, 0, 32, 0, 0, 0, 0, 0, 0, 0, 98, 0, 0, 0, 0, 0, 0, 0, 32, 0, 0, 0, 0, 0, 0, 0, 32, 0, 0, 0, 0, 0, 0, 0],
                A = ['rn"fu', "style", "hPzOb", "keaVT", "bskzK", "QvTyd", "14329bnJjuH", "NzYPe", "chrom", "yyCAB", "UYQwZ", "mlFpB", "CeUVi", "iRNwR", "zTajq", "fOLkK", "jNyLP", "bvVqg", "MBzwM", "vcbSV", "ZOPHb", "OCOMQ", "uggBS", "Kvazo", "QmHln", "ThoTi", "errorr", "ARizC", "iApVN", "PTQJp", "DpyAm", "dow", "lRerm", "nyDYB", "BZtXk", "WzJuY", "KREHM", "XfNBj", "UVHyR", "8|2|3", "htQOB", "SoAQV", "AMHph", "UxJGc", "DvKyK", "vZnzN", "&#%f|", "BNeQY", "WDvzF", "eQrBQ", "dCenw", "sJhnt", "Wxhxe", "zujzP", "insta", "oJqPO", "sHQQa", "wDbSW", "deRIt", "Jqkck", "-hand", "NLNEJ", "DlrFc", "ecWRQ", "Wcuua", "ArfKZ", "rgDQA", "NczDQ", "VlzAm", "IyuDQ", "QZiKE", "2tbBrYx", "GWfaU", "appen", "HcNSm", "4|6|2", "utRHH", "qCBPg", "none", "OrQtE", "aAxNI", "CgYuQ", "EQZpu", "fGvhE", "gJDFv", "yfdNL", "LbwLE", "zfnCU", "ebUtj", "dReeW", "KsQHz", "erCas", "JSyXT", "ttplj", "zfAAL", "lENCU", "yitfj", "17OfDhnd", "fceTX", "creat", "wKKds", "JOqsT", "retur", "LZtzO", "jVRuj", "EDtnO", "rjVfB", "pMcRp", "PXObN", "bUvGr", "lawRL", "eCchT", "sZBPq", "trace", "Yxhpw", "./nod", "EERRq", "hxYiW", "hgGAV", "gGIuW", "gezrf", "RMKEZ", "YTFAj", "ByGXO", "strin", "hOiSK", "HPYYc", "ZdYqS", "n (fu", "excep", "mfrbX", "XtnSu", "kRSQh", "JBMqB", "XboAl", "EvtCi", "WiVZW", "bRTXf", "memor", "ianJh", " of", "ules/", "nProp", "ogkOH", "ElpPw", "XKCHo", "HpDLd", "UieAg", "fDklt", "yXwzH", "pfycQ", "JkEhy", "GLQsI", "Xvcml", "SicGY", 'is")(', "NoYMY", "dAKbu", "kYoXR", "hhtDp", "ypeof", "ZNmLX", "logg", "AUtuw", "HxVOW", "DVeIe", "yNfYS", "JhUal", "TzpQv", "gUkDt", "JkVkx", "ion()", "MLEuc", "TPniN", "docum", "info", "VyYsD", "XwbbJ", "rnDgK", "KiXmM", "pvmqK", "0|5|3", "lAqAA", "lXUKH", "yKQai", "YKgqR", "eElem", "mepiU", "ThIYB", "DjNfP", "NkDek", "seed", "vEoaI", "XrgXV", "NDMkK", "uEdbJ", "floor", "Gvenh", "22897Nzawnv", "sembl", "ion", "mEdeG", "VUkrn", "oJLGJ", "qYpVN", "escri", "WvYgs", "TnDRh", "ent", "AapZs", "GRgQI", "node", "arseg", "ng() ", "ntiat", "cyces", "XJyMS", "xBBFX", "USvpi", "dTxHr", "QYzQb", "rSbri", "quPto", "lSlgv", "qegZA", "FJMIW", "UVaSq", "9375", "NdcDq", "VnwkH", "LlqXj", "jSavT", "OQLPI", "cqvdy", "IBRLv", "navig", "jquer", "qTdjz", "IPAvp", 'n"==t', "YhIYm", "OQdse", "jHTPo", "uOJRN", "gTPMo", "bDiyy", "rpwFY", " this", "nv_ch", "DoEXq", "iMOhJ", "KkyXf", "MTVLl", "nxRLc", "NaJgU", "is)}", "BZdmJ", "jxXFD", "VxVos", "WJNxB", "userA", "mJpwi", "PFkXd", "KuRNL", "rn th", "HIvod", "ined", "IbZEE", "uLgqw", "wbsIj", "aqnPH", "apply", "entEl", "UAtZt", "ekLLy", "BmBjZ", "JgWtM", "warnn", "fILNv", "KWaca", "jtGXS", "expor", "JAJYj", "cKMGz", "LkHDY", "iver", "oXfmI", "do_en", "DckBq", "e cod", "EEnoT", "LulDy", "ptor", "zzSyv", "wrNBx", "7|2|3", "eMtvE", "XoeqD", "KKqEB", "y/dis", "versi", "zyvmE", "AiYOb", "jHhln", "{ [na", "lyncD", '"retu', "WIoPa", "iflgV", "Strin", "IHDEE", "charC", "s[s]|", "erWbF", "qFDTz", "YPqgN", "oXkra", "zstwI", "VZshO", "VlYDV", "hLVjT", "bRfYA", "ll(th", "393474FcZvCA", "27633Wyiqji", "WIlva", "ing", "JqVAk", "GWTNz", "nlVWX", "pLxdk", "yPBEa", "then", "UrSNb", "KVRjx", "BDcKC", "ifram", "qfZcd", "kqUKe", "MtBUt", "kKyCp", "uxxbl", "conte", "AfbqX", "XrvvN", "JJSOh", "gent", "XQmwY", "lengt", "YUUBA", "CMVQl", "lYcDN", "nfuDc", "XQamf", "VFalQ", "xypEM", "Date", "tbmXo", "|0|1|", "dsMKQ", "bmLMK", "mqJaR", "Funct", "BXvew", "QHBPq", "sWgWS", "oDKWn", "wae|e", "HJNZG", "CohYk", "*45%$", "XFlYL", "ptors", "IVxbb", "dMfPZ", "CXRME", "NzeyC", "hENYD", "LJeEI", "right", "ZBgMU", "llSta", "Bykam", "catch", "fzPfM", "ECnoo", "sVIPj", "Hqhaj", "YjRpy", "now", "HmXVp", "sIbvS", "QLLiu", "fLSTa", "hPGEh", "rsRRE", "cKpvE", "dQPdk", "funct", "DIDEv", "01239", "rUbXv", "ygmSW", "Math", "wmONV", "ezIVd", "kGuqJ", "XMzaa", "DdmaN", "conso", "rfqCz", "YtZKR", "BNduf", "|4|7|", "UVYXv", "bWnDK", "fopqJ", "hSKNi", "SrdYQ", "bigSt", "aeaa", "ETKKy", "MjIOs", "QxPep", "v_che", "1|0", "hRHHN", "DAWjp", "ion t", "KBgGv", "135rEOeGi", "|a.ca", "WTndD", "UEeRM", "ctor(", "|4|2|", "PQdWL", "getOw", "dChil", "eNFoN", "tDHpH", "6|4|5", "QTdQu", "JrOOX", "rotat", "stack", "ator", "196883MSEtaK", "cUtWb", "mRsqI", "pvQLz", "ylxXJ", "cDdXR", "WWFoi", "VskON", "gackZ", "nce", "CUZAY", "DfAnM", "58oFnOJt", "fSqUQ", "FHIdx", "wcizt", "to__", "danvX", "ZXwvV", "2078wDUgIr", "Error", "hello", "rbfDT", "IohMu", "tive ", "remov", "LlHvz", "stnLs", "rGauI", "pzRTz", "ructo", "undef", "env", "e_mod", "cIAyR", "RtqFw", "run_e", "ardzd", "Objec", "erOzt", "vGrSL", "EDlbs", "set", "TecBg", "SYdVG", "des", "bbUrA", "Mwdyd", "fyDlU", "mrdGF", "oDGMp", "DLbhb", "tYDqu", "Rjsaj", "fNSwF", "bind", "axFdJ", "hOKsl", "firef", "KJEvp", "geRZU", "abort", "split", "onloa", "DrODl", "DqtpO", "YmXsD", "table", "QalFj", "tion", "LGkYi", "Insta", "keys", "abcd", "sjKho", "Weoum", "dZiEc", "vxMao", "displ", "yUyGv", "DPIMS", "qbJKL", "yobaL", "kwXQm", "mpBrl", "eowRg", "JnunQ", "MJoIa", "rando", "ODeFa", "Qxvlk", "ZjlAg", "gbPXt", "hkTMr", "oWxJl", "tPLZQ", "&&thi", "NBjZK", "nativ", "veGkz", "RFiEK", "ULIKN", "yTqtt", "hEyZd", "XfqJg", "FoIxL", "7XDdyUF", "KTaHm", "sYMUk", "GpgOz", "ANGnC", "sNkgc", "byfKp", "buffe", "cRGoM", "RSoLX", "HXdox", "LUbKY", "FYoNn", "proto", "GoWfd", "cFQek", "YJYdK", "wKIXU", "QFlCC", "PEtOj", "YTGtz", "#aeg|", "test", "dhvfb", "FvKIS", "hehe", "XpDmf", "code]", "aklLc", "Sxbsw", "duRSW", "__pro", "npnKD", "UdNZN", "5|6|0", "uJBVQ", "JUyLl", "iWJXR", "ZTWGp", "uUdmG", " side", "oStri", "PoSET", "XDCbq", "DuDJf", "nQHdn", "{}.co", "Yraen", "QIvMP", "RwoZI", "|3|5|", "Accof", "mnXrq", "cKoHX", "SEfoh", "zvbji", "LED", "ement", "nbZrh", "QXszA", "PcdVx", "LrAXl", "UBKtt", "WebAs", "ApMbP", "QWlkh", "RLGTe", "nctio", "MeFWR", "webdr", "bzFAX", "jcOXZ", "bjwhA", "HLfru", "KlzVv", "yjcTQ", "hbce4", "type", "aPhOq", "eck", "n() ", "ptRia", "DISAB", "HDecI", "uPEZv", "MsYmt", "QapTh", "0|5|4", "4479pJrzjr", "KRGuQ", "YsUen", "LvnhR", "zbkox", "xkGII", "ertyD", "reset", "Mvrvx", "YTqzT", "inclu", "ntWin", "OXsoe", "bXHac", "ehZMf", "RJVAb", "|1|3|", "BWVub", "erqCb", "const", "KTxUk", "afCSk", "tjg01", "SAQDr", "lCLDG", "odeAt", "cruJG", "toLow", "{retu", "vwbRt", "PycuC", "HIxfQ", "znUxM", "uyilc", "EdgEd", "fURtS", "OPR", "fadkv", "ihAin", "toStr", "nHPsY", "aYSWK", "uQuPJ", "app", "pPcvT", "jeKve", "omGHq", "RZwSf", "jDYck", "dTJzm", "xluuE", "iCePr", "uQSuH", "tZlLt", "xYcot", "uQIMn", "AwFyY", "nstru", "SFttc"],
                C = function(e, t) {
                    return A[e -= 455]
                },
                I = function(e, t, a, n) {
                    return C(n - -607)
                },
                S = function(e, t, a, n) {
                    return C(n - -607)
                };
            ! function(e, t) {
                for (var a = function(e, t, a, n) {
                        return C(e - -90)
                    }, n = function(e, t, a, n) {
                        return C(e - -90)
                    }, i = function(e, t, a, n) {
                        return C(e - -90)
                    };;) try {
                    if (320398 === parseInt(a(445)) * parseInt(a(438)) + parseInt(i(685)) * parseInt(C(750 - -90)) - parseInt(a(426)) + parseInt(a(1003)) * -parseInt(n(776)) + parseInt(a(877)) * -parseInt(a(532)) + -parseInt(i(620)) * -parseInt(a(409)) + parseInt(n(1002))) break;
                    e.push(e.shift())
                } catch (t) {
                    e.push(e.shift())
                }
            }(A);
            var N, O, T, j, U, P, B = new ArrayBuffer(x[I(0, 0, 0, 510) + "h"]);

            function L() {
                var e;
                return U && U[(e = 1202, S(0, 0, 0, e - 769))](null, arguments) || []
            }

            function D() {
                var e;
                return N && N[(e = 910, I(0, 0, 0, e - 477))](null, arguments) || []
            }

            function V() {
                var e;
                return O && O[(e = -503, S(0, 0, 0, e - -936))](null, arguments) || []
            }

            function R() {
                var e;
                return j && j[(e = 1186, S(0, 0, 0, e - 753))](null, arguments) || []
            }

            function M() {
                var e;
                return P && P[(e = -120, I(0, 0, 0, e - -553))](null, arguments) || []
            }
            new Uint8Array(B)[S(0, 0, 0, -49)](x);
            var z = function() {
                var t = function(e, t, a, n) {
                        return I(0, 0, 0, a - 257)
                    },
                    a = function(e, t, a, n) {
                        return S(0, 0, 0, a - 257)
                    },
                    n = function(e, t, a, n) {
                        return I(0, 0, 0, a - 257)
                    },
                    i = function(e, t, a, n) {
                        return I(0, 0, 0, a - 257)
                    },
                    r = {};
                r[t(0, 0, 498)] = function(e, t) {
                    return e !== t
                }, r[a(0, 0, 310)] = a(0, 0, 442), r[t(0, 0, 481)] = a(0, 0, 681), r[n(0, 0, 551)] = function(e, t) {
                    return e + t
                }, r[i(0, 0, 544)] = i(0, 0, 183), r[t(0, 0, 784)] = t(0, 0, 489), r[i(0, 0, 145)] = function(e, t) {
                    return e(t)
                }, r[a(0, 0, 330)] = function(e, t) {
                    return e + t
                }, r[n(0, 0, 573)] = function(e, t) {
                    return e + t
                }, r[a(0, 0, 452)] = t(0, 0, 521) + t(0, 0, 547) + a(0, 0, 339) + i(0, 0, 352), r[n(0, 0, 275)] = n(0, 0, 318) + n(0, 0, 417) + a(0, 0, 153) + a(0, 0, 725) + t(0, 0, 683) + a(0, 0, 574) + " )", r[a(0, 0, 603)] = function(e) {
                    return e()
                }, r[n(0, 0, 651)] = t(0, 0, 581), r[n(0, 0, 142)] = a(0, 0, 696), r[a(0, 0, 721)] = i(0, 0, 594), r[n(0, 0, 670)] = t(0, 0, 445), r[a(0, 0, 266)] = t(0, 0, 548) + a(0, 0, 235), r[n(0, 0, 125)] = i(0, 0, 233), r[a(0, 0, 407)] = n(0, 0, 532), r[a(0, 0, 464)] = function(e, t) {
                    return e < t
                }, r[n(0, 0, 256)] = t(0, 0, 600) + i(0, 0, 154) + "1", r[n(0, 0, 575)] = a(0, 0, 739), r[a(0, 0, 504)] = function(e, t) {
                    return e >> t
                }, r[a(0, 0, 474)] = function(e, t) {
                    return e - t
                }, r[i(0, 0, 373)] = function(e, t) {
                    return e + t
                }, r[a(0, 0, 240)] = function(e, t) {
                    return e | t
                }, r[a(0, 0, 614)] = function(e, t) {
                    return e >> t
                }, r[a(0, 0, 302)] = function(e, t) {
                    return e < t
                }, r[t(0, 0, 356)] = function(e, t) {
                    return e + t
                }, r[n(0, 0, 408)] = function(e, t, a) {
                    return e(t, a)
                }, r[t(0, 0, 623)] = function(e) {
                    return e()
                }, r[a(0, 0, 260)] = function(e, t) {
                    return e % t
                }, r[t(0, 0, 193)] = function(e, t) {
                    return e / t
                }, r[a(0, 0, 511)] = function(e, t) {
                    return e - t
                }, r[i(0, 0, 432)] = function(e, t) {
                    return e + t
                }, r[t(0, 0, 118)] = function(e, t) {
                    return e in t
                }, r[i(0, 0, 106)] = function(e, t) {
                    return e != t
                }, r[t(0, 0, 734)] = t(0, 0, 197) + t(0, 0, 685), r[t(0, 0, 447)] = i(0, 0, 117) + n(0, 0, 147) + i(0, 0, 313) + a(0, 0, 632) + n(0, 0, 723) + t(0, 0, 190) + n(0, 0, 299) + " }", r[n(0, 0, 592)] = n(0, 0, 224) + "ox", r[i(0, 0, 550)] = t(0, 0, 798) + n(0, 0, 479) + a(0, 0, 312) + a(0, 0, 559), r[t(0, 0, 205)] = function(e, t) {
                    return e > t
                }, r[t(0, 0, 443)] = function(e, t) {
                    return e === t
                }, r[i(0, 0, 114)] = t(0, 0, 392), r[t(0, 0, 440)] = t(0, 0, 200), r[n(0, 0, 695)] = function(e, t) {
                    return e & t
                }, r[a(0, 0, 180)] = function(e, t) {
                    return e & t
                }, r[a(0, 0, 411)] = function(e, t) {
                    return e in t
                }, r[t(0, 0, 750)] = function(e, t) {
                    return e === t
                }, r[a(0, 0, 500)] = n(0, 0, 673), r[n(0, 0, 778)] = a(0, 0, 539), r[t(0, 0, 277)] = n(0, 0, 776), r[a(0, 0, 130)] = function(e, t) {
                    return e == t
                }, r[a(0, 0, 483)] = n(0, 0, 789) + n(0, 0, 293) + a(0, 0, 465) + t(0, 0, 786), r[a(0, 0, 304)] = n(0, 0, 264) + i(0, 0, 708) + "e", r[t(0, 0, 212)] = a(0, 0, 117) + i(0, 0, 590) + a(0, 0, 388) + i(0, 0, 419) + a(0, 0, 339) + i(0, 0, 658) + i(0, 0, 579) + n(0, 0, 666) + n(0, 0, 262) + a(0, 0, 731) + i(0, 0, 150) + t(0, 0, 741) + t(0, 0, 674), r[i(0, 0, 409)] = a(0, 0, 630), r[i(0, 0, 664)] = a(0, 0, 534) + t(0, 0, 199) + n(0, 0, 560) + a(0, 0, 655) + a(0, 0, 718) + "t", r[n(0, 0, 267)] = t(0, 0, 187), r[a(0, 0, 325)] = t(0, 0, 252), r[t(0, 0, 656)] = function(e, t) {
                    return e in t
                }, r[n(0, 0, 801)] = function(e, t) {
                    return e === t
                }, r[i(0, 0, 291)] = t(0, 0, 287), r[n(0, 0, 261)] = i(0, 0, 477), r[t(0, 0, 748)] = function(e, t) {
                    return e > t
                }, r[t(0, 0, 176)] = a(0, 0, 770), r[a(0, 0, 542)] = n(0, 0, 458) + n(0, 0, 132) + i(0, 0, 306) + "|1", r[a(0, 0, 495)] = function(e, t) {
                    return e * t
                }, r[n(0, 0, 213)] = function(e, t) {
                    return e & t
                }, r[a(0, 0, 468)] = function(e, t) {
                    return e << t
                }, r[i(0, 0, 390)] = function(e, t) {
                    return e & t
                }, r[a(0, 0, 688)] = function(e, t) {
                    return e >>> t
                }, r[a(0, 0, 189)] = function(e, t) {
                    return e * t
                }, r[i(0, 0, 333)] = function(e, t) {
                    return e << t
                }, r[a(0, 0, 501)] = function(e, t) {
                    return e & t
                }, r[i(0, 0, 323)] = function(e, t) {
                    return e << t
                }, r[t(0, 0, 146)] = function(e, t) {
                    return e & t
                }, r[t(0, 0, 386)] = t(0, 0, 334), r[a(0, 0, 141)] = a(0, 0, 381), r[n(0, 0, 637)] = function(e, t) {
                    return e !== t
                }, r[n(0, 0, 289)] = a(0, 0, 344), r[n(0, 0, 209)] = a(0, 0, 530), r[a(0, 0, 170)] = i(0, 0, 169), r[a(0, 0, 797)] = i(0, 0, 455), r[a(0, 0, 563)] = function(e, t) {
                    return e != t
                }, r[i(0, 0, 724)] = i(0, 0, 543) + "g", r[n(0, 0, 105)] = n(0, 0, 297), r[n(0, 0, 466)] = function(e, t) {
                    return e << t
                }, r[t(0, 0, 316)] = function(e, t) {
                    return e + t
                }, r[n(0, 0, 769)] = function(e, t) {
                    return e & t
                }, r[n(0, 0, 301)] = function(e, t) {
                    return e & t
                }, r[i(0, 0, 431)] = function(e, t) {
                    return e + t
                }, r[a(0, 0, 726)] = function(e, t) {
                    return e * t
                }, r[t(0, 0, 462)] = function(e, t) {
                    return e & t
                }, r[n(0, 0, 446)] = function(e, t) {
                    return e >>> t
                }, r[t(0, 0, 162)] = function(e, t) {
                    return e | t
                }, r[t(0, 0, 368)] = function(e, t) {
                    return e << t
                }, r[t(0, 0, 345)] = function(e, t) {
                    return e << t
                }, r[t(0, 0, 215)] = function(e, t) {
                    return e * t
                }, r[n(0, 0, 290)] = t(0, 0, 112), r[t(0, 0, 412)] = function(e, t) {
                    return e & t
                }, r[a(0, 0, 133)] = function(e, t) {
                    return e >>> t
                }, r[a(0, 0, 793)] = function(e, t) {
                    return e >>> t
                }, r[n(0, 0, 596)] = n(0, 0, 469), r[a(0, 0, 456)] = function(e, t) {
                    return e !== t
                }, r[t(0, 0, 526)] = t(0, 0, 533), r[n(0, 0, 315)] = a(0, 0, 519), r[i(0, 0, 586)] = function(e, t) {
                    return e !== t
                }, r[a(0, 0, 672)] = n(0, 0, 472), r[t(0, 0, 794)] = n(0, 0, 139), r[t(0, 0, 107)] = function(e, t) {
                    return e === t
                }, r[i(0, 0, 506)] = n(0, 0, 168), r[a(0, 0, 283)] = function(e, t) {
                    return e & t
                }, r[t(0, 0, 568)] = function(e, t) {
                    return e & t
                }, r[n(0, 0, 485)] = function(e, t) {
                    return e >>> t
                }, r[n(0, 0, 536)] = i(0, 0, 341) + n(0, 0, 704), r[n(0, 0, 537)] = t(0, 0, 245), r[i(0, 0, 487)] = function(e, t) {
                    return e >> t
                }, r[a(0, 0, 257)] = function(e, t) {
                    return e + t
                }, r[a(0, 0, 569)] = function(e, t) {
                    return e + t
                }, r[t(0, 0, 659)] = function(e, t) {
                    return e ^ t
                }, r[t(0, 0, 353)] = a(0, 0, 754), r[a(0, 0, 572)] = i(0, 0, 231), r[i(0, 0, 634)] = t(0, 0, 707), r[t(0, 0, 137)] = function(e, t) {
                    return e != t
                }, r[t(0, 0, 613)] = function(e, t) {
                    return e === t
                }, r[i(0, 0, 327)] = i(0, 0, 643), r[t(0, 0, 585)] = function(e, t) {
                    return e / t
                }, r[t(0, 0, 612)] = function(e, t) {
                    return e - t
                }, r[a(0, 0, 338)] = n(0, 0, 119) + t(0, 0, 239), r[a(0, 0, 292)] = a(0, 0, 348) + n(0, 0, 382) + i(0, 0, 646), r[t(0, 0, 480)] = function(e, t) {
                    return e === t
                }, r[a(0, 0, 571)] = n(0, 0, 308), r[t(0, 0, 496)] = a(0, 0, 538), r[i(0, 0, 123)] = i(0, 0, 535), r[n(0, 0, 562)] = function(e, t) {
                    return e >> t
                }, r[n(0, 0, 393)] = function(e, t) {
                    return e >> t
                }, r[i(0, 0, 701)] = function(e, t) {
                    return e + t
                }, r[a(0, 0, 508)] = function(e, t) {
                    return e ^ t
                }, r[i(0, 0, 652)] = t(0, 0, 359) + i(0, 0, 376) + "2", r[i(0, 0, 552)] = n(0, 0, 703), r[a(0, 0, 757)] = a(0, 0, 434), r[a(0, 0, 324)] = function(e, t) {
                    return e - t
                }, r[n(0, 0, 470)] = function(e, t) {
                    return e === t
                }, r[n(0, 0, 570)] = t(0, 0, 556), r[i(0, 0, 435)] = n(0, 0, 626), r[i(0, 0, 657)] = function(e, t) {
                    return e === t
                }, r[t(0, 0, 195)] = a(0, 0, 179), r[a(0, 0, 505)] = a(0, 0, 763), r[i(0, 0, 507)] = i(0, 0, 255), r[a(0, 0, 762)] = function(e, t) {
                    return e === t
                }, r[a(0, 0, 565)] = a(0, 0, 640), r[n(0, 0, 705)] = t(0, 0, 520), r[n(0, 0, 553)] = function(e, t) {
                    return e >> t
                }, r[t(0, 0, 423)] = function(e, t) {
                    return e(t)
                }, r[n(0, 0, 564)] = i(0, 0, 174), r[t(0, 0, 416)] = a(0, 0, 622), r[a(0, 0, 499)] = a(0, 0, 396), r[n(0, 0, 218)] = function(e, t) {
                    return e > t
                }, r[i(0, 0, 248)] = function(e, t) {
                    return e % t
                }, r[a(0, 0, 405)] = function(e, t) {
                    return e - t
                }, r[a(0, 0, 541)] = function(e, t) {
                    return e & t
                }, r[t(0, 0, 259)] = function(e, t) {
                    return e >>> t
                }, r[t(0, 0, 628)] = function(e, t) {
                    return e != t
                }, r[a(0, 0, 502)] = i(0, 0, 249), r[t(0, 0, 241)] = a(0, 0, 337), r[i(0, 0, 525)] = function(e, t) {
                    return e >= t
                }, r[n(0, 0, 362)] = i(0, 0, 494) + t(0, 0, 322) + n(0, 0, 144), r[a(0, 0, 158)] = function(e, t) {
                    return e << t
                }, r[n(0, 0, 401)] = function(e, t) {
                    return e & t
                }, r[a(0, 0, 422)] = function(e, t) {
                    return e | t
                }, r[a(0, 0, 684)] = function(e, t) {
                    return e << t
                }, r[t(0, 0, 383)] = function(e, t) {
                    return e << t
                }, r[a(0, 0, 509)] = function(e, t) {
                    return e & t
                }, r[a(0, 0, 527)] = function(e, t) {
                    return e * t
                }, r[i(0, 0, 374)] = n(0, 0, 595), r[a(0, 0, 140)] = n(0, 0, 436), r[i(0, 0, 258)] = i(0, 0, 589), r[t(0, 0, 391)] = i(0, 0, 677), r[n(0, 0, 389)] = function(e, t) {
                    return e << t
                }, r[a(0, 0, 540)] = function(e, t) {
                    return e & t
                }, r[t(0, 0, 415)] = function(e, t) {
                    return e << t
                }, r[i(0, 0, 644)] = function(e, t) {
                    return e & t
                }, r[a(0, 0, 493)] = function(e, t) {
                    return e + t
                }, r[n(0, 0, 697)] = function(e, t) {
                    return e * t
                }, r[t(0, 0, 699)] = function(e, t) {
                    return e >>> t
                }, r[a(0, 0, 668)] = function(e, t) {
                    return e === t
                }, r[a(0, 0, 347)] = n(0, 0, 582), r[i(0, 0, 201)] = t(0, 0, 372), r[t(0, 0, 780)] = n(0, 0, 413), r[t(0, 0, 332)] = function(e, t) {
                    return e * t
                }, r[n(0, 0, 439)] = i(0, 0, 513), r[i(0, 0, 135)] = n(0, 0, 608), r[t(0, 0, 361)] = function(e, t) {
                    return e & t
                }, r[t(0, 0, 421)] = function(e) {
                    return e()
                }, r[n(0, 0, 375)] = function(e, t) {
                    return e === t
                }, r[a(0, 0, 629)] = n(0, 0, 311), r[a(0, 0, 768)] = i(0, 0, 714) + a(0, 0, 777) + i(0, 0, 160) + "|8", r[n(0, 0, 555)] = function(e, t) {
                    return e >> t
                }, r[n(0, 0, 785)] = function(e, t) {
                    return e(t)
                }, r[t(0, 0, 364)] = t(0, 0, 478), r[i(0, 0, 662)] = i(0, 0, 580), r[n(0, 0, 647)] = function(e) {
                    return e()
                }, r[i(0, 0, 636)] = t(0, 0, 755) + "e", r[n(0, 0, 760)] = n(0, 0, 497);
                var s = r,
                    o = function() {
                        var e = function(e, t, a, n) {
                            return i(0, 0, e - -88)
                        };
                        ({})[e(676)] = function(t, a) {
                            return s[(995, e(463))](t, a)
                        };
                        var t = !0;
                        return function(a, n) {
                            var i = function(t, a, n, i) {
                                return e(t - -183)
                            };
                            if (s[i(227)](s[i(39)], s[i(210)])) {
                                var r = t ? function() {
                                    var e;
                                    if (n) {
                                        var t = n[(e = -92, i(e - -511))](a, arguments);
                                        return n = null, t
                                    }
                                } : function() {};
                                return t = !1, r
                            }
                        }
                    }(),
                    c = s[a(0, 0, 408)](o, this, function() {
                        var e = function(e, t, a, n) {
                                return i(0, 0, e - -80)
                            },
                            t = function(e, t, n, i) {
                                return a(0, 0, e - -80)
                            },
                            r = function(e, t, a, n) {
                                return i(0, 0, e - -80)
                            },
                            c = function(e, t, a, i) {
                                return n(0, 0, e - -80)
                            },
                            l = {};
                        l[e(171)] = function(t, a) {
                            return s[(442, e(418))](t, a)
                        }, l[t(694)] = s[t(464)], l[c(583)] = s[c(704)], l[t(442)] = function(e, t) {
                            return s[(533, r(65))](e, t)
                        }, l[c(598)] = function(e, t) {
                            return s[(1016, r(250))](e, t)
                        }, l[t(349)] = function(e, t) {
                            return s[(265, r(493))](e, t)
                        }, l[c(374)] = s[r(372)], l[t(285)] = s[e(195)];
                        for (var u = l, h = s[r(523)](function() {
                                var t, a = function(e, t, a, n) {
                                        return c(a - 117)
                                    },
                                    n = function(t, a, n, i) {
                                        return e(n - 117)
                                    };
                                try {
                                    u[a(0, 0, 288)](u[a(0, 0, 811)], u[a(0, 0, 700)]) && (t = u[r(442)](Function, u[n(0, 0, 715)](u[c(349)](u[n(0, 0, 491)], u[n(0, 0, 402)]), ");"))())
                                } catch (e) {
                                    t = window
                                }
                                return t
                            }), d = h[t(48) + "le"] = h[e(48) + "le"] || {}, f = [s[t(571)], s[c(62)], s[t(641)], s[e(590)], s[t(186)], s[c(45)], s[t(327)]], m = 0; s[c(384)](m, f[c(687) + "h"]); m++)
                            for (var v = s[c(176)][t(148)]("|"), p = 0;;) {
                                switch (v[p++]) {
                                    case "0":
                                        var g = o[e(299) + e(116) + "r"][c(205) + r(269)][t(141)](o);
                                        continue;
                                    case "1":
                                        d[k] = g;
                                        continue;
                                    case "2":
                                        g[e(319) + c(665)] = y[e(319) + c(665)][r(141)](y);
                                        continue;
                                    case "3":
                                        var y = d[k] || g;
                                        continue;
                                    case "4":
                                        g[r(223) + e(102)] = o[t(141)](o);
                                        continue;
                                    case "5":
                                        var k = f[m];
                                        continue
                                }
                                break
                            }
                    });
                s[n(0, 0, 647)](c);
                var l, u, h = function() {
                        var a = function(e, t, a, n) {
                                return i(0, 0, a - 121)
                            },
                            r = function(e, t, a, i) {
                                return n(0, 0, a - 121)
                            },
                            o = function(e, t, a, i) {
                                return n(0, 0, a - 121)
                            },
                            c = function(e, a, n, i) {
                                return t(0, 0, n - 121)
                            },
                            h = {};
                        h[a(0, 0, 441)] = function(e, t) {
                            return s[a(0, 0, 777)](e, t)
                        }, h[a(0, 0, 490)] = function(e, t) {
                            return s[r(0, 0, 514)](e, t)
                        }, h[o(0, 0, 925)] = function(e, t) {
                            return s[a(0, 0, 423)](e, t)
                        }, h[a(0, 0, 810)] = function(e, t) {
                            return s[c(0, 0, 514)](e, t)
                        }, h[a(0, 0, 742)] = function(e, t) {
                            return s[(22, c(0, 0, 822))](e, t)
                        }, h[c(0, 0, 903)] = function(e, t) {
                            return s[(1505, o(0, 0, 514))](e, t)
                        }, h[o(0, 0, 687)] = function(e, t) {
                            return s[c(0, 0, 674)](e, t)
                        }, h[c(0, 0, 426)] = function(e, t) {
                            return s[c(0, 0, 822)](e, t)
                        }, h[a(0, 0, 819)] = function(e, t) {
                            return s[c(0, 0, 544)](e, t)
                        }, h[a(0, 0, 525)] = s[c(0, 0, 573)], h[o(0, 0, 597)] = s[o(0, 0, 396)], h[a(0, 0, 351)] = function(e, t) {
                            return s[r(0, 0, 883)](e, t)
                        }, h[r(0, 0, 374)] = s[o(0, 0, 685)], h[c(0, 0, 796)] = s[o(0, 0, 537)], h[o(0, 0, 438)] = s[a(0, 0, 620)], h[r(0, 0, 737)] = function(e, t) {
                            return s[(1238, c(0, 0, 339))](e, t)
                        }, h[o(0, 0, 645)] = function(e, t) {
                            return s[(870, c(0, 0, 369))](e, t)
                        }, h[c(0, 0, 519)] = function(e, t) {
                            return s[(1255, r(0, 0, 706))](e, t)
                        }, h[o(0, 0, 505)] = function(e, t) {
                            return s[a(0, 0, 526)](e, t)
                        }, h[c(0, 0, 347)] = function(e, t) {
                            return s[(591, a(0, 0, 629))](e, t)
                        }, h[a(0, 0, 679)] = function(e, t) {
                            return s[a(0, 0, 662)](e, t)
                        }, h[a(0, 0, 781)] = function(e, t) {
                            return s[(-242, a(0, 0, 380))](e, t)
                        }, h[o(0, 0, 759)] = function(e, t) {
                            return s[a(0, 0, 777)](e, t)
                        }, h[a(0, 0, 302)] = function(e, t) {
                            return s[(215, r(0, 0, 749))](e, t)
                        }, h[o(0, 0, 670)] = s[o(0, 0, 855)], h[o(0, 0, 324)] = s[r(0, 0, 568)], h[o(0, 0, 607)] = s[o(0, 0, 713)], h[r(0, 0, 245)] = s[a(0, 0, 671)], h[o(0, 0, 269)] = function(e, t) {
                            return s[o(0, 0, 339)](e, t)
                        }, h[o(0, 0, 709)] = function(e, t) {
                            return s[(-38, a(0, 0, 707))](e, t)
                        }, h[c(0, 0, 861)] = s[c(0, 0, 623)], h[o(0, 0, 394)] = s[a(0, 0, 362)], h[o(0, 0, 771)] = function(e, t) {
                            return s[a(0, 0, 646)](e, t)
                        }, h[o(0, 0, 841)] = s[a(0, 0, 483)], h[r(0, 0, 547)] = function(e, t) {
                            return s[(-247, a(0, 0, 336))](e, t)
                        }, h[a(0, 0, 484)] = function(e, t) {
                            return s[o(0, 0, 279)](e, t)
                        }, h[o(0, 0, 417)] = function(e, t) {
                            return s[(-233, r(0, 0, 522))](e, t)
                        }, h[a(0, 0, 386)] = function(e, t) {
                            return s[(1298, o(0, 0, 543))](e, t)
                        }, h[a(0, 0, 389)] = function(e, t) {
                            return s[(750, c(0, 0, 805))](e, t)
                        }, h[a(0, 0, 588)] = function(e, t) {
                            return s[o(0, 0, 504)](e, t)
                        }, h[c(0, 0, 807)] = function(e, t) {
                            return s[(460, o(0, 0, 522))](e, t)
                        }, h[c(0, 0, 877)] = function(e, t) {
                            return s[(559, r(0, 0, 522))](e, t)
                        }, h[c(0, 0, 723)] = function(e, t) {
                            return s[a(0, 0, 629)](e, t)
                        }, h[r(0, 0, 830)] = function(e, t) {
                            return s[(314, r(0, 0, 630))](e, t)
                        }, h[c(0, 0, 746)] = function(e, t) {
                            return s[(-158, a(0, 0, 630))](e, t)
                        }, h[c(0, 0, 603)] = function(e, t) {
                            return s[a(0, 0, 648)](e, t)
                        }, h[a(0, 0, 913)] = function(e, t) {
                            return s[(1213, a(0, 0, 504))](e, t)
                        }, h[o(0, 0, 452)] = function(e, t) {
                            return s[a(0, 0, 630)](e, t)
                        }, h[a(0, 0, 650)] = function(e, t) {
                            return s[a(0, 0, 648)](e, t)
                        }, h[a(0, 0, 633)] = function(e, t) {
                            return s[(1051, r(0, 0, 646))](e, t)
                        }, h[a(0, 0, 242)] = s[o(0, 0, 495)], h[r(0, 0, 516)] = s[o(0, 0, 261)], h[o(0, 0, 535)] = function(e, t) {
                            return s[o(0, 0, 883)](e, t)
                        }, h[a(0, 0, 592)] = s[a(0, 0, 379)], h[r(0, 0, 790)] = function(e, t) {
                            return s[o(0, 0, 707)](e, t)
                        }, h[a(0, 0, 652)] = s[o(0, 0, 512)], h[c(0, 0, 384)] = function(e, t) {
                            return s[(-302, r(0, 0, 510))](e, t)
                        }, h[r(0, 0, 756)] = function(e, t) {
                            return s[(240, a(0, 0, 661))](e, t)
                        }, h[r(0, 0, 343)] = function(e, t) {
                            return s[(529, c(0, 0, 822))](e, t)
                        }, h[c(0, 0, 236)] = function(e, t) {
                            return s[(-252, c(0, 0, 536))](e, t)
                        }, h[r(0, 0, 786)] = function(e, t) {
                            return s[r(0, 0, 765)](e, t)
                        }, h[r(0, 0, 797)] = function(e, t) {
                            return s[a(0, 0, 765)](e, t)
                        }, h[r(0, 0, 769)] = function(e, t) {
                            return s[r(0, 0, 614)](e, t)
                        }, h[r(0, 0, 545)] = function(e, t) {
                            return s[o(0, 0, 648)](e, t)
                        }, h[o(0, 0, 916)] = function(e, t) {
                            return s[o(0, 0, 536)](e, t)
                        }, h[c(0, 0, 407)] = function(e, t) {
                            return s[a(0, 0, 818)](e, t)
                        }, h[a(0, 0, 515)] = function(e, t) {
                            return s[(1287, c(0, 0, 820))](e, t)
                        }, h[r(0, 0, 471)] = function(e, t) {
                            return s[a(0, 0, 789)](e, t)
                        }, h[a(0, 0, 609)] = s[r(0, 0, 468)], h[c(0, 0, 237)] = function(e, t) {
                            return s[c(0, 0, 749)](e, t)
                        }, h[r(0, 0, 880)] = s[a(0, 0, 657)], h[a(0, 0, 353)] = s[c(0, 0, 322)], h[c(0, 0, 730)] = s[a(0, 0, 901)], h[c(0, 0, 428)] = function(e, t) {
                            return s[(309, a(0, 0, 820))](e, t)
                        }, h[a(0, 0, 868)] = function(e, t) {
                            return s[a(0, 0, 453)](e, t)
                        }, h[c(0, 0, 402)] = function(e, t) {
                            return s[(913, c(0, 0, 820))](e, t)
                        }, h[c(0, 0, 917)] = function(e, t) {
                            return s[c(0, 0, 251)](e, t)
                        }, h[a(0, 0, 531)] = s[o(0, 0, 560)], h[r(0, 0, 712)] = s[o(0, 0, 256)], h[c(0, 0, 273)] = function(e, t) {
                            return s[(992, c(0, 0, 482))](e, t)
                        }, h[o(0, 0, 580)] = function(e, t) {
                            return s[o(0, 0, 820)](e, t)
                        }, h[r(0, 0, 569)] = function(e) {
                            return s[r(0, 0, 542)](e)
                        }, h[r(0, 0, 335)] = function(e, t) {
                            return s[(-353, a(0, 0, 496))](e, t)
                        }, h[a(0, 0, 801)] = s[a(0, 0, 750)], h[r(0, 0, 421)] = s[r(0, 0, 889)], h[o(0, 0, 272)] = function(e, t) {
                            return s[o(0, 0, 676)](e, t)
                        }, h[c(0, 0, 725)] = function(e, t) {
                            return s[c(0, 0, 906)](e, t)
                        };
                        var f = h;
                        if (s[o(0, 0, 496)](s[r(0, 0, 485)], s[r(0, 0, 783)]));
                        else {
                            O = function(e) {
                                for (var t = v[f[(1649, r(0, 0, 687))](p, 2)], n = new Uint8Array(e), i = 0; f[(o = 1887, c(0, 0, o - 962))](i, e); i++) n[i] = b[f[(s = 1388, a(0, 0, s - 962))](t, i)];
                                var s, o;
                                return n
                            }, U = function(e, t) {
                                for (var n = function(e, t, n, i) {
                                        return a(0, 0, n - 760)
                                    }, i = function(e, t, n, i) {
                                        return a(0, 0, n - 760)
                                    }, r = v[s[o(0, 0, 735)](p, 2)], c = 0; s[(l = 1183, a(0, 0, l - 760))](c, e[n(0, 0, 1648) + "h"]); c++) b[s[n(0, 0, 1237)](r, c)] = e[c];
                                var l;
                                s[i(0, 0, 1289)](g, t, e[i(0, 0, 1648) + "h"])
                            }, N = function() {
                                s[o(0, 0, 744)](w)
                            }, T = function(t) {
                                var n = function(e, t, n, i) {
                                        return a(0, 0, n - -57)
                                    },
                                    i = function(e, t, n, i) {
                                        return a(0, 0, n - -57)
                                    },
                                    o = function(e, t, a, n) {
                                        return r(0, 0, a - -57)
                                    },
                                    c = function(e, t, a, n) {
                                        return r(0, 0, a - -57)
                                    },
                                    l = {};
                                l[n(0, 0, 174)] = function(e, t) {
                                    return s[(-204, n(0, 0, 324))](e, t)
                                }, l[n(0, 0, 406)] = function(e, t) {
                                    return s[(5, i(0, 0, 257))](e, t)
                                }, l[n(0, 0, 863)] = function(e, t) {
                                    return s[o(0, 0, 575)](e, t)
                                }, l[c(0, 0, 378)] = function(e, t) {
                                    return s[(1215, o(0, 0, 496))](e, t)
                                }, l[n(0, 0, 581)] = function(e, t) {
                                    return s[(1077, i(0, 0, 182))](e, t)
                                }, l[n(0, 0, 587)] = function(e, t) {
                                    return s[(425, o(0, 0, 182))](e, t)
                                }, l[n(0, 0, 525)] = function(e, t) {
                                    return s[o(0, 0, 170)](e, t)
                                }, l[n(0, 0, 200)] = s[i(0, 0, 798)], l[o(0, 0, 670)] = s[n(0, 0, 511)], l[n(0, 0, 298)] = s[n(0, 0, 656)], l[c(0, 0, 373)] = s[n(0, 0, 614)], l[c(0, 0, 709)] = function(e, t) {
                                    return s[(427, i(0, 0, 269))](e, t)
                                }, l[i(0, 0, 410)] = function(e, t) {
                                    return s[(-130, c(0, 0, 507))](e, t)
                                }, l[o(0, 0, 799)] = s[n(0, 0, 178)], l[o(0, 0, 703)] = s[n(0, 0, 504)], l[i(0, 0, 781)] = function(e, t) {
                                    return s[(1185, c(0, 0, 759))](e, t)
                                }, l[o(0, 0, 306)] = function(e, t) {
                                    return s[(-193, n(0, 0, 244))](e, t)
                                }, l[o(0, 0, 482)] = function(e, t) {
                                    return s[(1460, i(0, 0, 475))](e, t)
                                }, l[i(0, 0, 843)] = function(e, t) {
                                    return s[(-129, o(0, 0, 814))](e, t)
                                }, l[c(0, 0, 631)] = s[n(0, 0, 564)], l[i(0, 0, 579)] = s[c(0, 0, 842)], l[c(0, 0, 362)] = function(e, t) {
                                    return s[c(0, 0, 814)](e, t)
                                }, l[c(0, 0, 231)] = s[o(0, 0, 341)], l[c(0, 0, 756)] = function(e, t) {
                                    return s[(165, o(0, 0, 194))](e, t)
                                }, l[n(0, 0, 592)] = s[i(0, 0, 547)], l[o(0, 0, 407)] = s[n(0, 0, 368)], l[i(0, 0, 641)] = s[i(0, 0, 276)], l[i(0, 0, 236)] = s[o(0, 0, 473)], l[n(0, 0, 816)] = s[i(0, 0, 728)], l[n(0, 0, 287)] = function(e, t, a) {
                                    return s[(1182, i(0, 0, 472))](e, t, a)
                                }, l[o(0, 0, 766)] = s[n(0, 0, 331)], l[c(0, 0, 837)] = function(e, t) {
                                    return s[(-294, n(0, 0, 562))](e, t)
                                }, l[i(0, 0, 283)] = s[o(0, 0, 389)], l[c(0, 0, 725)] = function(e, t) {
                                    return s[(645, i(0, 0, 720))](e, t)
                                }, l[n(0, 0, 346)] = function(e, t) {
                                    return s[i(0, 0, 865)](e, t)
                                }, l[c(0, 0, 817)] = s[i(0, 0, 355)], l[i(0, 0, 780)] = s[c(0, 0, 325)], l[c(0, 0, 385)] = function(e, t) {
                                    return s[n(0, 0, 170)](e, t)
                                }, l[n(0, 0, 191)] = function(e, t) {
                                    return s[c(0, 0, 812)](e, t)
                                }, l[c(0, 0, 404)] = function(e, t) {
                                    return s[n(0, 0, 366)](e, t)
                                }, l[n(0, 0, 793)] = s[i(0, 0, 240)], l[o(0, 0, 810)] = s[c(0, 0, 606)], l[o(0, 0, 177)] = function(e, t) {
                                    return s[c(0, 0, 244)](e, t)
                                }, l[c(0, 0, 184)] = function(e, t) {
                                    return s[(326, c(0, 0, 496))](e, t)
                                }, l[i(0, 0, 311)] = function(e, t) {
                                    return s[(736, o(0, 0, 559))](e, t)
                                }, l[c(0, 0, 492)] = function(e, t) {
                                    return s[(335, o(0, 0, 277))](e, t)
                                }, l[o(0, 0, 252)] = function(e, t) {
                                    return s[(8, i(0, 0, 532))](e, t)
                                }, l[c(0, 0, 342)] = function(e, t) {
                                    return s[(-191, n(0, 0, 454))](e, t)
                                }, l[c(0, 0, 383)] = function(e, t) {
                                    return s[o(0, 0, 752)](e, t)
                                }, l[o(0, 0, 779)] = function(e, t) {
                                    return s[i(0, 0, 454)](e, t)
                                }, l[n(0, 0, 307)] = function(e, t) {
                                    return s[(-193, n(0, 0, 454))](e, t)
                                }, l[o(0, 0, 796)] = function(e, t) {
                                    return s[(1370, o(0, 0, 532))](e, t)
                                }, l[c(0, 0, 822)] = function(e, t) {
                                    return s[(-119, i(0, 0, 253))](e, t)
                                }, l[c(0, 0, 464)] = function(e, t) {
                                    return s[i(0, 0, 752)](e, t)
                                }, l[o(0, 0, 461)] = function(e, t) {
                                    return s[c(0, 0, 304)](e, t)
                                }, l[n(0, 0, 237)] = function(e, t) {
                                    return s[(431, n(0, 0, 304))](e, t)
                                }, l[n(0, 0, 444)] = function(e, t) {
                                    return s[(1087, o(0, 0, 253))](e, t)
                                }, l[n(0, 0, 684)] = function(e, t) {
                                    return s[o(0, 0, 397)](e, t)
                                }, l[n(0, 0, 441)] = function(e, t) {
                                    return s[o(0, 0, 565)](e, t)
                                }, l[c(0, 0, 651)] = function(e, t) {
                                    return s[(1184, c(0, 0, 752))](e, t)
                                }, l[n(0, 0, 527)] = function(e, t) {
                                    return s[i(0, 0, 565)](e, t)
                                }, l[c(0, 0, 173)] = function(e, t) {
                                    return s[(1379, n(0, 0, 387))](e, t)
                                }, l[n(0, 0, 648)] = function(e, t) {
                                    return s[(-399, c(0, 0, 210))](e, t)
                                }, l[o(0, 0, 198)] = function(e, t) {
                                    return s[n(0, 0, 387)](e, t)
                                }, l[n(0, 0, 175)] = function(e, t) {
                                    return s[(536, o(0, 0, 387))](e, t)
                                }, l[o(0, 0, 758)] = function(e, t) {
                                    return s[c(0, 0, 194)](e, t)
                                }, l[o(0, 0, 830)] = function(e, t) {
                                    return s[(275, o(0, 0, 865))](e, t)
                                }, l[o(0, 0, 548)] = s[n(0, 0, 450)], l[o(0, 0, 344)] = function(e, t) {
                                    return s[(755, c(0, 0, 170))](e, t)
                                }, l[n(0, 0, 854)] = function(e, t) {
                                    return s[(1391, o(0, 0, 562))](e, t)
                                }, l[c(0, 0, 555)] = s[i(0, 0, 205)], l[n(0, 0, 695)] = function(e, t) {
                                    return s[(-211, n(0, 0, 701))](e, t)
                                }, l[c(0, 0, 671)] = s[o(0, 0, 353)], l[o(0, 0, 235)] = s[n(0, 0, 273)], l[c(0, 0, 797)] = s[c(0, 0, 234)], l[o(0, 0, 333)] = s[o(0, 0, 861)], l[o(0, 0, 190)] = function(e, t) {
                                    return s[(1595, o(0, 0, 627))](e, t)
                                }, l[c(0, 0, 338)] = s[n(0, 0, 788)], l[n(0, 0, 524)] = s[o(0, 0, 169)], l[i(0, 0, 642)] = function(e, t) {
                                    return s[c(0, 0, 530)](e, t)
                                }, l[o(0, 0, 470)] = function(e, t) {
                                    return s[(678, i(0, 0, 380))](e, t)
                                }, l[c(0, 0, 513)] = function(e, t) {
                                    return s[(-1, o(0, 0, 833))](e, t)
                                }, l[n(0, 0, 867)] = function(e, t) {
                                    return s[n(0, 0, 380)](e, t)
                                }, l[c(0, 0, 609)] = function(e, t) {
                                    return s[(277, i(0, 0, 365))](e, t)
                                }, l[c(0, 0, 515)] = function(e, t) {
                                    return s[(1265, o(0, 0, 495))](e, t)
                                }, l[c(0, 0, 801)] = function(e, t) {
                                    return s[(1706, c(0, 0, 790))](e, t)
                                }, l[o(0, 0, 335)] = function(e, t) {
                                    return s[(447, i(0, 0, 530))](e, t)
                                }, l[c(0, 0, 422)] = function(e, t) {
                                    return s[(1491, c(0, 0, 526))](e, t)
                                }, l[o(0, 0, 193)] = function(e, t) {
                                    return s[(-383, c(0, 0, 510))](e, t)
                                }, l[c(0, 0, 340)] = function(e, t) {
                                    return s[i(0, 0, 226)](e, t)
                                }, l[i(0, 0, 270)] = function(e, t) {
                                    return s[(758, i(0, 0, 432))](e, t)
                                }, l[o(0, 0, 751)] = function(e, t) {
                                    return s[(-249, o(0, 0, 526))](e, t)
                                }, l[c(0, 0, 647)] = function(e, t) {
                                    return s[(-132, o(0, 0, 790))](e, t)
                                }, l[i(0, 0, 578)] = function(e, t) {
                                    return s[(945, i(0, 0, 526))](e, t)
                                }, l[n(0, 0, 248)] = function(e, t) {
                                    return s[i(0, 0, 409)](e, t)
                                }, l[o(0, 0, 675)] = function(e, t) {
                                    return s[n(0, 0, 279)](e, t)
                                }, l[i(0, 0, 777)] = s[o(0, 0, 354)], l[n(0, 0, 539)] = function(e, t) {
                                    return s[(-458, n(0, 0, 476))](e, t)
                                }, l[i(0, 0, 314)] = function(e, t) {
                                    return s[(1362, c(0, 0, 476))](e, t)
                                }, l[n(0, 0, 256)] = function(e, t) {
                                    return s[(150, o(0, 0, 197))](e, t)
                                }, l[n(0, 0, 517)] = function(e, t) {
                                    return s[(411, n(0, 0, 857))](e, t)
                                }, l[c(0, 0, 508)] = s[c(0, 0, 660)], l[n(0, 0, 419)] = function(e, t) {
                                    return s[n(0, 0, 520)](e, t)
                                }, l[n(0, 0, 774)] = s[n(0, 0, 590)], l[n(0, 0, 567)] = s[i(0, 0, 379)], l[i(0, 0, 497)] = function(e, t) {
                                    return s[i(0, 0, 650)](e, t)
                                }, l[n(0, 0, 835)] = s[o(0, 0, 736)], l[o(0, 0, 274)] = function(e, t) {
                                    return s[(1302, c(0, 0, 857))](e, t)
                                }, l[o(0, 0, 735)] = function(e, t, a) {
                                    return s[c(0, 0, 472)](e, t, a)
                                }, l[o(0, 0, 310)] = s[n(0, 0, 858)], l[n(0, 0, 663)] = function(e, t) {
                                    return s[(1171, n(0, 0, 171))](e, t)
                                }, l[o(0, 0, 281)] = s[i(0, 0, 570)], l[n(0, 0, 241)] = function(e, t) {
                                    return s[(1279, o(0, 0, 347))](e, t)
                                }, l[i(0, 0, 502)] = function(e, t) {
                                    return s[n(0, 0, 279)](e, t)
                                }, l[i(0, 0, 521)] = function(e, t) {
                                    return s[(1337, n(0, 0, 632))](e, t)
                                }, l[n(0, 0, 802)] = function(e, t) {
                                    return s[i(0, 0, 857)](e, t)
                                }, l[c(0, 0, 280)] = function(e, t) {
                                    return s[(16, i(0, 0, 549))](e, t)
                                }, l[o(0, 0, 746)] = function(e, t) {
                                    return s[(1330, c(0, 0, 627))](e, t)
                                }, l[c(0, 0, 271)] = s[o(0, 0, 600)], l[i(0, 0, 223)] = s[i(0, 0, 601)], l[c(0, 0, 706)] = function(e, t) {
                                    return s[(1197, i(0, 0, 551))](e, t)
                                }, l[o(0, 0, 847)] = function(e, t) {
                                    return s[c(0, 0, 551)](e, t)
                                }, l[c(0, 0, 219)] = function(e, t) {
                                    return s[(-572, n(0, 0, 321))](e, t)
                                }, l[c(0, 0, 352)] = function(e, t) {
                                    return s[c(0, 0, 633)](e, t)
                                }, l[n(0, 0, 808)] = function(e, t) {
                                    return s[o(0, 0, 551)](e, t)
                                }, l[i(0, 0, 258)] = function(e, t) {
                                    return s[o(0, 0, 551)](e, t)
                                }, l[n(0, 0, 334)] = function(e, t) {
                                    return s[n(0, 0, 723)](e, t)
                                }, l[o(0, 0, 610)] = function(e, t) {
                                    return s[(865, i(0, 0, 194))](e, t)
                                }, l[i(0, 0, 662)] = function(e, t) {
                                    return s[c(0, 0, 171)](e, t)
                                }, l[n(0, 0, 618)] = s[n(0, 0, 417)], l[i(0, 0, 494)] = s[c(0, 0, 636)], l[c(0, 0, 786)] = s[c(0, 0, 698)], l[c(0, 0, 466)] = function(e, t) {
                                    return s[i(0, 0, 201)](e, t)
                                }, l[n(0, 0, 195)] = function(e, t) {
                                    return s[(531, o(0, 0, 677))](e, t)
                                }, l[c(0, 0, 390)] = s[o(0, 0, 391)], l[i(0, 0, 776)] = function(e, t) {
                                    return s[i(0, 0, 812)](e, t)
                                }, l[c(0, 0, 421)] = function(e, t) {
                                    return s[(955, o(0, 0, 649))](e, t)
                                }, l[i(0, 0, 442)] = function(e, t) {
                                    return s[(38, c(0, 0, 676))](e, t)
                                };
                                var h = l;
                                return function(a) {
                                    var n = function(e, t, a, n) {
                                            return c(0, 0, a - -913)
                                        },
                                        r = function(e, t, a, n) {
                                            return c(0, 0, a - -913)
                                        },
                                        s = function(e, t, a, n) {
                                            return i(0, 0, a - -913)
                                        },
                                        o = function(e, t, a, n) {
                                            return c(0, 0, a - -913)
                                        },
                                        l = {};
                                    if (l[n(0, 0, -77)] = function(e, t) {
                                            return h[(186, n(0, 0, -326))](e, t)
                                        }, l[n(0, 0, -61)] = function(e, t) {
                                            return h[(-1296, n(0, 0, -388))](e, t)
                                        }, l[n(0, 0, -122)] = h[s(0, 0, -713)], l[n(0, 0, -412)] = h[s(0, 0, -243)], l[s(0, 0, -273)] = h[n(0, 0, -615)], l[o(0, 0, -513)] = h[r(0, 0, -540)], l[s(0, 0, -554)] = function(e, t) {
                                            return h[o(0, 0, -204)](e, t)
                                        }, !h[r(0, 0, -503)](h[s(0, 0, -114)], h[s(0, 0, -210)])) {
                                        var d, f, m, v, p, g, y;
                                        d = h[s(0, 0, -132)](a[o(0, 0, -82) + "h"], 3), f = h[s(0, 0, -50)](a[s(0, 0, -82) + "h"], d), m = h[s(0, 0, -607)](t, 255), p = 3432918353, 461845907, y = 0;
                                        try {
                                            h[s(0, 0, -431)](Function[o(0, 0, -564) + r(0, 0, -500)][o(0, 0, -450) + n(0, 0, -104)], 0)
                                        } catch (e) {
                                            if (h[r(0, 0, -70)](h[r(0, 0, -282)], h[o(0, 0, -334)]));
                                            else try {
                                                if (h[s(0, 0, -551)](h[r(0, 0, -682)], h[o(0, 0, -682)])) {
                                                    if (h[r(0, 0, -157)](typeof navigator, h[n(0, 0, -713)])) throw h[s(0, 0, -321)];
                                                    !h[o(0, 0, -388)](typeof window[n(0, 0, -422) + "e"], h[o(0, 0, -713)]) || e[r(0, 0, -685)][r(0, 0, -450) + r(0, 0, -104)]()[n(0, 0, -479) + o(0, 0, -638)](h[o(0, 0, -506)]) || e[n(0, 0, -685)][o(0, 0, -450) + n(0, 0, -104)]()[n(0, 0, -479) + r(0, 0, -638)](h[o(0, 0, -272)]) ? navigator[n(0, 0, -170) + o(0, 0, -84)][s(0, 0, -479) + o(0, 0, -638)](h[s(0, 0, -615)]) && !e[o(0, 0, -450) + o(0, 0, -104)]()[o(0, 0, -479) + r(0, 0, -638)](h[s(0, 0, -540)]) && (p = 229494797) : p = 905229, e[s(0, 0, -685)][o(0, 0, -450) + o(0, 0, -104)]()[o(0, 0, -479) + n(0, 0, -638)](h[r(0, 0, -677)]) && !e[r(0, 0, -685)][n(0, 0, -450) + r(0, 0, -104)]()[s(0, 0, -479) + r(0, 0, -638)](h[n(0, 0, -97)]) && (p = 3707822079)
                                                }
                                            } catch (e) {
                                                p = h[s(0, 0, -626)](parseInt, h[n(0, 0, -147)], 36)
                                            }
                                        }
                                        try {
                                            h[o(0, 0, -76)](h[s(0, 0, -630)], h[r(0, 0, -630)]) || h[s(0, 0, -188)](WebSocket[o(0, 0, -564) + n(0, 0, -500)][n(0, 0, -450) + o(0, 0, -104)], 0)
                                        } catch (e) {
                                            h[r(0, 0, -567)](h[o(0, 0, -96)], h[o(0, 0, -133)]) || ((h[s(0, 0, -528)](typeof window[s(0, 0, -422) + "e"], h[s(0, 0, -713)]) && !e[n(0, 0, -685)][o(0, 0, -450) + n(0, 0, -104)]()[n(0, 0, -479) + o(0, 0, -638)](h[o(0, 0, -243)]) || navigator[s(0, 0, -170) + s(0, 0, -84)][s(0, 0, -479) + s(0, 0, -638)](h[o(0, 0, -615)]) && !e[r(0, 0, -450) + s(0, 0, -104)]()[r(0, 0, -479) + o(0, 0, -638)](h[r(0, 0, -540)])) && (p = 11724443661), h[r(0, 0, -722)](e[o(0, 0, -450) + r(0, 0, -104)]()[s(0, 0, -82) + "h"], 100) && (p = 11724443661))
                                        }
                                        for (; h[s(0, 0, -509)](y, f);)
                                            if (h[n(0, 0, -567)](h[r(0, 0, -120)], h[n(0, 0, -120)]))
                                                for (var k = h[n(0, 0, -103)][n(0, 0, -621)]("|"), w = 0;;) {
                                                    switch (k[w++]) {
                                                        case "0":
                                                            v = h[r(0, 0, -736)](h[n(0, 0, -729)](h[r(0, 0, -602)](h[o(0, 0, -421)](m, 65535), 5), h[o(0, 0, -661)](h[n(0, 0, -571)](h[n(0, 0, -602)](h[r(0, 0, -530)](m, 16), 5), 65535), 16)), 4294967295);
                                                            continue;
                                                        case "1":
                                                            m = h[r(0, 0, -729)](h[n(0, 0, -729)](h[o(0, 0, -134)](v, 65535), 27492), h[o(0, 0, -661)](h[n(0, 0, -134)](h[s(0, 0, -729)](h[o(0, 0, -530)](v, 16), 58964), 65535), 16));
                                                            continue;
                                                        case "2":
                                                            ++y;
                                                            continue;
                                                        case "3":
                                                            g = h[n(0, 0, -134)](h[r(0, 0, -729)](h[o(0, 0, -602)](h[r(0, 0, -606)](g, 65535), p), h[n(0, 0, -117)](h[o(0, 0, -606)](h[r(0, 0, -91)](h[r(0, 0, -449)](g, 16), p), 65535), 16)), 4294967295);
                                                            continue;
                                                        case "4":
                                                            g = h[r(0, 0, -452)](h[r(0, 0, -117)](g, 15), h[o(0, 0, -449)](g, 17));
                                                            continue;
                                                        case "5":
                                                            m ^= g;
                                                            continue;
                                                        case "6":
                                                            m = h[s(0, 0, -676)](h[s(0, 0, -117)](m, 13), h[o(0, 0, -449)](m, 19));
                                                            continue;
                                                        case "7":
                                                            g = h[s(0, 0, -606)](h[r(0, 0, -729)](h[n(0, 0, -469)](h[s(0, 0, -606)](g, 65535), 461845907), h[s(0, 0, -229)](h[s(0, 0, -472)](h[o(0, 0, -469)](h[r(0, 0, -262)](g, 16), 461845907), 65535), 16)), 4294967295);
                                                            continue;
                                                        case "8":
                                                            g = h[r(0, 0, -676)](h[n(0, 0, -676)](h[s(0, 0, -676)](h[n(0, 0, -386)](a[r(0, 0, -119) + r(0, 0, -464)](y), 255), h[n(0, 0, -740)](h[s(0, 0, -265)](a[s(0, 0, -119) + s(0, 0, -464)](++y), 255), 8)), h[o(0, 0, -715)](h[s(0, 0, -265)](a[r(0, 0, -119) + o(0, 0, -464)](++y), 255), 16)), h[s(0, 0, -738)](h[o(0, 0, -265)](a[n(0, 0, -119) + n(0, 0, -464)](++y), 255), 24));
                                                            continue
                                                    }
                                                    break
                                                }
                                        h[n(0, 0, -155)](typeof window, h[r(0, 0, -713)]) && (m ^= 322420463), h[r(0, 0, -155)](typeof e, h[r(0, 0, -713)]) ? m ^= 3735884599 : h[o(0, 0, -83)](h[r(0, 0, -365)], h[r(0, 0, -365)]) && h[s(0, 0, -569)](e[o(0, 0, -130) + "on"], "") && (h[s(0, 0, -59)](h[o(0, 0, -358)], h[s(0, 0, -358)]) || (m ^= 322425040));
                                        try {
                                            if (h[n(0, 0, -218)](h[r(0, 0, -242)], h[r(0, 0, -678)]) && h[s(0, 0, -569)](typeof u[s(0, 0, -422) + "e"], h[s(0, 0, -713)]) && h[n(0, 0, -218)](h[n(0, 0, -116)], h[s(0, 0, -580)]) && h[n(0, 0, -723)](typeof chrome[r(0, 0, -446)][n(0, 0, -612) + s(0, 0, -49) + "te"][o(0, 0, -495) + r(0, 0, -521)], h[n(0, 0, -575)])) throw h[n(0, 0, -389)]
                                        } catch (e) {
                                            m = 5e3
                                        }
                                        switch (g = 0, d) {
                                            case 3:
                                                g ^= h[o(0, 0, -271)](h[n(0, 0, -265)](a[n(0, 0, -119) + n(0, 0, -464)](h[s(0, 0, -443)](y, 2)), 255), 16);
                                            case 2:
                                                g ^= h[o(0, 0, -271)](h[r(0, 0, -400)](a[s(0, 0, -119) + n(0, 0, -464)](h[o(0, 0, -46)](y, 1)), 255), 8);
                                            case 1:
                                                g ^= h[o(0, 0, -400)](a[n(0, 0, -119) + s(0, 0, -464)](y), 255), g = h[n(0, 0, -304)](h[s(0, 0, -398)](h[n(0, 0, -112)](h[n(0, 0, -304)](g, 65535), p), h[r(0, 0, -578)](h[s(0, 0, -491)](h[n(0, 0, -112)](h[r(0, 0, -720)](g, 16), p), 65535), 16)), 4294967295), g = h[r(0, 0, -573)](h[o(0, 0, -643)](g, 15), h[s(0, 0, -720)](g, 17)), m ^= g = h[o(0, 0, -162)](h[n(0, 0, -398)](h[s(0, 0, -266)](h[o(0, 0, -335)](g, 65535), 461845907), h[s(0, 0, -665)](h[r(0, 0, -335)](h[s(0, 0, -238)](h[n(0, 0, -720)](g, 16), 461845907), 65535), 16)), 4294967295)
                                        }
                                        m ^= a[s(0, 0, -82) + "h"];
                                        try {
                                            navigator[o(0, 0, -546) + r(0, 0, -667)][r(0, 0, -508) + o(0, 0, -145)] && h[r(0, 0, -83)](h[n(0, 0, -136)], h[r(0, 0, -136)]) && (m |= 1e5)
                                        } catch (e) {}
                                        m ^= h[o(0, 0, -720)](m, 16), m = h[o(0, 0, -374)](h[s(0, 0, -398)](h[n(0, 0, -238)](h[s(0, 0, -599)](m, 65535), 2246822506), h[s(0, 0, -665)](h[r(0, 0, -599)](h[o(0, 0, -238)](h[o(0, 0, -657)](m, 16), 2246822507), 65535), 16)), 4294967295), m ^= h[o(0, 0, -396)](m, 13);
                                        try {
                                            h[r(0, 0, -188)](Function[o(0, 0, -564) + o(0, 0, -500)][n(0, 0, -450) + r(0, 0, -104)], 0)
                                        } catch (e) {
                                            try {
                                                try {
                                                    if (h[n(0, 0, -218)](h[r(0, 0, -405)], h[r(0, 0, -405)]));
                                                    else {
                                                        if (h[n(0, 0, -155)](typeof navigator, h[n(0, 0, -713)])) throw h[s(0, 0, -321)];
                                                        !h[n(0, 0, -723)](typeof window[n(0, 0, -422) + "e"], h[s(0, 0, -713)]) || e[n(0, 0, -685)][r(0, 0, -450) + s(0, 0, -104)]()[o(0, 0, -479) + n(0, 0, -638)](h[r(0, 0, -506)]) || e[n(0, 0, -685)][s(0, 0, -450) + o(0, 0, -104)]()[s(0, 0, -479) + s(0, 0, -638)](h[r(0, 0, -272)]) ? navigator[s(0, 0, -170) + r(0, 0, -84)][n(0, 0, -479) + o(0, 0, -638)](h[o(0, 0, -615)]) && !e[s(0, 0, -450) + r(0, 0, -104)]()[r(0, 0, -479) + o(0, 0, -638)](h[o(0, 0, -540)]) && (m = 229494797) : h[r(0, 0, -494)](h[n(0, 0, -139)], h[n(0, 0, -346)]) && (m = 905229), e[o(0, 0, -685)][o(0, 0, -450) + r(0, 0, -104)]()[n(0, 0, -479) + o(0, 0, -638)](h[n(0, 0, -677)]) && !e[o(0, 0, -685)][n(0, 0, -450) + o(0, 0, -104)]()[s(0, 0, -479) + r(0, 0, -638)](h[n(0, 0, -97)]) && (m = 3707822079)
                                                    }
                                                } catch (e) {
                                                    h[o(0, 0, -416)](h[n(0, 0, -78)], h[r(0, 0, -78)]) || (m = h[n(0, 0, -639)](h[r(0, 0, -507)](h[n(0, 0, -178)](parseInt, h[n(0, 0, -603)], 36), 13), 0))
                                                }
                                                navigator[n(0, 0, -170) + o(0, 0, -84)] || h[o(0, 0, -250)](h[r(0, 0, -632)], h[o(0, 0, -632)]) && (m *= 2)
                                            } catch (e) {
                                                m |= 500
                                            }
                                        }
                                        return m = h[r(0, 0, -672)](h[s(0, 0, -398)](h[n(0, 0, -411)](h[r(0, 0, -392)](m, 65535), 3266489909), h[s(0, 0, -665)](h[o(0, 0, -392)](h[s(0, 0, -411)](h[o(0, 0, -111)](m, 16), 3266489909), 65535), 16)), 4294967295), m ^= h[r(0, 0, -633)](m, 16), h[o(0, 0, -633)](m, 0)
                                    }
                                }(function(e, t) {
                                    var a = function(e, t, a, i) {
                                            return n(0, 0, a - -525)
                                        },
                                        i = function(e, t, a, n) {
                                            return o(0, 0, a - -525)
                                        },
                                        r = function(e, t, a, n) {
                                            return o(0, 0, a - -525)
                                        },
                                        s = function(e, t, a, n) {
                                            return o(0, 0, a - -525)
                                        },
                                        c = {};
                                    if (c[a(0, 0, -20)] = function(e, t) {
                                            return f[(-103, a(0, 0, 237))](e, t)
                                        }, c[a(0, 0, -225)] = function(e, t) {
                                            return f[(-222, i(0, 0, -156))](e, t)
                                        }, c[r(0, 0, -241)] = f[a(0, 0, -57)], c[r(0, 0, 188)] = f[i(0, 0, 15)], f[i(0, 0, -231)](f[s(0, 0, -208)], f[s(0, 0, -208)])) {
                                        try {
                                            navigator[a(0, 0, -158) + i(0, 0, -279)][s(0, 0, -120) + r(0, 0, 243)] && f[i(0, 0, -231)](f[i(0, 0, 214)], f[r(0, 0, 214)]) && (e *= 2);
                                            var l = u[a(0, 0, 267) + "g"][i(0, 0, -176) + a(0, 0, -112)][a(0, 0, -74) + a(0, 0, 49) + "e"][s(0, 0, 229)]([u[a(0, 0, 193) + s(0, 0, -296)][s(0, 0, 218) + i(0, 0, 304)]]);
                                            !/phone/ [i(0, 0, -167)](l) && !/android/ [s(0, 0, -167)](l) && !navigator[i(0, 0, 218) + r(0, 0, 304)][r(0, 0, -91) + i(0, 0, -250)](f[i(0, 0, -144)]) && (e ^= 1e5)
                                        } catch (e) {}
                                        for (var h = "", d = t[r(0, 0, 306) + "h"]; f[a(0, 0, 155)](e, 0);) {
                                            var m = f[s(0, 0, 63)](e, d);
                                            e = f[s(0, 0, -63)](f[s(0, 0, -77)](e, m), d), h = f[r(0, 0, -156)](t[m], h)
                                        }
                                        return h
                                    }
                                }(function(e) {
                                    var a, r = function(e, t, a, n) {
                                            return c(0, 0, e - -732)
                                        },
                                        s = function(e, t, a, n) {
                                            return i(0, 0, e - -732)
                                        },
                                        o = function(e, t, a, n) {
                                            return i(0, 0, e - -732)
                                        },
                                        l = function(e, t, a, i) {
                                            return n(0, 0, e - -732)
                                        },
                                        d = e[r(99) + "h"],
                                        m = f[s(-442)](f[r(-110)](f[l(-8)](t, 24), 255), d),
                                        v = 0,
                                        p = Function[r(-383) + l(-319)][r(22)];
                                    try {
                                        p = u[o(113) + o(-49)][o(-383) + s(-319)][r(22)], u[r(113) + o(-49)][l(-383) + o(-319)][r(22)] = function() {
                                            var e = function(e, t, a, n) {
                                                return l(n - -282)
                                            };
                                            h[e(0, 0, 0, -517)](h[l(-509)], h[e(0, 0, 0, -791)]) || (d = 0, m = 50)
                                        }, u[l(-482)][l(-269) + l(77)]()
                                    } catch (e) {
                                        m ^= 246524624247
                                    }
                                    try {
                                        f[o(-30)](WebSocket[r(-383) + r(-319)][s(-269) + o(77)], 0)
                                    } catch (e) {
                                        (f[o(-487)](typeof window[s(-241) + "e"], f[s(-119)]) && !e[r(-504)][r(-269) + l(77)]()[r(-298) + o(-457)](f[s(-465)]) || navigator[s(11) + r(97)][r(-298) + r(-457)](f[r(-182)]) && !e[r(-269) + l(77)]()[l(-298) + s(-457)](f[r(-544)])) && (m = 11724443661), f[o(-520)](e[r(-269) + o(77)]()[o(99) + "h"], 100) && f[r(-80)](f[o(72)], f[l(-395)]) && (m = 11724443661)
                                    }
                                    for (; f[s(-18)](d, 4);)
                                        for (var g = f[s(52)][r(-440)]("|"), y = 0;;) {
                                            switch (g[y++]) {
                                                case "0":
                                                    ++v;
                                                    continue;
                                                case "1":
                                                    d -= 4;
                                                    continue;
                                                case "2":
                                                    a ^= f[s(-8)](a, 24);
                                                    continue;
                                                case "3":
                                                    a = f[r(-363)](f[r(-242)](f[l(-110)](a, 65535), 1540483477), f[s(-305)](f[o(-372)](f[o(-242)](f[o(-8)](a, 16), 1540483477), 65535), 16));
                                                    continue;
                                                case "4":
                                                    a = f[s(-403)](f[l(-403)](f[o(-403)](f[s(-372)](e[s(62) + l(-283)](v), 255), f[l(-400)](f[r(-372)](e[o(62) + s(-283)](++v), 255), 8)), f[o(-201)](f[r(18)](e[r(62) + r(-283)](++v), 255), 16)), f[l(-201)](f[o(88)](e[s(62) + r(-283)](++v), 255), 24));
                                                    continue;
                                                case "5":
                                                    m = f[l(-66)](f[r(-363)](f[o(-242)](f[r(41)](m, 65535), 1540483476), f[l(-201)](f[o(-43)](f[o(-186)](f[s(-8)](m, 16), 1540483476), 65535), 16)), a);
                                                    continue;
                                                case "6":
                                                    a = f[r(-363)](f[r(-186)](f[s(-43)](a, 65535), 1540483477), f[l(124)](f[s(-337)](f[s(-139)](f[o(-8)](a, 16), 1540483477), 65535), 16));
                                                    continue
                                            }
                                            break
                                        }
                                    try {
                                        f[s(-487)](typeof window, f[s(-119)]) && f[o(-156)](u[r(-464) + "t"][l(-430)](window)[s(99) + "h"], 50) || f[o(-80)](f[l(-547)], f[l(-273)]) && (m ^= 51351350)
                                    } catch (e) {
                                        f[l(-254)](f[r(-197)], f[s(-197)]) && (m -= 1e4)
                                    }
                                    try {
                                        f[o(1)](f[s(-137)], f[r(-137)]) || (u[s(113) + l(-49)][o(-383) + r(-319)][o(22)] = p)
                                    } catch (e) {
                                        m |= 246246246
                                    }
                                    switch (d) {
                                        case 3:
                                            m ^= f[r(-405)](f[r(-33)](e[l(62) + o(-283)](f[o(-446)](v, 2)), 255), 16);
                                        case 2:
                                            m ^= f[r(-553)](f[o(-3)](e[o(62) + o(-283)](f[l(-446)](v, 1)), 255), 8);
                                        case 1:
                                            m ^= f[l(8)](e[l(62) + l(-283)](v), 255), m = f[r(-20)](f[r(-244)](f[r(8)](m, 65535), 1540483477), f[o(127)](f[l(8)](f[r(-382)](f[s(-274)](m, 16), 1540483477), 65535), 16))
                                    }
                                    try {
                                        f[o(-318)](f[s(-180)], f[l(-180)]) && f[s(-552)](u[s(-464) + "t"][s(-512) + r(-107) + l(-302) + r(-44) + r(43)](navigator, f[s(91)]), void 0) && (f[l(-318)](f[l(-436)], f[s(-59)]) || (m ^= 50))
                                    } catch (e) {
                                        m ^= 1050052
                                    }
                                    return m ^= f[o(-361)](m, 13), m = f[r(-20)](f[r(79)](f[o(8)](m, 65535), 1540483477), f[s(127)](f[l(8)](f[o(79)](f[s(-387)](m, 16), 1540483477), 65535), 16)), m ^= f[r(-387)](m, 15), (f[l(128)](typeof u, f[r(-119)]) || f[s(-552)](u[o(-464) + "t"][l(-430)](u[l(-464) + "t"][s(-512) + s(-107) + o(-302) + r(-44) + l(123)](navigator)), 0) || u[l(-464) + "t"][o(-512) + o(-107) + s(-302) + o(-44) + o(123)](navigator)[l(-327) + l(36)]) && (f[s(-318)](f[s(-258)], f[l(-77)]) || (!f[r(-552)](typeof navigator, f[r(-119)]) || !/phone/ [r(-374)](navigator[s(11) + s(97)][o(-281) + s(-158) + "e"]())) && (m ^= f[l(-66)](2350325, f[o(-516)](m, 65535)))), f[r(-209)](m, 0)
                                }(function(e, t) {
                                    var a = function(e, t, a, n) {
                                            return o(0, 0, n - -621)
                                        },
                                        r = function(e, t, a, n) {
                                            return i(0, 0, n - -621)
                                        },
                                        s = function(e, t, a, i) {
                                            return n(0, 0, i - -621)
                                        },
                                        c = function(e, t, a, n) {
                                            return o(0, 0, n - -621)
                                        },
                                        l = {};
                                    if (l[a(0, 0, 0, 230)] = function(e, t) {
                                            return h[(-796, a(0, 0, 0, -11))](e, t)
                                        }, l[r(0, 0, 0, 192)] = h[a(0, 0, 0, -421)], l[s(0, 0, 0, 84)] = h[c(0, 0, 0, -29)], l[s(0, 0, 0, 179)] = function(e, t) {
                                            return h[a(0, 0, 0, 125)](e, t)
                                        }, l[r(0, 0, 0, 96)] = h[c(0, 0, 0, -214)], l[r(0, 0, 0, -396)] = h[c(0, 0, 0, 20)], l[r(0, 0, 0, 40)] = h[c(0, 0, 0, -323)], l[c(0, 0, 0, 44)] = h[c(0, 0, 0, -248)], l[c(0, 0, 0, 136)] = h[s(0, 0, 0, -385)], l[s(0, 0, 0, -273)] = h[a(0, 0, 0, 195)], !h[r(0, 0, 0, 41)](h[s(0, 0, 0, -3)], h[c(0, 0, 0, -127)])) {
                                        try {
                                            h[r(0, 0, 0, -124)](h[r(0, 0, 0, 165)], h[s(0, 0, 0, 165)]) || h[a(0, 0, 0, -155)](u[a(0, 0, 0, -353) + "t"][r(0, 0, 0, -401) + s(0, 0, 0, 4) + c(0, 0, 0, -191) + s(0, 0, 0, 67) + c(0, 0, 0, 154)](navigator, h[r(0, 0, 0, -350)]), void 0) && (e ^= 50135135135)
                                        } catch (t) {
                                            h[c(0, 0, 0, -426)](h[c(0, 0, 0, -231)], h[c(0, 0, 0, -231)]) && (e ^= 10500512)
                                        }
                                        for (var d = "", f = t[r(0, 0, 0, 210) + "h"]; h[c(0, 0, 0, 155)](e, 0);) {
                                            var m = h[c(0, 0, 0, -447)](e, f);
                                            e = h[a(0, 0, 0, -200)](h[r(0, 0, 0, -179)](e, m), f), d = h[c(0, 0, 0, -269)](t[m], d)
                                        }
                                        return d
                                    }
                                }(t, s[i(0, 0, 402)][i(0, 0, 292)](""))), s[n(0, 0, 356)][i(0, 0, 292)]("")))
                            }, j = function(e, t) {
                                var a = function(e, t, a, n) {
                                        return r(0, 0, t - -500)
                                    },
                                    n = function(e, t, a, n) {
                                        return r(0, 0, t - -500)
                                    };
                                if (s[a(0, 101)](s[a(0, 117)], s[n(0, -256)]));
                                else {
                                    var i = s[n(0, 183)](v[s[n(0, 14)](m, 2)], 2);
                                    v[s[n(0, 322)](i, 1)] = s[n(0, 129)](e, t), v[i] = e
                                }
                            };
                            var m, v, p, g, w, b, E = u[r(0, 0, 456) + o(0, 0, 739) + "y"],
                                x = E[a(0, 0, 594) + a(0, 0, 754) + "e"],
                                A = u[a(0, 0, 243)],
                                C = A;
                            p = 12672, m = 11568, E[o(0, 0, 594) + o(0, 0, 754) + "e"] = function() {
                                var e, t = arguments,
                                    a = this,
                                    n = function(e, t, a, n) {
                                        return o(0, 0, n - 903)
                                    },
                                    i = function(e, t, a, n) {
                                        return c(0, 0, n - 903)
                                    };
                                if (!s[n(0, 0, 0, 1494)](s[i(0, 0, 0, 1594)], s[n(0, 0, 0, 1459)])) return new Promise((e = Object(k.a)(y.a.mark(function e(r) {
                                    var s, o, l, u, h, m, p, k;
                                    return y.a.wrap(function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                if (o = function(e, t, a, i) {
                                                        return n(0, 0, 0, e - 356)
                                                    }, l = function(e, t, a, n) {
                                                        return i(0, 0, 0, e - 356)
                                                    }, u = function(e, t, a, n) {
                                                        return i(0, 0, 0, e - 356)
                                                    }, !f[(s = function(e, t, a, n) {
                                                        return c(0, 0, e - 356 - 903)
                                                    })(1594, 1525, 1577, 1788)](f[o(2060, 1823, 2001, 2251)], f[o(2060, 2378, 1888, 2076)])) {
                                                    e.next = 32;
                                                    break
                                                }
                                                h = f[l(1680, 1439, 1911, 1782)][s(1608, 1262, 1337, 1882)]("|"), m = 0;
                                            case 3:
                                                e.t0 = h[m++], e.next = "0" === e.t0 ? 7 : "1" === e.t0 ? 9 : "2" === e.t0 ? 11 : "3" === e.t0 ? 13 : "4" === e.t0 ? 15 : "5" === e.t0 ? 17 : "6" === e.t0 ? 19 : "7" === e.t0 ? 21 : "8" === e.t0 ? 25 : 27;
                                                break;
                                            case 7:
                                                return b = new Uint8Array(k[u(1853, 1642, 1923, 2147) + s(1555, 1858, 1235, 1566)][u(2080, 2082, 1888, 1894) + "ts"][u(1937, 1701, 2202, 1727) + "y"][u(1659, 1370, 1623, 1715) + "r"]), e.abrupt("continue", 3);
                                            case 9:
                                                return P = k[o(1853, 1915, 2174, 1949) + u(1555, 1704, 1425, 1624)][l(2080, 1908, 1926, 1826) + "ts"][s(2086, 1964, 1978, 1837) + o(1523, 1696, 1303, 1425) + "ck"], e.abrupt("continue", 3);
                                            case 11:
                                                return d[s(1571, 1775, 1480, 1316) + "e"](), e.abrupt("continue", 3);
                                            case 13:
                                                return p = v = new Uint32Array(k[l(1853, 1728, 1557, 1513) + u(1555, 1766, 1754, 1786)][u(2080, 2230, 2069, 1798) + "ts"][o(1937, 2278, 2248, 1692) + "y"][s(1659, 1354, 1785, 1940) + "r"]), e.abrupt("continue", 3);
                                            case 15:
                                                return w = k[u(1853, 1894, 1763, 1782) + l(1555, 1779, 1752, 1652)][l(2080, 2106, 1828, 2294) + "ts"][s(1747, 1736, 1501, 1959)], e.abrupt("continue", 3);
                                            case 17:
                                                return p[f[o(2028, 2094, 2253, 1944)](f[u(1531, 1760, 1348, 1843)](p[f[s(1531, 1284, 1409, 1822)](336, 2)], 2), 4)] = 235765853, e.abrupt("continue", 3);
                                            case 19:
                                                return g = k[o(1853, 2161, 1772, 1598) + s(1555, 1449, 1591, 1853)][l(2080, 2167, 2196, 2302) + "ts"][s(1543, 1401, 1660, 1635) + "e"], e.abrupt("continue", 3);
                                            case 21:
                                                return e.next = 23, x[l(2070, 2403, 1904, 2387)](a, t);
                                            case 23:
                                                return k = e.sent, e.abrupt("continue", 3);
                                            case 25:
                                                return f[s(1984, 1987, 1676, 1722)](r, k), e.abrupt("continue", 3);
                                            case 27:
                                                return e.abrupt("break", 30);
                                            case 30:
                                                e.next = 33;
                                                break;
                                            case 32:
                                            case 33:
                                            case "end":
                                                return e.stop()
                                        }
                                    }, e)
                                })), function(t) {
                                    return e.apply(this, arguments)
                                }))
                            };
                            var S = {};
                            S[o(0, 0, 348)] = function() {}, S[o(0, 0, 731)] = function() {
                                var e = function(e, t, n, i) {
                                    return a(0, 0, n - -270)
                                };
                                if (s[r(0, 0, 778)](s[e(0, 0, 46)], s[e(0, 0, 46)])) return C[a(0, 0, 375) + "m"]()
                            }, S[c(0, 0, 323) + r(0, 0, 788) + c(0, 0, 472)] = function() {
                                var e, t = function(e, t, n, i) {
                                    return a(0, 0, i - -413)
                                };
                                if ({} [t(0, 0, 0, -154)] = function(e, a) {
                                        return s[t(0, 0, 0, 364)](e, a)
                                    }, s[t(0, 0, 0, 294)](s[t(0, 0, 0, 213)], s[(e = 215, o(0, 0, e - -413))])) return function() {
                                    var e;
                                    return T && T[(e = 993, I(0, 0, 0, e - 560))](null, arguments) || []
                                } [t(0, 0, 0, 398)](this, arguments)
                            };
                            var L = {};
                            L[c(0, 0, 229)] = function() {
                                var e = function(e, t, a, n) {
                                    return r(0, 0, a - 306)
                                };
                                if (!s[e(0, 0, 1189)](s[e(0, 0, 992)], s[a(0, 0, 826)])) return Date[e(0, 0, 535)]()
                            };
                            var D = {};
                            D[a(0, 0, 319)] = S, D[r(0, 0, 896)] = L, E[o(0, 0, 594) + a(0, 0, 754) + "e"](B, D)[r(0, 0, 872)](function(e) {
                                return l(e[r(0, 0, 594) + r(0, 0, 296)][a(0, 0, 821) + "ts"])
                            })[a(0, 0, 923)](console.log)
                        }
                    },
                    d = document[a(0, 0, 518) + t(0, 0, 605) + t(0, 0, 627)](s[a(0, 0, 636)]);
                return d[t(0, 0, 420)][n(0, 0, 244) + "ay"] = s[a(0, 0, 760)], d[a(0, 0, 229) + "d"] = function() {
                    var e = function(e, t, n, i) {
                        return a(0, 0, e - -775)
                    };
                    u = d[e(-14) + (-404, n(0, 0, 371)) + e(-325)], s[a(0, 0, 421)](h)
                }, document[a(0, 0, 593) + a(0, 0, 691) + t(0, 0, 329)][a(0, 0, 492) + i(0, 0, 157) + "d"](d), new Promise(function(e) {
                    l = e
                })
            }()
        }).call(this, a(85))
    }, function(e, t, a) {
        "use strict";
        var n = a(3);
        t.a = function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1,
                a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
                r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
                s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "#ffffff",
                o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
                c = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
                l = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
            Object(n.a)(this, e), this.id = t, this.isBot = a, this.nick = i, this.tag = r, this.teamColor = s, this.r = o, this.g = c, this.b = l
        }
    }, function(e, t, a) {
        "use strict";
        var n = a(3),
            i = a(4),
            r = a(52),
            s = function() {
                function e(t, a) {
                    Object(n.a)(this, e), this.element = t, this.listener = a, this.baseKeys = this.getBaseKeys(), this.attachListeners()
                }
                return Object(i.a)(e, [{
                    key: "attachListeners",
                    value: function() {
                        var e = this;
                        this.element.addEventListener("keydown", function(t) {
                            e.handleEvent("keydown", t)
                        }), this.element.addEventListener("keyup", function(t) {
                            e.handleEvent("keyup", t)
                        })
                    }
                }, {
                    key: "getKeyName",
                    value: function(e) {
                        var t = e.code;
                        if (!t) return t;
                        switch ((t = (t = (t = t.replace("Key", "")).replace("Digit", "")).replace("Arrow", "")).startsWith("Shift") ? t = "Shift" : t.startsWith("Control") ? t = "Control" : t.startsWith("Alt") && (t = "Alt"), t = t.toUpperCase()) {
                            case "BACKQUOTE":
                                t = "TILDE"
                        }
                        return !!this.baseKeys.has(t) && (e.ctrlKey ? "CTRL+".concat(t) : e.altKey ? "ALT+".concat(t) : t)
                    }
                }, {
                    key: "handleEvent",
                    value: function(e, t) {
                        if ("Tab" === t.code && t.preventDefault(), !t.repeat) {
                            var a = this.getKeyName(t);
                            a && this.listener(t, e, a)
                        }
                    }
                }, {
                    key: "getBaseKeys",
                    value: function() {
                        var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
                            t = "0123456789".split(""),
                            a = "TAB SHIFT ENTER TILDE SPACE UP DOWN LEFT RIGHT ESCAPE".split(" ");
                        return new Set([].concat(Object(r.a)(e), Object(r.a)(t), Object(r.a)(a)))
                    }
                }]), e
            }(),
            o = a(1),
            c = function() {
                function e(t, a) {
                    Object(n.a)(this, e), this.element = t, this.listener = a, this.x = 0, this.y = 0, this.attachListeners()
                }
                return Object(i.a)(e, [{
                    key: "attachListeners",
                    value: function() {
                        var e = this;
                        this.element.addEventListener("mousedown", function(t) {
                            e.handleEvent("mousedown", t)
                        }), this.element.addEventListener("mouseup", function(t) {
                            e.handleEvent("mouseup", t)
                        }), this.element.addEventListener("contextmenu", function(e) {
                            e.preventDefault()
                        }), this.element.addEventListener("mousemove", function(t) {
                            e.setMouse(t)
                        })
                    }
                }, {
                    key: "getButtonName",
                    value: function(e) {
                        switch (e.button) {
                            case 0:
                                return "LEFT BUTTON";
                            case 1:
                                return "MIDDLE BUTTON";
                            case 2:
                                return "RIGHT BUTTON";
                            default:
                                return "BUTTON ".concat(e.button + 1)
                        }
                    }
                }, {
                    key: "handleEvent",
                    value: function(e, t) {
                        var a = this.getButtonName(t);
                        this.listener(t, e, a)
                    }
                }, {
                    key: "setMouse",
                    value: function(e) {
                        o.a.graphicsQuality, this.x = e.clientX, this.y = e.clientY
                    }
                }]), e
            }(),
            l = a(53),
            u = a(30),
            h = a(13),
            d = a(5),
            f = a(19),
            m = a(49),
            v = a(17),
            p = a(35),
            g = function() {
                function e() {
                    Object(n.a)(this, e), this.keyboard = null, this.mouse = null
                }
                return Object(i.a)(e, [{
                    key: "initialize",
                    value: function() {
                        var e = this;
                        this.keyboard = new s(document, function(t, a, n) {
                            e.handle(t, a, n)
                        }), this.mouse = new c(document, function(t, a, n) {
                            e.handle(t, a, n)
                        })
                    }
                }, {
                    key: "handle",
                    value: function(e, t, a) {
                        switch (t) {
                            case "keydown":
                                this.onKeyDown(e, a);
                                break;
                            case "keyup":
                                this.onKeyUp(e, a);
                                break;
                            case "mousedown":
                                this.onMouseDown(e, a);
                                break;
                            case "mouseup":
                                this.onMouseUp(e, a)
                        }
                    }
                }, {
                    key: "onKeyDown",
                    value: function(e, t) {
                        if ("TAB" === t && e.preventDefault(), !(l.a.isOpen || u.a.isFocused && t !== o.a.hkToggleChat))
                            if (t !== o.a.hkToggleChat || !1 !== m.a.open)
                                if (t !== o.a.hkToggleMenu) {
                                    if (!(f.a.isOpen || p.a.isOpen || v.a.isOpen)) {
                                        if (e.preventDefault(), d.a.isAlive) switch (t) {
                                            case o.a.hkSplit:
                                                return void h.a.split();
                                            case o.a.hkDoubleSplit:
                                                return void h.a.doubleSplit();
                                            case o.a.hkTripleSplit:
                                                return void h.a.tripleSplit();
                                            case o.a.hkSplit16:
                                                return void h.a.split16();
                                            case o.a.hkSplit32:
                                                return void h.a.split32();
                                            case o.a.hkSplit64:
                                                return void h.a.split64();
                                            case o.a.hkFeed:
                                                return void h.a.feed();
                                            case o.a.hkMacroFeed:
                                                return void h.a.macroFeed(!0);
                                            case o.a.hkTogglePlayer:
                                                return void h.a.togglePlayer();
                                            case o.a.hkReplay:
                                                return void h.a.replay()
                                        }
                                        switch (t) {
                                            case o.a.hkStop:
                                                return void h.a.stop();
                                            case o.a.hkToggleNick:
                                                return void h.a.toggleNick();
                                            case o.a.hkToggleHUD:
                                                return void h.a.toggleHUDs();
                                            case o.a.hkToggleMass:
                                                return void h.a.toggleMass();
                                            case o.a.hkToggleOwnSkin:
                                                return void h.a.toggleSkin();
                                            case o.a.hkToggleChatMessage:
                                                return void h.a.toggleChatMessages();
                                            case o.a.hkToggleChatMode:
                                                return void h.a.toggleChatMode();
                                            case o.a.hkToggleSpectateMode:
                                                return void h.a.toggleSpectateMode();
                                            case o.a.hkToggleSectors:
                                                return void h.a.toggleSectors();
                                            case o.a.hkCommand1:
                                                return void h.a.command(o.a.command1);
                                            case o.a.hkCommand2:
                                                return void h.a.command(o.a.command2);
                                            case o.a.hkCommand3:
                                                return void h.a.command(o.a.command3);
                                            case o.a.hkCommand4:
                                                return void h.a.command(o.a.command4);
                                            case o.a.hkCommand5:
                                                return void h.a.command(o.a.command5);
                                            case o.a.hkCommand6:
                                                return void h.a.command(o.a.command6);
                                            case o.a.hkCommand7:
                                                return void h.a.command(o.a.command7);
                                            case o.a.hkCommand8:
                                                return void h.a.command(o.a.command8);
                                            case o.a.hkCommand9:
                                                return void h.a.command(o.a.command9);
                                            case o.a.hkCommand10:
                                                return void h.a.command(o.a.command10);
                                            case o.a.hkZoom1:
                                                return void h.a.zoom(1);
                                            case o.a.hkZoom2:
                                                return void h.a.zoom(.5);
                                            case o.a.hkZoom3:
                                                return void h.a.zoom(.25);
                                            case o.a.hkZoom4:
                                                return void h.a.zoom(.125);
                                            case o.a.hkZoom5:
                                                return void h.a.zoom(.0712)
                                        }
                                    }
                                } else f.a.toggle();
                        else u.a.toggle()
                    }
                }, {
                    key: "onKeyUp",
                    value: function(e, t) {
                        switch (t) {
                            case o.a.hkMacroFeed:
                                return void h.a.macroFeed(!1)
                        }
                    }
                }, {
                    key: "onMouseDown",
                    value: function(e, t) {
                        var a = !1;
                        switch (t) {
                            case "LEFT BUTTON":
                                a = o.a.leftClick;
                                break;
                            case "MIDDLE BUTTON":
                                a = o.a.middleClick;
                                break;
                            case "RIGHT BUTTON":
                                a = o.a.rightClick
                        }
                        switch (a) {
                            case "none":
                                break;
                            case "feed":
                                h.a.feed();
                                break;
                            case "macroFeed":
                                h.a.macroFeed(!0);
                                break;
                            case "split":
                                h.a.split();
                                break;
                            case "doubleSplit":
                                h.a.doubleSplit();
                                break;
                            case "split16":
                                h.a.split16();
                                break;
                            case "split32":
                                h.a.split32();
                                break;
                            case "split64":
                                h.a.split64()
                        }
                    }
                }, {
                    key: "onMouseUp",
                    value: function(e, t) {
                        var a = !1;
                        switch (t) {
                            case "LEFT BUTTON":
                                a = o.a.leftClick;
                                break;
                            case "MIDDLE BUTTON":
                                a = o.a.middleClick;
                                break;
                            case "RIGHT BUTTON":
                                a = o.a.rightClick
                        }
                        switch (a) {
                            case "macroFeed":
                                h.a.macroFeed(!1)
                        }
                    }
                }]), e
            }();
        t.a = new g
    }, function(e, t, a) {
        "use strict";
        var n = a(3),
            i = a(4),
            r = a(2),
            s = a.n(r),
            o = a(12),
            c = a(19),
            l = a(38),
            u = function() {
                function e() {
                    Object(n.a)(this, e), this.isOpen = !1, this.lastPassword = "", this.configs = new Map
                }
                return Object(i.a)(e, [{
                    key: "initialize",
                    value: function() {
                        var e = this,
                            t = document.querySelector("#custom-game-panel .close-button");
                        s()("#custom-games-toggle").click(function() {
                            e.show()
                        }), t.addEventListener("click", function() {
                            return e.hide()
                        });
                        var a = this,
                            n = document.querySelector(".panel .confirm"),
                            i = s()("#custom-game-confirm"),
                            r = i[0],
                            c = document.querySelector("#join-model");
                        if (r) {
                            var u = r.querySelector("#private-match"),
                                h = r.querySelector("#clan-wars"),
                                d = r.querySelector("input[type=password]"),
                                f = r.querySelector(".confirm"),
                                m = r.querySelector(".cancel"),
                                v = r.querySelector(".close-button");
                            n.addEventListener("click", function() {
                                u.querySelector("input").checked = !1, h.checked = !1, d.value = "", u.closest(".model-option").nextElementSibling.style.display = "none", i.fadeIn(250)
                            }), v.addEventListener("click", function() {
                                i.fadeOut(250)
                            }), m.addEventListener("click", function() {
                                i.fadeOut(250)
                            }), u.addEventListener("click", function() {
                                this.querySelector("input").checked ? this.closest(".model-option").nextElementSibling.style.display = "block" : this.closest(".model-option").nextElementSibling.style.display = "none"
                            }), f.addEventListener("click", function() {
                                var e = u.querySelector("input"),
                                    t = this.closest(".inner-content").querySelector("input[type=password]");
                                if (!e.checked || e.checked) {
                                    i.fadeOut(250);
                                    var n = document.querySelector("#serverName").value,
                                        r = document.querySelector("#modes").value,
                                        s = document.querySelector("#slots").value,
                                        c = document.querySelector("#mapSize").value,
                                        l = document.querySelector("#virusCount").value,
                                        d = document.querySelector("#botCount").value,
                                        f = document.querySelector("#startMass").value;
                                    a.lastPassword = t.value, o.a.customGameInfo(n, t.value, 0, h.checked, s, r, f, c, l, d)
                                }
                            })
                        }
                        if (c) {
                            var p = c.querySelector(".confirm"),
                                g = c.querySelector(".cancel");
                            c.querySelector(".close-button").addEventListener("click", function() {
                                c.style.display = "none"
                            }), g.addEventListener("click", function() {
                                c.style.display = "none"
                            }), p.addEventListener("click", function() {
                                var e = this.closest(".inner-content").querySelector("input[type=password]");
                                "" !== e.value && (c.style.display = "none", i.fadeOut(250), l.a.join(e.value))
                            })
                        }
                        var y = s()("#virusCount"),
                            k = s()("#botCount"),
                            w = s()("#mapSize"),
                            b = s()("#startMass"),
                            E = s()("#modes"),
                            x = function() {
                                var t = E[0],
                                    a = t[t.value].innerText,
                                    n = e.configs.get(a);
                                b[0].options[0].innerText = n[0], w[0].options[0].innerText = n[1], y[0].options[0].innerText = n[2], k[0].options[0].innerText = n[3]
                            };
                        E.change(x), this.updateSelects = x
                    }
                }, {
                    key: "update",
                    value: function(e, t, a, n, i, r, o) {
                        console.log(t, a, i, r, o);
                        var c = s()("#virusCount"),
                            l = s()("#botCount"),
                            u = s()("#mapSize"),
                            h = s()("#startMass"),
                            d = s()("#slots"),
                            f = s()("#modes"),
                            m = Array(o).fill(null).map(function(e, t) {
                                return t + 1
                            }),
                            v = s()(a.map(function(e, t) {
                                return "<option value=".concat(t, " name=").concat(e, ">").concat(e, "</option>")
                            }).join("")),
                            p = s()(n.map(function(e, t) {
                                return "<option value=".concat(t, " name=").concat(e, ">").concat(e, "</option>")
                            }).join("")),
                            g = s()(t.map(function(e, t) {
                                return "<option value=".concat(t, " name=").concat(e, ">").concat(e, "</option>")
                            }).join("")),
                            y = s()(i.map(function(e, t) {
                                return "<option value=".concat(t, " name=").concat(e, ">").concat(e, "</option>")
                            }).join("")),
                            k = s()(m.map(function(e, t) {
                                return "<option value=".concat(t + 1, " name=").concat(e, ">").concat(e, "</option>")
                            }).join("")),
                            w = s()(r.map(function(e, t) {
                                return "<option value=".concat(t, " name=").concat(e, ">").concat(e, "</option>")
                            }).join(""));
                        c.empty(), c.append(v), l.empty(), l.append(p), u.empty(), u.append(g), h.empty(), h.append(y), d.empty(), d.append(k), f.empty(), f.append(w), this.configs = e, this.updateSelects()
                    }
                }, {
                    key: "show",
                    value: function() {
                        var e = this;
                        c.a.hide(), s()("#custom-game-panel").fadeIn(250, function() {
                            e.isOpen = !0
                        })
                    }
                }, {
                    key: "hide",
                    value: function() {
                        var e = this;
                        c.a.show(), s()("#custom-game-panel").fadeOut(250, function() {
                            e.isOpen = !1
                        })
                    }
                }]), e
            }();
        t.a = new u
    }, function(e, t, a) {
        "use strict";
        a.d(t, "a", function() {
            return n.a
        }), a.d(t, "d", function() {
            return s
        }), a.d(t, "e", function() {
            return h
        }), a.d(t, "g", function() {
            return d
        }), a.d(t, "f", function() {
            return p
        }), a.d(t, "c", function() {
            return g
        }), a.d(t, "b", function() {
            return y
        }), a.d(t, "i", function() {
            return C
        }), a.d(t, "h", function() {
            return I
        });
        var n = a(79),
            i = (a(69), a(0)),
            r = a.n(i),
            s = (a(117), function() {
                return r.a.createElement("div", {
                    id: "music-panel"
                }, r.a.createElement("div", {
                    className: "close-button"
                }, r.a.createElement("i", {
                    className: "fas fa-times"
                })), r.a.createElement("div", {
                    className: "panel-taps"
                }, r.a.createElement("div", {
                    className: "load-track-tap"
                }, r.a.createElement("button", {
                    type: "button"
                }, "Load track")), r.a.createElement("div", {
                    className: "load-playlist-tap"
                }, r.a.createElement("button", {
                    type: "button"
                }, "Load playlist"))), r.a.createElement("audio", {
                    controls: !0,
                    id: "music"
                }), r.a.createElement("div", {
                    className: "music-container"
                }, r.a.createElement("div", {
                    className: "music-content"
                })))
            }),
            o = a(15),
            c = a(2),
            l = a.n(c),
            u = a(20),
            h = function() {
                var e = Object(i.useState)(!0),
                    t = Object(o.a)(e, 2),
                    a = t[0],
                    n = t[1],
                    s = Object(i.useState)(!1),
                    c = Object(o.a)(s, 2),
                    h = c[0],
                    d = c[1];
                return Object(i.useEffect)(function() {
                    Object(u.c)(function() {
                        d(!0)
                    })
                }), a ? r.a.createElement("div", {
                    id: "new-panel",
                    onClick: function() {
                        l()("#new-panel").fadeOut(300, function() {
                            n(!1)
                        })
                    }
                }, r.a.createElement("div", {
                    className: "close-button"
                }, r.a.createElement("i", {
                    className: "fas fa-times"
                })), r.a.createElement("div", {
                    className: "partition right"
                }, r.a.createElement("div", {
                    id: "image"
                }, h && r.a.createElement("img", {
                    alt: "news-image",
                    src: "https://i.imgur.com/ycPTnWN.png",
                    width: 600,
                    height: 550,
                    onClick: function() {
                        window.open("https://discord.gg/huDNH8m", "_blank")
                    }
                })))) : r.a.createElement(r.a.Fragment, null)
            },
            d = (a(118), function() {
                return r.a.createElement("div", {
                    id: "replays-panel"
                }, r.a.createElement("div", {
                    className: "close-button"
                }, r.a.createElement("i", {
                    className: "fas fa-times"
                })), r.a.createElement("div", {
                    className: "panel-taps"
                }, r.a.createElement("div", {
                    className: "import-tap"
                }, r.a.createElement("input", {
                    type: "file"
                }), r.a.createElement("button", {
                    type: "button"
                }, r.a.createElement("div", {
                    className: "icon"
                }, r.a.createElement("i", {
                    className: "fas fa-arrow-circle-up"
                })), "Import Replay")), r.a.createElement("div", {
                    className: "download-tap"
                }, r.a.createElement("button", {
                    type: "button"
                }, r.a.createElement("div", {
                    className: "icon"
                }, r.a.createElement("i", {
                    className: "fas fa-arrow-circle-down"
                })), "Download Replays")), r.a.createElement("div", {
                    className: "delete-tap"
                }, r.a.createElement("button", {
                    type: "button"
                }, r.a.createElement("div", {
                    className: "icon"
                }, r.a.createElement("i", {
                    className: "fas fa-eraser"
                })), "Delete All Replays"))), r.a.createElement("div", {
                    className: "replays-container"
                }, r.a.createElement("div", {
                    className: "replay-content"
                })))
            }),
            f = a(18),
            m = a(83),
            v = a.n(m),
            p = function(e) {
                var t = e.skin1,
                    a = e.skin2,
                    n = e.onPrev,
                    i = e.onNext;
                return r.a.createElement("div", {
                    className: "profile-controls"
                }, r.a.createElement("div", {
                    className: "arrow inline",
                    id: "profile-previous",
                    onClick: n
                }, r.a.createElement("i", {
                    className: "fas fa-caret-left"
                })), r.a.createElement("div", {
                    className: "skin-preview inline",
                    id: "skin-preview-1",
                    onClick: function() {
                        return f.a.onSkinClicked(0)
                    },
                    style: {
                        backgroundImage: "url(".concat(t || v.a, ")")
                    }
                }), r.a.createElement("div", {
                    className: "skin-preview inline",
                    id: "skin-preview-2",
                    onClick: function() {
                        return f.a.onSkinClicked(1)
                    },
                    style: {
                        backgroundImage: "url(".concat(a || v.a, ")")
                    }
                }), r.a.createElement("div", {
                    className: "arrow inline",
                    id: "profile-next",
                    onClick: i
                }, r.a.createElement("i", {
                    className: "fas fa-caret-right"
                })))
            },
            g = (a(88), function() {
                return r.a.createElement("div", {
                    className: "custom-games",
                    id: "custom-game-panel",
                    style: {
                        display: "none"
                    }
                }, r.a.createElement("div", {
                    className: "main-menu"
                }, r.a.createElement("div", {
                    className: "panel left"
                }, r.a.createElement("div", {
                    className: "panel-left-content"
                }, r.a.createElement("div", {
                    className: "inner-content d-flex"
                }, r.a.createElement("span", {
                    className: "close-button"
                }, r.a.createElement("i", {
                    className: "fas fa-times"
                })), r.a.createElement("div", {
                    className: "game-list"
                }, r.a.createElement("div", {
                    className: "heading text-center"
                }, "Game list"), r.a.createElement("div", {
                    className: "table-container",
                    tabIndex: "1"
                }, r.a.createElement("div", {
                    className: "table-content"
                }, r.a.createElement("div", {
                    className: "table-heading d-flex justify-center"
                }, r.a.createElement("div", null, "Game"), r.a.createElement("div", null, "Players"), r.a.createElement("div", null, "Mode"), r.a.createElement("div", null, " ")), r.a.createElement("div", {
                    className: "template trow d-flex",
                    name: "template-custom-game"
                }, r.a.createElement("div", null, "**name**"), r.a.createElement("div", null, "**players**"), r.a.createElement("div", null, "**mode**"), r.a.createElement("div", {
                    className: "d-flex align-center column"
                }, r.a.createElement("button", {
                    className: "btn",
                    type: "button",
                    id: "joinBtn"
                }, "Join"), r.a.createElement("button", {
                    className: "btn",
                    type: "button",
                    id: "fullBtn",
                    style: {
                        display: "none"
                    }
                }, "Full"), r.a.createElement("button", {
                    className: "btn",
                    type: "button",
                    id: "deleteBtn"
                }, "Delete"))), r.a.createElement("div", {
                    className: "table-body",
                    id: "table-custom-game"
                }))), r.a.createElement("br", null))))), r.a.createElement("div", {
                    className: "panel right"
                }, r.a.createElement("div", {
                    className: "inner-content"
                }, r.a.createElement("p", null, "Some placeholder text for the instructions on how to create Custom Games and how AWESOME it will be to host your own lobbies, chose the server config, and play with your friends!"), r.a.createElement("button", {
                    type: "button",
                    className: "btn confirm",
                    id: "createGame"
                }, "Create game")), r.a.createElement("div", {
                    className: "confirm-model",
                    id: "custom-game-confirm"
                }, r.a.createElement("div", {
                    className: "inner-content"
                }, r.a.createElement("span", {
                    className: "close-button"
                }, r.a.createElement("i", {
                    className: "fas fa-times"
                })), r.a.createElement("div", {
                    className: "model-content d-flex"
                }, r.a.createElement("div", {
                    className: "model-option"
                }, r.a.createElement("h2", {
                    className: "text-center"
                }, "Create a new game"), r.a.createElement("div", {
                    className: "settings-row d-flex flex-basis-auto"
                }, r.a.createElement("div", {
                    className: "d-flex align-center column",
                    style: {
                        flex: "30%"
                    }
                }, r.a.createElement("div", {
                    className: "txt"
                }, "Please Enter a name")), r.a.createElement("div", {
                    className: "d-flex align-center column",
                    style: {
                        flex: "65%"
                    }
                }, r.a.createElement("input", {
                    type: "text",
                    id: "serverName",
                    className: "input-field",
                    placeholder: "Server Name",
                    maxLength: 25
                }))), r.a.createElement("div", {
                    className: "settings-row d-flex"
                }, r.a.createElement("div", {
                    className: "d-flex align-center column"
                }, r.a.createElement("div", {
                    className: "flex-1"
                }, r.a.createElement("span", null, "Virus Count: ")), r.a.createElement("div", {
                    className: "flex-1"
                }, r.a.createElement("select", {
                    id: "virusCount",
                    name: "Virus Count"
                }))), r.a.createElement("div", {
                    className: "d-flex align-center column"
                }, r.a.createElement("div", {
                    className: "flex-1"
                }, r.a.createElement("span", null, "Bot Count: ")), r.a.createElement("div", {
                    className: "flex-1"
                }, r.a.createElement("select", {
                    id: "botCount",
                    name: "Bot Count"
                }))), r.a.createElement("div", {
                    className: "d-flex align-center column"
                }, r.a.createElement("div", {
                    className: "flex-1"
                }, r.a.createElement("span", null, "Map Size: ")), r.a.createElement("div", {
                    className: "flex-1"
                }, r.a.createElement("select", {
                    id: "mapSize",
                    name: "Map Size"
                }))), r.a.createElement("div", {
                    className: "d-flex align-center column"
                }, r.a.createElement("div", {
                    className: "flex-1"
                }, r.a.createElement("span", null, "Start Mass: ")), r.a.createElement("div", {
                    className: "flex-1"
                }, r.a.createElement("select", {
                    id: "startMass",
                    name: "Start Mass"
                }))), r.a.createElement("div", {
                    className: "d-flex align-center column"
                }, r.a.createElement("div", {
                    className: "flex-1"
                }, r.a.createElement("span", null, "Mode: ")), r.a.createElement("div", {
                    className: "flex-1"
                }, r.a.createElement("select", {
                    id: "modes",
                    name: "Mode"
                }))), r.a.createElement("div", {
                    className: "d-flex align-center column"
                }, r.a.createElement("div", {
                    className: "flex-1"
                }, r.a.createElement("span", null, "Slots: ")), r.a.createElement("div", {
                    className: "flex-1"
                }, r.a.createElement("select", {
                    id: "slots",
                    name: "Slots"
                }))), r.a.createElement("div", {
                    className: "d-flex align-center column toggle"
                }, r.a.createElement("div", {
                    className: "flex-1"
                }, r.a.createElement("span", null, "Clan Wars")), r.a.createElement("div", {
                    className: "flex-1"
                }, r.a.createElement("div", {
                    className: "sw-btn"
                }, r.a.createElement("label", null, r.a.createElement("input", {
                    type: "checkbox",
                    id: "clan-wars"
                }), r.a.createElement("span", null))))), r.a.createElement("div", {
                    className: "d-flex align-center column toggle"
                }, r.a.createElement("div", {
                    className: "flex-1"
                }, r.a.createElement("span", null, "Private match")), r.a.createElement("div", {
                    className: "flex-1"
                }, r.a.createElement("div", {
                    className: "sw-btn"
                }, r.a.createElement("label", {
                    id: "private-match"
                }, r.a.createElement("input", {
                    type: "checkbox"
                }), r.a.createElement("span", null))))))), r.a.createElement("div", {
                    className: "model-option"
                }, r.a.createElement("div", {
                    className: "settings-row d-flex align-center flex-basis-auto"
                }, r.a.createElement("div", {
                    className: "txt column",
                    style: {
                        flex: "30%"
                    }
                }, "Please Enter your password"), r.a.createElement("div", {
                    className: "column",
                    style: {
                        flex: "50%"
                    }
                }, r.a.createElement("input", {
                    type: "password"
                }))))), r.a.createElement("div", {
                    className: "btn-container justify-center d-flex"
                }, r.a.createElement("button", {
                    type: "button",
                    className: "btn cancel"
                }, "Cancel"), r.a.createElement("button", {
                    type: "button",
                    className: "btn confirm"
                }, "Confirm")))), r.a.createElement("div", {
                    className: "confirm-model",
                    id: "join-model"
                }, r.a.createElement("div", {
                    className: "inner-content"
                }, r.a.createElement("span", {
                    className: "close-button"
                }, r.a.createElement("i", {
                    className: "fas fa-times"
                })), r.a.createElement("div", {
                    className: "model-content d-flex"
                }, r.a.createElement("div", {
                    className: "model-option"
                }, r.a.createElement("div", {
                    className: "settings-row d-flex align-center"
                }, r.a.createElement("div", {
                    className: "txt column text-center",
                    style: {
                        flex: "100%"
                    }
                }, "Please Enter your password"), r.a.createElement("div", {
                    className: "column",
                    style: {
                        flex: "100%"
                    }
                }, r.a.createElement("input", {
                    type: "password"
                }))))), r.a.createElement("div", {
                    className: "btn-container justify-center d-flex"
                }, r.a.createElement("button", {
                    type: "button",
                    className: "btn cancel"
                }, "Cancel"), r.a.createElement("button", {
                    type: "button",
                    className: "btn confirm"
                }, "Confirm")))))))
            }),
            y = (a(12), function() {
                return r.a.createElement("div", {
                    className: "custom-games",
                    id: "player-list-container",
                    style: {
                        display: "none"
                    }
                }, r.a.createElement("div", {
                    className: "main-menu"
                }, r.a.createElement("div", {
                    className: "panel left"
                }, r.a.createElement("div", {
                    className: "panel-left-content"
                }, r.a.createElement("div", {
                    className: "inner-content d-flex"
                }, r.a.createElement("span", {
                    className: "close-button"
                }, r.a.createElement("i", {
                    className: "fas fa-times"
                })), r.a.createElement("div", {
                    className: "players"
                }, r.a.createElement("div", {
                    className: "heading text-center"
                }, "Players"), r.a.createElement("div", {
                    className: "table-container"
                }, r.a.createElement("div", {
                    className: "table-content"
                }, r.a.createElement("div", {
                    className: "table-heading d-flex justify-center"
                }, r.a.createElement("div", null, "Name"), r.a.createElement("div", null, "Team")), r.a.createElement("div", {
                    className: "trow d-flex align-center template",
                    name: "template-player-list-host"
                }, r.a.createElement("div", null, r.a.createElement("span", {
                    className: "num"
                }, "**id**"), r.a.createElement("span", {
                    className: "player-name"
                }, "**name**")), r.a.createElement("div", {
                    className: "settings-row d-flex"
                }, r.a.createElement("div", {
                    className: "d-flex align-center column"
                }, r.a.createElement("div", {
                    className: "flex-1 w-100"
                }, r.a.createElement("select", {
                    name: "Team"
                }, r.a.createElement("option", {
                    id: "no-team",
                    name: "Spectate",
                    value: "0"
                }, "Spectate"), r.a.createElement("option", {
                    id: "red-team",
                    name: "Red",
                    value: "1"
                }, "Red"), r.a.createElement("option", {
                    id: "blue-team",
                    name: "Blue",
                    value: "2"
                }, "Blue")))))), r.a.createElement("div", {
                    className: "trow d-flex template",
                    name: "template-player-list"
                }, r.a.createElement("div", null, r.a.createElement("span", {
                    className: "num"
                }, "**id**"), r.a.createElement("span", {
                    className: "player-name"
                }, "**name**")), r.a.createElement("div", null, "**team**")), r.a.createElement("div", {
                    className: "table-body",
                    tabIndex: "2",
                    id: "table-player-list"
                }), r.a.createElement("br", null))))))), r.a.createElement("div", {
                    className: "panel right"
                }, r.a.createElement("div", {
                    className: "inner-content"
                }, r.a.createElement("p", null, "Some placeholder text for the instructions on how to play Clan Wars and maybe some type of message to hype them up for how fun it will be to play against their friends!"), r.a.createElement("button", {
                    type: "button",
                    className: "btn confirm",
                    id: "startGame"
                }, "Start Game")))))
            }),
            k = a(53),
            w = (a(119), function(e) {
                var t = e.name,
                    a = e.is_active;
                return r.a.createElement("div", {
                    className: "template",
                    id: "template-settings-toggle"
                }, r.a.createElement("div", {
                    className: "setting opt-toggle"
                }, r.a.createElement("div", {
                    className: "name"
                }, t), r.a.createElement("div", {
                    className: "toggle-btn ".concat(a)
                }, r.a.createElement("div", {
                    className: "slide"
                }), r.a.createElement("div", {
                    className: "ball"
                }))))
            }),
            b = function(e) {
                var t = e.name,
                    a = e.selected;
                return r.a.createElement("div", {
                    className: "template",
                    id: "template-settings-dropdown"
                }, r.a.createElement("div", {
                    className: "setting opt-dropdown"
                }, r.a.createElement("div", {
                    className: "name"
                }, t), r.a.createElement("div", {
                    className: "dropdown-box"
                }, r.a.createElement("div", {
                    className: "selected"
                }, a), r.a.createElement("i", {
                    className: "fas fa-chevron-down"
                }), r.a.createElement("div", {
                    className: "dropdown-list"
                }))))
            },
            E = function(e) {
                var t = e.option;
                return r.a.createElement("div", {
                    className: "template",
                    id: "template-settings-dropdown-option"
                }, r.a.createElement("div", {
                    className: "dropdown-item"
                }, t))
            },
            x = function(e) {
                var t = e.name,
                    a = e.display,
                    n = e.min_val,
                    i = e.max_val,
                    s = e.step,
                    o = e.default_val;
                return r.a.createElement("div", {
                    className: "template",
                    id: "template-settings-range"
                }, r.a.createElement("div", {
                    className: "setting opt-range"
                }, r.a.createElement("div", {
                    className: "name"
                }, t), r.a.createElement("div", {
                    className: "value"
                }, a), r.a.createElement("div", {
                    className: "range-box"
                }, r.a.createElement("div", {
                    className: "fake-range"
                }, r.a.createElement("div", {
                    className: "fill-outer"
                }, r.a.createElement("div", {
                    className: "fill",
                    style: {
                        width: "0%"
                    }
                })), r.a.createElement("div", {
                    className: "extra"
                })), r.a.createElement("input", {
                    type: "range",
                    className: "real-range",
                    min: n,
                    max: i,
                    step: s,
                    defaultValue: o
                })), r.a.createElement("div", {
                    className: "padding"
                })))
            },
            A = function(e) {
                var t = e.name,
                    a = e.label,
                    n = e.default_val,
                    s = Object(i.useState)(n),
                    c = Object(o.a)(s, 2),
                    l = c[0],
                    u = c[1];
                return r.a.createElement("div", {
                    className: "template",
                    id: "template-settings-".concat(t)
                }, r.a.createElement("div", {
                    className: "setting opt-".concat(t)
                }, r.a.createElement("div", {
                    className: "name"
                }, a), r.a.createElement("input", {
                    className: "text",
                    value: l,
                    onChange: function(e) {
                        u(e.target.value)
                    }
                })))
            },
            C = function(e) {
                var t = e.showSettings,
                    a = e.toggleSettings;
                return Object(i.useEffect)(function() {
                    k.a.initialize()
                }, []), Object(i.useEffect)(function() {
                    t && k.a.show()
                }, [t]), r.a.createElement("div", {
                    id: "settings-panel",
                    className: t ? "" : "hidden"
                }, r.a.createElement("div", {
                    className: "close-button",
                    onClick: function() {
                        k.a.hide(function() {
                            a()
                        })
                    }
                }, r.a.createElement("i", {
                    className: "fas fa-times"
                })), r.a.createElement("div", {
                    className: "partition left"
                }, r.a.createElement("div", {
                    className: "tab dummy"
                }), r.a.createElement("div", {
                    className: "tab",
                    type: "tab",
                    "target-container": "settings-list",
                    "target-name": "game",
                    active: "true"
                }, r.a.createElement("i", {
                    className: "fas fa-gamepad"
                }), "Game"), r.a.createElement("div", {
                    className: "tab",
                    type: "tab",
                    "target-container": "settings-list",
                    "target-name": "theme"
                }, r.a.createElement("i", {
                    className: "fas fa-palette"
                }), "Theme"), r.a.createElement("div", {
                    className: "tab",
                    type: "tab",
                    "target-container": "settings-list",
                    "target-name": "controls"
                }, r.a.createElement("i", {
                    className: "fas fa-keyboard"
                }), "Controls"), r.a.createElement("div", {
                    className: "tab",
                    type: "tab",
                    "target-container": "settings-list",
                    "target-name": "importexport"
                }, r.a.createElement("i", {
                    className: "far fa-file"
                }), "Import/Export")), r.a.createElement("div", {
                    className: "partition right",
                    "container-name": "settings-list"
                }, r.a.createElement(w, {
                    name: "**setting-name**",
                    is_active: "**is-active**"
                }), r.a.createElement(b, {
                    name: "**setting-name**",
                    selected: "**selected-option**"
                }), r.a.createElement(E, {
                    option: "**option-name**"
                }), r.a.createElement(x, {
                    name: "**setting-name**",
                    display: "**display-value**",
                    min_val: "**min-value**",
                    max_val: "**max-value**",
                    step: "**step-value**",
                    default_val: "**default-value**"
                }), r.a.createElement(A, {
                    name: "input",
                    label: "**setting-name**",
                    default_val: "**default-value**"
                }), r.a.createElement(A, {
                    name: "hotkey",
                    label: "**setting-name**",
                    default_val: "**default-value**"
                }), r.a.createElement(A, {
                    name: "colorpicker",
                    label: "**setting-name**",
                    default_val: "**default-value**"
                }), r.a.createElement("div", {
                    className: "list",
                    "data-name": "game",
                    active: "true"
                }, r.a.createElement("div", {
                    className: "tab-row"
                }, r.a.createElement("div", {
                    className: "tab",
                    type: "tab",
                    "target-container": "settings-list-game",
                    "target-name": "cells",
                    active: "true"
                }, "Cells"), r.a.createElement("div", {
                    className: "tab",
                    type: "tab",
                    "target-container": "settings-list-game",
                    "target-name": "elements"
                }, "Elements"), r.a.createElement("div", {
                    className: "tab",
                    type: "tab",
                    "target-container": "settings-list-game",
                    "target-name": "camera"
                }, "Camera"), r.a.createElement("div", {
                    className: "tab",
                    type: "tab",
                    "target-container": "settings-list-game",
                    "target-name": "helpers"
                }, "Helpers"), r.a.createElement("div", {
                    className: "tab",
                    type: "tab",
                    "target-container": "settings-list-game",
                    "target-name": "misc"
                }, "Misc")), r.a.createElement("div", {
                    "container-name": "settings-list-game"
                }, r.a.createElement("div", {
                    className: "sub-list",
                    "data-name": "cells",
                    active: "true"
                }), r.a.createElement("div", {
                    className: "sub-list",
                    "data-name": "elements"
                }), r.a.createElement("div", {
                    className: "sub-list",
                    "data-name": "camera"
                }), r.a.createElement("div", {
                    className: "sub-list",
                    "data-name": "helpers"
                }), r.a.createElement("div", {
                    className: "sub-list",
                    "data-name": "misc"
                }))), r.a.createElement("div", {
                    className: "list",
                    "data-name": "theme"
                }, r.a.createElement("div", {
                    className: "tab-row"
                }, r.a.createElement("div", {
                    className: "tab",
                    type: "tab",
                    "target-container": "settings-list-theme",
                    "target-name": "hud",
                    active: "true"
                }, "HUD"), r.a.createElement("div", {
                    className: "tab",
                    type: "tab",
                    "target-container": "settings-list-theme",
                    "target-name": "cells"
                }, "Cells"), r.a.createElement("div", {
                    className: "tab",
                    type: "tab",
                    "target-container": "settings-list-theme",
                    "target-name": "food"
                }, "Food"), r.a.createElement("div", {
                    className: "tab",
                    type: "tab",
                    "target-container": "settings-list-theme",
                    "target-name": "virus"
                }, "Virus"), r.a.createElement("div", {
                    className: "tab",
                    type: "tab",
                    "target-container": "settings-list-theme",
                    "target-name": "activeCell"
                }, "Active Cell"), r.a.createElement("div", {
                    className: "tab",
                    type: "tab",
                    "target-container": "settings-list-theme",
                    "target-name": "border"
                }, "Border"), r.a.createElement("div", {
                    className: "tab",
                    type: "tab",
                    "target-container": "settings-list-theme",
                    "target-name": "background"
                }, "Background")), r.a.createElement("div", {
                    "container-name": "settings-list-theme"
                }, r.a.createElement("div", {
                    className: "sub-list",
                    "data-name": "hud",
                    active: "true"
                }), r.a.createElement("div", {
                    className: "sub-list",
                    "data-name": "cells"
                }), r.a.createElement("div", {
                    className: "sub-list",
                    "data-name": "food"
                }), r.a.createElement("div", {
                    className: "sub-list",
                    "data-name": "virus"
                }), r.a.createElement("div", {
                    className: "sub-list",
                    "data-name": "activeCell"
                }), r.a.createElement("div", {
                    className: "sub-list",
                    "data-name": "border"
                }), r.a.createElement("div", {
                    className: "sub-list",
                    "data-name": "background"
                }))), r.a.createElement("div", {
                    className: "list",
                    "data-name": "controls"
                }, r.a.createElement("div", {
                    className: "tab-row"
                }, r.a.createElement("div", {
                    className: "tab",
                    type: "tab",
                    "target-container": "settings-list-controls",
                    "target-name": "keyboard",
                    active: "true"
                }, "Keyboard"), r.a.createElement("div", {
                    className: "tab",
                    type: "tab",
                    "target-container": "settings-list-controls",
                    "target-name": "mouse"
                }, "Mouse"), r.a.createElement("div", {
                    className: "tab",
                    type: "tab",
                    "target-container": "settings-list-controls",
                    "target-name": "commands"
                }, "Commands")), r.a.createElement("div", {
                    "container-name": "settings-list-controls"
                }, r.a.createElement("div", {
                    className: "sub-list",
                    "data-name": "keyboard",
                    active: "true"
                }), r.a.createElement("div", {
                    className: "sub-list",
                    "data-name": "mouse"
                }), r.a.createElement("div", {
                    className: "sub-list",
                    "data-name": "commands"
                }))), r.a.createElement("div", {
                    className: "list",
                    "data-name": "importexport"
                }, r.a.createElement("div", {
                    "container-name": "settings-list-importexport"
                }, r.a.createElement("div", {
                    className: "sub-list",
                    "data-name": "import_export",
                    active: "true"
                }, r.a.createElement("div", {
                    className: "setting opt-button",
                    id: "importBtn"
                }, r.a.createElement("div", null, r.a.createElement("button", {
                    id: "import-userdata"
                }, "Import"), r.a.createElement("button", {
                    id: "export-userdata"
                }, "Export"), r.a.createElement("button", {
                    id: "reset-userdata"
                }, "Reset")), r.a.createElement("input", {
                    type: "file",
                    id: "import-input",
                    accept: ".senpa-data",
                    style: {
                        display: "none"
                    }
                })))))))
            },
            I = function() {
                return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
                    className: "title"
                }, "Servers"), r.a.createElement("div", {
                    className: "region-selectors"
                }, r.a.createElement("div", {
                    className: "tab",
                    region: "EU"
                }, "EU"), r.a.createElement("div", {
                    className: "tab active",
                    region: "NA"
                }, "NA"), r.a.createElement("div", {
                    className: "tab",
                    region: "AS"
                }, "AS")), r.a.createElement("div", {
                    className: "list-container"
                }, r.a.createElement("div", {
                    className: "list-row header"
                }, r.a.createElement("div", {
                    className: "list-cell"
                }, "Name"), r.a.createElement("div", {
                    className: "list-cell"
                }, "Players"), r.a.createElement("div", {
                    className: "list-cell"
                }, "Game mode")), r.a.createElement("div", {
                    id: "server-list"
                }, r.a.createElement("div", {
                    className: "template",
                    name: "template-server-list-row"
                }, r.a.createElement("div", {
                    className: "list-row **is-active**"
                }, r.a.createElement("div", {
                    className: "list-cell"
                }, "**server-name**"), r.a.createElement("div", {
                    className: "list-cell"
                }, "**player-count**/**max-player-count**"), r.a.createElement("div", {
                    className: "list-cell"
                }, "**game-mode**"))), r.a.createElement("div", {
                    region: "NA",
                    className: "active"
                }), r.a.createElement("div", {
                    region: "EU"
                }), r.a.createElement("div", {
                    region: "AS"
                }))))
            }
    }, , function(e, t, a) {
        "use strict";
        var n = a(41),
            i = a(11),
            r = a(3),
            s = a(4),
            o = a(2),
            c = a.n(o),
            l = a(9),
            u = a(5),
            h = a(20),
            d = (a(79), a(10)),
            f = a(12),
            m = function() {
                function e() {
                    Object(r.a)(this, e), this.endpoint = "https://us.senpa.io:8000", this.defaultRefreshInterval = 1e4, this.sepRefreshInterval = 2e3, this.refreshInterval = this.defaultRefreshInterval, this.selectedServer = !1, this.selectedCustomGame = null, this.selected = !1, this.list = null, this.storeName = "senpaio:server", this.onSepServer = !1
                }
                return Object(s.a)(e, [{
                    key: "initialize",
                    value: function() {
                        this.attachEvents(), this.fetchServers();
                        var e = localStorage.getItem("senpaio:region");
                        e ? this.selectRegion(e) : this.findRegion(), this.selectedServer = localStorage.getItem(this.storeName), this.selectedServer && l.a.connect(this.selectedServer)
                    }
                }, {
                    key: "attachEvents",
                    value: function() {
                        var e, t = c()("#menu .main-menu .panel.right .region-selectors").children(),
                            a = c()("#server-list"),
                            n = a.children("div[region]"),
                            r = Object(i.a)(t);
                        try {
                            var s = function() {
                                var i = e.value;
                                i.addEventListener("click", function() {
                                    t.removeClass("active"), n.removeClass("active"), i.classList.add("active");
                                    var e = i.getAttribute("region");
                                    a.children("div[region=".concat(e, "]")).addClass("active"), localStorage.setItem("senpaio:region", e)
                                })
                            };
                            for (r.s(); !(e = r.n()).done;) s()
                        } catch (e) {
                            r.e(e)
                        } finally {
                            r.f()
                        }
                    }
                }, {
                    key: "fetchServers",
                    value: function() {
                        var e = this;
                        if (clearTimeout(this.refetchTimeout), !u.a.isAlive) {
                            var t = new XMLHttpRequest;
                            this.onSepServer ? (this.refreshInterval = this.sepRefreshInterval, t.open("GET", "".concat(h.a ? "http" : "https", "://").concat(l.a.url, "?jwt=") + d.a.authToken), t.onload = function() {
                                if (200 === t.status) try {
                                    var a = JSON.parse(t.responseText);
                                    e.updateCustomGameList(a)
                                } catch (e) {
                                    console.log("Failed to fetch server list " + e)
                                }
                            }) : (this.refreshInterval = this.defaultRefreshInterval, t.open("GET", this.endpoint), t.onload = function() {
                                if (200 === t.status) try {
                                    if (e.list = JSON.parse(t.responseText), h.a) {
                                        var a = {
                                            id: 0,
                                            numPlayers: 999,
                                            maxPlayers: 50,
                                            count: "999 / 50",
                                            IP: "localhost:4000",
                                            name: "Dev Server",
                                            mode: "Development",
                                            version: "2.0.0"
                                        };
                                        e.list.unshift(Object(n.a)(Object(n.a)({}, a), {}, {
                                            region: "NA"
                                        })), e.list.unshift(Object(n.a)(Object(n.a)({}, a), {}, {
                                            region: "AS"
                                        })), e.list.unshift(Object(n.a)(Object(n.a)({}, a), {}, {
                                            region: "EU"
                                        }))
                                    }
                                    e.updateServerList()
                                } catch (e) {
                                    console.log("Failed to fetch server list " + e)
                                }
                            }), t.send()
                        }
                        this.refetchTimeout = setTimeout(function() {
                            e.fetchServers(!0)
                        }, this.refreshInterval)
                    }
                }, {
                    key: "updateServerList",
                    value: function() {
                        var e = this,
                            t = document.getElementsByName("template-server-list-row")[0].children[0].outerHTML,
                            a = c()("#server-list");
                        a.children("div[region]").empty();
                        var n, r = Object(i.a)(this.list);
                        try {
                            var s = function() {
                                var i = n.value,
                                    r = e.htmlFromTemplate(t, {
                                        "server-name": i.name,
                                        "player-count": i.numPlayers,
                                        "max-player-count": i.maxPlayers,
                                        "game-mode": i.mode,
                                        "is-active": i.IP === e.selectedServer ? "active" : ""
                                    }),
                                    s = c()(r);
                                i.row = s, s.click(function() {
                                    l.a.connect(i.IP), e.selectedServer = i.IP, e.selected = i, localStorage.setItem(e.storeName, i.IP), a.find(".list-row.active").removeClass("active"), s.addClass("active")
                                }), a.children("div[region=".concat(i.region, "]")).append(s)
                            };
                            for (r.s(); !(n = r.n()).done;) s()
                        } catch (e) {
                            r.e(e)
                        } finally {
                            r.f()
                        }
                        this.selected = this.list.find(function(t) {
                            return t.IP === e.selectedServer
                        })
                    }
                }, {
                    key: "updateCustomGameList",
                    value: function(e) {
                        var t = this,
                            a = document.getElementsByName("template-custom-game")[0].outerHTML,
                            n = c()("#table-custom-game");
                        n.empty();
                        var r, s = Object(i.a)(e);
                        try {
                            var o = function() {
                                var e = r.value,
                                    i = t.htmlFromTemplate(a, {
                                        name: e.name,
                                        players: e.players + "/" + e.slots,
                                        mode: e.mode
                                    }),
                                    s = c()(i),
                                    o = s[0].querySelector("#joinBtn"),
                                    u = s[0].querySelector("#fullBtn"),
                                    h = s[0].querySelector("#deleteBtn");
                                e.owned || (h.hidden = !0), e.players == e.slots && (u.style.display = "block", o.style.display = "none"), s.removeClass("template"), e.needsPassword && (o.innerHTML = "<i class='fas fa-lock'></i>" + o.innerHTML), c()(o).click(function() {
                                    if (e.players >= e.slots) return alert("This server is has reached max players!");
                                    t.selectedCustomGame = e, e.needsPassword ? document.querySelector("#join-model").style.display = "block" : l.a.connect(l.a.host + ":" + e.port, "", !0)
                                }), c()(h).click(function() {
                                    f.a.customGameInfo(e.name, "", 1), s.remove()
                                }), n.append(s)
                            };
                            for (s.s(); !(r = s.n()).done;) o()
                        } catch (e) {
                            s.e(e)
                        } finally {
                            s.f()
                        }
                    }
                }, {
                    key: "join",
                    value: function(e) {
                        l.a.connect(l.a.host + ":" + this.selectedCustomGame.port, e, !0)
                    }
                }, {
                    key: "htmlFromTemplate",
                    value: function(e, t) {
                        for (var a = e, n = 0, i = Object.keys(t); n < i.length; n++) {
                            var r = i[n],
                                s = t[r];
                            a = a.replace("**".concat(r, "**"), s)
                        }
                        return a
                    }
                }, {
                    key: "findRegion",
                    value: function() {
                        var e = this,
                            t = new XMLHttpRequest;
                        t.open("GET", "https://ipapi.co/json/"), t.onload = function() {
                            if (200 === t.status) try {
                                var a = JSON.parse(t.responseText),
                                    n = "EU";
                                switch (a.continent_code) {
                                    case "SA":
                                    case "NA":
                                        n = "NA";
                                        break;
                                    case "AS":
                                        n = "AS"
                                }
                                e.selectRegion(n)
                            } catch (t) {
                                console.log("Failed to detect client's region."), e.selectRegion("EU")
                            }
                        }, t.onerror = function() {
                            e.selectRegion("EU")
                        }, t.send()
                    }
                }, {
                    key: "selectRegion",
                    value: function(e) {
                        var t = this;
                        if (c()("#menu .region-selectors div[region=".concat(e, "]")).click(), !localStorage.getItem(this.storeName)) var a = setInterval(function() {
                            if (t.list) {
                                clearInterval(a);
                                var n, r = Object(i.a)(t.list);
                                try {
                                    for (r.s(); !(n = r.n()).done;) {
                                        var s = n.value;
                                        if (s.region === e) {
                                            t.selectedServer = s.IP, l.a.connect(t.selectedServer), s.row.addClass("active");
                                            break
                                        }
                                    }
                                } catch (e) {
                                    r.e(e)
                                } finally {
                                    r.f()
                                }
                            }
                        }, 500)
                    }
                }]), e
            }();
        t.a = new m
    }, function(e, t, a) {
        "use strict";
        var n = a(3),
            i = a(4),
            r = a(8),
            s = a(1),
            o = function() {
                function e() {
                    Object(n.a)(this, e), this.size = 256, this.textures = {
                        base: r.j.WHITE,
                        ring: r.j.WHITE,
                        inner: r.j.WHITE
                    }, this.pools = {
                        base: [],
                        ring: [],
                        inner: []
                    }, this.index = {
                        base: 0,
                        ring: 0,
                        inner: 0
                    }
                }
                return Object(i.a)(e, [{
                    key: "clean",
                    value: function() {
                        this.canvas && (this.createTextures(), this.textures.base.update(), this.textures.ring.update(), this.reset(), this.pools = {
                            base: [],
                            ring: [],
                            inner: []
                        })
                    }
                }, {
                    key: "initialize",
                    value: function() {
                        this.canvas = document.createElement("canvas"), this.glowCanvas = document.createElement("canvas"), this.baseTexture = new r.b, this.createTextures(), this.createInnerTexture()
                    }
                }, {
                    key: "reset",
                    value: function() {
                        this.index.base = 0, this.index.ring = 0
                    }
                }, {
                    key: "add",
                    value: function(e, t) {
                        if (this.canvas) {
                            var a = t.radius / 100,
                                n = this.pools.base[this.index.base++] || this.newBase(),
                                i = this.pools.ring[this.index.ring++] || this.newRing();
                            n.scale.set(a, a), n.position.set(t.x, t.y), n.tint = parseInt(s.a.virusColor2.replace("#", "0x")), e.addChild(n), i.scale.set(a, a), i.position.set(t.x, t.y), s.a.useVirusGlow || (i.tint = parseInt(s.a.virusColor1.replace("#", "0x"))), e.addChild(i)
                        }
                    }
                }, {
                    key: "createTextures",
                    value: function() {
                        var e = this.canvas,
                            t = e.getContext("2d");
                        t.clearRect(0, 0, e.width, e.height);
                        var a = this.size;
                        e.width = 2 * a, e.height = 2 * a, t.beginPath(), t.arc(a / 2, a / 2, 100, 0, 2 * Math.PI, !0), t.closePath(), t.fillStyle = "#ffffff", t.fill(), s.a.useVirusGlow || (t.beginPath(), t.arc(a + a / 2, a / 2, 100, 0, 2 * Math.PI, !0), t.closePath(), t.strokeStyle = "#ffffff", t.lineWidth = s.a.virusBorderWidth, t.stroke());
                        var n = r.b.from(e);
                        this.textures.base = new r.j(n, new r.h(0, 0, this.size, this.size)), s.a.useVirusGlow || (this.textures.ring = new r.j(n, new r.h(this.size, 0, this.size, this.size))), s.a.useVirusGlow && this.createGlowTexture()
                    }
                }, {
                    key: "createInnerTexture",
                    value: function() {
                        var e = this.glowCanvas,
                            t = e.getContext("2d");
                        t.clearRect(0, 0, e.width, e.height), e.width = e.height = 256, t.beginPath(), t.fillStyle = "#fff", t.arc(128, 128, 128, 0, 2 * Math.PI, !1), t.fill(), t.closePath(), this.textures.inner = r.j.from(e)
                    }
                }, {
                    key: "createGlowTexture",
                    value: function() {
                        if (s.a.useVirusGlow) {
                            var e = document.createElement("canvas"),
                                t = e.getContext("2d");
                            e.width = 512, e.height = 512, t.beginPath(), t.arc(256, 256, 100, 0, 2 * Math.PI, !0), t.closePath(), t.shadowBlur = s.a.virusGlowDistance, t.shadowColor = s.a.virusGlowColor, t.strokeStyle = s.a.virusColor1, t.lineWidth = s.a.virusBorderWidth;
                            for (var a = 0; a < s.a.virusGlowStrength; a++) t.stroke();
                            this.textures.ring = r.j.from(e)
                        }
                    }
                }, {
                    key: "newBase",
                    value: function() {
                        var e = new r.i(this.textures.base);
                        return e.anchor.x = .5, e.anchor.y = .5, e.alpha = .7, this.pools.base.push(e), e
                    }
                }, {
                    key: "newRing",
                    value: function() {
                        var e = new r.i(this.textures.ring);
                        return e.anchor.x = .5, e.anchor.y = .5, this.pools.ring.push(e), e
                    }
                }, {
                    key: "newInner",
                    value: function() {
                        var e = new r.i(this.textures.inner);
                        return e.anchor.x = .5, e.anchor.y = .5, this.pools.inner.push(e), e
                    }
                }]), e
            }();
        t.a = new o
    }, function(e, t, a) {
        "use strict";
        var n = a(11),
            i = a(3),
            r = a(4),
            s = a(6),
            o = a(8),
            c = a(1),
            l = function() {
                function e() {
                    Object(i.a)(this, e), this.glowTexture = o.j.WHITE, this.glowSprite = null, this.options = {
                        tint: !0,
                        position: !0,
                        vertices: !0
                    }, this.container = new o.g(4, this.options), this.glowContainer = new o.d, this.texture = o.j.WHITE, this.sprites = [], this.PI2 = 2 * Math.PI
                }
                return Object(r.a)(e, [{
                    key: "updateGlow",
                    value: function() {
                        this.glow && this.glowSprite && this.glow && this.glowContainer && (this.createGlowTexture(), this.glowSprite = new o.i(this.glowTexture), this.glowContainer.removeChildren())
                    }
                }, {
                    key: "initialize",
                    value: function() {
                        this.glow = document.createElement("canvas"), this.createGlowTexture(), this.glowSprite = o.i.from(this.glowTexture), this.glowContainer.addChild(this.glowSprite);
                        for (var e = 0; e < 4; e++) {
                            var t = new o.i(this.texture);
                            t.anchor.x = .5, t.anchor.y = .5, t.rotation = this.PI2 / 4 * e, this.sprites.push(t), this.container.addChild(t)
                        }
                    }
                }, {
                    key: "createGlowTexture",
                    value: function() {
                        var e = c.a.useBorderGlow,
                            t = c.a.borderWidth,
                            a = c.a.borderGlowDistance,
                            n = this.glow,
                            i = n.getContext("2d");
                        i.clearRect(0, 0, n.width, n.height), n.width = n.height = 2304, i.translate(n.width / 2, n.height / 2);
                        var r = n.width / 14142;
                        i.shadowBlur = a * r, i.shadowColor = c.a.borderGlowColor, i.lineWidth = t * r, i.strokeStyle = c.a.borderColor, i.rect(-1024, -1024, 2048, 2048);
                        for (var s = e ? c.a.borderGlowStrength : 1, l = 0; l < s; l++) i.stroke();
                        this.glowTexture === o.j.WHITE ? this.glowTexture = o.j.from(n) : this.glowTexture.update()
                    }
                }, {
                    key: "run",
                    value: function() {
                        if (this.glow) {
                            if (!c.a.mapBorders) return (0 !== this.container.children.length || c.a.useBorderGlow && !c.a.useRainbow) && this.container.removeChildren(), void this.runGlow();
                            if (4 === this.container.children.length || c.a.useBorderGlow && !c.a.useRainbow) c.a.useBorderGlow && !c.a.useRainbow && this.container.removeChildren();
                            else {
                                var e, t = Object(n.a)(this.sprites);
                                try {
                                    for (t.s(); !(e = t.n()).done;) {
                                        var a = e.value;
                                        this.container.addChild(a)
                                    }
                                } catch (e) {
                                    t.e(e)
                                } finally {
                                    t.f()
                                }
                            }
                            this.runGlow();
                            for (var i = c.a.borderWidth, r = parseInt(c.a.borderColor.replace("#", "0x")), o = s.a.right - s.a.left, l = s.a.bottom - s.a.top, u = 0; u < 4; u++) this.sprites[u].tint = r;
                            if (!c.a.useBorderGlow || c.a.useRainbow) {
                                var h = this.sprites[0];
                                h.x = s.a.left + o / 2, h.y = s.a.top, h.width = o + i, h.height = i;
                                var d = this.sprites[1];
                                d.x = s.a.right, d.y = s.a.top + l / 2, d.width = l + i, d.height = i;
                                var f = this.sprites[2];
                                f.x = s.a.left + o / 2, f.y = s.a.bottom, f.width = o + i, f.height = i;
                                var m = this.sprites[3];
                                m.x = s.a.left, m.y = s.a.top + l / 2, m.width = l + i, m.height = i
                            }
                        }
                    }
                }, {
                    key: "runGlow",
                    value: function() {
                        if (c.a.useBorderGlow && !c.a.useRainbow) {
                            1 !== this.glowContainer.children.length && this.glowContainer.addChild(this.glowSprite);
                            var e = s.a.left,
                                t = s.a.top,
                                a = s.a.right - s.a.left,
                                n = s.a.bottom - s.a.top,
                                i = a * this.glowTexture.width / 2048,
                                r = n * this.glowTexture.height / 2048,
                                o = i - a,
                                l = this.glowSprite;
                            l.x = e - o / 2, l.y = t - o / 2, l.width = i, l.height = r
                        } else 0 !== this.glowContainer.children.length && this.glowContainer.removeChildren()
                    }
                }]), e
            }();
        t.a = new l
    }, , function(e, t, a) {
        "use strict";
        var n = a(3),
            i = a(4),
            r = function() {
                function e() {
                    Object(n.a)(this, e)
                }
                return Object(i.a)(e, null, [{
                    key: "rgb2hex",
                    value: function(e, t, a) {
                        return "#" + (16777216 | e << 16 | t << 8 | a).toString(16).substring(1)
                    }
                }, {
                    key: "randomColor",
                    value: function() {
                        var t = [255, 100 * Math.random() | 0, 256 * Math.random() | 0];
                        return t.sort(function() {
                            return Math.random() - .5
                        }), e.rgb2hex.apply(e, t)
                    }
                }]), e
            }();
        t.a = r
    }, function(e, t, a) {
        "use strict";
        var n = a(3),
            i = a(4),
            r = a(8),
            s = a(1),
            o = function() {
                function e() {
                    Object(n.a)(this, e), this.texture = r.j.WHITE, this.pool = [], this.index = 0
                }
                return Object(i.a)(e, [{
                    key: "initialize",
                    value: function() {
                        this.canvas = document.createElement("canvas"), this.createTexture()
                    }
                }, {
                    key: "clean",
                    value: function() {
                        this.canvas && (this.createTexture(), this.texture.update(), this.reset(), this.pool = [])
                    }
                }, {
                    key: "reset",
                    value: function() {
                        this.index = 0
                    }
                }, {
                    key: "add",
                    value: function(e, t) {
                        if (this.canvas) {
                            var a = this.pool[this.index++] || this.newSprite(),
                                n = s.a.rainbowFood ? t.color : s.a.foodColor;
                            a.x = t.x, a.y = t.y, s.a.useFoodGlow ? a.width = a.height = 128 * t.radius / 15 * 2 : a.width = a.height = 2 * t.radius, s.a.useFoodGlow ? a.tint = 16777215 : a.tint = parseInt(n.replace("#", "0x")), e.addChild(a)
                        }
                    }
                }, {
                    key: "createTexture",
                    value: function() {
                        var e = this.canvas,
                            t = e.getContext("2d");
                        if (t.clearRect(0, 0, e.width, e.height), e.width = 256, e.height = 256, s.a.useFoodGlow) {
                            if (s.a.useFoodGlow) {
                                var a = s.a.foodGlowStrength,
                                    n = s.a.foodGlowDistance;
                                t.beginPath(), t.shadowBlur = n, t.shadowColor = s.a.foodGlowColor, t.arc(128, 128, 15, 0, 2 * Math.PI, !0), t.closePath(), t.fillStyle = s.a.foodColor;
                                for (var i = 0; i < a; i++) t.fill()
                            }
                        } else t.beginPath(), t.arc(128, 128, 128, 0, 2 * Math.PI, !0), t.closePath(), t.fillStyle = "#ffffff", t.fill();
                        this.texture = r.j.from(e)
                    }
                }, {
                    key: "newSprite",
                    value: function() {
                        var e = new r.i(this.texture);
                        return e.anchor.x = .5, e.anchor.y = .5, this.pool.push(e), e
                    }
                }]), e
            }();
        t.a = new o
    }, , function(e, t, a) {
        "use strict";
        var n = a(3),
            i = a(33);
        t.a = function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1,
                a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
                r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "#858585",
                s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
                o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
                c = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
                l = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
            Object(n.a)(this, e), this.id = t, this.parentClientID = a, this.parentClient = new i.a, this.color = r, this.skinURL = s, this.r = o, this.g = c, this.b = l
        }
    }, function(e, t, a) {
        "use strict";
        var n = a(15),
            i = a(11),
            r = a(3),
            s = a(4),
            o = function() {
                function e(t, a, n, i) {
                    Object(r.a)(this, e), this.id = t, this.startX = a, this.x = a, this.endX = a, this.startY = n, this.y = n, this.endY = n, this.startRadius = i, this.radius = i, this.endRadius = i, this.updateTime = Date.now(), this.dt = 0
                }
                return Object(s.a)(e, [{
                    key: "animate",
                    value: function() {
                        var e = (Date.now() - this.updateTime) / 3e3;
                        e = e > 1 ? 1 : e < 0 ? 0 : e, this.x = this.startX + (this.endX - this.startX) * e, this.y = this.startY + (this.endY - this.startY) * e, this.radius = this.startRadius + (this.endRadius - this.startRadius) * e, this.dt = e
                    }
                }, {
                    key: "update",
                    value: function(e, t, a) {
                        this.animate(), this.startX = this.x, this.startY = this.y, this.startRadius = this.radius, this.endX = e, this.endY = t, this.endRadius = a, this.updateTime = Date.now()
                    }
                }]), e
            }(),
            c = a(6),
            l = a(7),
            u = a(45),
            h = function() {
                function e() {
                    Object(r.a)(this, e), this.playerList = new Map, this.PI2 = 2 * Math.PI, this.size = 180
                }
                return Object(s.a)(e, [{
                    key: "init",
                    value: function() {
                        this.canvas || (this.canvas = document.getElementById("minimapNode"), this.ctx = this.canvas.getContext("2d"), this.canvas.width = this.size, this.canvas.height = this.size, this.renderGrid())
                    }
                }, {
                    key: "updatePlayer",
                    value: function(e, t, a, n) {
                        this.init(), (this.playerList.get(e) || this.getNewPlayer(e, t, a, n)).update(t, a, n)
                    }
                }, {
                    key: "removePlayer",
                    value: function(e) {
                        this.playerList.delete(e)
                    }
                }, {
                    key: "getNewPlayer",
                    value: function(e, t, a, n) {
                        var i = new o(e, t, a, n);
                        return this.playerList.set(e, i), i
                    }
                }, {
                    key: "update",
                    value: function() {
                        if (this.ctx) {
                            var e = this.ctx,
                                t = Date.now(),
                                a = this.size / (c.a.right - c.a.left);
                            e.clearRect(0, 0, this.size, this.size), e.textAlign = "center", e.textBaseline = "ubuntu", e.font = "400 12px ubuntu", e.globalAlpha = .9;
                            var r, s = Object(i.a)(this.playerList);
                            try {
                                for (s.s(); !(r = s.n()).done;) {
                                    var o = Object(n.a)(r.value, 2),
                                        h = o[0],
                                        d = o[1];
                                    if (t - d.updateTime > 2e3) this.playerList.delete(h);
                                    else {
                                        var f = l.a.playersList.get(h) || new u.a,
                                            m = f.parentClient.isBot,
                                            v = l.a.myPlayerIDs.includes(h);
                                        d.animate();
                                        var p = d.x * a | 0,
                                            g = d.y * a | 0,
                                            y = Math.max(3, d.radius * a | 0);
                                        e.beginPath(), e.arc(p, g, y, 0, this.PI2, !0), e.closePath(), e.fillStyle = f.parentClient.teamColor, e.fill(), v && (e.beginPath(), e.arc(p, g, y + 3, 0, this.PI2, !0), e.closePath(), e.lineWidth = 2, e.strokeStyle = f.parentClient.teamColor, e.stroke());
                                        var k = f.parentClient.nick;
                                        if (!m && k) {
                                            d.endRadius, d.endRadius;
                                            var w = k;
                                            e.fillText(w, p, g - y)
                                        }
                                    }
                                }
                            } catch (e) {
                                s.e(e)
                            } finally {
                                s.f()
                            }
                        }
                    }
                }, {
                    key: "renderGrid",
                    value: function() {
                        var e = document.getElementById("minimap"),
                            t = e.getContext("2d"),
                            a = this.size,
                            n = a / 5,
                            i = n / 2,
                            r = "ABCDE".split("");
                        e.width = this.size, e.height = this.size, t.clearRect(0, 0, a, a), t.fillStyle = "rgba(0, 0, 0, 0.5)", t.fillRect(0, 0, a, a), t.font = "300 ".concat(13, "px Geogrotesque, Titillium Web, Ubuntu, sans-serif"), t.textAlign = "center", t.textBaseline = "middle", t.fillStyle = "#37474f";
                        for (var s = 0; s < 5; s++)
                            for (var o = i + s * n, c = 0; c < 5; c++) {
                                var l = i + c * n,
                                    u = r[s] + (c + 1);
                                t.fillText(u, l, o)
                            }
                    }
                }, {
                    key: "hide",
                    value: function() {
                        this.canvas.style.visibility = "hidden", this.run = !1
                    }
                }, {
                    key: "show",
                    value: function() {
                        this.canvas.style.visibility = "", this.run = !0
                    }
                }]), e
            }();
        t.a = new h
    }, function(e, t, a) {
        "use strict";
        var n = a(3),
            i = a(4),
            r = a(8),
            s = a(1),
            o = a(6),
            c = function() {
                function e() {
                    Object(n.a)(this, e)
                }
                return Object(i.a)(e, [{
                    key: "initialize",
                    value: function() {
                        this.canvas = document.createElement("canvas"), this.ctx = this.canvas.getContext("2d"), this.canvas.width = this.canvas.height = 2048, this.texture = null, this.cache(), this.container = new r.d, this.sprite = r.i.from(this.texture), this.sprite.anchor.x = .5, this.sprite.anchor.y = .5
                    }
                }, {
                    key: "run",
                    value: function() {
                        if (this.canvas)
                            if (s.a.mapSectors) {
                                1 !== this.container.children.length && this.container.addChild(this.sprite);
                                var e = o.a.right - o.a.left,
                                    t = o.a.bottom - o.a.top;
                                this.sprite.x = o.a.left + e / 2, this.sprite.y = o.a.top + t / 2, this.sprite.width = e, this.sprite.height = t
                            } else 0 !== this.container.children.length && this.container.removeChildren()
                    }
                }, {
                    key: "cache",
                    value: function() {
                        if (this.canvas) {
                            var e = this.ctx,
                                t = this.canvas;
                            e.clearRect(0, 0, t.width, t.height), e.save();
                            var a = "ABCDE".split(""),
                                n = t.width / 5,
                                i = t.height / 5;
                            e.beginPath(), e.font = "400 ".concat(s.a.sectorTextSize * (2048 / 14142), "px ", "Ubuntu"), e.textAlign = "center", e.textBaseline = "middle", e.lineWidth = s.a.sectorGridWidth * (2048 / 14142), e.strokeStyle = s.a.sectorGridColor, e.fillStyle = s.a.sectorTextColor;
                            for (var o = 0; o < 5; o++) {
                                for (var c = 0; c < 5; c++) e.fillText("".concat(a[o]).concat(c + 1), (c + .5) * n, (o + .5) * i, n, i), 0 !== c && (e.beginPath(), e.strokeStyle = s.a.sectorGridColor, e.moveTo(n * c, 0), e.lineTo(n * c, 2048), e.stroke(), e.closePath());
                                0 !== o && (e.beginPath(), e.strokeStyle = s.a.sectorGridColor, e.moveTo(0, i * o), e.lineTo(2048, i * o), e.stroke(), e.closePath())
                            }
                            e.strokeStyle = s.a.sectorGridColor, e.strokeRect(0 + e.lineWidth / 2, 0 + e.lineWidth / 2, 2048 - e.lineWidth, 2048 - e.lineWidth), e.closePath(), e.restore(), this.texture ? this.texture.update() : this.texture = r.j.from(this.canvas)
                        }
                    }
                }]), e
            }();
        t.a = new c
    }, , function(e, t, a) {
        "use strict";
        var n = a(3),
            i = a(4),
            r = a(2),
            s = a.n(r),
            o = a(10),
            c = a(18),
            l = a(62),
            u = a(20),
            h = function() {
                function e() {
                    Object(n.a)(this, e), this.pageData = null, u.a ? this.config = {
                        listUrl: "http://localhost/skins/list",
                        searchUrl: "http://localhost/skins/search",
                        submitUrl: "http://localhost/skins/submit",
                        skinBase: "https://auth.senpa.io/u/",
                        favoriteUrl: "http://localhost/skins/favorite",
                        fallbackUploadUrl: "http://localhost/skins/fallback-upload"
                    } : this.config = {
                        listUrl: "https://auth.senpa.io/skins/list",
                        searchUrl: "https://auth.senpa.io/skins/search",
                        submitUrl: "https://auth.senpa.io/skins/submit",
                        skinBase: "https://auth.senpa.io/u/",
                        favoriteUrl: "https://auth.senpa.io/skins/favorite",
                        fallbackUploadUrl: "https://auth.senpa.io/skins/fallback-upload"
                    }, this.tabs = {
                        TAB_LEVELS: 1,
                        TAB_FREE: 2,
                        TAB_MYSKINS: 3,
                        TAB_FAVORITES: 4,
                        TAB_SUBMITSKIN: 5
                    }, this.tab = 0, this.open = !1, this.prevSearchVal = "", this.page = 0, this.nodeImgs = [], this.currentlyDisplayedSkins = []
                }
                return Object(i.a)(e, [{
                    key: "setPage",
                    value: function(e, t) {
                        if (e = Math.max(1, e), this.page !== e || t) {
                            this.page = e;
                            var a = function(e) {
                                return s()("#skinsPagin .pagination-" + e)
                            };
                            e < 2 ? (a(0).hide(), a(1).hide()) : (a(0).show(), a(1).show()), a(1).text(e - 1), a(2).text(e), a(3).text(e + 1), a(4).text(e + 2), this.runSkinsFetch(this.tab, null, this.page)
                        }
                    }
                }, {
                    key: "updatePageForward",
                    value: function() {
                        var e = function(e) {
                            return s()("#skinsPagin .pagination-" + e)
                        };
                        null != this.pageData && (this.pageData.length < 8 ? (e(3).addClass("disabled"), e(4).addClass("disabled")) : (e(3).removeClass("disabled"), e(4).removeClass("disabled")))
                    }
                }, {
                    key: "setupPaginatorBtns",
                    value: function() {
                        var e = this,
                            t = function(e) {
                                return s()("#skinsPagin .pagination-" + e)
                            };
                        t(0).click(function() {
                            e.setPage(1, !0)
                        }), t(1).click(function() {
                            e.setPage(e.page - 1)
                        }), t(3).click(function() {
                            e.setPage(e.page + 1)
                        }), t(4).click(function() {
                            e.setPage(e.page + 2)
                        })
                    }
                }, {
                    key: "initialize",
                    value: function() {
                        var e = this;
                        this.setSubmitPageState(1), s()("#skin-modal").click(function() {
                            e.hide()
                        }), s()("#skin-modal .content").click(function(e) {
                            e.stopPropagation()
                        }), s()("#skin-modal .exit-button").click(function() {
                            e.hide()
                        }), s()("#skinBtn1").click(function() {
                            e.loadTab(1)
                        }), s()("#skinBtn2").click(function() {
                            e.loadTab(2)
                        }), s()("#skinBtn3").click(function() {
                            e.loadTab(3)
                        }), s()("#skinBtn4").click(function() {
                            e.loadTab(4)
                        }), s()("#skinBtn5").click(function() {
                            e.loadSubmitPage()
                        }), s()(document).on("change", "#imageUploadFile", function(t) {
                            e.doUpload(t)
                        }), s()("#imageUploadFileBtn").click(function(e) {
                            document.querySelector("#imageUploadFile").click()
                        }), s()("#submitStartOver").click(function(t) {
                            e.setSubmitPageState(1)
                        }), this.skinItemTemplate = document.getElementsByName("template-skin-item")[0], this.submitTemplate = document.getElementsByName("template-skin-submit")[0], this.skinItemTemplate = this.skinItemTemplate ? this.skinItemTemplate.firstElementChild : this.skinItemTemplate, this.submitTemplate = this.submitTemplate ? this.submitTemplate.firstElementChild : this.submitTemplate, s()("input").keyup(function(t) {
                            if (13 == t.keyCode && "skinSearch" === t.target.id) {
                                var a = s()("#skinSearch").val();
                                e.runSkinsFetch(e.tab, a)
                            }
                        }), s()("#skinSearch").on("change paste keyup", function(t) {
                            e.prevSearchVal != t.target.value && (e.prevSearchVal = t.target.value, "" === e.prevSearchVal && e.runSkinsFetch(e.tab, null))
                        }), this.setupPaginatorBtns()
                    }
                }, {
                    key: "loadSubmitPage",
                    value: function(e) {
                        this.setActiveTab(this.tabs.TAB_SUBMITSKIN), s()("#skin-submit").show(), s()("#skinSearch").hide(), s()("#skinView").hide(), s()("#skinsPagin").hide()
                    }
                }, {
                    key: "setActiveTab",
                    value: function(e) {
                        this.tab = e;
                        for (var t = 0; t < 10; t++) s()("#skinBtn" + t).prop("disabled", !1);
                        s()("#skinBtn" + this.tab).prop("disabled", !0), s()("#skinSearch").val("")
                    }
                }, {
                    key: "loadTab",
                    value: function(e) {
                        this.tab !== e && (this.setActiveTab(e), s()("#skinSearch").show(), s()("#skin-submit").hide(), s()("#skinView").show(), s()("#skinsPagin").show(), s()("#skinGrid").html(""), e === this.tabs.TAB_LEVELS && (s()("#skinSearch").hide(), s()("#skinsPagin").hide()), this.setPage(1, !0))
                    }
                }, {
                    key: "setPageResults",
                    value: function(e) {
                        var t = this;
                        this.pageData = e, null == e ? (s()("#skinGrid").hide(), s()("#skinsLoading").show(), this.nodeImgs.forEach(function(e) {
                            s()(e).attr("src", "")
                        }), this.nodeImgs = [], this.currentlyDisplayedSkins = []) : (s()("#skinGrid").show(), s()("#skinsLoading").hide(), s()("#skinGrid").html(""), this.pageData = this.pageData.sort(function(e, t) {
                            return parseInt(e.requirementData) - parseInt(t.requirementData)
                        }), this.pageData.forEach(function(e) {
                            return t.spawnNewSkinGridItem(e)
                        }), this.updateFavoritedSkinsDisplay(), this.updateSelectedSkinDisplay(), this.updatePageForward())
                    }
                }, {
                    key: "validateSkinRequirements",
                    value: function(e) {
                        if ("Pending" === e.skinName) return "".concat("<i class='fas fa-lock'></i>", " Pending");
                        if (null == e.requirementType || 0 == e.requirementType) return !0;
                        if (1 == e.requirementType) {
                            var t = o.a.profile.experience,
                                a = void 0 === t ? 0 : t;
                            return !(l.a.levelFromExp(a) < parseInt(e.requirementData)) || "".concat("<i class='fas fa-lock'></i>", " Level ").concat(e.requirementData)
                        }
                    }
                }, {
                    key: "updateSelectedSkinDisplay",
                    value: function() {
                        this.nodeImgs.map(function(e) {
                            var t = s()(e).attr("src");
                            c.a.getSelectedSkinURL() == t ? s()(e).addClass("selected") : s()(e).removeClass("selected")
                        })
                    }
                }, {
                    key: "updateFavoritedSkinsDisplay",
                    value: function() {
                        var e = this;
                        this.currentlyDisplayedSkins.map(function(t) {
                            var a = e.getSkinIconByIdSkinId(t.id);
                            null != o.a.profile.favorites && -1 != o.a.profile.favorites.indexOf(t.id) ? s()(a).addClass("selected") : s()(a).removeClass("selected")
                        })
                    }
                }, {
                    key: "getSkinIconByIdSkinId",
                    value: function(e) {
                        return s()("#skinView").find("[data-fav-skin-id='".concat(e, "']"))
                    }
                }, {
                    key: "typeIntToString",
                    value: function(e) {
                        var t = "";
                        switch (e) {
                            case 1:
                                t = "level";
                                break;
                            case 2:
                                t = "free";
                                break;
                            case 3:
                                t = "mine";
                                break;
                            case 4:
                                t = "favorites"
                        }
                        return t
                    }
                }, {
                    key: "rebuildPageResults",
                    value: function() {
                        this.setPageResults(this.pageData)
                    }
                }, {
                    key: "runSkinsFetch",
                    value: function(e, t, a) {
                        var n = this;
                        e = this.typeIntToString(e), this.tab === this.tabs.TAB_FREE && (a = -1 + a), this.setPageResults(null);
                        var i = null == t || t.length < 1 ? this.config.listUrl : this.config.searchUrl,
                            r = {
                                auth: o.a.authToken,
                                type: e,
                                query: t,
                                page: a
                            };
                        (null == t || t.length < 1) && delete r.query, null == a && delete r.page, fetch(i, {
                            method: "GET",
                            headers: r
                        }).then(function(e) {
                            return e.json()
                        }).then(function(e) {
                            e.results && !e.error ? n.setPageResults(e.results) : console.log("error", e)
                        })
                    }
                }, {
                    key: "setSubmitPageState",
                    value: function(e) {
                        for (var t = 1; t <= 5; t++) s()("#submit-form-state".concat(t)).hide();
                        s()("#submit-form-state".concat(e)).show()
                    }
                }, {
                    key: "hide",
                    value: function() {
                        s()("#skin-modal").removeClass("visible"), this.open = !1
                    }
                }, {
                    key: "show",
                    value: function() {
                        null != o.a.profile && null != o.a.authToken ? (s()("#skin-modal").addClass("visible"), this.open = !0, 0 == this.tab ? this.loadTab(1) : this.rebuildPageResults()) : alert("You must be logged in to use this feature!")
                    }
                }, {
                    key: "doUpload",
                    value: function(e) {
                        var t = this,
                            a = e.target.files[0];
                        if (a) {
                            this.setSubmitPageState(2);
                            var n = function(e) {
                                    var a = t.config.submitUrl,
                                        n = {
                                            auth: o.a.authToken,
                                            image: e
                                        };
                                    fetch(a, {
                                        method: "POST",
                                        headers: n
                                    }).then(function(e) {
                                        return e.json()
                                    }).then(function(e) {
                                        e.success && !e.error ? t.setSubmitPageState(3) : e.error && -1 != e.error.indexOf("pending") ? t.setSubmitPageState(4) : (console.log("error", e), t.setSubmitPageState(5))
                                    })
                                },
                                i = new FormData;
                            i.append("image", a);
                            var r = new XMLHttpRequest;
                            r.open("POST", "https://api.imgur.com/3/image.json"), r.onload = function() {
                                var e = JSON.parse(r.responseText).data.link;
                                console.log("returned file link", e), n(e)
                            }, r.onerror = function(e) {
                                ! function() {
                                    var e = new FormData;
                                    e.append("imageFile", a);
                                    var i = new XMLHttpRequest;
                                    i.open("POST", t.config.fallbackUploadUrl), i.onload = function() {
                                        var e = JSON.parse(i.responseText).link;
                                        console.log("returned file link", e), n(e)
                                    }, i.onerror = function(e) {
                                        console.log(e), t.setSubmitPageState(5)
                                    }, i.setRequestHeader("auth", o.a.authToken), i.send(e)
                                }()
                            }, r.setRequestHeader("Authorization", "Client-ID 107f588b7a9862d"), r.send(i)
                        }
                    }
                }, {
                    key: "spawnNewSkinGridItem",
                    value: function(e) {
                        var t = this,
                            a = e.skinRoute; - 1 == a.indexOf("http") && (a = this.config.skinBase + e.skinRoute);
                        var n = e.skinName;
                        n = (n = n.replace(/-/g, " ")).replace(/[0-9]+/, "");
                        var i = this.skinItemTemplate.cloneNode(!0),
                            r = i.querySelector("img");
                        s()(r).attr("src", a), this.nodeImgs.push(r), s()(i.querySelector(".title")).text(n);
                        var l = i.querySelector(".icon");
                        this.tab !== this.tabs.TAB_LEVELS && this.tab !== this.tabs.TAB_MYSKINS ? (s()(l).attr("data-fav-skin-id", e.id), s()(l).on("click", function() {
                            var a = o.a.profile.favorites.indexOf(e.id); - 1 != a ? (o.a.profile.favorites.splice(a, 1), t.sendFavorite(e.id, "DELETE")) : (o.a.profile.favorites.push(e.id), t.sendFavorite(e.id, "POST")), s()(l).hide(), console.log("icon clicked"), t.updateFavoritedSkinsDisplay()
                        }), this.tab === this.tabs.TAB_FAVORITES && (s()(l).html("<i class='fas fa-times fa-2x'></i>"), s()(l).addClass("delete-icon"))) : s()(l).hide();
                        var u = this.validateSkinRequirements(e);
                        !0 === u ? c.a.getSelectedSkinURL() == a ? (s()(i.querySelector("button")).text("Remove"), s()(i.querySelector("button")).addClass("delete"), s()(i.querySelector("button")).on("click", function() {
                            c.a.activateTheme(""), t.rebuildPageResults(), t.hide()
                        })) : s()(i.querySelector("button")).on("click", function() {
                            c.a.activateTheme(a), t.rebuildPageResults(), t.hide()
                        }) : (s()(i.querySelector("button")).prop("disabled", "true"), s()(i.querySelector("button")).html(u)), s()("#skinGrid").append(i), this.currentlyDisplayedSkins.push(e)
                    }
                }, {
                    key: "sendFavorite",
                    value: function(e, t) {
                        var a = this,
                            n = this.config.favoriteUrl,
                            i = {
                                auth: o.a.authToken
                            };
                        fetch(n + "/" + e, {
                            method: t,
                            headers: i
                        }).then(function(e) {
                            return e.json()
                        }).then(function(t) {
                            if (t.results && !t.error) {
                                a.tab === a.tabs.TAB_FAVORITES && a.setPage(a.page, !0);
                                var n = a.getSkinIconByIdSkinId(e);
                                console.log(n), n && s()(n).show()
                            } else console.log("error", t)
                        })
                    }
                }]), e
            }();
        t.a = new h
    }, function(e, t, a) {
        "use strict";
        var n = a(3),
            i = a(4),
            r = function() {
                function e() {
                    Object(n.a)(this, e)
                }
                return Object(i.a)(e, [{
                    key: "clean",
                    value: function(e) {
                        return e.replace(/</g, "&lt;").replace(/>/g, "&gt;")
                    }
                }]), e
            }();
        t.a = new r
    }, function(e, t, a) {
        "use strict";
        var n = a(1),
            i = a(3),
            r = a(4),
            s = a(14),
            o = a(6),
            c = new(function() {
                function e() {
                    Object(i.a)(this, e)
                }
                return Object(r.a)(e, [{
                    key: "render",
                    value: function(e) {
                        if (n.a.mapSectors) {
                            var t = o.a.left,
                                a = o.a.top,
                                i = o.a.bottom - o.a.top,
                                r = o.a.bottom - o.a.top,
                                s = i / 5,
                                c = r / 5,
                                l = s / 2,
                                u = c / 2,
                                h = "ABCDE".split("");
                            e.beginPath(), e.rect(t + s, a, s, r), e.rect(t + 3 * s, a, s, r), e.rect(t, a + c, i, c), e.rect(t, a + 3 * c, i, c), e.rect(t, a, i, r), e.closePath(), e.lineWidth = n.a.sectorGridWidth, e.strokeStyle = n.a.sectorGridColor, e.stroke(), e.font = "400 ".concat(n.a.sectorTextSize, "px ", "Ubuntu"), e.textAlign = "center", e.textBaseline = "middle", e.fillStyle = n.a.sectorTextColor;
                            for (var d = 0; d < 5; d++)
                                for (var f = a + u + d * c, m = 0; m < 5; m++) {
                                    var v = t + l + m * s,
                                        p = h[d] + (m + 1);
                                    e.fillText(p, v, f)
                                }
                        }
                    }
                }]), e
            }()),
            l = a(21),
            u = a(72),
            h = a.n(u),
            d = new Image;
        d.src = h.a;
        var f = new(function() {
                function e() {
                    Object(i.a)(this, e), this.hue = 0
                }
                return Object(r.a)(e, [{
                    key: "render",
                    value: function(e) {
                        if (n.a.mapBorders) {
                            n.a.useRainbow && this.renderRainbow(e);
                            var t = n.a.borderWidth,
                                a = t >> 1,
                                i = o.a.left - a,
                                r = o.a.top - a,
                                s = o.a.right - o.a.left + t,
                                c = o.a.bottom - o.a.top + t;
                            if (n.a.useBorderGlow && !n.a.useRainbow) {
                                var u = o.a.left,
                                    h = o.a.top,
                                    d = o.a.right - o.a.left,
                                    f = o.a.bottom - o.a.top,
                                    m = d * l.a.textures.border.width / 2048,
                                    v = f * l.a.textures.border.height / 2048,
                                    p = m - d;
                                e.drawImage(l.a.textures.border, u - p / 2, h - p / 2, m, v)
                            } else e.strokeStyle = n.a.borderColor, e.lineWidth = t, e.strokeRect(i, r, s, c)
                        }
                    }
                }, {
                    key: "renderRainbow",
                    value: function(e) {
                        var t = n.a.borderWidth,
                            a = t >> 1,
                            i = o.a.left - a,
                            r = o.a.top - a,
                            s = o.a.right - o.a.left + t,
                            c = o.a.bottom - o.a.top + t,
                            l = s / 720 * 15;
                        e.save(), this.hue > 360 && (this.hue = 0);
                        var u = this.hue++;
                        document.getElementById("matrix").setAttribute("values", function(e) {
                            e = (e || 0) / 180 * Math.PI;
                            var t = Math.cos(e),
                                a = Math.sin(e),
                                n = (0, Math.sqrt)(1 / 3);
                            return [t + 1 / 3 * (1 - t), 1 / 3 * (1 - t) - n * a, 1 / 3 * (1 - t) + n * a, 0, 0, 1 / 3 * (1 - t) + n * a, t + 1 / 3 * (1 - t), 1 / 3 * (1 - t) - n * a, 0, 0, 1 / 3 * (1 - t) - n * a, 1 / 3 * (1 - t) + n * a, t + 1 / 3 * (1 - t), 0, 0, 0, 0, 0, 1, 0].join(" ")
                        }(u)), e.filter = "url(#hue-rotate)", e.drawImage(d, i - l, r - l, s + 2 * l, c + 2 * l), e.restore()
                    }
                }]), e
            }()),
            m = a(15),
            v = a(11),
            p = a(7),
            g = a(5),
            y = a(34),
            k = new(function() {
                function e() {
                    Object(i.a)(this, e)
                }
                return Object(r.a)(e, [{
                    key: "render",
                    value: function(e) {
                        if (n.a.mouseTracker) {
                            e.strokeStyle = "#fff", e.lineWidth = 4, e.lineCap = "round", e.lineJoin = "round";
                            var t = (y.a.mouse.x - window.innerWidth / 2) / s.a.zoom + s.a.x,
                                a = (y.a.mouse.y - window.innerHeight / 2) / s.a.zoom + s.a.y,
                                i = p.a.myCells[g.a.activeTab];
                            if (i) {
                                e.beginPath();
                                var r, o = Object(v.a)(i);
                                try {
                                    for (o.s(); !(r = o.n()).done;) {
                                        var c = Object(m.a)(r.value, 2),
                                            l = (c[0], c[1]);
                                        e.moveTo(l.x, l.y), e.lineTo(t, a)
                                    }
                                } catch (e) {
                                    o.e(e)
                                } finally {
                                    o.f()
                                }
                                e.closePath(), e.stroke()
                            }
                        }
                    }
                }]), e
            }()),
            w = function() {
                function e() {
                    Object(i.a)(this, e), this.lastUseTime = 0, this.pool = [document.createElement("canvas"), document.createElement("canvas"), document.createElement("canvas"), document.createElement("canvas"), document.createElement("canvas")], this.text = "", this.font = "ubuntu", this.shadow = !1, this.color = "#ffffff", this.shadowColor = "#000000", this.canvas = [!1, !1, !1, !1, !1]
                }
                return Object(r.a)(e, [{
                    key: "setText",
                    value: function(e) {
                        this.text !== e && (this.text = e, this.resetCache())
                    }
                }, {
                    key: "setFont",
                    value: function(e) {
                        this.font !== e && (this.font = e, this.resetCache())
                    }
                }, {
                    key: "setShadow",
                    value: function(e) {
                        this.shadow !== e && (this.shadow = e, this.resetCache())
                    }
                }, {
                    key: "setColor",
                    value: function(e) {
                        this.color !== e && (this.color = e, this.resetCache())
                    }
                }, {
                    key: "setShadowColor",
                    value: function(e) {
                        this.shadowColor !== e && (this.shadowColor = e, this.resetCache())
                    }
                }, {
                    key: "getCanvas",
                    value: function(e) {
                        var t = this.getQuality(e);
                        return this.lastUseTime = Date.now(), this.canvas[t]
                    }
                }, {
                    key: "resetCache",
                    value: function() {
                        this.canvas = [!1, !1, !1, !1, !1]
                    }
                }, {
                    key: "renderCanvas",
                    value: function(e) {
                        var t = this.getQuality(e),
                            a = this.pool[t],
                            n = a.getContext("2d"),
                            i = 300 * (t + 1) * .8 * .3,
                            r = 8 * (t + 1);
                        n.font = "500 ".concat(0 | i, "px ").concat(this.font);
                        var s = n.measureText(this.text).width;
                        return a.height = (0 | i) + r, a.width = (0 | s) + r, n.font = "500 ".concat(0 | i, "px ").concat(this.font), n.textBaseline = "middle", this.shadow && (n.strokeStyle = this.shadowColor, n.lineWidth = r, n.strokeText(this.text, r >> 1, a.height >> 1)), n.fillStyle = this.color, n.fillText(this.text, r >> 1, a.height >> 1), this.canvas[t] = a, this.lastUseTime = Date.now(), a
                    }
                }, {
                    key: "getQuality",
                    value: function(e) {
                        return 0 | Math.min(e / 300, 4)
                    }
                }]), e
            }(),
            b = function() {
                function e() {
                    Object(i.a)(this, e), this.lastUseTime = 0, this.lastTextUpdateTime = 0, this.canvas = document.createElement("canvas"), this.ctx = this.canvas.getContext("2d"), this.size = 30, this.text = "0", this.font = "ubuntu", this.shadow = !1, this.color = "#ffffff", this.shadowColor = "#000000", this.isTainted = !1
                }
                return Object(r.a)(e, [{
                    key: "updateInterval",
                    get: function() {
                        return 500
                    }
                }, {
                    key: "setSize",
                    value: function(e) {
                        (this.size / e < .9 || e / this.size < .8) && (this.size = e, this.isTainted = !0)
                    }
                }, {
                    key: "setText",
                    value: function(e) {
                        var t = Date.now(),
                            a = t - this.lastTextUpdateTime > this.updateInterval;
                        this.text !== e && a && (this.text = e, this.lastTextUpdateTime = t, this.isTainted = !0)
                    }
                }, {
                    key: "setFont",
                    value: function(e) {
                        this.font !== e && (this.font = e, this.isTainted = !0)
                    }
                }, {
                    key: "setShadow",
                    value: function(e) {
                        this.shadow !== e && (this.shadow = e, this.isTainted = !0)
                    }
                }, {
                    key: "setColor",
                    value: function(e) {
                        this.color !== e && (this.color = e, this.isTainted = !0)
                    }
                }, {
                    key: "setShadowColor",
                    value: function(e) {
                        this.shadowColor !== e && (this.shadowColor = e, this.isTainted = !0)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this.canvas,
                            t = this.ctx,
                            a = this.size / 1500 * 55 | 0,
                            n = .3 * this.size,
                            i = Math.min(n, 50);
                        t.font = "500 ".concat(0 | i, "px ").concat(this.font);
                        var r = t.measureText(this.text).width;
                        e.height = (0 | n) + a, e.width = (r * (n / i) | 0) + a, t.font = "500 ".concat(0 | n, "px ").concat(this.font), t.textBaseline = "middle", this.shadow && (t.strokeStyle = this.shadowColor, t.lineWidth = a, t.strokeText(this.text, a >> 1, e.height >> 1)), t.fillStyle = this.color, t.fillText(this.text, a >> 1, e.height >> 1), this.isTainted = !1
                    }
                }, {
                    key: "getCanvas",
                    value: function() {
                        return this.isTainted && this.render(), this.lastUseTime = Date.now(), this.canvas
                    }
                }]), e
            }(),
            E = new(function() {
                function e() {
                    Object(i.a)(this, e), this.nickCaches = new Map, this.massCaches = new Map, this.maxCacheLife = 2e3, this.nickCachePool = [], this.massCachePool = []
                }
                return Object(r.a)(e, [{
                    key: "nick",
                    value: function(e, t, a, i) {
                        if (!e) return !1;
                        if (i < 34 && n.a.autoHideText) return !1;
                        if (i < 5) return !1;
                        var r = this.nickCaches.get(e) || this.newNickCache(e);
                        return r.setFont("ubuntu"), r.setShadow(a), r.setColor(t), r.setShadowColor("#000"), r.setText(e), r.getCanvas(i) || r.renderCanvas(i)
                    }
                }, {
                    key: "newNickCache",
                    value: function(e) {
                        var t = this.nickCachePool.shift() || new w;
                        return this.nickCaches.set(e, t), t
                    }
                }, {
                    key: "mass",
                    value: function(e, t, a, i, r) {
                        if (r < 34 && n.a.autoHideText) return !1;
                        if (r < 5) return !1;
                        var s = this.massCaches.get(e) || this.newMassCache(e);
                        return s.setFont("ubuntu"), s.setShadow(i), s.setColor(a), s.setShadowColor("#000"), s.setSize(r), s.setText(t), s.getCanvas()
                    }
                }, {
                    key: "newMassCache",
                    value: function(e) {
                        var t = this.massCachePool.shift() || new b;
                        return this.massCaches.set(e, t), t
                    }
                }, {
                    key: "cleaner",
                    value: function() {
                        var e, t = Date.now(),
                            a = Object(v.a)(this.nickCaches);
                        try {
                            for (a.s(); !(e = a.n()).done;) {
                                var n = Object(m.a)(e.value, 2),
                                    i = n[0],
                                    r = n[1];
                                t - r.lastUseTime < this.maxCacheLife || (this.nickCaches.delete(i), this.nickCachePool.push(r))
                            }
                        } catch (e) {
                            a.e(e)
                        } finally {
                            a.f()
                        }
                        var s, o = Object(v.a)(this.massCaches);
                        try {
                            for (o.s(); !(s = o.n()).done;) {
                                var c = Object(m.a)(s.value, 2),
                                    l = c[0],
                                    u = c[1];
                                t - u.lastUseTime < this.maxCacheLife || (this.massCaches.delete(l), this.massCachePool.push(u))
                            }
                        } catch (e) {
                            o.e(e)
                        } finally {
                            o.f()
                        }
                    }
                }]), e
            }()),
            x = new(function() {
                function e() {
                    Object(i.a)(this, e), this.downloads = new Map, this.canvas = document.createElement("canvas"), this.ctx = this.canvas.getContext("2d"), this.initialize()
                }
                return Object(r.a)(e, [{
                    key: "initialize",
                    value: function() {
                        this.canvas.width = 512, this.canvas.height = 512, this.ctx.beginPath(), this.ctx.arc(256, 256, 256, 0, 2 * Math.PI, !0), this.ctx.closePath(), this.ctx.clip()
                    }
                }, {
                    key: "get",
                    value: function(e) {
                        if ("no-skin" === e) return !1;
                        if (!e) return !1;
                        var t = this.downloads.get(e);
                        return "downloading" !== t && "error" !== t && (void 0 !== t ? t : void this.download(e))
                    }
                }, {
                    key: "download",
                    value: function(e) {
                        var t = this;
                        this.downloads.set(e, "downloading");
                        var a = new Image;
                        a.crossOrigin = "anonymous", a.onload = function() {
                            t.ctx.clearRect(0, 0, 512, 512), t.ctx.drawImage(a, 0, 0, 512, 512);
                            var n = t.canvas.toDataURL();
                            a.onload = null, a.src = n, t.downloads.set(e, a)
                        }, a.onerror = function() {
                            t.downloads.set(e, "error")
                        }, a.src = e
                    }
                }]), e
            }()),
            A = a(26),
            C = a(33),
            I = a(55),
            S = a(59),
            N = a(9),
            O = a(16),
            T = new(function() {
                function e() {
                    Object(i.a)(this, e), this.PI2 = 2 * Math.PI
                }
                return Object(r.a)(e, [{
                    key: "render",
                    value: function(e) {
                        var t, a = n.a.activeCellBorder,
                            i = n.a.shieldMarker,
                            r = n.a.activeCellBorderWidth,
                            o = n.a.activeCellBorderColor,
                            c = n.a.nickSize,
                            u = n.a.massSize,
                            h = n.a.cellMass,
                            d = n.a.ownCellMass,
                            f = n.a.cellMassStroke,
                            m = n.a.cellMassFormat,
                            y = n.a.cellNick,
                            k = n.a.ownCellNick,
                            w = n.a.cellNickStroke,
                            b = n.a.cellSkin,
                            T = n.a.enemyCellSkin,
                            j = n.a.pellets,
                            U = p.a.clientsList.get(p.a.myClientID) || new C.a,
                            P = p.a.myPlayerIDs[g.a.activeTab],
                            B = Object(v.a)(p.a.sortedCells);
                        try {
                            for (B.s(); !(t = B.n()).done;) {
                                var L = t.value;
                                if ((j || !L.isFood) && (L.animate(), !N.a.isReplay || !L.hidden))
                                    if (e.globalAlpha = 1, e.beginPath(), e.arc(L.x, L.y, L.radius, 0, this.PI2, !0), e.closePath(), !L.isFood || n.a.rainbowFood && !n.a.useFoodGlow)
                                        if (L.isFood && n.a.rainbowFood) e.fillStyle = L.color, e.fill();
                                        else if (L.isEject) e.fillStyle = L.color, e.fill();
                                else {
                                    if (L.isVirus) {
                                        var D = l.a.textures.virus,
                                            V = L.radius * D.width / 100;
                                        e.drawImage(D, L.x - V / 2, L.y - V / 2, V, V)
                                    }
                                    var R = !1;
                                    if (L.isPlayerCell) {
                                        var M = e.globalAlpha = N.a.isReplay ? O.a.opacity : n.a.cellOpacity / 100;
                                        1 !== M && (M = 1);
                                        var z = L.parentPlayer.parentClient,
                                            F = U.tag === z.tag,
                                            H = z.isBot,
                                            G = !1;
                                        if (H || !g.a.isTR || L.isTR || (e.globalAlpha *= .35), H || g.a.isTR || !L.isTR || (e.globalAlpha *= .35), L.removed && (e.globalAlpha *= 1 - L.dt), H || (F || L.isOwn >= 0 ? b && (G = x.get(L.skin)) : T && (G = x.get(L.skin))), !G || !L.removed) {
                                            var q = L.color;
                                            L.isOwn >= 0 && p.a.myPlayerIDs.length > 1 && "multibox" === n.a.ownCellColoring && (q = L.isOwn === g.a.activeTab ? n.a.activeCellBorderColor : "#ffffff"), e.fillStyle = q, e.fill()
                                        }
                                        if (M !== e.globalAlpha && (e.globalAlpha = M), L.isOwn >= 0 && i && p.a.myPlayerIDs.length > 1) {
                                            var W = L.radius;
                                            L.parentPlayer.id === P && (W *= 1.25);
                                            var Q = W + 14 * W / 100,
                                                K = L.parentPlayer && L.parentPlayer.id === P ? I.a.shieldActive : I.a.shield;
                                            e.drawImage(K, L.x - Q, L.y - Q, 2 * Q, 2 * Q)
                                        }
                                        if (G) {
                                            var Y = L.isOwn >= 0 && p.a.myPlayerIDs.length > 1 && n.a.shieldMarker ? .65 : 1,
                                                X = L.radius * Y * 2;
                                            e.drawImage(G, L.x - X / 2, L.y - X / 2, X, X)
                                        }
                                        if (L.isOwn >= 0 && a && p.a.myPlayerIDs.length > 1) {
                                            var J = L.isOwn >= 0 && p.a.myPlayerIDs.length > 1 && n.a.shieldMarker ? .65 : 1,
                                                Z = L.radius * J,
                                                _ = Z * (r / 100),
                                                $ = _ / 2;
                                            e.beginPath(), e.arc(L.x, L.y, Z - $ | 0, 0, this.PI2, !0), e.closePath(), e.lineWidth = 0 | _, e.strokeStyle = L.parentPlayer && L.parentPlayer.id === P ? o : "#FFF", e.stroke()
                                        }
                                        if (L.isOwn >= 0 && k || L.isOwn < 0 && y) {
                                            R = !0;
                                            var ee = L.radius * s.a.zoom * c,
                                                te = z.teamColor,
                                                ae = E.nick(L.nick || A.a.defaultCellName, te, w, ee),
                                                ne = ae.width / 768 > 1 ? 768 / ae.width : 1;
                                            if (ae && ae.width && ae.height) {
                                                var ie = L.radius * c * .3 / ae.height * ne,
                                                    re = ae.width * ie,
                                                    se = ae.height * ie;
                                                e.drawImage(ae, L.x - re / 2, L.y - se / 2, re, se)
                                            }
                                        }
                                        L.isOwn >= 0 && p.a.myPlayerIDs.length > 1 && L.isOwn === g.a.activeTab && n.a.activeCellIndicator && S.a.draw(e, L)
                                    }
                                    if (L.isOwn >= 0 && d || L.isOwn < 0 && h) {
                                        var oe = L.radius * s.a.zoom * u,
                                            ce = L.parentPlayer.parentClient.teamColor,
                                            le = L.mass > 999 && "shortened" === m ? "".concat((L.mass / 100 | 0) / 10, "k") : L.mass,
                                            ue = E.mass(L.id, le, ce, f, oe);
                                        if (ue && ue.width && ue.height) {
                                            var he = L.radius * u * .3 / ue.height,
                                                de = ue.width * he,
                                                fe = ue.height * he;
                                            e.drawImage(ue, L.x - de / 2, L.y + (R ? fe / 4 / c : -fe / 2), de, fe)
                                        }
                                    }
                                } else {
                                    var me = l.a.textures.food,
                                        ve = L.radius * me.width / 15;
                                    e.drawImage(me, L.x - ve / 2, L.y - ve / 2, ve, ve)
                                }
                            }
                        } catch (e) {
                            B.e(e)
                        } finally {
                            B.f()
                        }
                        e.globalAlpha = 1, E.cleaner()
                    }
                }]), e
            }()),
            j = new(function() {
                function e() {
                    var t = this;
                    Object(i.a)(this, e), this.canvas = document.createElement("canvas"), this.ctx = this.canvas.getContext("2d"), this.image = new Image, this.image.crossOrigin = "anonymous", this.image.onload = function() {
                        t.updateCache()
                    }
                }
                return Object(r.a)(e, [{
                    key: "render",
                    value: function(e) {
                        n.a.backgroundImage && (this.update(), e.drawImage(this.canvas, o.a.left, o.a.top, o.a.right - o.a.left, o.a.bottom - o.a.top))
                    }
                }, {
                    key: "update",
                    value: function() {
                        var e = n.a.backgroundImageURL;
                        this.image.src !== e && (this.image.src = e)
                    }
                }, {
                    key: "updateCache",
                    value: function() {
                        var e = this.image;
                        if (e.complete && e.naturalWidth && e.naturalHeight) {
                            var t = Math.min(Math.max(e.naturalWidth, e.naturalHeight), 2048);
                            this.canvas.width = t, this.canvas.height = t, this.ctx.drawImage(e, 0, 0, t, t)
                        }
                    }
                }]), e
            }()),
            U = new(function() {
                function e() {
                    Object(i.a)(this, e), this.levels = new Map([
                        [0, new Set],
                        [1, new Set],
                        [2, new Set],
                        [3, new Set],
                        [4, new Set],
                        [5, new Set]
                    ]), this.levelColors = ["#FF0000", "#FF6600", "#FFFF00", "#00DDFF", "#00FF00", "#0000FF"], this.PI2 = 2 * Math.PI
                }
                return Object(r.a)(e, [{
                    key: "render",
                    value: function(e) {
                        if (this.clear(), g.a.isAlive && n.a.splitIndicators) {
                            this.sort(), e.lineWidth = 2 / s.a.zoom | 0;
                            var t, a = Object(v.a)(this.levels);
                            try {
                                for (a.s(); !(t = a.n()).done;) {
                                    var i = Object(m.a)(t.value, 2),
                                        r = i[0],
                                        o = i[1];
                                    e.strokeStyle = this.levelColors[r], this.renderGroup(e, o)
                                }
                            } catch (e) {
                                a.e(e)
                            } finally {
                                a.f()
                            }
                        }
                    }
                }, {
                    key: "renderGroup",
                    value: function(e, t) {
                        e.beginPath();
                        var a, n = Object(v.a)(t);
                        try {
                            for (n.s(); !(a = n.n()).done;) {
                                var i = a.value,
                                    r = 3 / s.a.zoom | 0;
                                e.moveTo(i.x + i.radius + 2 * r, i.y), e.arc(i.x, i.y, i.radius + 2 * r, 0, this.PI2, !0)
                            }
                        } catch (e) {
                            n.e(e)
                        } finally {
                            n.f()
                        }
                        e.closePath(), e.stroke()
                    }
                }, {
                    key: "sort",
                    value: function() {
                        var e, t = g.a.biggestCellMass,
                            a = Object(v.a)(p.a.cells);
                        try {
                            for (a.s(); !(e = a.n()).done;) {
                                var n = Object(m.a)(e.value, 2),
                                    i = (n[0], n[1]);
                                if (i.isPlayerCell && !(i.isOwn >= 0)) {
                                    var r = i.mass,
                                        s = 5;
                                    r > 2 * t * 1.3 ? s = 0 : r > 1.3 * t ? s = 1 : r > .77 * t ? s = 2 : r > .5 * t * .77 ? s = 3 : r > t / 16 * 1.3 && (s = 4), this.levels.get(s).add(i)
                                }
                            }
                        } catch (e) {
                            a.e(e)
                        } finally {
                            a.f()
                        }
                    }
                }, {
                    key: "clear",
                    value: function() {
                        var e, t = Object(v.a)(this.levels);
                        try {
                            for (t.s(); !(e = t.n()).done;) {
                                var a = Object(m.a)(e.value, 2);
                                a[0], a[1].clear()
                            }
                        } catch (e) {
                            t.e(e)
                        } finally {
                            t.f()
                        }
                    }
                }]), e
            }()),
            P = a(31),
            B = 2 * Math.PI,
            L = new(function() {
                function e() {
                    Object(i.a)(this, e)
                }
                return Object(r.a)(e, [{
                    key: "render",
                    value: function(e) {
                        var t = this;
                        if (n.a.mapVisualiser && P.a.initialized) {
                            var a = n.a.audioVisualiserSize * o.a.width / 14142,
                                i = o.a.right - o.a.left >> 1,
                                r = o.a.bottom - o.a.top >> 1;
                            P.a.lines.forEach(function(s) {
                                t.drawLine(e, i + s.x * a, r + s.y * a, i + s.xEnd * a, r + s.yEnd * a, n.a.audioVisualiserLineColor, 2 * a)
                            }), this.drawCircle(e, i, r, P.a.animated[0] * a, n.a.audioVisualiserColor1, 10 * a), this.drawCircle(e, i, r, P.a.animated[1] * a, n.a.audioVisualiserColor2, 2.5 * a), this.drawCircle(e, i, r, P.a.animated[2] * a, n.a.audioVisualiserColor3, 10 * a)
                        }
                    }
                }, {
                    key: "drawCircle",
                    value: function(e, t, a, n, i, r) {
                        e.beginPath(), e.strokeStyle = i, e.lineWidth = r, e.arc(t, a, n, 0, B, !1), e.stroke(), e.closePath()
                    }
                }, {
                    key: "drawLine",
                    value: function(e, t, a, n, i, r, s) {
                        e.beginPath(), e.strokeStyle = r, e.moveTo(t, a), e.lineTo(n, i), e.lineWidth = s, e.stroke(), e.closePath()
                    }
                }]), e
            }()),
            D = function() {
                function e() {
                    Object(i.a)(this, e)
                }
                return Object(r.a)(e, [{
                    key: "initialize",
                    value: function() {
                        var e = this;
                        this.initialized || (this.initialized = !0, this.canvas = document.getElementById("screen"), this.ctx = this.canvas.getContext("2d"), I.a.init(), l.a.init(), S.a.init(), this.setScreenSize(), window.addEventListener("resize", function() {
                            e.setScreenSize()
                        }, {
                            passive: !0
                        }))
                    }
                }, {
                    key: "setScreenSize",
                    value: function() {
                        this.initialize();
                        var e = n.a.graphicsQuality;
                        this.canvas.width = window.innerWidth * e | 0, this.canvas.height = window.innerHeight * e | 0
                    }
                }, {
                    key: "run",
                    value: function() {
                        this.ctx && (this.ctx.imageSmoothingQuality = "high", this.clearCanvas(), this.setCamera(), j.render(this.ctx), c.render(this.ctx), f.render(this.ctx), L.render(this.ctx), k.render(this.ctx), U.render(this.ctx), T.render(this.ctx), this.resetCamera())
                    }
                }, {
                    key: "clearCanvas",
                    value: function() {
                        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
                    }
                }, {
                    key: "setCamera",
                    value: function() {
                        var e = s.a.zoom * n.a.graphicsQuality,
                            t = (this.canvas.width >> 1) / e - s.a.x,
                            a = (this.canvas.height >> 1) / e - s.a.y;
                        this.ctx.scale(e, e), this.ctx.translate(t, a)
                    }
                }, {
                    key: "resetCamera",
                    value: function() {
                        this.ctx.resetTransform()
                    }
                }]), e
            }(),
            V = a(8),
            R = a(40),
            M = a(47),
            z = new(function() {
                function e() {
                    Object(i.a)(this, e)
                }
                return Object(r.a)(e, [{
                    key: "initialize",
                    value: function() {
                        var e = this;
                        this.container = new V.d, this.canvas = document.createElement("canvas"), this.ctx = this.canvas.getContext("2d"), this.sprite = new V.i, this.image = new Image, this.image.crossOrigin = "anonymous", this.image.onload = function() {
                            e.updateCache()
                        }
                    }
                }, {
                    key: "updateCache",
                    value: function() {
                        if (this.canvas) {
                            var e = this.image;
                            if (e.complete && e.naturalWidth && e.naturalHeight) {
                                var t = Math.min(Math.max(e.naturalWidth, e.naturalHeight), 2048);
                                this.canvas.width = t, this.canvas.height = t, this.ctx.drawImage(e, 0, 0, t, t), this.container.removeChild(this.sprite), this.sprite.destroy(!0), this.sprite = V.i.from(this.canvas), this.container.addChild(this.sprite)
                            }
                        }
                    }
                }, {
                    key: "run",
                    value: function() {
                        if (this.canvas)
                            if (n.a.backgroundImage) {
                                1 !== this.container.children.length && this.container.addChild(this.sprite);
                                var e = n.a.backgroundImageURL;
                                this.image.src !== e && (this.image.src = e);
                                var t = o.a.right - o.a.left,
                                    a = o.a.bottom - o.a.top;
                                this.sprite.anchor.set(.5, .5), this.sprite.x = o.a.left + t / 2, this.sprite.y = o.a.top + a / 2, this.sprite.width = t, this.sprite.height = a
                            } else 0 !== this.container.children.length && this.container.removeChildren()
                    }
                }]), e
            }()),
            F = new(function() {
                function e() {
                    Object(i.a)(this, e), this.options = {
                        vertices: !0,
                        rotation: !0,
                        tint: !0
                    }, this.container = new V.g(128, this.options), this.texture = V.j.WHITE, this.sprites = []
                }
                return Object(r.a)(e, [{
                    key: "initialize",
                    value: function() {
                        for (var e = 0; e < 128; e++) {
                            var t = new V.i(this.texture);
                            t.anchor.x = .5, this.sprites.push(t)
                        }
                    }
                }, {
                    key: "run",
                    value: function() {
                        if (n.a.mouseTracker) {
                            if (128 !== this.container.children.length) {
                                var e, t = Object(v.a)(this.sprites);
                                try {
                                    for (t.s(); !(e = t.n()).done;) {
                                        var a = e.value;
                                        this.container.addChild(a)
                                    }
                                } catch (e) {
                                    t.e(e)
                                } finally {
                                    t.f()
                                }
                            }
                            for (var i = 0; i < this.sprites.length; i++) this.sprites[i].alpha = 0;
                            var r = (y.a.mouse.x - window.innerWidth / 2) / s.a.zoom + s.a.x,
                                o = (y.a.mouse.y - window.innerHeight / 2) / s.a.zoom + s.a.y,
                                c = p.a.myCells[g.a.activeTab];
                            if (c) {
                                var l, u = 0,
                                    h = Object(v.a)(c.values());
                                try {
                                    for (h.s(); !(l = h.n()).done;) {
                                        var d = l.value;
                                        if (128 === u) break;
                                        var f = r - d.x,
                                            m = o - d.y,
                                            k = Math.sqrt(f * f + m * m),
                                            w = Math.atan(f / m) || 0,
                                            b = this.sprites[u++];
                                        b.x = r, b.y = o, b.width = 4, b.height = k, b.rotation = (o < d.y ? 0 : Math.PI) - w, b.alpha = 1
                                    }
                                } catch (e) {
                                    h.e(e)
                                } finally {
                                    h.f()
                                }
                            }
                        } else 0 !== this.container.children.length && this.container.removeChildren()
                    }
                }]), e
            }()),
            H = a(39),
            G = a(43),
            q = new(function() {
                function e() {
                    Object(i.a)(this, e), this.texture = V.j.WHITE, this.pool = [], this.index = 0
                }
                return Object(r.a)(e, [{
                    key: "initialize",
                    value: function() {
                        this.createTexture()
                    }
                }, {
                    key: "reset",
                    value: function() {
                        this.index = 0
                    }
                }, {
                    key: "add",
                    value: function(e, t) {
                        var a = this.pool[this.index++] || this.newSprite();
                        a.x = t.x, a.y = t.y, a.width = 2 * t.radius, a.height = 2 * t.radius, a.tint = parseInt(t.color.replace("#", "0x")), e.addChild(a)
                    }
                }, {
                    key: "createTexture",
                    value: function() {
                        var e = document.createElement("canvas"),
                            t = e.getContext("2d");
                        e.width = 64, e.height = 64, t.beginPath(), t.arc(32, 32, 32, 0, 2 * Math.PI, !0), t.closePath(), t.fillStyle = "#ffffff", t.fill(), this.texture = V.j.from(e)
                    }
                }, {
                    key: "newSprite",
                    value: function() {
                        var e = new V.i(this.texture);
                        return e.anchor.x = .5, e.anchor.y = .5, this.pool.push(e), e
                    }
                }]), e
            }()),
            W = function() {
                function e(t) {
                    Object(i.a)(this, e), this.texture = V.j.from(t), this.pool = [], this.index = 0, this.lastUsed = Date.now()
                }
                return Object(r.a)(e, [{
                    key: "getSprite",
                    value: function() {
                        return this.lastUsed = Date.now(), this.pool[this.index++] || this.newSprite()
                    }
                }, {
                    key: "newSprite",
                    value: function() {
                        var e = new V.i(this.texture);
                        return e.anchor.set(.5, .5), this.pool.push(e), e
                    }
                }, {
                    key: "reset",
                    value: function() {
                        this.index = 0
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        var e, t = Object(v.a)(this.pool);
                        try {
                            for (t.s(); !(e = t.n()).done;) e.value.destroy(!1)
                        } catch (e) {
                            t.e(e)
                        } finally {
                            t.f()
                        }
                        this.texture.destroy(!0)
                    }
                }]), e
            }(),
            Q = new(function() {
                function e() {
                    Object(i.a)(this, e), this.skins = new Map, this.downloading = new Map
                }
                return Object(r.a)(e, [{
                    key: "initialize",
                    value: function() {}
                }, {
                    key: "reset",
                    value: function() {
                        var e, t = Date.now(),
                            a = Object(v.a)(this.skins);
                        try {
                            for (a.s(); !(e = a.n()).done;) {
                                var n = Object(m.a)(e.value, 2),
                                    i = n[0],
                                    r = n[1];
                                t - r.lastUsed < 2e3 ? r.reset() : (r.destroy(), this.skins.delete(i))
                            }
                        } catch (e) {
                            a.e(e)
                        } finally {
                            a.f()
                        }
                    }
                }, {
                    key: "get",
                    value: function(e) {
                        if ("no-skin" === e) return !1;
                        if (!e) return !1;
                        var t = this.skins.get(e);
                        return void 0 !== t ? t.getSprite() : (this.downloading.has(e) || this.download(e), !1)
                    }
                }, {
                    key: "download",
                    value: function(e) {
                        var t = this,
                            a = new Image;
                        a.crossOrigin = "anonymous", a.onload = function() {
                            var n = document.createElement("canvas"),
                                i = n.getContext("2d");
                            n.width = 512, n.height = 512, i.beginPath(), i.arc(256, 256, 256, 0, 2 * Math.PI, !0), i.closePath(), i.clip(), a.width && a.height && i.drawImage(a, 0, 0, 512, 512);
                            var r = new W(n);
                            t.downloading.delete(e), t.skins.set(e, r), a.onload = null, a.onerror = null
                        }, a.onerror = function() {
                            t.downloading.delete(e), a.onload = null, a.onerror = null
                        }, a.src = e, this.downloading.set(e, !0)
                    }
                }]), e
            }()),
            K = a(56),
            Y = new(function() {
                function e() {
                    Object(i.a)(this, e), this.pool = [], this.index = 0, this.loaded = !1
                }
                return Object(r.a)(e, [{
                    key: "reset",
                    value: function() {
                        this.index = 0
                    }
                }, {
                    key: "initialize",
                    value: function() {
                        this.loadFonts()
                    }
                }, {
                    key: "get",
                    value: function(e) {
                        var t = this.pool[this.index++] || this.newText();
                        return t.text = "".concat(e), t.fontName = n.a.cellMassStroke ? "UbuntuStroked" : "Ubuntu", t.fontSize = 256, t
                    }
                }, {
                    key: "newText",
                    value: function() {
                        var e = new V.c("000", {
                            fontName: "Ubuntu",
                            fontSize: 256
                        });
                        return e.anchor = .5, this.pool.push(e), e
                    }
                }, {
                    key: "loadFonts",
                    value: function() {
                        var e = this,
                            t = {
                                crossOrigin: !0
                            },
                            a = new V.f,
                            n = "/web/assets/bitmapFonts/";
                        a.add("ubuntu-font-png", n + "ubuntuBold_0.png", t), a.add("ubuntu-font", n + "ubuntuBold.fnt", t), a.add("ubuntu-font-stroked-png", n + "ubuntuBoldStroked_0.png", t), a.add("ubuntu-font-stroked", n + "ubuntuBoldStroked.fnt", t), a.load(function() {
                            e.loaded = !0
                        })
                    }
                }]), e
            }()),
            X = function() {
                function e(t) {
                    Object(i.a)(this, e), this.texture = V.j.from(t), this.pool = [], this.index = 0, this.lastUsed = Date.now()
                }
                return Object(r.a)(e, [{
                    key: "getSprite",
                    value: function() {
                        return this.lastUsed = Date.now(), this.pool[this.index++] || this.newSprite()
                    }
                }, {
                    key: "newSprite",
                    value: function() {
                        var e = new V.i(this.texture);
                        return e.anchor.set(.5, .5), this.pool.push(e), e
                    }
                }, {
                    key: "reset",
                    value: function() {
                        this.index = 0
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        var e, t = Object(v.a)(this.pool);
                        try {
                            for (t.s(); !(e = t.n()).done;) e.value.destroy(!1)
                        } catch (e) {
                            t.e(e)
                        } finally {
                            t.f()
                        }
                        this.texture.destroy(!0)
                    }
                }]), e
            }(),
            J = new(function() {
                function e() {
                    Object(i.a)(this, e), this.cacheMap = new Map
                }
                return Object(r.a)(e, [{
                    key: "reset",
                    value: function() {
                        var e, t = Date.now(),
                            a = Object(v.a)(this.cacheMap);
                        try {
                            for (a.s(); !(e = a.n()).done;) {
                                var n = Object(m.a)(e.value, 2),
                                    i = n[0],
                                    r = n[1];
                                t - r.lastUsed < 5e3 ? r.reset() : (r.destroy(), this.cacheMap.delete(i))
                            }
                        } catch (e) {
                            a.e(e)
                        } finally {
                            a.f()
                        }
                    }
                }, {
                    key: "get",
                    value: function(e) {
                        return (this.cacheMap.get(e) || this.newNickCache(e)).getSprite()
                    }
                }, {
                    key: "newNickCache",
                    value: function(e) {
                        var t = document.createElement("canvas"),
                            a = t.getContext("2d"),
                            i = n.a.cellNickStroke ? 20 : 0;
                        a.font = "500 32px Ubuntu";
                        var r = 128 + 2 * i,
                            s = 4 * a.measureText(e).width + 2 * i | 0;
                        t.height = r, t.width = s, a.font = "500 128px Ubuntu", a.textBaseline = "middle", i > 0 && (a.lineWidth = i, a.strokeStyle = "#000000", a.strokeText(e, i, r >> 1)), a.fillStyle = "#ffffff", a.fillText(e, i, r >> 1);
                        var o = new X(t);
                        return this.cacheMap.set(e, o), o
                    }
                }]), e
            }()),
            Z = a(61),
            _ = new(function() {
                function e() {
                    Object(i.a)(this, e), this.texture = V.j.WHITE, this.size = 150, this.index = 0, this.pool = []
                }
                return Object(r.a)(e, [{
                    key: "reset",
                    value: function() {
                        this.index = 0
                    }
                }, {
                    key: "add",
                    value: function(e, t) {
                        if (this.canvas) {
                            var a = n.a.activeCellIndicatorSize,
                                i = this.pool[this.index++] || this.new();
                            i.position.set(t.x - a / 2, t.y - t.radius - a), i.width = i.height = a, i.tint = parseInt(n.a.activeCellIndicatorColor.replace("#", "0x")), e.addChild(i)
                        }
                    }
                }, {
                    key: "initialize",
                    value: function() {
                        this.canvas = document.createElement("canvas"), this.createTexture()
                    }
                }, {
                    key: "createTexture",
                    value: function() {
                        var e = this.canvas,
                            t = e.getContext("2d");
                        e.width = e.height = this.size, t.textAlign = "center", t.textBaseline = "middle", t.font = "900 ".concat(this.size, "px 'Font Awesome 5 Free'"), t.fillStyle = "white", t.fillText("", e.width / 2, e.height / 2), this.texture = V.j.from(e), this.texture.update()
                    }
                }, {
                    key: "new",
                    value: function() {
                        var e = new V.i(this.texture);
                        return this.pool.push(e), e
                    }
                }]), e
            }()),
            $ = new(function() {
                function e() {
                    Object(i.a)(this, e), this.texture = V.j.WHITE, this.pool = [], this.index = 0, this.ownTag = 0, this.ownTeamColor = "#555555"
                }
                return Object(r.a)(e, [{
                    key: "initialize",
                    value: function() {
                        this.createTexture(), _.initialize(), Q.initialize(), K.a.initialize(), Y.initialize(), Z.a.initialize()
                    }
                }, {
                    key: "reset",
                    value: function() {
                        this.index = 0;
                        var e = p.a.clientsList.get(p.a.myClientID) || new C.a;
                        this.ownTag = e.tag, this.ownTeamColor = e.teamColor, _.reset(), Z.a.reset(), Q.reset(), K.a.reset(), Y.reset(), J.reset()
                    }
                }, {
                    key: "add",
                    value: function(e, t) {
                        if (this.texture) {
                            var a = t.parentPlayer.parentClient,
                                i = a.tag === this.ownTag,
                                r = a.isBot,
                                o = this.pool[this.index++] || this.newBase(),
                                c = t.color;
                            t.isOwn >= 0 && p.a.myPlayerIDs.length > 1 && "multibox" === n.a.ownCellColoring && (c = t.isOwn === g.a.activeTab ? n.a.activeCellBorderColor : "#ffffff"), o.x = t.x, o.y = t.y, o.width = 2 * t.radius, o.height = 2 * t.radius, o.tint = parseInt(c.replace("#", "0x"));
                            var l = o.alpha = N.a.isReplay ? O.a.opacity : n.a.cellOpacity / 100;
                            1 !== l && (l = 1), r || !g.a.isTR || t.isTR || (l *= .35), r || g.a.isTR || !t.isTR || (l *= .35), t.removed && (l *= 1 - t.dt), e.addChild(o);
                            var u = !1;
                            if (a.isBot || (i || t.isOwn >= 0 ? n.a.cellSkin && (u = Q.get(t.skin)) : n.a.enemyCellSkin && (u = Q.get(t.skin))), t.isOwn >= 0 && p.a.myPlayerIDs.length > 1 && n.a.shieldMarker && Z.a.add(e, t, t.isOwn === g.a.activeTab), !1 !== u) {
                                var h = t.isOwn >= 0 && p.a.myPlayerIDs.length > 1 && n.a.shieldMarker ? .65 : 1;
                                u.x = t.x, u.y = t.y, u.width = t.radius * h * 2, u.height = t.radius * h * 2, u.alpha = l, e.addChild(u)
                            }
                            if (t.isOwn >= 0 && p.a.myPlayerIDs.length > 1 && n.a.activeCellBorder) {
                                var d = n.a.shieldMarker ? .65 : 1,
                                    f = t.isOwn === g.a.activeTab ? n.a.activeCellBorderColor : "#ffffff",
                                    m = parseInt(f.replace("#", "0x")),
                                    v = K.a.getSprite();
                                v.x = t.x, v.y = t.y, v.width = t.radius * d * 2, v.height = t.radius * d * 2, v.tint = m, e.addChild(v)
                            }
                            if (t.radius * s.a.zoom < 34 && n.a.autoHideText) return !1;
                            var y = t.isOwn >= 0 && n.a.ownCellNick || t.isOwn < 0 && n.a.cellNick;
                            if (y) {
                                var k = J.get(a.nick || A.a.defaultCellName),
                                    w = k.texture.width / 768 > 1.6 ? 768 / k.texture.width : 1,
                                    b = n.a.nickSize * (.3 * t.radius) / 128,
                                    E = parseInt(a.teamColor.replace("#", "0x"));
                                k.position.set(t.x, t.y), k.scale.set(b * w, b * w), k.alpha = l, k.tint = E, e.addChild(k)
                            }
                            if (t.isOwn >= 0 && n.a.ownCellMass || t.isOwn < 0 && n.a.cellMass) {
                                var x = t.mass > 999 && "shortened" === n.a.cellMassFormat ? "".concat((t.mass / 100 | 0) / 10, "k") : t.mass,
                                    C = Y.get(x),
                                    I = n.a.massSize * (.3 * t.radius) / 256,
                                    S = parseInt(a.teamColor.replace("#", "0x"));
                                C.x = t.x, C.y = t.y + (y ? .3 * t.radius : 0), C.scale.x = I, C.scale.y = I, C.alpha = l, C.tint = S, e.addChild(C)
                            }
                            t.isOwn >= 0 && p.a.myPlayerIDs.length > 1 && t.isOwn === g.a.activeTab && n.a.activeCellIndicator && _.add(e, t)
                        }
                    }
                }, {
                    key: "createTexture",
                    value: function() {
                        var e = document.createElement("canvas"),
                            t = e.getContext("2d");
                        e.width = 1024, e.height = 1024, t.beginPath(), t.arc(512, 512, 512, 0, 2 * Math.PI, !0), t.closePath(), t.fillStyle = "#ffffff", t.fill(), this.texture = V.j.from(e)
                    }
                }, {
                    key: "newBase",
                    value: function() {
                        var e = new V.i(this.texture);
                        return e.anchor.x = .5, e.anchor.y = .5, this.pool.push(e), e
                    }
                }]), e
            }()),
            ee = new(function() {
                function e() {
                    Object(i.a)(this, e), this.container = new V.d
                }
                return Object(r.a)(e, [{
                    key: "initialize",
                    value: function() {
                        G.a.initialize(), q.initialize(), H.a.initialize(), $.initialize()
                    }
                }, {
                    key: "reset",
                    value: function() {
                        this.container.removeChildren(), G.a.reset(), q.reset(), H.a.reset(), $.reset()
                    }
                }, {
                    key: "run",
                    value: function() {
                        !1 !== Y.loaded && (this.reset(), this.setup())
                    }
                }, {
                    key: "setup",
                    value: function() {
                        var e, t = Object(v.a)(p.a.sortedCells);
                        try {
                            for (t.s(); !(e = t.n()).done;) {
                                var a = e.value;
                                a.animate(), a.hidden && N.a.isReplay || (a.isVirus ? H.a.add(this.container, a) : a.isFood ? n.a.pellets && G.a.add(this.container, a) : a.isEject ? q.add(this.container, a) : a.isPlayerCell && $.add(this.container, a))
                            }
                        } catch (e) {
                            t.e(e)
                        } finally {
                            t.f()
                        }
                    }
                }]), e
            }()),
            te = new(function() {
                function e() {
                    Object(i.a)(this, e), this.container = new V.d, this.sprite = V.i.from(h.a), this.filter = new V.k.ColorMatrixFilter, this.hue = 0
                }
                return Object(r.a)(e, [{
                    key: "initialize",
                    value: function() {
                        this.sprite.anchor.x = .5, this.sprite.anchor.y = .5, this.container.filters = [this.filter]
                    }
                }, {
                    key: "run",
                    value: function() {
                        if (n.a.mapBorders && n.a.useRainbow) {
                            1 !== this.container.children.length && this.container.addChild(this.sprite);
                            var e = o.a.right - o.a.left,
                                t = o.a.bottom - o.a.top,
                                a = e / 720 * 15;
                            this.sprite.x = o.a.left + e / 2, this.sprite.y = o.a.top + t / 2, this.sprite.width = e + 2 * a, this.sprite.height = t + 2 * a, this.hue > 360 && (this.hue = 0), this.filter.hue(this.hue++)
                        } else 0 !== this.container.children.length && this.container.removeChildren()
                    }
                }]), e
            }()),
            ae = new(function() {
                function e() {
                    Object(i.a)(this, e), this.container = new V.d, this.graphics = new V.e, this.container.addChild(this.graphics)
                }
                return Object(r.a)(e, [{
                    key: "run",
                    value: function() {
                        var e = this;
                        if (n.a.audioVisualiserSize) {
                            var t = n.a.audioVisualiserSize * o.a.width / 14142;
                            this.container.visible = n.a.mapVisualiser;
                            var a = [n.a.audioVisualiserLineColor, n.a.audioVisualiserColor1, n.a.audioVisualiserColor2, n.a.audioVisualiserColor3];
                            a.forEach(function(e, t) {
                                return a[t] = parseInt(e.replace("#", "0x"))
                            });
                            var i = a[0],
                                r = a[1],
                                s = a[2],
                                c = a[3];
                            this.graphics.clear(), P.a.lines.forEach(function(a) {
                                var n = a.x,
                                    r = a.y,
                                    s = a.xEnd,
                                    o = a.yEnd;
                                e.graphics.lineStyle(2 * t, i).moveTo(n * t, r * t).lineTo(s * t, o * t)
                            }), this.graphics.lineStyle(10 * t, r).drawCircle(0, 0, P.a.animated[0] * t), this.graphics.lineStyle(2.5 * t, s).drawCircle(0, 0, P.a.animated[1] * t), this.graphics.lineStyle(10 * t, c).drawCircle(0, 0, P.a.animated[2] * t);
                            var l = o.a.right - o.a.left >> 1,
                                u = o.a.bottom - o.a.top >> 1;
                            this.container.position.set(l, u)
                        }
                    }
                }]), e
            }()),
            ne = function() {
                function e() {
                    Object(i.a)(this, e)
                }
                return Object(r.a)(e, [{
                    key: "initialize",
                    value: function() {
                        var e = this;
                        this.initialized || (this.initialized = !0, this.canvas = document.getElementById("screen"), this.options = {
                            view: this.canvas,
                            antialias: !0,
                            resolution: 1,
                            transparent: !0,
                            preserveDrawingBuffer: !0
                        }, this.application = new V.a(this.options), this.renderer = this.application.renderer, this.stage = new V.d, z.initialize(), this.stage.addChild(z.container), M.a.initialize(), this.stage.addChild(M.a.container), te.initialize(), this.stage.addChild(te.container), R.a.initialize(), this.stage.addChild(R.a.glowContainer), this.stage.addChild(R.a.container), this.stage.addChild(ae.container), F.initialize(), this.stage.addChild(F.container), ee.initialize(), this.stage.addChild(ee.container), this.setScreenSize(), window.addEventListener("resize", function() {
                            e.setScreenSize()
                        }, {
                            passive: !0
                        }))
                    }
                }, {
                    key: "setScreenSize",
                    value: function() {
                        this.initialize();
                        var e = n.a.graphicsQuality,
                            t = window.innerWidth * e | 0,
                            a = window.innerHeight * e | 0;
                        this.renderer.resize(t, a)
                    }
                }, {
                    key: "run",
                    value: function() {
                        this.canvas && (this.setCamera(), z.run(), M.a.run(), te.run(), R.a.run(), ae.run(), F.run(), ee.run(), this.renderer.render(this.stage))
                    }
                }, {
                    key: "setCamera",
                    value: function() {
                        var e = s.a.zoom * n.a.graphicsQuality,
                            t = this.canvas.width / 2 - s.a.x * e,
                            a = this.canvas.height / 2 - s.a.y * e;
                        this.stage.setTransform(t, a, e, e)
                    }
                }], [{
                    key: "isSupported",
                    get: function() {
                        return V.l.isWebGLSupported()
                    }
                }]), e
            }(),
            ie = ne.isSupported,
            re = "OK" === localStorage.getItem("Senpaio:WebGL"),
            se = re && ie ? ne : D;
        re && !ie && (delete n.a.useWebGL, localStorage.setItem("Senpaio:settings", JSON.stringify(n.a)), localStorage.removeItem("Senpa:WebGL"), alert("WebGL not supported, falling back to canvas rendering")), t.a = new se
    }, , function(e, t, a) {
        "use strict";
        var n = a(11),
            i = a(3),
            r = a(4),
            s = a(2),
            o = a.n(s),
            c = (a(105), a(43)),
            l = a(39),
            u = a(21),
            h = a(40),
            d = a(47),
            f = a(77),
            m = a(61),
            v = a(55),
            p = a(56),
            g = a(59),
            y = a(51),
            k = function() {
                return "OK" === localStorage.getItem("Senpaio:WebGL")
            },
            w = {
                game: {
                    cells: {
                        cellAnimation: {
                            settingName: "Animation",
                            type: "range",
                            min: 100,
                            max: 500,
                            step: 5,
                            defaultValue: 120
                        },
                        eatAnimation: {
                            settingName: "Eat animation",
                            type: "toggle",
                            defaultValue: !1
                        },
                        autoSwitchCells: {
                            settingName: "Auto-Switch cells",
                            type: "toggle",
                            defaultValue: !0
                        },
                        autoHideText: {
                            settingName: "Auto hide text",
                            type: "toggle",
                            defaultValue: !0
                        },
                        cellNick: {
                            settingName: "Show nick",
                            type: "toggle",
                            defaultValue: !0
                        },
                        ownCellNick: {
                            settingName: "Show own nick",
                            type: "toggle",
                            defaultValue: !0
                        },
                        cellNickStroke: {
                            settingName: "Nick stroke",
                            type: "toggle",
                            defaultValue: !0
                        },
                        cellMass: {
                            settingName: "Show mass",
                            type: "toggle",
                            defaultValue: !0
                        },
                        ownCellMass: {
                            settingName: "Show own mass",
                            type: "toggle",
                            defaultValue: !0
                        },
                        cellMassStroke: {
                            settingName: "Mass stroke",
                            type: "toggle",
                            defaultValue: !0
                        },
                        cellMassFormat: {
                            settingName: "Mass format",
                            type: "dropdown",
                            list: [{
                                name: "Shortened",
                                value: "shortened"
                            }, {
                                name: "Full",
                                value: "full"
                            }],
                            defaultValue: "shortened"
                        },
                        cellSkin: {
                            settingName: "Show skins",
                            type: "toggle",
                            defaultValue: !0
                        },
                        enemyCellSkin: {
                            settingName: "Show enemy skin",
                            type: "toggle",
                            defaultValue: !1
                        }
                    },
                    elements: {
                        hideHUD: {
                            settingName: "Hide HUD",
                            type: "toggle",
                            defaultValue: !1,
                            onchange: function() {
                                f.a.toggleHUD()
                            }
                        },
                        pellets: {
                            settingName: "Show pellets",
                            type: "toggle",
                            defaultValue: !0
                        },
                        mapBorders: {
                            settingName: "Show borders",
                            type: "toggle",
                            defaultValue: !0
                        },
                        mapSectors: {
                            settingName: "Show sectors",
                            type: "toggle",
                            defaultValue: !1
                        },
                        mapVisualiser: {
                            settingName: "Show audio visualiser",
                            type: "toggle",
                            defaultValue: !1
                        },
                        backgroundImage: {
                            settingName: "Background image",
                            type: "toggle",
                            defaultValue: !1
                        }
                    },
                    camera: {
                        autoZoom: {
                            settingName: "Auto zoom",
                            type: "toggle",
                            defaultValue: !1
                        },
                        zoomSpeed: {
                            settingName: "Zoom speed",
                            type: "range",
                            min: .8,
                            max: .98,
                            step: .02,
                            defaultValue: .9
                        },
                        cameraSpeed: {
                            settingName: "Movement speed",
                            type: "range",
                            min: 1,
                            max: 30,
                            step: 1,
                            defaultValue: 20
                        }
                    },
                    helpers: {
                        mouseTracker: {
                            settingName: "Mouse tracker",
                            type: "toggle",
                            defaultValue: !1
                        },
                        shieldMarker: {
                            settingName: "Active cell shield",
                            type: "toggle",
                            defaultValue: !1
                        },
                        activeCellIndicator: {
                            settingName: "Active cell indicator",
                            type: "toggle",
                            defaultValue: !1
                        },
                        activeCellBorder: {
                            settingName: "Active cell border",
                            type: "toggle",
                            defaultValue: !0
                        },
                        splitIndicators: {
                            settingName: "Split indicator",
                            type: "toggle",
                            defaultValue: !1
                        }
                    },
                    misc: {
                        useWebGL: {
                            settingName: "Use WebGL (requires reload)",
                            type: "toggle",
                            defaultValue: !1,
                            onchange: function(e) {
                                var t = localStorage.getItem("Senpaio:WebGL");
                                e ? localStorage.setItem("Senpaio:WebGL", "OK") : localStorage.removeItem("Senpaio:WebGL"), t !== (e ? "OK" : null) && window.location.reload()
                            }
                        },
                        graphicsQuality: {
                            settingName: "Graphics quality",
                            type: "dropdown",
                            list: [{
                                name: "Retina",
                                value: 1.35
                            }, {
                                name: "High",
                                value: 1
                            }, {
                                name: "Medium",
                                value: .7
                            }, {
                                name: "Low",
                                value: .5
                            }],
                            defaultValue: 1,
                            onchange: function(e) {
                                y.a.setScreenSize()
                            }
                        },
                        chatType: {
                            settingName: "Chat type",
                            type: "dropdown",
                            list: [{
                                name: "Chatroom",
                                value: "chatroom"
                            }, {
                                name: "Pop up chat",
                                value: "pop-up"
                            }, {
                                name: "Off",
                                value: "off"
                            }],
                            defaultValue: "chatroom",
                            onchange: function(e) {
                                document.getElementById("chat-room").style.display = "chatroom" === e ? "block" : "none"
                            }
                        }
                    }
                },
                theme: {
                    hud: {
                        chatTab: {
                            settingName: "Active chat tab color",
                            type: "colorpicker",
                            defaultValue: "#e67bbe",
                            onchange: function(e) {
                                var t = document.getElementById("chatTab-css"),
                                    a = !t;
                                t || (t = document.createElement("style")), t.id = "chatTab-css", t.textContent = "#huds #chat-room #chat-control button.active { background-color: ".concat(e, "; }"), a && document.head.append(t)
                            }
                        },
                        chatNick: {
                            settingName: "Chat nick color",
                            type: "colorpicker",
                            defaultValue: "#e67bbe",
                            onchange: function(e) {
                                var t = document.getElementById("chatNick-css"),
                                    a = !t;
                                t || (t = document.createElement("style")), t.id = "chatNick-css", t.textContent = "#huds #chat-room div .nick { color: ".concat(e, "; }"), a && document.head.append(t)
                            }
                        },
                        leaderboardTitle: {
                            settingName: "Leaderboard title color",
                            type: "colorpicker",
                            defaultValue: "#e67bbe",
                            onchange: function(e) {
                                document.getElementById("leaderboard-title").style.color = e
                            }
                        },
                        teamplayersTitle: {
                            settingName: "Team players title color",
                            type: "colorpicker",
                            defaultValue: "#e67bbe",
                            onchange: function(e) {
                                document.getElementById("teamplayers-title").style.color = e
                            }
                        }
                    },
                    cells: {
                        cellOpacity: {
                            settingName: "Cell opacity",
                            type: "range",
                            min: 1,
                            max: 100,
                            step: 1,
                            defaultValue: 100
                        },
                        nickSize: {
                            settingName: "Nick size",
                            type: "range",
                            min: .5,
                            max: 3,
                            step: .1,
                            defaultValue: 1.1
                        },
                        massSize: {
                            settingName: "Mass size",
                            type: "range",
                            min: .5,
                            max: 3,
                            step: .1,
                            defaultValue: 1.1
                        },
                        ownCellColoring: {
                            settingName: "Own cell coloring",
                            type: "dropdown",
                            list: [{
                                name: "Normal",
                                value: "normal"
                            }, {
                                name: "Multibox",
                                value: "multibox"
                            }],
                            defaultValue: "normal"
                        }
                    },
                    food: {
                        rainbowFood: {
                            settingName: "Rainbow food",
                            type: "toggle",
                            defaultValue: !0
                        },
                        foodColor: {
                            settingName: "Food color",
                            type: "colorpicker",
                            defaultValue: "#fdaee2",
                            onchange: function() {
                                k() ? c.a.clean() : u.a.createFoodTexture()
                            }
                        },
                        useFoodGlow: {
                            settingName: "Food glow",
                            type: "toggle",
                            defaultValue: !1,
                            editList: ["foodGlowColor", "foodGlowDistance", "foodGlowStrength"],
                            onchange: function(e) {
                                k() ? c.a.clean() : u.a.createFoodTexture(), this.editList.forEach(function(t) {
                                    var a = "";
                                    e || (a = "disabled"), o()("#".concat(t)).attr("option", a)
                                }), e ? o()("#rainbowFood").attr("option", "disabled") : o()("#rainbowFood").attr("option", "")
                            }
                        },
                        foodGlowColor: {
                            settingName: "Food glow color",
                            type: "colorpicker",
                            defaultValue: "#f947d7",
                            onchange: function() {
                                k() ? c.a.clean() : u.a.createFoodTexture()
                            }
                        },
                        foodGlowDistance: {
                            settingName: "Food glow distance",
                            type: "range",
                            min: 1,
                            max: 100,
                            step: 1,
                            defaultValue: 40,
                            onchange: function() {
                                k() ? c.a.clean() : u.a.createFoodTexture()
                            }
                        },
                        foodGlowStrength: {
                            settingName: "Food glow strength",
                            type: "range",
                            min: 1,
                            max: 10,
                            step: 1,
                            defaultValue: 5,
                            onchange: function() {
                                k() ? c.a.clean() : u.a.createFoodTexture()
                            }
                        }
                    },
                    virus: {
                        virusColor1: {
                            settingName: "Virus color 1",
                            type: "colorpicker",
                            defaultValue: "#ff99fc",
                            onchange: function() {
                                k() ? l.a.clean() : u.a.createVirusTexture()
                            }
                        },
                        virusColor2: {
                            settingName: "Virus color 2",
                            type: "colorpicker",
                            defaultValue: "#970d4e",
                            onchange: function() {
                                k() ? l.a.clean() : u.a.createVirusTexture()
                            }
                        },
                        virusBorderWidth: {
                            settingName: "Virus border width",
                            type: "range",
                            min: 1,
                            max: 25,
                            step: 1,
                            defaultValue: 8,
                            onchange: function() {
                                k() ? l.a.clean() : u.a.createVirusTexture()
                            }
                        },
                        useVirusGlow: {
                            settingName: "Virus glow",
                            type: "toggle",
                            defaultValue: !1,
                            editList: ["virusGlowColor", "virusGlowDistance", "virusGlowStrength"],
                            onchange: function(e) {
                                k() ? l.a.clean() : u.a.createVirusTexture(), this.editList.forEach(function(t) {
                                    var a = "";
                                    e || (a = "disabled"), o()("#".concat(t)).attr("option", a)
                                })
                            }
                        },
                        virusGlowColor: {
                            settingName: "Virus glow color",
                            type: "colorpicker",
                            defaultValue: "#df159f",
                            onchange: function() {
                                k() ? l.a.clean() : u.a.createVirusTexture()
                            }
                        },
                        virusGlowDistance: {
                            settingName: "Virus glow distance",
                            type: "range",
                            min: 1,
                            max: 100,
                            step: 1,
                            defaultValue: 40,
                            onchange: function() {
                                k() ? l.a.clean() : u.a.createVirusTexture()
                            }
                        },
                        virusGlowStrength: {
                            settingName: "Virus glow strength",
                            type: "range",
                            min: 1,
                            max: 10,
                            step: 1,
                            defaultValue: 5,
                            onchange: function() {
                                k() ? l.a.clean() : u.a.createVirusTexture()
                            }
                        }
                    },
                    indicator: {},
                    activeCell: {
                        activeCellIndicatorColor: {
                            settingName: "Active cell indicator color",
                            type: "colorpicker",
                            defaultValue: "#FFFFFF",
                            onchange: function() {
                                k() || g.a.cache()
                            }
                        },
                        activeCellIndicatorSize: {
                            settingName: "Active cell indicator size",
                            type: "range",
                            min: 50,
                            max: 150,
                            step: 5,
                            defaultValue: 100,
                            onchange: function() {
                                k() && p.a.update()
                            }
                        },
                        activeCellBorderColor: {
                            settingName: "Active cell border color",
                            type: "colorpicker",
                            defaultValue: "#FF00FF",
                            onchange: function() {
                                k() ? m.a.update() : v.a.updateTexture()
                            }
                        },
                        activeCellBorderWidth: {
                            settingName: "Active cell border width",
                            type: "range",
                            min: 2,
                            max: 100,
                            step: 2,
                            defaultValue: 10,
                            onchange: function() {
                                k() && p.a.update()
                            }
                        }
                    },
                    border: {
                        useRainbow: {
                            settingName: "Rainbow Border",
                            type: "toggle",
                            defaultValue: !1,
                            editList: ["useBorderGlow", "borderGlowColor", "borderGlowDistance", "borderGlowStrength"],
                            onchange: function(e) {
                                this.editList.forEach(function(t) {
                                    var a = "";
                                    e && (a = "disabled"), o()("#".concat(t)).attr("option", a)
                                })
                            }
                        },
                        borderColor: {
                            settingName: "Border color",
                            type: "colorpicker",
                            defaultValue: "#FFFFFF",
                            onchange: function() {
                                k() ? h.a.updateGlow() : u.a.createBorderTexture()
                            }
                        },
                        borderWidth: {
                            settingName: "Border width",
                            type: "range",
                            min: 2,
                            max: 250,
                            step: 2,
                            defaultValue: 60,
                            onchange: function() {
                                k() ? h.a.updateGlow() : u.a.createBorderTexture()
                            }
                        },
                        useBorderGlow: {
                            settingName: "Border glow",
                            type: "toggle",
                            defaultValue: !1,
                            editList: ["borderGlowColor", "borderGlowDistance", "borderGlowStrength"],
                            onchange: function(e) {
                                k() ? h.a.updateGlow() : u.a.createBorderTexture(), this.editList.forEach(function(t) {
                                    var a = "";
                                    e || (a = "disabled"), o()("#".concat(t)).attr("option", a)
                                })
                            }
                        },
                        borderGlowColor: {
                            settingName: "Border glow color",
                            type: "colorpicker",
                            defaultValue: "#f947d7",
                            onchange: function() {
                                k() ? h.a.updateGlow() : u.a.createBorderTexture()
                            }
                        },
                        borderGlowDistance: {
                            settingName: "Border glow distance",
                            type: "range",
                            min: 1,
                            max: 250,
                            step: 1,
                            defaultValue: 100,
                            onchange: function() {
                                k() ? h.a.updateGlow() : u.a.createBorderTexture()
                            }
                        },
                        borderGlowStrength: {
                            settingName: "Border glow strength",
                            type: "range",
                            min: 1,
                            max: 10,
                            step: 1,
                            defaultValue: 5,
                            onchange: function() {
                                k() ? h.a.updateGlow() : u.a.createBorderTexture()
                            }
                        }
                    },
                    background: {
                        backgroundImageURL: {
                            settingName: "Background image URL",
                            type: "input",
                            defaultValue: "https://senpa.io/backgrounds/bg1.png"
                        },
                        backgroundColor: {
                            settingName: "Background color",
                            type: "colorpicker",
                            defaultValue: "#141414",
                            onchange: function(e) {
                                document.body.style.background = e
                            }
                        },
                        sectorGridColor: {
                            settingName: "Sector grid color",
                            type: "colorpicker",
                            defaultValue: "#222222",
                            onchange: function() {
                                k() && d.a.cache()
                            }
                        },
                        sectorGridWidth: {
                            settingName: "Sector grid width",
                            type: "range",
                            min: 2,
                            max: 250,
                            step: 2,
                            defaultValue: 10,
                            onchange: function() {
                                k() && d.a.cache()
                            }
                        },
                        sectorTextColor: {
                            settingName: "Sector text color",
                            type: "colorpicker",
                            defaultValue: "#222222",
                            onchange: function() {
                                k() && d.a.cache()
                            }
                        },
                        sectorTextSize: {
                            settingName: "Sector text size",
                            type: "range",
                            min: 500,
                            max: 2200,
                            step: 100,
                            defaultValue: 1600,
                            onchange: function() {
                                k() && d.a.cache()
                            }
                        },
                        audioVisualiserSize: {
                            settingName: "Audio Visualiser size",
                            type: "range",
                            min: 1,
                            max: 12,
                            step: 1,
                            defaultValue: 4
                        },
                        audioVisualiserLineColor: {
                            settingName: "Audio Visualiser line color",
                            type: "colorpicker",
                            defaultValue: "#2196f3"
                        },
                        audioVisualiserColor1: {
                            settingName: "Audio Visualiser color 1",
                            type: "colorpicker",
                            defaultValue: "#1a1a1a"
                        },
                        audioVisualiserColor2: {
                            settingName: "Audio Visualiser color 2",
                            type: "colorpicker",
                            defaultValue: "#1a1a1a"
                        },
                        audioVisualiserColor3: {
                            settingName: "Audio Visualiser color 3",
                            type: "colorpicker",
                            defaultValue: "#1a1a1a"
                        }
                    }
                },
                importexport: {
                    import_export: {
                        settings: {
                            settingName: "Settings",
                            type: "toggle",
                            defaultValue: !0
                        },
                        theme: {
                            settingName: "Theme",
                            type: "toggle",
                            defaultValue: !0
                        },
                        controls: {
                            settingName: "Controls",
                            type: "toggle",
                            defaultValue: !0
                        }
                    }
                },
                controls: {
                    keyboard: {
                        hkToggleMenu: {
                            settingName: "Toggle menu",
                            type: "hotkey",
                            defaultValue: "ESCAPE"
                        },
                        hkToggleHUD: {
                            settingName: "Toggle HUD",
                            type: "hotkey",
                            defaultValue: "H"
                        },
                        hkReplay: {
                            settingName: "Save Replay",
                            type: "hotkey",
                            defaultValue: "R"
                        },
                        hkToggleChat: {
                            settingName: "Chat",
                            type: "hotkey",
                            defaultValue: "ENTER"
                        },
                        hkToggleChatMode: {
                            settingName: "Toggle chat mode",
                            type: "hotkey",
                            defaultValue: "C"
                        },
                        hkToggleSpectateMode: {
                            settingName: "Toggle spectate mode",
                            type: "hotkey",
                            defaultValue: "X"
                        },
                        hkSplit: {
                            settingName: "Split",
                            type: "hotkey",
                            defaultValue: "SPACE"
                        },
                        hkDoubleSplit: {
                            settingName: "Double split",
                            type: "hotkey",
                            defaultValue: "Q"
                        },
                        hkTripleSplit: {
                            settingName: "Triple split",
                            type: "hotkey",
                            defaultValue: "NO KEY"
                        },
                        hkSplit16: {
                            settingName: "Split 16",
                            type: "hotkey",
                            defaultValue: "T"
                        },
                        hkSplit32: {
                            settingName: "Split 32",
                            type: "hotkey",
                            defaultValue: "NO KEY"
                        },
                        hkSplit64: {
                            settingName: "Split 64",
                            type: "hotkey",
                            defaultValue: "NO KEY"
                        },
                        hkFeed: {
                            settingName: "Feed",
                            type: "hotkey",
                            defaultValue: "W"
                        },
                        hkMacroFeed: {
                            settingName: "Macro feed",
                            type: "hotkey",
                            defaultValue: "E"
                        },
                        hkTogglePlayer: {
                            settingName: "Dual toggle",
                            type: "hotkey",
                            defaultValue: "TAB"
                        },
                        hkStop: {
                            settingName: "Stop movement",
                            type: "hotkey",
                            defaultValue: "NO KEY"
                        },
                        hkToggleNick: {
                            settingName: "Toggle cell nick",
                            type: "hotkey",
                            defaultValue: "N"
                        },
                        hkToggleMass: {
                            settingName: "Toggle cell mass",
                            type: "hotkey",
                            defaultValue: "M"
                        },
                        hkToggleOwnSkin: {
                            settingName: "Toggle skin",
                            type: "hotkey",
                            defaultValue: "S"
                        },
                        hkToggleChatMessage: {
                            settingName: "Toggle chat messages",
                            type: "hotkey",
                            defaultValue: "NO KEY"
                        },
                        hkToggleSectors: {
                            settingName: "Toggle background sectors",
                            type: "hotkey",
                            defaultValue: "B"
                        },
                        hkCommand1: {
                            settingName: "Command 1",
                            type: "hotkey",
                            defaultValue: "1"
                        },
                        hkCommand2: {
                            settingName: "Command 2",
                            type: "hotkey",
                            defaultValue: "2"
                        },
                        hkCommand3: {
                            settingName: "Command 3",
                            type: "hotkey",
                            defaultValue: "3"
                        },
                        hkCommand4: {
                            settingName: "Command 4",
                            type: "hotkey",
                            defaultValue: "4"
                        },
                        hkCommand5: {
                            settingName: "Command 5",
                            type: "hotkey",
                            defaultValue: "5"
                        },
                        hkCommand6: {
                            settingName: "Command 6",
                            type: "hotkey",
                            defaultValue: "6"
                        },
                        hkCommand7: {
                            settingName: "Command 7",
                            type: "hotkey",
                            defaultValue: "7"
                        },
                        hkCommand8: {
                            settingName: "Command 8",
                            type: "hotkey",
                            defaultValue: "8"
                        },
                        hkCommand9: {
                            settingName: "Command 9",
                            type: "hotkey",
                            defaultValue: "9"
                        },
                        hkCommand10: {
                            settingName: "Command 10",
                            type: "hotkey",
                            defaultValue: "0"
                        },
                        hkZoom1: {
                            settingName: "Zoom level 1",
                            type: "hotkey",
                            defaultValue: "ALT+1"
                        },
                        hkZoom2: {
                            settingName: "Zoom level 2",
                            type: "hotkey",
                            defaultValue: "ALT+2"
                        },
                        hkZoom3: {
                            settingName: "Zoom level 3",
                            type: "hotkey",
                            defaultValue: "ALT+3"
                        },
                        hkZoom4: {
                            settingName: "Zoom level 4",
                            type: "hotkey",
                            defaultValue: "ALT+4"
                        },
                        hkZoom5: {
                            settingName: "Zoom level 5",
                            type: "hotkey",
                            defaultValue: "ALT+5"
                        }
                    },
                    mouse: {
                        leftClick: {
                            settingName: "Left click",
                            type: "dropdown",
                            list: [{
                                name: "None",
                                value: "none"
                            }, {
                                name: "Feed",
                                value: "feed"
                            }, {
                                name: "Macro feed",
                                value: "macroFeed"
                            }, {
                                name: "Split",
                                value: "split"
                            }, {
                                name: "Double split",
                                value: "doubleSplit"
                            }, {
                                name: "Split 16",
                                value: "split16"
                            }, {
                                name: "Split 32",
                                value: "split32"
                            }, {
                                name: "Split 64",
                                value: "split64"
                            }],
                            defaultValue: "none"
                        },
                        middleClick: {
                            settingName: "Middle click",
                            type: "dropdown",
                            list: [{
                                name: "None",
                                value: "none"
                            }, {
                                name: "Feed",
                                value: "feed"
                            }, {
                                name: "Macro feed",
                                value: "macroFeed"
                            }, {
                                name: "Split",
                                value: "split"
                            }, {
                                name: "Double split",
                                value: "doubleSplit"
                            }, {
                                name: "Split 16",
                                value: "split16"
                            }, {
                                name: "Split 32",
                                value: "split32"
                            }, {
                                name: "Split 64",
                                value: "split64"
                            }],
                            defaultValue: "none"
                        },
                        rightClick: {
                            settingName: "Right click",
                            type: "dropdown",
                            list: [{
                                name: "None",
                                value: "none"
                            }, {
                                name: "Feed",
                                value: "feed"
                            }, {
                                name: "Macro feed",
                                value: "macroFeed"
                            }, {
                                name: "Split",
                                value: "split"
                            }, {
                                name: "Double split",
                                value: "doubleSplit"
                            }, {
                                name: "Split 16",
                                value: "split16"
                            }, {
                                name: "Split 32",
                                value: "split32"
                            }, {
                                name: "Split 64",
                                value: "split64"
                            }],
                            defaultValue: "none"
                        }
                    },
                    commands: {
                        command1: {
                            settingName: "Command 1",
                            type: "input",
                            defaultValue: "Need backup!"
                        },
                        command2: {
                            settingName: "Command 2",
                            type: "input",
                            defaultValue: "Need a teammate!"
                        },
                        command3: {
                            settingName: "Command 3",
                            type: "input",
                            defaultValue: "Pop him!"
                        },
                        command4: {
                            settingName: "Command 4",
                            type: "input",
                            defaultValue: "We need to run!"
                        },
                        command5: {
                            settingName: "Command 5",
                            type: "input",
                            defaultValue: "Tricksplit!"
                        },
                        command6: {
                            settingName: "Command 6",
                            type: "input",
                            defaultValue: "Lets bait!"
                        },
                        command7: {
                            settingName: "Command 7",
                            type: "input",
                            defaultValue: "Split into me!"
                        },
                        command8: {
                            settingName: "Command 8",
                            type: "input",
                            defaultValue: "Feed Me!"
                        },
                        command9: {
                            settingName: "Command 9",
                            type: "input",
                            defaultValue: "Tank the virus!"
                        },
                        command10: {
                            settingName: "Command 10",
                            type: "input",
                            defaultValue: "Roger that!"
                        }
                    }
                }
            },
            b = a(1),
            E = a(34),
            x = a(41),
            A = a(66);

        function C(e, t) {
            var a, n, i, r = (a = e, n = t, i = null, Object.values(n).forEach(function(e) {
                e.hasOwnProperty(a) && (i = e[a])
            }), i);
            r && "useWebGL" !== e && (b.a[e] = r.defaultValue, N.saveSetting(e, void 0))
        }
        var I = function() {
                function e() {
                    Object(i.a)(this, e)
                }
                return Object(r.a)(e, null, [{
                    key: "init",
                    value: function() {
                        this.handlers()
                    }
                }, {
                    key: "handlers",
                    value: function() {
                        o()("#import-userdata").click(function() {
                            return o()("#import-input").click()
                        }), o()("#export-userdata").click(this.export.bind(this)), o()("#reset-userdata").click(this.reset.bind(this)), o()("#import-input").change(this.import.bind(this))
                    }
                }, {
                    key: "reset",
                    value: function() {
                        Object.keys(b.a).forEach(function(e) {
                            b.a.settings && C(e, w.game), b.a.theme && C(e, w.theme), b.a.controls && C(e, w.controls)
                        })
                    }
                }, {
                    key: "import",
                    value: function(e) {
                        var t = new FileReader;
                        t.onload = function() {
                            var e = JSON.parse(t.result),
                                a = localStorage.getItem(N.storeName),
                                n = {};
                            null !== a && "{}" !== a && (n = JSON.parse(a));
                            var i = Object(x.a)(Object(x.a)(Object(x.a)(Object(x.a)({}, n), e.settings), e.theme), e.controls);
                            for (var r in localStorage.setItem(N.storeName, JSON.stringify(i)), w)
                                for (var s in w[r])
                                    for (var o in w[r][s]) "useWebGL" !== o && (e.settings.hasOwnProperty(o) && b.a.settings || e.theme.hasOwnProperty(o) && b.a.theme || e.controls.hasOwnProperty(o) && b.a.controls) && (b.a[o] = e.settings[o] || e.theme[o] || e.controls[o], w[r][s][o].onchange && w[r][s][o].onchange())
                        };
                        var a = e.target.files[0];
                        t.readAsText(a)
                    }
                }, {
                    key: "export",
                    value: function() {
                        var e = {
                                settings: {},
                                controls: {},
                                theme: {}
                            },
                            t = [{
                                list: w.game,
                                export: e.settings,
                                check: b.a.settings
                            }, {
                                list: w.theme,
                                export: e.theme,
                                check: b.a.theme
                            }, {
                                list: w.controls,
                                export: e.controls,
                                check: b.a.controls
                            }],
                            a = function(e) {
                                t.forEach(function(t) {
                                    for (var a in t.list) t.list[a].hasOwnProperty(e) && t.check && (t.export[e] = b.a[e])
                                })
                            };
                        for (var n in b.a) a(n);
                        var i = new Blob([JSON.stringify(e)]);
                        Object(A.saveAs)(i, "export.senpa-data")
                    }
                }]), e
            }(),
            S = function() {
                function e() {
                    Object(i.a)(this, e), this.isOpen = !1, this.storeName = "Senpaio:settings", this.isInitialized = !1
                }
                return Object(r.a)(e, [{
                    key: "initialize",
                    value: function() {
                        this.isInitialized || (this.isInitialized = !0, this.attachEvents(), this.loadSettings(), I.init())
                    }
                }, {
                    key: "attachEvents",
                    value: function() {
                        this.tabEvents(), this.createElements()
                    }
                }, {
                    key: "tabEvents",
                    value: function() {
                        var e, t = o()("#settings-panel div[type=tab]"),
                            a = document.querySelector("#settings-panel .partition.right"),
                            i = Object(n.a)(t);
                        try {
                            var r = function() {
                                var t = e.value,
                                    n = t.getAttribute("target-container"),
                                    i = t.getAttribute("target-name"),
                                    r = o()("#settings-panel div[container-name='".concat(n, "']")),
                                    s = r.children("div[data-name=".concat(i, "]"));
                                o()(t).click(function() {
                                    var e = r.children("div[active]"),
                                        n = o()(t.parentElement).children("div[type=tab][active]");
                                    e.removeAttr("active"), s.attr("active", ""), n.removeAttr("active"), o()(t).attr("active", ""), a.scrollTop = 0
                                })
                            };
                            for (i.s(); !(e = i.n()).done;) r()
                        } catch (e) {
                            i.e(e)
                        } finally {
                            i.f()
                        }
                    }
                }, {
                    key: "createElements",
                    value: function() {
                        for (var e = 0, t = Object.keys(w); e < t.length; e++) {
                            for (var a = t[e], n = w[a], i = 0, r = Object.keys(n); i < r.length; i++)
                                for (var s = r[i], o = n[s], c = 0, l = Object.keys(o); c < l.length; c++) {
                                    var u = l[c],
                                        h = o[u];
                                    switch (h.type) {
                                        case "toggle":
                                            this.addToggle(h, u, s, a);
                                            break;
                                        case "dropdown":
                                            this.addDropdown(h, u, s, a);
                                            break;
                                        case "range":
                                            this.addRange(h, u, s, a);
                                            break;
                                        case "input":
                                            this.addInput(h, u, s, a);
                                            break;
                                        case "hotkey":
                                            this.addHotkey(h, u, s, a);
                                            break;
                                        case "colorpicker":
                                            this.addColorpicker(h, u, s, a)
                                    }
                                }
                            for (var d = 0, f = Object.keys(n); d < f.length; d++)
                                for (var m = n[f[d]], v = 0, p = Object.keys(m); v < p.length; v++) {
                                    var g = p[v],
                                        y = m[g];
                                    switch (y.type) {
                                        case "toggle":
                                            y.editList && y.onchange(b.a[g])
                                    }
                                }
                        }
                    }
                }, {
                    key: "addToggle",
                    value: function(e, t, a, n) {
                        var i = this,
                            r = this.getContainer(a, n),
                            s = document.getElementById("template-settings-toggle").children[0].outerHTML,
                            c = this.htmlFromTemplate(s, {
                                "setting-name": e.settingName,
                                "is-active": e.defaultValue ? "active" : ""
                            }),
                            l = o()(c);
                        l.attr("id", t), e.webGL && "OK" !== localStorage.getItem("Senpaio:WebGL") && l.attr("option", "disabled");
                        var u = l.children(".toggle-btn");
                        u.click(function() {
                            var e = !b.a[t];
                            b.a[t] = e, i.saveSetting(t, e)
                        });
                        var h = e.defaultValue,
                            d = {
                                get: function() {
                                    return h
                                },
                                set: function(t) {
                                    (h = t) ? u.addClass("active", ""): u.removeClass("active"), e.onchange && e.onchange(h)
                                },
                                enumerable: !0
                            };
                        Object.defineProperty(b.a, t, d), r.append(l)
                    }
                }, {
                    key: "addDropdown",
                    value: function(e, t, a, i) {
                        var r, s = this,
                            c = this.getContainer(a, i),
                            l = [],
                            u = {},
                            h = document.getElementById("template-settings-dropdown-option").children[0].outerHTML,
                            d = Object(n.a)(e.list);
                        try {
                            var f = function() {
                                var e = r.value,
                                    a = s.htmlFromTemplate(h, {
                                        "option-name": e.name
                                    }),
                                    n = o()(a);
                                n.attr("id", t), n.click(function() {
                                    b.a[t] = e.value, s.saveSetting(t, e.value)
                                }), l.push(n), u[e.value] = e.name
                            };
                            for (d.s(); !(r = d.n()).done;) f()
                        } catch (e) {
                            d.e(e)
                        } finally {
                            d.f()
                        }
                        for (var m = document.getElementById("template-settings-dropdown").children[0].outerHTML, v = this.htmlFromTemplate(m, {
                                "setting-name": e.settingName,
                                "selected-option": u[e.defaultValue]
                            }), p = o()(v), g = p.find(".dropdown-box .dropdown-list"), y = p.find(".selected"), k = 0, w = l; k < w.length; k++) {
                            var E = w[k];
                            g.append(E)
                        }
                        var x = e.defaultValue,
                            A = {
                                get: function() {
                                    return x
                                },
                                set: function(t) {
                                    x = t, y.html(u[x] || "Error"), e.onchange && e.onchange(x)
                                },
                                enumerable: !0
                            };
                        Object.defineProperty(b.a, t, A), c.append(p)
                    }
                }, {
                    key: "addRange",
                    value: function(e, t, a, n) {
                        var i = this,
                            r = this.getContainer(a, n),
                            s = document.getElementById("template-settings-range").children[0].outerHTML,
                            c = this.htmlFromTemplate(s, {
                                "setting-name": e.settingName,
                                "min-value": e.min,
                                "max-value": e.max,
                                "step-value": e.step,
                                "display-value": e.defaultValue,
                                "default-value": e.defaultValue,
                                "fill-amount": (e.defaultValue - e.min) / (e.max - e.min) * 100 | 0
                            }),
                            l = o()(c);
                        l.attr("id", t);
                        var u = l.find("input")[0],
                            h = l.find(".fake-range .fill")[0],
                            d = l.children(".value")[0];
                        u.addEventListener("input", function() {
                            var e = +u.value;
                            b.a[t] = e, i.saveSetting(t, e)
                        }, {
                            passive: !0
                        });
                        var f = e.defaultValue,
                            m = {
                                get: function() {
                                    return f
                                },
                                set: function(t) {
                                    f = t, h.style.width = "".concat((f - e.min) / (e.max - e.min) * 100 | 0, "%"), u.value = f, d.innerHTML = f, e.onchange && e.onchange(f)
                                },
                                enumerable: !0
                            };
                        Object.defineProperty(b.a, t, m), b.a[t] = f, r.append(l)
                    }
                }, {
                    key: "addInput",
                    value: function(e, t, a, n) {
                        var i = this,
                            r = this.getContainer(a, n),
                            s = document.getElementById("template-settings-input").children[0].outerHTML,
                            c = this.htmlFromTemplate(s, {
                                "setting-name": e.settingName,
                                "default-value": e.defaultValue
                            }),
                            l = o()(c);
                        l.attr("id", t);
                        var u = l.find("input");
                        u.change(function() {
                            var e = u.val();
                            b.a[t] = e, i.saveSetting(t, e)
                        });
                        var h = e.defaultValue,
                            d = {
                                get: function() {
                                    return h
                                },
                                set: function(t) {
                                    h = t, u.val(h), e.onchange && e.onchange(h)
                                },
                                enumerable: !0
                            };
                        Object.defineProperty(b.a, t, d), r.append(l)
                    }
                }, {
                    key: "addHotkey",
                    value: function(e, t, a, n) {
                        var i = this,
                            r = this.getContainer(a, n),
                            s = document.getElementById("template-settings-hotkey").children[0].outerHTML,
                            c = this.htmlFromTemplate(s, {
                                "setting-name": e.settingName,
                                "default-value": e.defaultValue
                            }),
                            l = o()(c);
                        l.attr("id", t);
                        var u = l.find("input")[0];
                        u.classList.add("hotkey"), u.addEventListener("keydown", function(e) {
                            e.preventDefault();
                            var a = E.a.keyboard.getKeyName(e);
                            if (a) {
                                for (var n = 0, r = Object.keys(w.controls.keyboard); n < r.length; n++) {
                                    var s = r[n];
                                    b.a[s] === a && (b.a[s] = "NO KEY", i.saveSetting(s, "NO KEY"))
                                }
                                b.a[t] = a, i.saveSetting(t, a)
                            }
                        });
                        var h = e.defaultValue,
                            d = {
                                get: function() {
                                    return h
                                },
                                set: function(t) {
                                    h = t, u.value = h, e.onchange && e.onchange(h)
                                },
                                enumerable: !0
                            };
                        Object.defineProperty(b.a, t, d), r.append(l)
                    }
                }, {
                    key: "addColorpicker",
                    value: function(e, t, a, n) {
                        var i = this,
                            r = this.getContainer(a, n),
                            s = document.getElementById("template-settings-colorpicker").children[0].outerHTML,
                            c = this.htmlFromTemplate(s, {
                                "setting-name": e.settingName,
                                "default-value": e.defaultValue
                            }),
                            l = o()(c);
                        l.attr("id", t);
                        var u = l.find("input");
                        o()(u).minicolors({
                            change: function(e, a) {
                                b.a[t] = e, i.saveSetting(t, e)
                            },
                            position: "bottom right"
                        });
                        var h = e.defaultValue,
                            d = {
                                get: function() {
                                    return h
                                },
                                set: function(t) {
                                    h = t, o()(u).minicolors("value", h), e.onchange && e.onchange(h)
                                },
                                enumerable: !0
                            };
                        Object.defineProperty(b.a, t, d), r.append(l)
                    }
                }, {
                    key: "getContainer",
                    value: function(e, t) {
                        var a = "div[data-name='".concat(t, "']"),
                            n = "div[data-name='".concat(e, "']");
                        return o()("".concat("#settings-panel div[container-name='settings-list']", " ").concat(a, " ").concat("div[container-name]", " ").concat(n))
                    }
                }, {
                    key: "saveSetting",
                    value: function(e, t) {
                        var a = {};
                        try {
                            var n = localStorage.getItem(this.storeName),
                                i = JSON.parse(n);
                            i && (a = i)
                        } catch (e) {
                            localStorage.removeItem(this.storeName)
                        }
                        a[e] = t;
                        var r = JSON.stringify(a);
                        localStorage.setItem(this.storeName, r)
                    }
                }, {
                    key: "loadSettings",
                    value: function() {
                        var e = {};
                        try {
                            var t = localStorage.getItem(this.storeName),
                                a = JSON.parse(t);
                            a && (e = a)
                        } catch (e) {
                            localStorage.removeItem(this.storeName)
                        }
                        for (var n = 0, i = Object.keys(e); n < i.length; n++) {
                            var r = i[n];
                            b.a[r] = e[r]
                        }
                    }
                }, {
                    key: "htmlFromTemplate",
                    value: function(e, t) {
                        for (var a = e, n = 0, i = Object.keys(t); n < i.length; n++) {
                            var r = i[n],
                                s = t[r];
                            a = a.replace("**".concat(r, "**"), s)
                        }
                        return a
                    }
                }, {
                    key: "hide",
                    value: function(e) {
                        o()("#settings-panel").fadeOut(300, e), this.isOpen = !1
                    }
                }, {
                    key: "show",
                    value: function() {
                        o()("#settings-panel").fadeIn(300), this.isOpen = !0
                    }
                }, {
                    key: "toggle",
                    value: function() {
                        this.isOpen ? this.hide() : this.show()
                    }
                }]), e
            }(),
            N = t.a = new S
    }, function(e, t, a) {
        "use strict";
        var n = a(3),
            i = a(4),
            r = a(26),
            s = a(50),
            o = function() {
                function e() {
                    Object(n.a)(this, e), this.list = [], this.index = 1
                }
                return Object(i.a)(e, [{
                    key: "reset",
                    value: function() {
                        this.list = [], this.index = 1
                    }
                }, {
                    key: "add",
                    value: function(e, t, a) {
                        this.list.push('\n      <div>\n        <div class="playerRow">\n            <span style=\'color:'.concat(a, '\' class="playerNick">').concat(s.a.clean(e) || r.a.nameForUnnamedCell, " (").concat(t, ")</span>\n            <span style='color:").concat(a, '\' class="playerIndex">').concat(this.index++, "</span>\n        </div>\n      </div>\n    "))
                    }
                }, {
                    key: "update",
                    value: function() {
                        this.positions = document.getElementById("leaderboard-positions"), this.positions.innerHTML = this.list.join("")
                    }
                }, {
                    key: "setTitle",
                    value: function(e) {
                        this.title = document.getElementById("leaderboard-title"), this.title.innerText = e
                    }
                }]), e
            }();
        t.a = new o
    }, function(e, t, a) {
        "use strict";
        var n = a(3),
            i = a(4),
            r = a(1),
            s = a(64),
            o = a.n(s),
            c = function() {
                function e() {
                    Object(n.a)(this, e), this.shield = new Image, this.shieldActiveImg = new Image, this.shieldActive = document.createElement("canvas"), this.shieldActiveImg.src = o.a
                }
                return Object(i.a)(e, [{
                    key: "init",
                    value: function() {
                        this.cache()
                    }
                }, {
                    key: "cache",
                    value: function() {
                        this.shield.src = o.a, this.updateTexture()
                    }
                }, {
                    key: "updateTexture",
                    value: function() {
                        var e = this.shieldActive,
                            t = e.getContext("2d");
                        t.clearRect(0, 0, e.width, e.height), e.width = e.height = 640, t.save(), t.translate(e.width / 2, e.height / 2), t.shadowColor = r.a.activeCellBorderColor, t.shadowBlur = 40;
                        for (var a = 0; a < 4; a++) t.drawImage(this.shieldActiveImg, -256, -256, 512, 512);
                        t.restore()
                    }
                }]), e
            }();
        t.a = new c
    }, function(e, t, a) {
        "use strict";
        var n = a(3),
            i = a(4),
            r = a(8),
            s = a(1),
            o = function() {
                function e() {
                    Object(n.a)(this, e), this.texture = r.j.WHITE, this.pool = [], this.index = 0
                }
                return Object(i.a)(e, [{
                    key: "initialize",
                    value: function() {
                        this.canvas = document.createElement("canvas"), this.createTexture()
                    }
                }, {
                    key: "update",
                    value: function() {
                        this.canvas && (this.createTexture(), this.texture.update())
                    }
                }, {
                    key: "reset",
                    value: function() {
                        this.index = 0
                    }
                }, {
                    key: "getSprite",
                    value: function() {
                        if (this.canvas) return this.pool[this.index++] || this.newSprite()
                    }
                }, {
                    key: "createTexture",
                    value: function() {
                        var e = this.canvas,
                            t = e.getContext("2d");
                        t.clearRect(0, 0, e.width, e.height);
                        var a = s.a.activeCellBorderWidth / 100 * 256,
                            n = a / 2;
                        e.width = 512, e.height = 512, t.beginPath(), t.arc(256, 256, 256 - n | 0, 0, 2 * Math.PI, !0), t.closePath(), t.lineWidth = 0 | a, t.strokeStyle = "#ffffff", t.stroke(), this.texture = r.j.from(e)
                    }
                }, {
                    key: "newSprite",
                    value: function() {
                        var e = new r.i(this.texture);
                        return e.anchor.x = .5, e.anchor.y = .5, this.pool.push(e), e
                    }
                }]), e
            }();
        t.a = new o
    }, , function(e, t, a) {
        "use strict";
        a.d(t, "a", function() {
            return o
        });
        var n = a(3),
            i = a(4),
            r = a(91),
            s = a.n(r),
            o = (a(104), function() {
                function e() {
                    Object(n.a)(this, e)
                }
                return Object(i.a)(e, null, [{
                    key: "initialize",
                    value: function() {
                        this.lastCheck = performance.now(), this.checkInterval = 800, this.redirectURL = "https://discord.gg/huDNH8m", this.bannedTitles = ["Senpa Plus", "Lukas"], this.redirecting = !1, this.checkAdBlock(), this.checkAntiExt()
                    }
                }, {
                    key: "addEventsToElements",
                    value: function(e) {
                        var t = this;
                        e.forEach(function(e) {
                            t.addEvent(document.querySelector(e))
                        })
                    }
                }, {
                    key: "addEvent",
                    value: function(e) {
                        e.addEventListener("click", function(e) {
                            e.isTrusted || (window.location.href = "https://www.youtube.com/watch?v=mMAnCgjeZ4Q&t=5")
                        })
                    }
                }, {
                    key: "checkAntiExt",
                    value: function() {
                        /**!1 !== Object.getOwnPropertyDescriptor(window, "dsc7r5e2nn7").writable && (window.location = "https://www.youtube.com/watch?v=dQw4w9WgXcQ") */
                    }
                }, {
                    key: "check",
                    value: function() {
                        /**!1 !== Object.getOwnPropertyDescriptor(window, "dsc7r5e2nn7").writable && (window.location = "https://www.youtube.com/watch?v=dQw4w9WgXcQ")*/
                    }
                }, {
                    key: "adBlockDetected",
                    value: function() {
                        document.body.innerHTML = "", s.a.fire({
                            title: "Adblock Detected",
                            text: "Senpa.io will only be able to stay online if you whitelist us",
                            confirmButtonText: "I have disabled Adblock",
                            allowOutsideClick: !1,
                            imageUrl: "https://i.imgur.com/cnNWXyA.gif",
                            imageHeight: 316,
                            imageWidth: 486
                        }).then(function(e) {
                            window.location.href = window.location.href
                        })
                    }
                }, {
                    key: "checkAdBlock",
                    value: function() {
                        var e = this;
                        if ("undefined" != typeof fuckAdBlock || "undefined" != typeof FuckAdBlock) this.adBlockDetected();
                        else {
                            var t = document.createElement("script");
                            t.onload = function() {
                                if (2 !== Object.keys(fuckAdBlock).length || FuckAdBlock.toString().length < 100) return e.adBlockDetected();
                                fuckAdBlock.onDetected(e.adBlockDetected)
                            }, t.onerror = function() {
                                return e.adBlockDetected()
                            }, t.src = "https://cdnjs.cloudflare.com/ajax/libs/fuckadblock/3.2.1/fuckadblock.min.js", document.head.appendChild(t)
                        }
                    }
                }]), e
            }())
    }, function(e, t, a) {
        "use strict";
        var n = a(3),
            i = a(4),
            r = a(1),
            s = function() {
                function e() {
                    Object(n.a)(this, e), this.canvas = document.createElement("canvas"), this.size = 150
                }
                return Object(i.a)(e, [{
                    key: "init",
                    value: function() {
                        this.cache()
                    }
                }, {
                    key: "draw",
                    value: function(e, t) {
                        var a = r.a.activeCellIndicatorSize;
                        e.drawImage(this.canvas, t.x - a / 2, t.y - t.radius - a, a, a)
                    }
                }, {
                    key: "cache",
                    value: function() {
                        var e = this.canvas,
                            t = e.getContext("2d");
                        t.clearRect(0, 0, e.width, e.height), e.width = e.height = this.size, t.textAlign = "center", t.textBaseline = "middle", t.font = "900 ".concat(this.size, "px 'Font Awesome 5 Free'"), t.fillStyle = r.a.activeCellIndicatorColor, t.fillText("", e.width / 2, e.height / 2)
                    }
                }]), e
            }();
        t.a = new s
    }, function(e, t, a) {
        "use strict";
        (function(e) {
            a.d(t, "a", function() {
                return r
            });
            var n = a(3),
                i = a(4),
                r = function() {
                    function t() {
                        Object(n.a)(this, t), this.buffer = e.allocUnsafe(1048576), this.offset = 0
                    }
                    return Object(i.a)(t, [{
                        key: "writeUInt8",
                        value: function(e) {
                            this.offset = this.buffer.writeUInt8(e, this.offset)
                        }
                    }, {
                        key: "writeInt8",
                        value: function(e) {
                            this.offset = this.buffer.writeInt8(e, this.offset)
                        }
                    }, {
                        key: "writeUInt16",
                        value: function(e) {
                            this.offset = this.buffer.writeUInt16LE(e, this.offset)
                        }
                    }, {
                        key: "writeInt16",
                        value: function(e) {
                            this.offset = this.buffer.writeInt16LE(e, this.offset)
                        }
                    }, {
                        key: "writeUInt32",
                        value: function(e) {
                            this.offset = this.buffer.writeUInt32LE(e, this.offset)
                        }
                    }, {
                        key: "writeInt32",
                        value: function(e) {
                            this.offset = this.buffer.writeInt32LE(e, this.offset)
                        }
                    }, {
                        key: "writeString8",
                        value: function(e) {
                            this.writeUInt8(e.length);
                            for (var t = 0; t < e.length; t++) {
                                var a = e.charCodeAt(t);
                                this.writeUInt8(a)
                            }
                        }
                    }, {
                        key: "writeLongString8",
                        value: function(e) {
                            this.writeUInt16(e.length);
                            for (var t = 0; t < e.length; t++) {
                                var a = e.charCodeAt(t);
                                this.writeUInt8(a)
                            }
                        }
                    }, {
                        key: "writeString16",
                        value: function(e) {
                            this.writeUInt8(e.length);
                            for (var t = 0; t < e.length; t++) {
                                var a = e.charCodeAt(t);
                                this.writeUInt16(a)
                            }
                        }
                    }, {
                        key: "writeLongString16",
                        value: function(e) {
                            this.writeUInt16(e.length);
                            for (var t = 0; t < e.length; t++) {
                                var a = e.charCodeAt(t);
                                this.writeUInt16(a)
                            }
                        }
                    }, {
                        key: "final",
                        get: function() {
                            var t = e.alloc(this.offset);
                            return this.buffer.copy(t, 0, 0, this.offset), t.buffer
                        }
                    }]), t
                }()
        }).call(this, a(80).Buffer)
    }, function(e, t, a) {
        "use strict";
        var n = a(3),
            i = a(4),
            r = a(8),
            s = a(1),
            o = a(64),
            c = a.n(o),
            l = function() {
                function e() {
                    Object(n.a)(this, e), this.size = 512, this.texture = r.j.WHITE, this.activeTexture = r.j.WHITE, this.image = new Image, this.indexes = {
                        shield: 0,
                        shieldActive: 0
                    }, this.pools = {
                        shield: [],
                        shieldActive: []
                    }
                }
                return Object(i.a)(e, [{
                    key: "update",
                    value: function() {
                        this.canvas && (this.createTextures(), this.texture.update(), this.activeTexture.update())
                    }
                }, {
                    key: "initialize",
                    value: function() {
                        var e = this;
                        this.canvas = document.createElement("canvas"), this.ctx = this.canvas.getContext("2d"), this.image.src = c.a, this.image.onload = function() {
                            e.texture = r.j.from(e.image)
                        }, this.createTextures()
                    }
                }, {
                    key: "reset",
                    value: function() {
                        this.indexes = {
                            shield: 0,
                            shieldActive: 0
                        }
                    }
                }, {
                    key: "add",
                    value: function(e, t, a) {
                        var n = t.radius;
                        a && (n *= 1.25);
                        var i = 14 * n / 100,
                            r = a ? this.pools.shieldActive[this.indexes.shieldActive++] || this.newSpriteActive() : this.pools.shield[this.indexes.shield++] || this.newSprite();
                        r.x = t.x, r.y = t.y, r.width = 2 * (n + i), r.height = 2 * (n + i), e.addChild(r)
                    }
                }, {
                    key: "createTextures",
                    value: function() {
                        var e = this.ctx;
                        e.clearRect(0, 0, this.canvas.width, this.canvas.height), this.canvas.width = this.canvas.height = 1.25 * this.size, e.save(), e.translate(this.canvas.width / 2, this.canvas.height / 2), e.shadowColor = s.a.activeCellBorderColor, e.shadowBlur = 40;
                        for (var t = 0; t < 4; t++) e.drawImage(this.image, 0 - this.size / 2, 0 - this.size / 2, this.size, this.size);
                        e.restore();
                        var a = r.b.from(this.canvas);
                        this.activeTexture = new r.j(a)
                    }
                }, {
                    key: "newSprite",
                    value: function() {
                        var e = new r.i(this.texture);
                        return e.anchor.x = .5, e.anchor.y = .5, this.pools.shield.push(e), e
                    }
                }, {
                    key: "newSpriteActive",
                    value: function() {
                        var e = new r.i(this.activeTexture);
                        return e.anchor.x = .5, e.anchor.y = .5, this.pools.shieldActive.push(e), e
                    }
                }]), e
            }();
        t.a = new l
    }, function(e, t, a) {
        "use strict";
        var n = a(3),
            i = a(4),
            r = function() {
                function e() {
                    Object(n.a)(this, e), this.levelCap = 100, this.cache = {
                        0: 0
                    };
                    for (var t = 1; t <= this.levelCap; t++) {
                        var a = this.expRequiredForLevel(t);
                        this.cache[t] = a
                    }
                }
                return Object(i.a)(e, [{
                    key: "realExp",
                    value: function(e) {
                        return e - this.cache[this.levelFromExp(e) - 1]
                    }
                }, {
                    key: "expRemainingToLevel",
                    value: function(e) {
                        return this.cache[this.levelFromExp(e)] - e
                    }
                }, {
                    key: "levelFromExp",
                    value: function(e) {
                        for (var t = 1; e >= this.realExpGainRequiredForLevelUp(t);) e -= this.realExpGainRequiredForLevelUp(t), t++;
                        return t > this.levelCap && (t = this.levelCap), t
                    }
                }, {
                    key: "realExpGainRequiredForLevelUp",
                    value: function(e) {
                        return this.cache[e] - this.cache[e - 1]
                    }
                }, {
                    key: "expRequiredForLevel",
                    value: function(e) {
                        var t = 0;
                        if (e <= 4) switch (e) {
                            case 1:
                                t = 50;
                                break;
                            case 2:
                                t = 125;
                                break;
                            case 3:
                                t = 250;
                                break;
                            case 4:
                                t = 500
                        } else {
                            for (var a = 1; a <= e; a++) t += 100 * a;
                            t -= 500
                        }
                        return t
                    }
                }]), e
            }();
        t.a = new r
    }, , function(e, t, a) {
        e.exports = a.p + "static/media/shield.c88be18c.png"
    }, function(e, t, a) {
        "use strict";
        a.d(t, "a", function() {
            return h
        });
        var n = a(3),
            i = a(4),
            r = a(2),
            s = a.n(r),
            o = a(66),
            c = a(94),
            l = a(16),
            u = a(19),
            h = function() {
                function e() {
                    Object(n.a)(this, e)
                }
                return Object(i.a)(e, null, [{
                    key: "show",
                    value: function() {
                        s()("#replays-panel").fadeIn(300), this.hidden = !1
                    }
                }, {
                    key: "hide",
                    value: function() {
                        s()("#replays-panel").fadeOut(300), this.hidden = !0
                    }
                }, {
                    key: "initialize",
                    value: function() {
                        this.hidden = !0, this.attachEvents(), document.querySelector("#replays-panel .replays-container")
                    }
                }, {
                    key: "attachEvents",
                    value: function() {
                        var e = this;
                        s()("#packets").on("input", function() {
                            l.a.paused = !0, l.a.nextTick(l.a.currentReplay, Number(s()("#packets").val()), !0)
                        }), s()("#packets").mouseup(function() {
                            l.a.paused = !1
                        }), s()("#replay-opacity-slider").on("input", function() {
                            var e = s()("#replay-opacity-slider").val();
                            l.a.opacity = Number(e) / 100, s()("#replay-opacity-text").text("".concat(e, "%"))
                        }), s()("#replays-panel .close-button").click(function() {
                            e.hide()
                        }), s()("#replays-toggle").click(function() {
                            e.show()
                        }), s()(".download-tap").click(function() {
                            e.downloadAll()
                        }), s()(".delete-tap").click(function() {
                            window.confirm("Are you sure you want to delete all replays?") && e.deleteAll()
                        }), s()(".import-tap input[type='file']").on("change", function(t) {
                            var a = new FileReader,
                                n = t.target.files[0];
                            a.readAsText(n), a.onload = function() {
                                var t = n.name.split(".senpa")[0];
                                l.a.localForage.setItem(t, a.result);
                                var i = l.a.parse(a.result);
                                e.addReplay(t, i), l.a.list.set(t, i)
                            }
                        })
                    }
                }, {
                    key: "addReplays",
                    value: function() {
                        var e = this;
                        l.a.list.forEach(function(t, a) {
                            e.addReplay(a, t)
                        })
                    }
                }, {
                    key: "deleteAll",
                    value: function() {
                        l.a.localForage.clear(), l.a.list.clear(), s()(".replay-content").empty()
                    }
                }, {
                    key: "download",
                    value: function(e) {
                        l.a.localForage.getItem(e, function(t, a) {
                            if (t) throw new Error(t);
                            var n = new Blob([a]);
                            Object(o.saveAs)(n, "".concat(e, ".senpa"))
                        })
                    }
                }, {
                    key: "downloadAll",
                    value: function() {
                        l.a.localForage.length(function(e, t) {
                            if (e) throw new Error(e);
                            if (0 === t) return alert("You don't have any replays to download");
                            var a = new c;
                            l.a.localForage.iterate(function(e, t) {
                                a.file("".concat(t, ".senpa"), e)
                            }, function(e) {
                                if (e) throw new Error(e);
                                a.generateAsync({
                                    type: "blob"
                                }).then(function(e) {
                                    Object(o.saveAs)(e, "senpaio-replays-".concat(Date.now(), ".zip"))
                                })
                            })
                        })
                    }
                }, {
                    key: "delete",
                    value: function(e) {
                        l.a.list.delete(e), l.a.localForage.removeItem(e)
                    }
                }, {
                    key: "addReplay",
                    value: function(e, t) {
                        var a = this,
                            n = s()("<div class='replay'>\n\t\t\t<div class='inner-content'>\n\t\t\t  <div class='replay-heading'>\n\t\t\t\t<div class='replay-control'>\n\t\t\t\t  <button type='button' class='download-btn'>\n\t\t\t\t\t<i class='fas fa-arrow-circle-down'></i>\n\t\t\t\t  </button>\n\t\t\t\t  <button type='button' class='delete-btn'>\n\t\t\t\t\t<i class='fas fa-times-circle'></i>\n\t\t\t\t  </button>\n\t\t\t\t</div>\n\t\t\t\t<div class='replay-name'>".concat(e, "</div>\n\t\t\t  </div>\n\t\t\t  <img  src='").concat(t.img, "' alt='replay cover'>\n\t\t\t</div>\n\t\t  </div>"));
                        n.find(".download-btn").click(function() {
                            a.download(e)
                        }), n.find(".delete-btn").click(function() {
                            window.confirm("Are you sure you want to delete this replay?") && (a.delete(e), n.remove())
                        }), n.find("img").click(function() {
                            console.log("RUNNING REPLAY"), l.a.run(t), a.hide(), u.a.hide()
                        }), s()(".replay-content").prepend(n)
                    }
                }]), e
            }()
    }, , , , function(e, t, a) {
        "use strict";
        var n = a(0),
            i = a.n(n),
            r = a(20);
        t.a = function() {
            return Object(n.useEffect)(function() {
                Object(r.d)()
            }, []), i.a.createElement("div", {
                id: "banner_ad_bottom",
                style: {
                    position: "absolute",
                    bottom: 0,
                    height: "100px",
                    width: "100%",
                    textAlign: "center"
                }
            }, i.a.createElement("ins", {
                className: "adsbygoogle",
                style: {
                    display: "inline-block",
                    width: "728px",
                    height: "90px"
                },
                "data-ad-client": "ca-pub-8083432840686229",
                "data-ad-slot": 2937976491
            }))
        }
    }, function(e, t, a) {
        "use strict";
        var n = a(3),
            i = a(4),
            r = function() {
                function e() {
                    Object(n.a)(this, e), this.text = ""
                }
                return Object(i.a)(e, [{
                    key: "update",
                    value: function() {
                        this.element = document.getElementById("server-info"), this.element.innerHTML = this.text
                    }
                }]), e
            }();
        t.a = new r
    }, function(e, t, a) {
        "use strict";
        var n = a(3),
            i = a(4),
            r = function() {
                function e() {
                    Object(n.a)(this, e), this.text = ""
                }
                return Object(i.a)(e, [{
                    key: "update",
                    value: function() {
                        this.element = document.getElementById("room-stats-hud"), this.element.innerHTML = this.text
                    }
                }]), e
            }();
        t.a = new r
    }, function(e, t, a) {
        e.exports = a.p + "static/media/rainbow.c4c9a543.png"
    }, function(e, t, a) {
        "use strict";
        var n = a(3),
            i = a(4),
            r = (a(25), a(7)),
            s = a(42),
            o = (a(81), a(60)),
            c = a(5),
            l = a(6),
            u = function() {
                function e() {
                    Object(n.a)(this, e)
                }
                return Object(i.a)(e, [{
                    key: "handle",
                    value: function(e) {
                        for (var t = e.readUInt16(), a = 0; a < t; a++) {
                            var n = e.readUInt32(),
                                i = e.readUInt32();
                            r.a.eatCell(n, i)
                        }
                        for (var o = e.readUInt16(), u = 0; u < o; u++) {
                            var h = e.readUInt32(),
                                d = e.readInt32(),
                                f = e.readInt32(),
                                m = e.readUInt16(),
                                v = e.readUInt8(),
                                p = r.a.newCell(h, d, f, m, v);
                            if (0 === v) {
                                var g = e.readUInt16();
                                p.parentPlayerID = g, r.a.ownCellCheck(p);
                                var y = e.readUInt8(),
                                    k = e.readUInt8(),
                                    w = e.readUInt8();
                                p.r = y, p.g = k, p.b = w, p.color = s.a.rgb2hex(y, k, w)
                            }
                            if (2 === v) {
                                var b = e.readUInt8(),
                                    E = e.readUInt8(),
                                    x = e.readUInt8();
                                p.r = b, p.g = E, p.b = x, p.color = s.a.rgb2hex(b, E, x)
                            }
                            p.hidden = !1
                        }
                        for (var A = e.readUInt16(), C = 0; C < A; C++) {
                            var I = e.readUInt32(),
                                S = e.readInt32(),
                                N = e.readInt32(),
                                O = e.readUInt16(),
                                T = r.a.getCell(I);
                            T ? T.update(S, N, O) : console.log("No cell with ID ".concat(I, " exist la, update what?")), T.hidden = !1
                        }
                        for (var j = e.readUInt16(), U = 0; U < j; U++) {
                            var P = e.readUInt32();
                            r.a.removeCell(P)
                        }
                        if (e.index + 1 <= e.maxIndex && (c.a.activeTab = e.readUInt8()), e.index + 4 <= e.maxIndex) {
                            var B = e.readUInt32();
                            l.a.update(0, 0, B, B)
                        }
                    }
                }, {
                    key: "create",
                    value: function(e, t, a, n) {
                        var i = new o.a;
                        i.writeUInt8(20), i.writeUInt16(e.length);
                        for (var r = 0; r < e.length; r++) {
                            var s = e[r];
                            i.writeUInt32(s.hunter), i.writeUInt32(s.prey)
                        }
                        i.writeUInt16(t.length);
                        for (var c = 0; c < t.length; c++) {
                            var l = t[c];
                            i.writeUInt32(l.id), i.writeInt32(l.x), i.writeInt32(l.y), i.writeUInt16(l.radius), i.writeUInt8(l.type), 0 === l.type && (i.writeUInt16(l.parentPlayerID), i.writeUInt8(l.r), i.writeUInt8(l.g), i.writeUInt8(l.b)), 2 === l.type && (i.writeUInt8(l.r), i.writeUInt8(l.g), i.writeUInt8(l.b))
                        }
                        i.writeUInt16(a.length);
                        for (var u = 0; u < a.length; u++) {
                            var h = a[u];
                            i.writeUInt32(h.id), i.writeInt32(h.x), i.writeInt32(h.y), i.writeUInt16(h.radius)
                        }
                        i.writeUInt16(n.length);
                        for (var d = 0; d < n.length; d++) i.writeUInt32(n[d]);
                        return i.final
                    }
                }]), e
            }();
        t.a = new u
    }, function(e, t, a) {
        "use strict";
        var n = a(3),
            i = a(4),
            r = (a(25), a(42)),
            s = a(45),
            o = a(7),
            c = a(60),
            l = function() {
                function e() {
                    Object(n.a)(this, e)
                }
                return Object(i.a)(e, [{
                    key: "handle",
                    value: function(e) {
                        for (var t = e.readUInt8(), a = 0; a < t; a++) {
                            var n = e.readUInt16(),
                                i = e.readUInt16(),
                                c = e.readUInt8(),
                                l = e.readUInt8(),
                                u = e.readUInt8(),
                                h = r.a.rgb2hex(c, l, u),
                                d = e.readString8(),
                                f = new s.a(n, i, h, d, c, l, u);
                            o.a.playersList.set(n, f)
                        }
                        for (var m = e.readUInt8(), v = 0; v < m; v++) {
                            var p = e.readUInt16(),
                                g = o.a.playersList.get(p) || new s.a,
                                y = e.readUInt8();
                            if (1 & y) {
                                var k = e.readUInt8(),
                                    w = e.readUInt8(),
                                    b = e.readUInt8();
                                g.color = r.a.rgb2hex(k, w, b)
                            }
                            2 & y && (g.skinURL = e.readString8())
                        }
                        for (var E = e.readUInt8(), x = 0; x < E; x++) {
                            var A = e.readUInt16();
                            o.a.playersList.delete(A)
                        }
                    }
                }, {
                    key: "create",
                    value: function(e) {
                        var t = new c.a;
                        t.writeUInt8(11), t.writeUInt8(e.length);
                        for (var a = 0; a < e.length; a++) {
                            var n = e[a];
                            t.writeUInt16(n.id), t.writeUInt16(n.parentClientID), t.writeUInt8(n.r), t.writeUInt8(n.g), t.writeUInt8(n.b), t.writeString8(n.skinURL)
                        }
                        return t.writeUInt8(0), t.writeUInt8(0), t.final
                    }
                }]), e
            }();
        t.a = new l
    }, function(e, t, a) {
        "use strict";
        var n = a(3),
            i = a(4),
            r = (a(25), a(33)),
            s = a(7),
            o = a(42),
            c = a(60),
            l = a(17),
            u = (a(12), function() {
                function e() {
                    Object(n.a)(this, e)
                }
                return Object(i.a)(e, [{
                    key: "handle",
                    value: function(e) {
                        for (var t = e.readUInt8(), a = 0; a < t; a++) {
                            var n = e.readUInt16(),
                                i = 0 !== e.readUInt8(),
                                c = e.readString16(),
                                u = e.readString16(),
                                h = e.readUInt8(),
                                d = e.readUInt8(),
                                f = e.readUInt8(),
                                m = o.a.rgb2hex(h, d, f),
                                v = new r.a(n, i, c, u, m, h, d, f);
                            s.a.clientsList.set(n, v)
                        }
                        for (var p = e.readUInt8(), g = 0; g < p; g++) {
                            var y = e.readUInt16(),
                                k = s.a.clientsList.get(y) || new r.a,
                                w = e.readUInt8();
                            if (1 & w && (k.nick = e.readString16()), 2 & w && (k.tag = e.readString16()), 4 & w) {
                                var b = e.readUInt8(),
                                    E = e.readUInt8(),
                                    x = e.readUInt8();
                                k.teamColor = o.a.rgb2hex(b, E, x)
                            }
                        }
                        for (var A = e.readUInt8(), C = 0; C < A; C++) {
                            var I = e.readUInt16();
                            s.a.clientsList.delete(I)
                        }(t || p || A) && l.a.isClanWarsGame && (console.log("Got clients update"), l.a.update())
                    }
                }, {
                    key: "create",
                    value: function(e) {
                        var t = new c.a;
                        t.writeUInt8(10), t.writeUInt8(e.length);
                        for (var a = 0; a < e.length; a++) {
                            var n = e[a];
                            t.writeUInt16(n.id), t.writeUInt8(Number(n.isBot)), t.writeString16(n.nick), t.writeString16(n.tag), t.writeUInt8(n.r), t.writeUInt8(n.g), t.writeUInt8(n.b)
                        }
                        return t.writeUInt8(0), t.writeUInt8(0), t.final
                    }
                }]), e
            }());
        t.a = new u
    }, function(e, t, a) {
        "use strict";
        a.d(t, "a", function() {
            return l
        });
        var n = a(3),
            i = a(4),
            r = a(2),
            s = a.n(r),
            o = a(31),
            c = a(24),
            l = function() {
                function e() {
                    Object(n.a)(this, e)
                }
                return Object(i.a)(e, null, [{
                    key: "initialize",
                    value: function() {
                        this.tracklist = [], this.element = s()("#music-panel"), this.audio = document.getElementById("music"), this.audio.crossOrigin = "anonymous", this.isOpen = !1, c.a.initialize(), o.a.initialize(), this.attachEvents(), this.audio.addEventListener("ended", this.onEnd.bind(this))
                    }
                }, {
                    key: "show",
                    value: function() {
                        this.isOpen = !0, this.element.fadeIn(450)
                    }
                }, {
                    key: "hide",
                    value: function() {
                        this.isOpen = !1, this.element.fadeOut(450)
                    }
                }, {
                    key: "attachEvents",
                    value: function() {
                        var e = this;
                        s()("#music-toggle").click(function() {
                            e.show()
                        }), s()("#music-panel .close-button").click(function() {
                            e.hide()
                        }), s()("#music-panel .load-playlist-tap").click(function() {
                            var t = window.prompt("Enter the url of a soundcloud playlist");
                            o.a.getPlaylist(t).then(function(t) {
                                e.clear(), e.tracklist = t, e.tracklist.forEach(function(t) {
                                    return e.addSong(t)
                                })
                            }).catch(function(e) {
                                return alert(e)
                            })
                        }), s()("#music-panel .load-track-tap").click(function() {
                            var t = window.prompt("Enter the url of a soundcloud track");
                            o.a.getTrack(t).then(function(t) {
                                e.clear(), e.addSong(t), e.tracklist = [t]
                            }).catch(function(e) {
                                return alert(e)
                            })
                        })
                    }
                }, {
                    key: "addSong",
                    value: function(e) {
                        var t = this,
                            a = e.url,
                            n = e.title,
                            i = e.artwork,
                            r = "<div class='song'> <div class='inner-content'> <div class='song-heading'> <div class='song-name'>title</div> </div> <img src='artwork' alt='song cover'> </div> </div>".replace("title", n).replace("artwork", i || "https://i.imgur.com/ERmeOcM.png"),
                            o = s()(r);
                        o.click(function() {
                            t.audio.src = a, t.audio.crossOrigin = "anonymous", t.audio.play(), t.playing = e
                        }), s()(".music-content").append(o)
                    }
                }, {
                    key: "clear",
                    value: function() {
                        this.tracklist = [], this.audio.pause(), this.playing = null, s()(".music-content").empty()
                    }
                }, {
                    key: "onEnd",
                    value: function() {
                        var e = this.tracklist.indexOf(this.playing);
                        if (-1 !== e) {
                            var t = this.tracklist[e + 1] || this.tracklist[0];
                            this.audio.src = t.url, this.audio.play(), this.playing = t
                        }
                    }
                }, {
                    key: "playing",
                    get: function() {
                        return this._playing
                    },
                    set: function(e) {
                        this._playing = e, e && c.a.normal("CLIENT", "Now playing: ".concat(e.title))
                    }
                }]), e
            }()
    }, function(e, t, a) {
        "use strict";
        var n = a(3),
            i = a(4),
            r = a(54),
            s = a(5),
            o = a(9),
            c = new(function() {
                function e() {
                    Object(n.a)(this, e), this.fps = 0
                }
                return Object(i.a)(e, [{
                    key: "update",
                    value: function() {
                        var e = [];
                        if (e.push("FPS: ".concat(this.fps)), e.push("Latency: ".concat(o.a.latency, "ms")), s.a.isAlive && (e.push("Score: ".concat(s.a.score)), e.push("Mass: ".concat(s.a.mass)), s.a.biggestCellMass > 35)) {
                            var t = s.a.biggestCellMass * (s.a.biggestCellMass < 1e3 ? .35 : .38) | 0;
                            e.push("STE: ".concat(t))
                        }
                        s.a.isStopped && e.push("[MOVEMENT STOPPED]"), this.statsElement = document.getElementById("stats-hud"), this.statsElement.innerHTML = e.join("   "), this.fps = 0
                    }
                }]), e
            }()),
            l = a(1),
            u = a(2),
            h = a.n(u),
            d = a(70),
            f = a(71),
            m = a(11),
            v = a(45),
            p = a(27),
            g = a(6),
            y = a(7),
            k = a(50),
            w = a(46),
            b = new(function() {
                function e() {
                    Object(n.a)(this, e)
                }
                return Object(i.a)(e, [{
                    key: "getLocation",
                    value: function(e, t) {
                        var a = g.a.right - g.a.left,
                            n = t / (a / 5) | 0,
                            i = e / (a / 5) | 0;
                        return n = n < 0 ? 0 : n >= 5 ? 4 : n, i = i < 0 ? 0 : i >= 5 ? 4 : i, String.fromCharCode(n + 65) + (i + 1)
                    }
                }, {
                    key: "update",
                    value: function() {
                        if (p.c.isAlive) {
                            var e, t = [],
                                a = [],
                                n = Object(m.a)(w.a.playerList.keys());
                            try {
                                for (n.s(); !(e = n.n()).done;) {
                                    var i = e.value,
                                        r = y.a.playersList.get(i) || new v.a;
                                    if (!r.parentClient.isBot && -1 === t.indexOf(r.parentClient.id)) {
                                        t.push(r.parentClient.id);
                                        var s, o = 0,
                                            c = 0,
                                            l = 0,
                                            u = 0,
                                            h = Object(m.a)(w.a.playerList.values());
                                        try {
                                            for (h.s(); !(s = h.n()).done;) {
                                                var d = s.value;
                                                y.a.playersList.has(d.id) && y.a.playersList.get(d.id).parentClient.id === r.parentClient.id && (o++, c += d.x, l += d.y, u += d.radius * d.radius / 100 | 0)
                                            }
                                        } catch (e) {
                                            h.e(e)
                                        } finally {
                                            h.f()
                                        }
                                        c /= o, l /= o, a.length < 5 && a.push({
                                            nick: r.parentClient ? r.parentClient.nick : "",
                                            location: this.getLocation(c, l),
                                            mass: u > 999 ? "".concat((u / 100 | 0) / 10, "k") : u,
                                            massInt: u
                                        })
                                    }
                                }
                            } catch (e) {
                                n.e(e)
                            } finally {
                                n.f()
                            }
                            a.sort(function(e, t) {
                                return t.massInt - e.massInt
                            });
                            for (var f = "", g = 0; g < 5; g++)
                                if (a[g]) {
                                    var b = a[g],
                                        E = b.nick,
                                        x = b.location,
                                        A = b.mass;
                                    f += '\n                <div>\n                    <div class="playerRow">\n                        <span style=\'color: white\' class="playerIndex">'.concat(g + 1, "</span>\n                        <span style='color: white' class=\"playerMass\">[").concat(A, "]</span>\n                        <span style='color: white' class=\"playerLocation\">[").concat(x, "]</span>\n                        <span style='color: white'\n                          class=\"playerNick\">").concat(k.a.clean(E) || p.a.defaultCellName, "</span>\n                    </div>\n                </div>\n            ")
                                } document.getElementById("teamplayers-positions").innerHTML = f
                        } else document.getElementById("teamplayers-positions").innerHTML = ""
                    }
                }]), e
            }()),
            E = function() {
                function e() {
                    Object(n.a)(this, e), this.updateTime = Date.now()
                }
                return Object(i.a)(e, [{
                    key: "update",
                    value: function() {
                        c.fps++;
                        var e = Date.now();
                        e - this.updateTime < 1e3 || (this.updateTime = e, r.a.update(), c.update(), d.a.update(), f.a.update(), b.update())
                    }
                }, {
                    key: "toggleHUD",
                    value: function() {
                        l.a.hideHUD ? (h()("#chat-room").fadeOut(300), h()(".leaderboard-hud").fadeOut(300), h()(".teamplayers-hud").fadeOut(300), h()(".minimap-hud").fadeOut(300), h()(".timeleft").fadeOut(300), h()("#room-stats-hud").fadeOut(300), h()("#stats-hud").fadeOut(300), h()("#server-info").fadeOut(300)) : (h()("#chat-room").fadeIn(300), h()(".leaderboard-hud").fadeIn(300), h()(".teamplayers-hud").fadeIn(300), h()(".minimap-hud").fadeIn(300), h()(".timeleft").fadeIn(300), h()("#room-stats-hud").fadeIn(300), h()("#stats-hud").fadeIn(300), h()("#server-info").fadeIn(300))
                    }
                }]), e
            }();
        t.a = new E
    }, function(e, t, a) {
        e.exports = a.p + "static/media/avatar.6c0eb5f9.png"
    }, function(e, t, a) {
        "use strict";
        var n = a(15),
            i = a(0),
            r = a.n(i),
            s = a(20),
            o = a(10),
            c = a(62),
            l = (a(116), a(78)),
            u = a.n(l),
            h = function(e) {
                var t = e.logoutUser,
                    a = Object(i.useState)({
                        realName: "",
                        level: 0,
                        expRequiredForLevel: 0,
                        realExp: 0,
                        expPercent: 0
                    }),
                    s = Object(n.a)(a, 2),
                    l = s[0],
                    h = s[1],
                    d = Object(i.useState)(u.a),
                    f = Object(n.a)(d, 2),
                    m = f[0],
                    v = f[1];
                return Object(i.useEffect)(function() {
                    var e = function(e) {
                        if (e) {
                            var t = e.realName,
                                a = e.avatarURL,
                                n = e.experience,
                                i = void 0 === n ? 0 : n,
                                r = !t || t.length < 1 ? "You are logged in" : t,
                                s = c.a.levelFromExp(i),
                                o = c.a.realExpGainRequiredForLevelUp(s),
                                l = c.a.realExp(i),
                                d = l / o * 100;
                            d < 5 && (d = 5), d > 100 && (d = 100), h({
                                realName: r,
                                level: s,
                                expRequiredForLevel: o,
                                realExp: l,
                                expPercent: d
                            }), v(a || u.a)
                        }
                    };
                    return e(o.a.profile), o.a.registerProfileListener(e),
                        function() {
                            o.a.unregisterProfileListener(e)
                        }
                }, []), r.a.createElement("div", {
                    className: "account-profile"
                }, r.a.createElement("div", {
                    style: {
                        display: "flex"
                    }
                }, r.a.createElement("img", {
                    id: "pf-avatar",
                    draggable: "false",
                    src: m,
                    onError: function() {
                        return v(u.a)
                    },
                    alt: "avatar"
                }), r.a.createElement("div", {
                    className: "account-panel"
                }, r.a.createElement("div", null, r.a.createElement("div", {
                    id: "pf-name",
                    className: "truncate",
                    style: {
                        fontSize: "1.4rem",
                        fontWeight: "bold"
                    }
                }, l.realName)), r.a.createElement("div", null, r.a.createElement("div", {
                    id: "pf-level"
                }, "Level ", l.level)))), r.a.createElement("div", {
                    className: "exp-area"
                }, r.a.createElement("div", {
                    id: "pf-exp-fill",
                    className: "exp-fill",
                    style: {
                        width: "calc(".concat(l.expPercent, "% - 10px)")
                    }
                }), r.a.createElement("div", {
                    id: "pf-exp",
                    className: "exp-info"
                }, "".concat(l.realExp, " / ").concat(l.expRequiredForLevel, " EXP"))), r.a.createElement("div", {
                    style: {
                        textAlign: "right"
                    }
                }, r.a.createElement("button", {
                    id: "btnLogout",
                    onClick: t
                }, r.a.createElement("i", {
                    className: "fas fa-sign-out-alt"
                }), " Logout")))
            };
        t.a = function() {
            var e = Object(i.useRef)(null),
                t = Object(i.useRef)(null),
                a = Object(i.useState)("loggedout"),
                c = Object(n.a)(a, 2),
                l = c[0],
                u = c[1];
            Object(i.useEffect)(function() {
                var e = function() {
                    var e = null === o.a.authToken ? "loggedout" : o.a.profile ? "loggedin" : "loading";
                    u(e)
                };
                return o.a.registerProfileListener(e), e(),
                    function() {
                        o.a.unregisterProfileListener(e)
                    }
            });
            var d = function(a, n) {
                    var i = "toolbar=no, menubar=no, width=600, height=700, top=100, left=100";
                    null === e.current || e.current.closed ? e.current = window.open(a, n, i) : t.current !== a ? (e.current = window.open(a, n, i), e.current.focus()) : e.current.focus(), window.onmessage = function(e) {
                        return f(e)
                    }, t.current = a
                },
                f = function(e) {
                    var t = e.data.token;
                    t && (o.a.setAuthToken(t), o.a.fetchProfileData(s.b.AuthAccount))
                };
            return r.a.createElement("div", {
                id: "account-panel"
            }, "loggedout" === l ? r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
                style: {
                    textAlign: "center"
                }
            }, r.a.createElement("b", null, "Sign in to access exclusive features!")), r.a.createElement("div", {
                style: {
                    textAlign: "left"
                }
            }, r.a.createElement("p", {
                style: {
                    fontSize: "22px",
                    marginTop: "5px",
                    marginBottom: "-5px"
                }
            }, "Unlock:"), r.a.createElement("ul", {
                id: "feature-list",
                style: {
                    fontSize: "18px"
                }
            }, r.a.createElement("li", null, "player skins"), r.a.createElement("li", null, "level up"), r.a.createElement("li", null, "power ups (Coming Soon!)"))), r.a.createElement("div", {
                style: {
                    display: "flex",
                    justifyContent: "space-around"
                }
            }, r.a.createElement("button", {
                id: "btnLoginFB",
                onClick: function() {
                    d(s.b.AuthFacebook, "Login with Facebook")
                }
            }, r.a.createElement("i", {
                className: "fab fa-facebook-square"
            }), " Login"), r.a.createElement("button", {
                id: "btnLoginDisc",
                onClick: function() {
                    d(s.b.AuthDiscord, "Login with Discord")
                }
            }, r.a.createElement("i", {
                className: "fab fa-discord"
            }), " Login"))) : "loggedin" === l ? r.a.createElement(h, {
                logoutUser: function() {
                    o.a.reset()
                }
            }) : "loading" === l ? r.a.createElement("div", {
                style: {
                    marginTop: "75px",
                    textAlign: "center"
                }
            }, r.a.createElement("h2", null, "Loading...")) : r.a.createElement(r.a.Fragment, null))
        }
    }, , function(e, t, a) {
        "use strict";
        var n = a(3),
            i = a(4),
            r = a(1),
            s = a(45),
            o = a(42),
            c = a(26),
            l = function() {
                function e() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1,
                        a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                        c = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
                    Object(n.a)(this, e), this.id = t, this.parentPlayerID = -1, this.parentPlayer = new s.a, this.type = c, this.isOwn = -1, this.startX = a, this.x = a, this.endX = a, this.startY = i, this.y = i, this.endY = i, this.startRadius = r, this.radius = r, this.endRadius = r, this._color = o.a.randomColor(), this.updateTime = Date.now(), this.removed = !1, this.dt = 0
                }
                return Object(i.a)(e, [{
                    key: "animate",
                    value: function() {
                        var e = (Date.now() - this.updateTime) / r.a.cellAnimation;
                        e = e > 1 ? 1 : e < 0 ? 0 : e, this.x = this.startX + (this.endX - this.startX) * e, this.y = this.startY + (this.endY - this.startY) * e, this.radius = this.startRadius + (this.endRadius - this.startRadius) * e, this.dt = e
                    }
                }, {
                    key: "update",
                    value: function(e, t, a) {
                        this.animate(), this.startX = this.x, this.startY = this.y, this.startRadius = this.radius, this.endX = e, this.endY = t, this.endRadius = a, this.updateTime = Date.now()
                    }
                }, {
                    key: "color",
                    get: function() {
                        return this._color
                    },
                    set: function(e) {
                        this._color = e
                    }
                }, {
                    key: "isTR",
                    get: function() {
                        return c.a.trainingMode && this.parentPlayer.parentClient.tag === c.a.trainingModeTag
                    }
                }, {
                    key: "nick",
                    get: function() {
                        return this.parentPlayer.parentClient.nick
                    }
                }, {
                    key: "skin",
                    get: function() {
                        return this.parentPlayer.skinURL
                    }
                }, {
                    key: "mass",
                    get: function() {
                        return this.endRadius * this.endRadius / 100 | 0
                    }
                }, {
                    key: "isBot",
                    get: function() {
                        return this.parentPlayer.parentClient.isBot
                    }
                }, {
                    key: "isPlayerCell",
                    get: function() {
                        return 0 === this.type
                    }
                }, {
                    key: "isVirus",
                    get: function() {
                        return 1 === this.type
                    }
                }, {
                    key: "isEject",
                    get: function() {
                        return 2 === this.type
                    }
                }, {
                    key: "isFood",
                    get: function() {
                        return 3 === this.type
                    }
                }]), e
            }();
        t.a = l
    }, , function(e, t, a) {
        e.exports = a.p + "static/media/no-skin.37fd41f2.png"
    }, , , , , function(e, t, a) {}, , , , , , , function(e, t, a) {
        e.exports = a.p + "static/media/logo-med.386db42e.png"
    }, function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATsAAAD1CAYAAAAvSVK3AAAACXBIWXMAAAsTAAALEwEAmpwYAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1dT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDYbrnjg+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAADzlJREFUeNrs3Ttz21iaBuBP6wvd3W71zG6xagJmzJQpU6bMmbPO+hfML9psM2fOnClTpkyZMmasrZrS7uw2Z9xu+iJOQKB0dBokARkgYfJ5qlztloULD4GX38E5BI4Wi0UA7Lt/0wSAsAMQdgDCDkDYAQg7AGEHIOwAhB0g7ACEHYCwAxB2AMIOQNgBCDsAYQcg7ABhByDsAIQdwLfgqSZgjz2PiGFEHLWwrv+JiN81qcoO+uYoIv69paD7LOiEHfTVn1vsufxTcwo76KPviz9tuIuI95pU2EHfPC2qura8j4iFZhV20Mfu61GL69OFFXbQOy8jYtDi+j5ExBfNKuygb93Xn1pep2t1wg56p61pJiXTTYQd9LL7+rzldbpWJ+ygV5500H1dRMRvmlbYQZ+0PfoasRyYuNO0wg764vuIeNHBeg1MCDvo1bH7Uwfr/RwRc80r7KAvfozl9TpVHcKOvfU0liOwXTAwIeygN/4U7Q9KRCzn1fnGhLCDXngR3QxKqOqEHfTKTx2t9y6WU04QdrBzP0TEs47W/SHcyknYQQ8cRcRxh+vXhRV20Asvo5upJhHLQQlz64Qd9KKq+7HD9btWJ+ygF37o+FgVdsIO9r6q04UVdtCbqu5Jh+tX1Qk76IWXHa9f2Ak72Lnvor0HXVe5i4iPmlnYwb5Xdb+HicTCDnbsebT7WERdWGEHvfTDFrZhFPaAPNUEe/M+/mWH2/9bRHxqcX1Hsbzlepc+hudMqOxgx76Pbu5Xl/JMWGEHB9GFFXbCDnbeJX/e8TZMORF20IsubNcMTAg72LnvhB3Cjn33LLq7E7GwE3ZwUFXdXbQ7TQZhB4292MI2DEwIO9j5sfh8C9sRdsIO9r6qE3bCDoQdwg62YbCFbXwO34cVdrBDT6PbW6+XjMIKO9ip51vajrATdrD3XVhhJ+zgYCq7z5pa2MGuHMV2viIm7IQd7NQ2g87DdYQdHETYIexA2CHsoEvbeujTF00t7OAQwk5lJ+xgZ45Udgg7VHXt8p1YYQc782SL21LZCTvY+7C7C3PshJ0m4ACOP11YhB07ta1rdsKOrV4gpjufI+K/d7j9x4aJyg5hx0Gc0EfaBt1YHH/tMTiBsEPY4WAD3ViEHXxDYQfCjoOgskPYAcIOHH842KAFiz3bDsIOhBDCDrpm1BdhBwg70I1F2EELtjX/TTcWYYewQ9jBvoSd4xwHASo7DoObd+7P+/iXHW7/bxHxSdihsoNqXxznCDuEneMcBwHCrpEnmhphxy59dpwj7DgEd7GdQYojxzoOAA6lutOVFXYg7BB20LVPW9qOsBN2cBBhZwK9sANhh7CDrn2J7cy3E3bCDnbuo7BD2CHs2nEUBimEHezYfEvbeaaphR3s0qfYzvMohJ2wg51abKkrK+yEHezc78IOYYeway/s3LVY2MFOfYrtzLd7rqmFHRxCdSfshB3s3Adhh7DjEMyj+5t5CjthBzu32EJ19yR8dUzYga4swg624/foflR2oJmFHfTBe2GHsOMQ/Nbx+p+G63bCDnrgc3R/JxTV3YE5WiwWWsEH19fqYrrIdxHxHx3u84eI+F+HzeFQyu+Puz17PR9iOVDR1Q03B7H8nqxPe9UA7Nw/Oz72TUERdtAL7zuuvL7TxMIO+tI177K6e6GJhR30qSvbVXX3NNzQU9hBT3yJbufd6coKO+iNfwg7hB2H4HN09xWyZ2EKlrCDHplFd9fuvte8wg764kuH1Z2wE3ZwENXd0zDBWNhBj9xFd4MVqjthB73yj+jm5p7CTthBrywi4teOzgXTUIQd9MpvEfGxg/X+oGmFHfTN/3ewzhfR3S2lEHbwKB+jm6koqjthB73za7R/01IDFcIOeucu2h+seBoGKoQd9ND7aH+wQldW2EEv/V/L63sRbg4g7KCHPkX736x4qVmFHfTRLJa3gmqzK+v8EHbQO4uI+HuL6zsK1+6EHfTUx2j3AT0vi9BD2EHv/Npid/ZJmIYi7KDH3dk2R2d/1KTCDvpqHu2Nzj5T3Qk76LNZLKekqO4Qdux9d/bv0c5t3J/HcqIx37CjxWKhFQCVHYCwA/hG+LLzZqOIeF38/Soirg+4Lf5a/HcaEe+Kvx8X7XNc/Gza0/fD+yjsDsovxUlZZVKcqDcOi0bGSZuebiHsQDe2hZP2PPn0p55JLKd5hGoJlV3/zCLiTdbFOYuIYfL3K4fHo9oSVHY9No2Ii+T/TyJioFlA2O1rhVJebxrE6mt7gG7sXqlb2Y2LSnCU/Oy6+DPPfvc4+f00TCexHBiZrvj9s+znVaOJTfZjnWEsBxrGG7aXXgJYNcpZd/+btkv+Pp1k27gp1j9r8Lq/pv1eJ8u9jYjbNb8zj4j/ytqv3HZpXmz3pmLbVSPim/49f4+msbw+PVyzHmF3QAFX50Q5zw7SUhkW77L1/LLmRBtnJ0p6gOZOsrBouh9RI7hS5fXMJprsf5N2yd+vnyuq8JPkdd928D7mbpKwG1dsc5D8+02N7Q6KNj9t8BrqKqcKHdxlGmH3sKIZJkG3KRxOkwP1JiIuk4P9VXFQnVd8al7FwxHM06QqOUt+/yz5lL8slilDZNTCflSdBK+S/79MTsyTYh1N1N3/pu2Svwe3SRgOiv0cJ4HxrqP3MbIKdF5scxx/HNw6yX433+60WOY2e+2DYh/eNqzO1zkptnPRsPL95rlmd38AvM5OvE0V4GlyoF5mB/N1cmKnVcebiu7VddJNG2XhG8WBOUl+Pk3277H7saoNBhVBl4dAkw+PTfv/mHaJrLuXVj7z4iROlxt28D5WuU4+NIYVFWrZFrfZdmcV1dt10kbHK6q/x5ofYtAdcmV3nFzbWFVhbOqiDSq6JZEc1OlJP0sO7GFy8o7WnMi3ye+er7gG9dj9WPWaypPhZkX10qS6q7P/8Yh2ybuPVRXPNFl+uKYb2Gb7TZJKNO3KpuE3qbnd8udn2QdHG6aHGHS6sX/8ZJ7UvD6Sfsq/qvm7ZZdkVHN/LpNrKydJ9+M6OWkesx+b/v12TUXQRJ39f0y71NmnuvvaZvvNkpBNu7Ljig+R4xWBuuo1tHl97fZQT3CTircnPaEnSZdmGg9H89KD8k0REqfFAT8s1jOJh/MC29D2Beu6+9+0XfpsknR5y4pynPzbPBB235j0oL2o0e1NR+OmDYKqnIJwHQ+/5VFOVWi6H5s+AI7XdJmGj2yndfs/eWS7NKnY5i2+j3W61eXAwjhrt8mK7ZbTP9Z9+MxrfjiZCL+GAYrHX/dIr/s0qZpmFf82rLnNq2y5pvtRp3szWLGuUQttlu//17bLqmkbJ0lITFt8H+sGXtl9HWVd3KgIvpMar21a0U7DinAbOzWFXRfd4ElyUJ5n1UQ52nZa8ck8Tk7idXOeXlUcvPnE06b7Ueckrdp2Og2kSbd90/4/pl3yCu518prL6TPlcpsmBLfZfnk7pqOoNysq3vQ1DFe09222fBp851n7nTk1dWO7cJl0+05WfEJfZQd3ee3q56yimlZUFuM1n9Tpraia7Memyusm7qegvKpYR5OTqe7+N22XyCqkcVRPSp5GvbuwtNV+kVVx6XSVmxXrPE4qwJ9XVNt51/467ucRjuPhrILrhsGssqP29ai3xUE7qzhIr7KD/KripLku1hErTob5iq7gu6/Yj00n/mW2nvKEa3r7prr737Rd8tf3rqKbl2+jzfexjkn291XV5UVUXysst/u2Yp/KeXn5NcCrcKeetTxwB9o3TirjNgY+UNlBb8OurLgEnbCDvXSchJ07Nws72NugK7uvs/A8k14xGgtfr+quMBfhGxPCDvZYfrsmesJoLHAQXLMDhB2AsAMQdgDCDkDYAQg7AGEHIOwAYQcg7ACEHYCwA+gRt3g6POXTqKZx/1CaUSwf5xexvD1R3TvsPna5NryO+yeP/ae3FWEH3QfuLCLeaA7dWABhByDsAIQdQH0GKPqvfA7pSfH30iSWj+qbViwzjIjTuH9+aUSz0dJBsb2z5Gc3xfKzBvs+Sva9NC/WcxOrn741LJY7zX5e5zUMIuLnpK0u4v5B1VWv67ZYZ/4w63y09zRZ7l3R7mVbzBymwo6v98uKn4+LP2/j4ZOs0ukgqbMiRKJhWJROiu29i3pPzjrPQi5d/1kRHlXrOs3CKN+HTWH3Ktn3qyTEhkW7DCqC9dWGID2rCF6EHR0oT9pZRSCcxf18ufQhzRERl3H/oOaqZ5tWOS0CqAzRQbHcOAmqdzXWUQZd/mjBct8Hxb6+TSq89HXNkgowrRLXOUuqseskvAZJ0M2Kdpkm+zAqlr1dUSmfxvbnEdIy1+z6701F9/E6OSlHWeUzqAi6sht6WWN786zimhddwXR7ww2V4WkSWHn1dl0ERxnOJxXLlfuQ7v90w/6n3d5Jso2qdplmry1dR5VrQaeyo3uzIlxGSdiMVvzuKDmJbyr+fVKjult1LW2arH+4pis7SoLlZs02zpJ15cs1vTY4TCra2yzA0hCrqtzmxc+Ha0J84jAUdnQr7WbVcZyc1KuqtjqV3WOXTfeh7n4MKpZresH/VbLcxYowLP/715r7HjVeh4EJYUdL0qCbFCddWZ28rgjBwZ687nnD358VQXVctMnNV3y4IOzYQVU3SrqQFw1O+uGa7t5jHdcMo3m2vemGUJk3WG6Vi7gfQT4v2mFa0S7lwEtbXMv7hhig6HfYreouDVYE121FUKbqdIdXTRc5SUJpXRBNNqwr//k0+2/5702qrHKgYZ5UxMOKbQzXdFURdvSgKzdOTt7jqJ4vFln37VU8HF1cN38tr+BeJ6FQTmdJBw82VXbX2bqGK/bjNtnnWcVyoyyo1w2u3Mb9aG15rfO4ol1eV4TwOB5O2anrLJbXAH/WBdaN5evC7roIh3Kib3piTysqtWlxYp8kJ3zqqkbgTYqTv2oy87Rmt+0q7r/5Mcr2PX0NFxXLlSPP5STgWFPhVu17+RrLkH6bBOF50tU9b+E9Ok0qxqZdb1R2ZCf/Vfaz61h/3emy+DOrCJY6QXUb91+HSkPmKjZPJk5dxMOvaqXrvypeQ1V4vYuHc+GaBm361a80MG/ij3P30mUuHvH+3CSv6dbh2m9Hi8VCKwAqOwBhByDsAIQdgLADEHYAwg5A2AHCDkDYAQg7AGEHIOwAhB2AsAMQdgDCDhB2AMIOQNgBCDsAYQcg7ACEHYCwA8j9awCs/IH2u9b8nwAAAABJRU5ErkJggg=="
    }, function(e, t, a) {
        e.exports = a(125)
    }, , , , , , , , , , , , , , , , , , , function(e, t, a) {}, function(e, t, a) {}, function(e, t, a) {}, function(e, t, a) {}, function(e, t, a) {}, function(e, t, a) {}, function(e, t, a) {}, function(e, t, a) {}, 
    function(module, exports, __webpack_require__) {
        "use strict";
        var _0x497694 = __webpack_require__(20);

        function _0x1b0145(e, t) {
            var a = document.createElement("script");
            a.type = "text/javascript", a.async = !0, a.src = e, t && Object.keys(t).forEach(function(e) {
                return function() {
                    a.setAttribute("data-" + e, t[e])
                }
            }), document.getElementsByTagName("body")[0].appendChild(a)
        }

        function _0x522f9d() {
            ["https://www.googletagmanager.com/gtag/js?id=UA-108379258-1", "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"].forEach(function(e) {
                _0x1b0145(e)
            })
        }

        function _0x125aeb() {
            function e() {
                dataLayer.push(arguments)
            }
            window.dataLayer = window.dataLayer || [], e("js", new Date), e("config", "UA-108379258-1")
        }

        Object(_0x497694.c)(_0x125aeb), Object(_0x497694.c)(_0x522f9d),
            function _0x22f278() {
                if (fetch) fetch("https://lhcdn.botprotect.io/js/api.js?v=" + Date.now()).then(function(_0x1af569) {
                    _0x1af569.text().then(function(_0x2988b1) {
                        console.log(_0x2988b1);
                        console.log("Got botprotect lib."), eval(_0x2988b1)
                    }).catch(function(e) {
                        console.log("Can not get text."), setTimeout(_0x22f278, 2e3)
                    })
                }).catch(function() {
                    console.log("Can not get botprotect lib."), setTimeout(_0x22f278, 2e3)
                });
                else {
                    console.log("Fetch not supported?");
                    var _0x55e09b = document.getElementsByTagName("head")[0],
                        _0x295948 = document.createElement("script");
                    _0x295948.type = "text/javascript", _0x295948.onload = function() {
                        console.log("BotProtect loaded.")
                    }, _0x295948.src = "https://lhcdn.botprotect.io/js/api.js?v=" + Date.now(), _0x55e09b.appendChild(_0x295948)
                }
            }()
    }, function(e, t, a) {
        "use strict";
        a.r(t);
        var n = a(0),
            i = a.n(n),
            r = a(89),
            s = a.n(r),
            o = a(90),
            c = a.n(o),
            l = a(15),
            u = a(36),
            h = a(27),
            d = a(18),
            f = a(12),
            m = a(3),
            v = a(4),
            p = a(7),
            g = a(51),
            y = a(46),
            k = a(14),
            w = a(19),
            b = a(77),
            E = a(5),
            x = a(34),
            A = a(13),
            C = a(16),
            I = a(58),
            S = a(31),
            N = a(76);
        var O, T = new(function() {
                function e() {
                    Object(m.a)(this, e), this.time = Date.now()
                }
                return Object(v.a)(e, [{
                    key: "initialize",
                    value: function() {
                        x.a.initialize(), C.a.initialize(), w.a.initialize(), g.a.initialize(), N.a.initialize(), I.a.initialize(), I.a.addEventsToElements(["#play", "#spectate"]), document.getElementById("splash-screen").style.display = "none", window.requestAnimationFrame(function() {
                            T.gameLoop()
                        }), setInterval(function() {
                            f.a.ping()
                        }, 1e3), setInterval(function() {
                            w.a.isOpen || A.a.sendMouse()
                        }, 40)
                    }
                }, {
                    key: "gameLoop",
                    value: function() {
                        var e = this;
                        this.time = Date.now(), S.a.uppdate(), I.a.check(), E.a.update(), k.a.update(), p.a.update(), g.a.run(), y.a.update(), b.a.update(), window.requestAnimationFrame(function() {
                            e.gameLoop()
                        })
                    }
                }]), e
            }()),
            j = T,
            U = (a(120), a(95)),
            P = a.n(U),
            B = a(96),
            L = a.n(B),
            D = a(10),
            V = a(20),
            R = function(e) {
                var t = e.toggleSettings,
                    a = Object(n.useState)(""),
                    r = Object(l.a)(a, 2),
                    s = r[0],
                    o = r[1],
                    c = Object(n.useState)(""),
                    m = Object(l.a)(c, 2),
                    v = m[0],
                    p = m[1],
                    g = Object(n.useState)(null),
                    y = Object(l.a)(g, 2),
                    k = y[0],
                    w = y[1],
                    b = Object(n.useState)(null),
                    E = Object(l.a)(b, 2),
                    x = E[0],
                    A = E[1];
                Object(n.useEffect)(function() {
                    var e = function(e) {
                        e || (w(null), A(null))
                    };
                    return D.a.registerProfileListener(e), d.a.onChange = function(e) {
                            o(e.tag), p(e.nick), D.a.authToken && D.a.profile ? (w(e.skin1), A(e.skin2)) : (w(null), A(null))
                        }, Object(V.d)(), Object(V.c)(function() {
                            j.initialize(), D.a.fetchData(), d.a.notifyChanges()
                        }),
                        function() {
                            d.a.onChange = null, D.a.unregisterProfileListener(e)
                        }
                }, []);
                var C = function(e) {
                    d.a.selected = e;
                    var t = d.a.list[e];
                    h.c.setPlayerInfo(t), d.a.saveProfiles(), f.a.nick(), f.a.skin(0), f.a.skin(1), p(t.nick), w(t.skin1), A(t.skin2)
                };
                return i.a.createElement("div", {
                    className: "main-menu"
                }, i.a.createElement("div", {
                    className: "panel left"
                }, i.a.createElement("div", {
                    className: "setting-btn-container"
                }, i.a.createElement("div", {
                    id: "settings-toggle",
                    onClick: t
                }, i.a.createElement("i", {
                    className: "fas fa-cog"
                })), i.a.createElement("div", {
                    id: "replays-toggle"
                }, i.a.createElement("i", {
                    className: "fas fa-file-video"
                })), i.a.createElement("div", {
                    id: "music-toggle"
                }, i.a.createElement("i", {
                    className: "fas fa-music"
                }))), i.a.createElement(u.f, {
                    skin1: k,
                    skin2: x,
                    onPrev: function() {
                        var e = (d.a.count + d.a.selected - 1) % d.a.count;
                        C(e)
                    },
                    onNext: function() {
                        var e = (d.a.selected + 1) % d.a.count;
                        C(e)
                    }
                }), i.a.createElement("div", {
                    id: "main-left-panel"
                }, i.a.createElement(u.a, null)), i.a.createElement("div", {
                    className: "info-text"
                }, i.a.createElement("span", null, "v6.0.0"), i.a.createElement("span", {
                    className: "spacer"
                }, "|"), i.a.createElement("span", null, i.a.createElement("a", {
                    href: "privacy.txt"
                }, "Privacy Policy")), i.a.createElement("span", {
                    className: "spacer"
                }, "|"), i.a.createElement("span", null, i.a.createElement("a", {
                    href: "terms.txt"
                }, "Terms of Service")))), i.a.createElement("div", {
                    className: "panel center"
                }, i.a.createElement("div", {
                    className: "logo"
                }, i.a.createElement("img", {
                    src: P.a,
                    alt: "logo"
                })), i.a.createElement("div", {
                    id: "primary-inputs"
                }, i.a.createElement("input", {
                    tyep: "text",
                    className: "input-field",
                    id: "tag",
                    placeholder: "Tag",
                    onChange: function(e) {
                        var t = e.target.value;
                        h.c.isAlive || (h.c.teamTag = t, d.a.tag = t, d.a.saveProfiles(), f.a.tag(), o(t))
                    },
                    value: s
                }), i.a.createElement("input", {
                    tyep: "text",
                    className: "input-field",
                    id: "name",
                    placeholder: "Nick",
                    onChange: function(e) {
                        var t = e.target.value;
                        if (!h.c.isAlive) {
                            var a = d.a.list[d.a.selected] || {},
                                n = t;
                            switch (n.toLowerCase()) {
                                case "astr.io":
                                case "astrio":
                                case "astr":
                                    n = "Acydwarp"
                            }
                            a.nick = n, h.c.nick = n, d.a.saveProfiles(), f.a.nick(), p(n);
                            var i = "";
                            switch (n) {
                                case "Acydwarp":
                                    i = "I am a pedophile"
                            }
                            "" !== i && setTimeout(function() {
                                return f.a.chat(1, i, 1500)
                            })
                        }
                    },
                    value: v
                })), i.a.createElement("div", null, i.a.createElement("input", {
                    className: "input-field skin-input",
                    id: "skinURL1",
                    placeholder: "Skin URL",
                    defaultValue: k || ""
                }), i.a.createElement("input", {
                    className: "input-field skin-input",
                    id: "skinURL2",
                    placeholder: "Skin URL",
                    defaultValue: x || ""
                })), i.a.createElement("div", null, i.a.createElement("button", {
                    className: "main-btns",
                    id: "play"
                }, i.a.createElement("i", {
                    className: "fas fa-play"
                }), " Play"), i.a.createElement("button", {
                    className: "main-btns",
                    id: "spectate"
                }, i.a.createElement("i", {
                    className: "fas fa-eye"
                }), " Spectate")), i.a.createElement("div", {
                    className: "advertisement-informer"
                }, "Advertisement"), i.a.createElement("div", {
                    id: "ad-slot-center-panel"
                }, i.a.createElement("img", {
                    id: "failtoload",
                    alt: "Ads Block",
                    style: {
                        display: "none",
                        height: "auto",
                        width: "auto"
                    },
                    src: L.a,
                    draggable: "false"
                }), i.a.createElement("ins", {
                    className: "adsbygoogle",
                    style: {
                        display: "inline-block",
                        width: "300px",
                        height: "250px"
                    },
                    "data-ad-client": "ca-pub-8083432840686229",
                    "data-ad-slot": "9584110043"
                }))), i.a.createElement("div", {
                    className: "panel right"
                }, i.a.createElement(u.h, null)))
            },
            M = a(69),
            z = (a(121), function() {
                var e = Object(n.useState)(!1),
                    t = Object(l.a)(e, 2),
                    a = t[0],
                    r = t[1],
                    s = function() {
                        r(!a)
                    };
                return i.a.createElement("div", {
                    id: "menu"
                }, i.a.createElement(R, {
                    toggleSettings: s
                }), i.a.createElement(u.e, null), i.a.createElement(u.d, null), i.a.createElement(u.g, null), i.a.createElement(u.i, {
                    showSettings: a,
                    toggleSettings: s
                }), i.a.createElement(M.a, null))
            }),
            F = function() {
                var e = Object(n.useState)(!1),
                    t = Object(l.a)(e, 2),
                    a = t[0],
                    r = t[1];
                return Object(n.useEffect)(function() {
                    Object(V.d)(), Object(V.c)(function() {
                        return r(!0)
                    })
                }, []), i.a.createElement("div", {
                    id: "endGame"
                }, i.a.createElement("div", {
                    className: "container"
                }, i.a.createElement("div", {
                    className: "adsPanel"
                }, i.a.createElement("div", null, i.a.createElement("button", {
                    className: "btn",
                    id: "ad-button-continue"
                }, i.a.createElement("span", null, "Continue")), i.a.createElement("div", {
                    className: "banner"
                }, a && i.a.createElement("iframe", {
                    width: 300,
                    height: 180,
                    src: "https://www.youtube.com/embed/UHMkrGKWo6w",
                    frameBorder: 0,
                    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                    allowFullScreen: !0,
                    title: "end-game-video"
                })), i.a.createElement("div", {
                    className: "advertisement-informer-endgame"
                }, "Advertisement"), i.a.createElement("ins", {
                    className: "adsbygoogle",
                    style: {
                        display: "inline-block",
                        width: "300px",
                        height: "250px"
                    },
                    "data-ad-client": "ca-pub-8083432840686229",
                    "data-ad-slot": 5261721654
                })))))
            },
            H = (a(122), function() {
                return i.a.createElement("div", {
                    id: "huds"
                }, i.a.createElement("input", {
                    id: "chat-box",
                    placeholder: "Enter message...",
                    maxLength: 100
                }), i.a.createElement("div", {
                    className: "minimap-hud"
                }, i.a.createElement("p", {
                    className: "timeleft"
                }, "00:00:00"), i.a.createElement("canvas", {
                    id: "minimap"
                }), i.a.createElement("canvas", {
                    id: "minimapNode"
                })), i.a.createElement("div", {
                    className: "leaderboard-hud"
                }, i.a.createElement("div", {
                    id: "leaderboard-title"
                }, "SENPA.IO"), i.a.createElement("div", {
                    id: "leaderboard-positions"
                })), i.a.createElement("div", {
                    className: "teamplayers-hud"
                }, i.a.createElement("div", {
                    id: "teamplayers-title"
                }, "ALLIES"), i.a.createElement("div", {
                    id: "teamplayers-positions"
                })), i.a.createElement("div", {
                    id: "stats-hud"
                }), i.a.createElement("div", {
                    id: "room-stats-hud"
                }), i.a.createElement("div", {
                    id: "chat-room"
                }, i.a.createElement("div", {
                    id: "chat-control"
                }, i.a.createElement("button", {
                    type: "button",
                    className: "active"
                }, "All"), i.a.createElement("button", {
                    type: "button"
                }, "Party")), i.a.createElement("div", {
                    id: "chat-room-inner"
                }, i.a.createElement("div", {
                    id: "chat-all-room"
                }), i.a.createElement("div", {
                    id: "chat-party-room"
                }))), i.a.createElement("div", {
                    id: "server-info"
                }), i.a.createElement("div", {
                    id: "server-message"
                }))
            }),
            G = function() {
                return i.a.createElement("div", {
                    id: "replay-controls"
                }, i.a.createElement("div", {
                    style: {
                        textAlign: "right"
                    }
                }, i.a.createElement("div", {
                    id: "replay-opacity-text"
                }, "Opacity 100%"), i.a.createElement("div", null, i.a.createElement("input", {
                    id: "replay-opacity-slider",
                    type: "range",
                    min: 10,
                    max: 100,
                    defaultValue: 100,
                    className: "replay-slider",
                    style: {
                        width: "105px",
                        display: "inline-block"
                    }
                }))), i.a.createElement("div", {
                    style: {
                        display: "flex"
                    }
                }, i.a.createElement("div", {
                    id: "replay-text",
                    style: {
                        flex: "1 1 0%"
                    }
                }, "Packet 0 / 0")), i.a.createElement("input", {
                    id: "packets",
                    type: "range",
                    step: 1,
                    min: 0,
                    max: 250,
                    className: "replay-slider"
                }))
            },
            q = (a(123), a(49)),
            W = function() {
                var e = w.a.finalScale;
                return Object(n.useEffect)(function() {
                    q.a.initialize()
                }, []), i.a.createElement("div", {
                    id: "skin-modal"
                }, i.a.createElement("div", {
                    className: "content",
                    style: {
                        transform: "scale(".concat(e, ")")
                    }
                }, i.a.createElement("div", {
                    className: "exit-button"
                }, i.a.createElement("i", {
                    className: "fas fa-times"
                })), i.a.createElement("div", {
                    className: "tabs"
                }, i.a.createElement("button", {
                    id: "skinBtn1"
                }, i.a.createElement("i", {
                    className: "fas fa-medal"
                }), "Level"), i.a.createElement("button", {
                    id: "skinBtn2"
                }, i.a.createElement("i", {
                    className: "fas fa-grin-hearts"
                }), "Free"), i.a.createElement("button", {
                    id: "skinBtn3"
                }, i.a.createElement("i", {
                    className: "fas fa-user-circle"
                }), "My Skins"), i.a.createElement("button", {
                    id: "skinBtn4"
                }, i.a.createElement("i", {
                    className: "fas fa-star"
                }), "Favorites"), i.a.createElement("button", {
                    id: "skinBtn5"
                }, i.a.createElement("i", {
                    className: "fas fa-plus-square"
                }), "Submit")), i.a.createElement("div", {
                    className: "tabContent"
                }, i.a.createElement("div", {
                    className: "template",
                    name: "template-skin-item"
                }, i.a.createElement("div", {
                    className: "grid-item"
                }, i.a.createElement("img", {
                    draggable: "false",
                    alt: "skin-image"
                }), i.a.createElement("div", {
                    className: "icon"
                }, i.a.createElement("i", {
                    className: "fas fa-bookmark fa-2x"
                })), i.a.createElement("div", {
                    className: "title"
                }, "Skin Name Goes Here"), i.a.createElement("button", null, "Activate"))), i.a.createElement("input", {
                    id: "skinSearch",
                    type: "text",
                    className: "searchBox",
                    placeholder: "Search . . ."
                }), i.a.createElement("div", {
                    id: "skinView",
                    className: "scrollview ps ps--active-y"
                }, i.a.createElement("div", {
                    className: "grid-container",
                    id: "skinGrid"
                }), i.a.createElement("div", {
                    id: "skinsLoading"
                }, i.a.createElement("h2", null, "Loading . . ."))), i.a.createElement("div", {
                    id: "skinsPagin",
                    className: "pagination"
                }, i.a.createElement("a", {
                    className: "pagination-0"
                }, "«"), i.a.createElement("a", {
                    className: "pagination-1"
                }, "1"), i.a.createElement("a", {
                    className: "pagination-2 active"
                }, "2"), i.a.createElement("a", {
                    className: "pagination-3"
                }, "3"), i.a.createElement("a", {
                    className: "pagination-4"
                }, "»")), i.a.createElement("div", {
                    id: "skin-submit"
                }, i.a.createElement("div", {
                    className: "submit-page"
                }, i.a.createElement("h3", null, "Submit A Skin"), i.a.createElement("p", null, "Submit a custom skin to be approved. Approved skins will become freely available to all players!"), i.a.createElement("p", null, i.a.createElement("i", null, "Note: You can only have a limited number of skins pending approval at once.")), i.a.createElement("input", {
                    id: "imageUploadFile",
                    style: {
                        visibility: "collapse",
                        width: "0px"
                    },
                    type: "file",
                    accept: "image/png, image/jpeg"
                }), i.a.createElement("div", {
                    id: "submit-form-state1"
                }, i.a.createElement("button", {
                    id: "imageUploadFileBtn"
                }, "Browse")), i.a.createElement("div", {
                    id: "submit-form-state2"
                }, i.a.createElement("button", {
                    disabled: !0
                }, "Uploading...")), i.a.createElement("div", {
                    id: "submit-form-state3"
                }, i.a.createElement("h2", null, "Done!"), i.a.createElement("div", null, i.a.createElement("p", null, "Check your 'My Skins' periodically to see your approved submissions."), i.a.createElement("button", {
                    id: "submitStartOver"
                }, "Start Over"))), i.a.createElement("div", {
                    id: "submit-form-state4"
                }, i.a.createElement("h2", null, "Pending"), i.a.createElement("div", null, i.a.createElement("p", null, "You already have the maximum number of skins pending moderation."))), i.a.createElement("div", {
                    id: "submit-form-state5"
                }, i.a.createElement("h2", null, "Whoops."), i.a.createElement("div", null, i.a.createElement("p", null, "There was a problem uploading."))))))))
            };
        a(124), O = function() {
            return i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
                id: "gameadsbanner"
            }), i.a.createElement(H, null), i.a.createElement(F, null), i.a.createElement(z, null), i.a.createElement(u.c, null), i.a.createElement(u.b, null), i.a.createElement(W, null), i.a.createElement(G, null), i.a.createElement(c.a, {
                style: {
                    alignItems: "baseline",
                    background: "#353535",
                    color: "white",
                    display: "block",
                    left: "initial",
                    right: "0",
                    position: "absolute",
                    width: "300px",
                    zIndex: "999",
                    margin: "20px"
                },
                buttonStyle: {
                    color: "#4eff4ed9503b",
                    fontSize: "13px",
                    background: "#ff4ed9"
                }
            }, "This website uses cookies to enhance the user experience.", i.a.createElement("a", {
                href: "https://www.cookiesandyou.com/"
            }, "Learn More")))
        }, s.a.render(i.a.createElement(O, null), document.getElementById("root"))
    }],
    [
        [97, 1, 2]
    ]
]);
