(function () {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const r of document.querySelectorAll('link[rel="modulepreload"]'))
        s(r);
    new MutationObserver((r) => {
        for (const l of r)
            if (l.type === "childList")
                for (const o of l.addedNodes)
                    o.tagName === "LINK" && o.rel === "modulepreload" && s(o);
    }).observe(document, { childList: !0, subtree: !0 });
    function n(r) {
        const l = {};
        return (
            r.integrity && (l.integrity = r.integrity),
            r.referrerpolicy && (l.referrerPolicy = r.referrerpolicy),
            r.crossorigin === "use-credentials"
                ? (l.credentials = "include")
                : r.crossorigin === "anonymous"
                ? (l.credentials = "omit")
                : (l.credentials = "same-origin"),
            l
        );
    }
    function s(r) {
        if (r.ep) return;
        r.ep = !0;
        const l = n(r);
        fetch(r.href, l);
    }
})();
function $s(e, t) {
    const n = Object.create(null),
        s = e.split(",");
    for (let r = 0; r < s.length; r++) n[s[r]] = !0;
    return t ? (r) => !!n[r.toLowerCase()] : (r) => !!n[r];
}
function Ss(e) {
    if (U(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++) {
            const s = e[n],
                r = fe(s) ? ho(s) : Ss(s);
            if (r) for (const l in r) t[l] = r[l];
        }
        return t;
    } else {
        if (fe(e)) return e;
        if (ae(e)) return e;
    }
}
const uo = /;(?![^(]*\))/g,
    fo = /:([^]+)/,
    po = /\/\*.*?\*\//gs;
function ho(e) {
    const t = {};
    return (
        e
            .replace(po, "")
            .split(uo)
            .forEach((n) => {
                if (n) {
                    const s = n.split(fo);
                    s.length > 1 && (t[s[0].trim()] = s[1].trim());
                }
            }),
        t
    );
}
function He(e) {
    let t = "";
    if (fe(e)) t = e;
    else if (U(e))
        for (let n = 0; n < e.length; n++) {
            const s = He(e[n]);
            s && (t += s + " ");
        }
    else if (ae(e)) for (const n in e) e[n] && (t += n + " ");
    return t.trim();
}
const mo =
        "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
    go = $s(mo);
function Br(e) {
    return !!e || e === "";
}
const et = (e) =>
        fe(e)
            ? e
            : e == null
            ? ""
            : U(e) || (ae(e) && (e.toString === Wr || !q(e.toString)))
            ? JSON.stringify(e, Ur, 2)
            : String(e),
    Ur = (e, t) =>
        t && t.__v_isRef
            ? Ur(e, t.value)
            : kt(t)
            ? {
                  [`Map(${t.size})`]: [...t.entries()].reduce(
                      (n, [s, r]) => ((n[`${s} =>`] = r), n),
                      {}
                  ),
              }
            : Kr(t)
            ? { [`Set(${t.size})`]: [...t.values()] }
            : ae(t) && !U(t) && !Vr(t)
            ? String(t)
            : t,
    ie = {},
    Pt = [],
    Ne = () => {},
    _o = () => !1,
    bo = /^on[^a-z]/,
    cn = (e) => bo.test(e),
    Os = (e) => e.startsWith("onUpdate:"),
    ve = Object.assign,
    Fs = (e, t) => {
        const n = e.indexOf(t);
        n > -1 && e.splice(n, 1);
    },
    vo = Object.prototype.hasOwnProperty,
    Q = (e, t) => vo.call(e, t),
    U = Array.isArray,
    kt = (e) => Hn(e) === "[object Map]",
    Kr = (e) => Hn(e) === "[object Set]",
    q = (e) => typeof e == "function",
    fe = (e) => typeof e == "string",
    Ps = (e) => typeof e == "symbol",
    ae = (e) => e !== null && typeof e == "object",
    qr = (e) => ae(e) && q(e.then) && q(e.catch),
    Wr = Object.prototype.toString,
    Hn = (e) => Wr.call(e),
    yo = (e) => Hn(e).slice(8, -1),
    Vr = (e) => Hn(e) === "[object Object]",
    ks = (e) =>
        fe(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
    Qt = $s(
        ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
    ),
    Nn = (e) => {
        const t = Object.create(null);
        return (n) => t[n] || (t[n] = e(n));
    },
    xo = /-(\w)/g,
    Qe = Nn((e) => e.replace(xo, (t, n) => (n ? n.toUpperCase() : ""))),
    wo = /\B([A-Z])/g,
    Bt = Nn((e) => e.replace(wo, "-$1").toLowerCase()),
    jn = Nn((e) => e.charAt(0).toUpperCase() + e.slice(1)),
    Zn = Nn((e) => (e ? `on${jn(e)}` : "")),
    tn = (e, t) => !Object.is(e, t),
    Xn = (e, t) => {
        for (let n = 0; n < e.length; n++) e[n](t);
    },
    Sn = (e, t, n) => {
        Object.defineProperty(e, t, {
            configurable: !0,
            enumerable: !1,
            value: n,
        });
    },
    Eo = (e) => {
        const t = parseFloat(e);
        return isNaN(t) ? e : t;
    };
let lr;
const Co = () =>
    lr ||
    (lr =
        typeof globalThis < "u"
            ? globalThis
            : typeof self < "u"
            ? self
            : typeof window < "u"
            ? window
            : typeof global < "u"
            ? global
            : {});
let Le;
class Ao {
    constructor(t = !1) {
        (this.detached = t),
            (this._active = !0),
            (this.effects = []),
            (this.cleanups = []),
            (this.parent = Le),
            !t &&
                Le &&
                (this.index = (Le.scopes || (Le.scopes = [])).push(this) - 1);
    }
    get active() {
        return this._active;
    }
    run(t) {
        if (this._active) {
            const n = Le;
            try {
                return (Le = this), t();
            } finally {
                Le = n;
            }
        }
    }
    on() {
        Le = this;
    }
    off() {
        Le = this.parent;
    }
    stop(t) {
        if (this._active) {
            let n, s;
            for (n = 0, s = this.effects.length; n < s; n++)
                this.effects[n].stop();
            for (n = 0, s = this.cleanups.length; n < s; n++)
                this.cleanups[n]();
            if (this.scopes)
                for (n = 0, s = this.scopes.length; n < s; n++)
                    this.scopes[n].stop(!0);
            if (!this.detached && this.parent && !t) {
                const r = this.parent.scopes.pop();
                r &&
                    r !== this &&
                    ((this.parent.scopes[this.index] = r),
                    (r.index = this.index));
            }
            (this.parent = void 0), (this._active = !1);
        }
    }
}
function To(e, t = Le) {
    t && t.active && t.effects.push(e);
}
function $o() {
    return Le;
}
const Ls = (e) => {
        const t = new Set(e);
        return (t.w = 0), (t.n = 0), t;
    },
    Yr = (e) => (e.w & pt) > 0,
    zr = (e) => (e.n & pt) > 0,
    So = ({ deps: e }) => {
        if (e.length) for (let t = 0; t < e.length; t++) e[t].w |= pt;
    },
    Oo = (e) => {
        const { deps: t } = e;
        if (t.length) {
            let n = 0;
            for (let s = 0; s < t.length; s++) {
                const r = t[s];
                Yr(r) && !zr(r) ? r.delete(e) : (t[n++] = r),
                    (r.w &= ~pt),
                    (r.n &= ~pt);
            }
            t.length = n;
        }
    },
    as = new WeakMap();
let Yt = 0,
    pt = 1;
const cs = 30;
let Ie;
const wt = Symbol(""),
    us = Symbol("");
class Ms {
    constructor(t, n = null, s) {
        (this.fn = t),
            (this.scheduler = n),
            (this.active = !0),
            (this.deps = []),
            (this.parent = void 0),
            To(this, s);
    }
    run() {
        if (!this.active) return this.fn();
        let t = Ie,
            n = ut;
        for (; t; ) {
            if (t === this) return;
            t = t.parent;
        }
        try {
            return (
                (this.parent = Ie),
                (Ie = this),
                (ut = !0),
                (pt = 1 << ++Yt),
                Yt <= cs ? So(this) : or(this),
                this.fn()
            );
        } finally {
            Yt <= cs && Oo(this),
                (pt = 1 << --Yt),
                (Ie = this.parent),
                (ut = n),
                (this.parent = void 0),
                this.deferStop && this.stop();
        }
    }
    stop() {
        Ie === this
            ? (this.deferStop = !0)
            : this.active &&
              (or(this), this.onStop && this.onStop(), (this.active = !1));
    }
}
function or(e) {
    const { deps: t } = e;
    if (t.length) {
        for (let n = 0; n < t.length; n++) t[n].delete(e);
        t.length = 0;
    }
}
let ut = !0;
const Qr = [];
function Ut() {
    Qr.push(ut), (ut = !1);
}
function Kt() {
    const e = Qr.pop();
    ut = e === void 0 ? !0 : e;
}
function Ee(e, t, n) {
    if (ut && Ie) {
        let s = as.get(e);
        s || as.set(e, (s = new Map()));
        let r = s.get(n);
        r || s.set(n, (r = Ls())), Jr(r);
    }
}
function Jr(e, t) {
    let n = !1;
    Yt <= cs ? zr(e) || ((e.n |= pt), (n = !Yr(e))) : (n = !e.has(Ie)),
        n && (e.add(Ie), Ie.deps.push(e));
}
function tt(e, t, n, s, r, l) {
    const o = as.get(e);
    if (!o) return;
    let i = [];
    if (t === "clear") i = [...o.values()];
    else if (n === "length" && U(e)) {
        const a = Number(s);
        o.forEach((u, f) => {
            (f === "length" || f >= a) && i.push(u);
        });
    } else
        switch ((n !== void 0 && i.push(o.get(n)), t)) {
            case "add":
                U(e)
                    ? ks(n) && i.push(o.get("length"))
                    : (i.push(o.get(wt)), kt(e) && i.push(o.get(us)));
                break;
            case "delete":
                U(e) || (i.push(o.get(wt)), kt(e) && i.push(o.get(us)));
                break;
            case "set":
                kt(e) && i.push(o.get(wt));
                break;
        }
    if (i.length === 1) i[0] && fs(i[0]);
    else {
        const a = [];
        for (const u of i) u && a.push(...u);
        fs(Ls(a));
    }
}
function fs(e, t) {
    const n = U(e) ? e : [...e];
    for (const s of n) s.computed && ir(s);
    for (const s of n) s.computed || ir(s);
}
function ir(e, t) {
    (e !== Ie || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run());
}
const Fo = $s("__proto__,__v_isRef,__isVue"),
    Zr = new Set(
        Object.getOwnPropertyNames(Symbol)
            .filter((e) => e !== "arguments" && e !== "caller")
            .map((e) => Symbol[e])
            .filter(Ps)
    ),
    Po = Is(),
    ko = Is(!1, !0),
    Lo = Is(!0),
    ar = Mo();
function Mo() {
    const e = {};
    return (
        ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
            e[t] = function (...n) {
                const s = Z(this);
                for (let l = 0, o = this.length; l < o; l++)
                    Ee(s, "get", l + "");
                const r = s[t](...n);
                return r === -1 || r === !1 ? s[t](...n.map(Z)) : r;
            };
        }),
        ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
            e[t] = function (...n) {
                Ut();
                const s = Z(this)[t].apply(this, n);
                return Kt(), s;
            };
        }),
        e
    );
}
function Io(e) {
    const t = Z(this);
    return Ee(t, "has", e), t.hasOwnProperty(e);
}
function Is(e = !1, t = !1) {
    return function (s, r, l) {
        if (r === "__v_isReactive") return !e;
        if (r === "__v_isReadonly") return e;
        if (r === "__v_isShallow") return t;
        if (r === "__v_raw" && l === (e ? (t ? Zo : nl) : t ? tl : el).get(s))
            return s;
        const o = U(s);
        if (!e) {
            if (o && Q(ar, r)) return Reflect.get(ar, r, l);
            if (r === "hasOwnProperty") return Io;
        }
        const i = Reflect.get(s, r, l);
        return (Ps(r) ? Zr.has(r) : Fo(r)) || (e || Ee(s, "get", r), t)
            ? i
            : ge(i)
            ? o && ks(r)
                ? i
                : i.value
            : ae(i)
            ? e
                ? sl(i)
                : Bn(i)
            : i;
    };
}
const Ro = Xr(),
    Ho = Xr(!0);
function Xr(e = !1) {
    return function (n, s, r, l) {
        let o = n[s];
        if (Nt(o) && ge(o) && !ge(r)) return !1;
        if (
            !e &&
            (!On(r) && !Nt(r) && ((o = Z(o)), (r = Z(r))),
            !U(n) && ge(o) && !ge(r))
        )
            return (o.value = r), !0;
        const i = U(n) && ks(s) ? Number(s) < n.length : Q(n, s),
            a = Reflect.set(n, s, r, l);
        return (
            n === Z(l) &&
                (i ? tn(r, o) && tt(n, "set", s, r) : tt(n, "add", s, r)),
            a
        );
    };
}
function No(e, t) {
    const n = Q(e, t);
    e[t];
    const s = Reflect.deleteProperty(e, t);
    return s && n && tt(e, "delete", t, void 0), s;
}
function jo(e, t) {
    const n = Reflect.has(e, t);
    return (!Ps(t) || !Zr.has(t)) && Ee(e, "has", t), n;
}
function Do(e) {
    return Ee(e, "iterate", U(e) ? "length" : wt), Reflect.ownKeys(e);
}
const Gr = { get: Po, set: Ro, deleteProperty: No, has: jo, ownKeys: Do },
    Bo = {
        get: Lo,
        set(e, t) {
            return !0;
        },
        deleteProperty(e, t) {
            return !0;
        },
    },
    Uo = ve({}, Gr, { get: ko, set: Ho }),
    Rs = (e) => e,
    Dn = (e) => Reflect.getPrototypeOf(e);
function mn(e, t, n = !1, s = !1) {
    e = e.__v_raw;
    const r = Z(e),
        l = Z(t);
    n || (t !== l && Ee(r, "get", t), Ee(r, "get", l));
    const { has: o } = Dn(r),
        i = s ? Rs : n ? js : nn;
    if (o.call(r, t)) return i(e.get(t));
    if (o.call(r, l)) return i(e.get(l));
    e !== r && e.get(t);
}
function gn(e, t = !1) {
    const n = this.__v_raw,
        s = Z(n),
        r = Z(e);
    return (
        t || (e !== r && Ee(s, "has", e), Ee(s, "has", r)),
        e === r ? n.has(e) : n.has(e) || n.has(r)
    );
}
function _n(e, t = !1) {
    return (
        (e = e.__v_raw),
        !t && Ee(Z(e), "iterate", wt),
        Reflect.get(e, "size", e)
    );
}
function cr(e) {
    e = Z(e);
    const t = Z(this);
    return Dn(t).has.call(t, e) || (t.add(e), tt(t, "add", e, e)), this;
}
function ur(e, t) {
    t = Z(t);
    const n = Z(this),
        { has: s, get: r } = Dn(n);
    let l = s.call(n, e);
    l || ((e = Z(e)), (l = s.call(n, e)));
    const o = r.call(n, e);
    return (
        n.set(e, t),
        l ? tn(t, o) && tt(n, "set", e, t) : tt(n, "add", e, t),
        this
    );
}
function fr(e) {
    const t = Z(this),
        { has: n, get: s } = Dn(t);
    let r = n.call(t, e);
    r || ((e = Z(e)), (r = n.call(t, e))), s && s.call(t, e);
    const l = t.delete(e);
    return r && tt(t, "delete", e, void 0), l;
}
function dr() {
    const e = Z(this),
        t = e.size !== 0,
        n = e.clear();
    return t && tt(e, "clear", void 0, void 0), n;
}
function bn(e, t) {
    return function (s, r) {
        const l = this,
            o = l.__v_raw,
            i = Z(o),
            a = t ? Rs : e ? js : nn;
        return (
            !e && Ee(i, "iterate", wt),
            o.forEach((u, f) => s.call(r, a(u), a(f), l))
        );
    };
}
function vn(e, t, n) {
    return function (...s) {
        const r = this.__v_raw,
            l = Z(r),
            o = kt(l),
            i = e === "entries" || (e === Symbol.iterator && o),
            a = e === "keys" && o,
            u = r[e](...s),
            f = n ? Rs : t ? js : nn;
        return (
            !t && Ee(l, "iterate", a ? us : wt),
            {
                next() {
                    const { value: p, done: h } = u.next();
                    return h
                        ? { value: p, done: h }
                        : { value: i ? [f(p[0]), f(p[1])] : f(p), done: h };
                },
                [Symbol.iterator]() {
                    return this;
                },
            }
        );
    };
}
function rt(e) {
    return function (...t) {
        return e === "delete" ? !1 : this;
    };
}
function Ko() {
    const e = {
            get(l) {
                return mn(this, l);
            },
            get size() {
                return _n(this);
            },
            has: gn,
            add: cr,
            set: ur,
            delete: fr,
            clear: dr,
            forEach: bn(!1, !1),
        },
        t = {
            get(l) {
                return mn(this, l, !1, !0);
            },
            get size() {
                return _n(this);
            },
            has: gn,
            add: cr,
            set: ur,
            delete: fr,
            clear: dr,
            forEach: bn(!1, !0),
        },
        n = {
            get(l) {
                return mn(this, l, !0);
            },
            get size() {
                return _n(this, !0);
            },
            has(l) {
                return gn.call(this, l, !0);
            },
            add: rt("add"),
            set: rt("set"),
            delete: rt("delete"),
            clear: rt("clear"),
            forEach: bn(!0, !1),
        },
        s = {
            get(l) {
                return mn(this, l, !0, !0);
            },
            get size() {
                return _n(this, !0);
            },
            has(l) {
                return gn.call(this, l, !0);
            },
            add: rt("add"),
            set: rt("set"),
            delete: rt("delete"),
            clear: rt("clear"),
            forEach: bn(!0, !0),
        };
    return (
        ["keys", "values", "entries", Symbol.iterator].forEach((l) => {
            (e[l] = vn(l, !1, !1)),
                (n[l] = vn(l, !0, !1)),
                (t[l] = vn(l, !1, !0)),
                (s[l] = vn(l, !0, !0));
        }),
        [e, n, t, s]
    );
}
const [qo, Wo, Vo, Yo] = Ko();
function Hs(e, t) {
    const n = t ? (e ? Yo : Vo) : e ? Wo : qo;
    return (s, r, l) =>
        r === "__v_isReactive"
            ? !e
            : r === "__v_isReadonly"
            ? e
            : r === "__v_raw"
            ? s
            : Reflect.get(Q(n, r) && r in s ? n : s, r, l);
}
const zo = { get: Hs(!1, !1) },
    Qo = { get: Hs(!1, !0) },
    Jo = { get: Hs(!0, !1) },
    el = new WeakMap(),
    tl = new WeakMap(),
    nl = new WeakMap(),
    Zo = new WeakMap();
function Xo(e) {
    switch (e) {
        case "Object":
        case "Array":
            return 1;
        case "Map":
        case "Set":
        case "WeakMap":
        case "WeakSet":
            return 2;
        default:
            return 0;
    }
}
function Go(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : Xo(yo(e));
}
function Bn(e) {
    return Nt(e) ? e : Ns(e, !1, Gr, zo, el);
}
function ei(e) {
    return Ns(e, !1, Uo, Qo, tl);
}
function sl(e) {
    return Ns(e, !0, Bo, Jo, nl);
}
function Ns(e, t, n, s, r) {
    if (!ae(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
    const l = r.get(e);
    if (l) return l;
    const o = Go(e);
    if (o === 0) return e;
    const i = new Proxy(e, o === 2 ? s : n);
    return r.set(e, i), i;
}
function Lt(e) {
    return Nt(e) ? Lt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Nt(e) {
    return !!(e && e.__v_isReadonly);
}
function On(e) {
    return !!(e && e.__v_isShallow);
}
function rl(e) {
    return Lt(e) || Nt(e);
}
function Z(e) {
    const t = e && e.__v_raw;
    return t ? Z(t) : e;
}
function ll(e) {
    return Sn(e, "__v_skip", !0), e;
}
const nn = (e) => (ae(e) ? Bn(e) : e),
    js = (e) => (ae(e) ? sl(e) : e);
function ol(e) {
    ut && Ie && ((e = Z(e)), Jr(e.dep || (e.dep = Ls())));
}
function il(e, t) {
    e = Z(e);
    const n = e.dep;
    n && fs(n);
}
function ge(e) {
    return !!(e && e.__v_isRef === !0);
}
function X(e) {
    return cl(e, !1);
}
function al(e) {
    return cl(e, !0);
}
function cl(e, t) {
    return ge(e) ? e : new ti(e, t);
}
class ti {
    constructor(t, n) {
        (this.__v_isShallow = n),
            (this.dep = void 0),
            (this.__v_isRef = !0),
            (this._rawValue = n ? t : Z(t)),
            (this._value = n ? t : nn(t));
    }
    get value() {
        return ol(this), this._value;
    }
    set value(t) {
        const n = this.__v_isShallow || On(t) || Nt(t);
        (t = n ? t : Z(t)),
            tn(t, this._rawValue) &&
                ((this._rawValue = t), (this._value = n ? t : nn(t)), il(this));
    }
}
function De(e) {
    return ge(e) ? e.value : e;
}
const ni = {
    get: (e, t, n) => De(Reflect.get(e, t, n)),
    set: (e, t, n, s) => {
        const r = e[t];
        return ge(r) && !ge(n) ? ((r.value = n), !0) : Reflect.set(e, t, n, s);
    },
};
function ul(e) {
    return Lt(e) ? e : new Proxy(e, ni);
}
var fl;
class si {
    constructor(t, n, s, r) {
        (this._setter = n),
            (this.dep = void 0),
            (this.__v_isRef = !0),
            (this[fl] = !1),
            (this._dirty = !0),
            (this.effect = new Ms(t, () => {
                this._dirty || ((this._dirty = !0), il(this));
            })),
            (this.effect.computed = this),
            (this.effect.active = this._cacheable = !r),
            (this.__v_isReadonly = s);
    }
    get value() {
        const t = Z(this);
        return (
            ol(t),
            (t._dirty || !t._cacheable) &&
                ((t._dirty = !1), (t._value = t.effect.run())),
            t._value
        );
    }
    set value(t) {
        this._setter(t);
    }
}
fl = "__v_isReadonly";
function ri(e, t, n = !1) {
    let s, r;
    const l = q(e);
    return (
        l ? ((s = e), (r = Ne)) : ((s = e.get), (r = e.set)),
        new si(s, r, l || !r, n)
    );
}
function ft(e, t, n, s) {
    let r;
    try {
        r = s ? e(...s) : e();
    } catch (l) {
        Un(l, t, n);
    }
    return r;
}
function Oe(e, t, n, s) {
    if (q(e)) {
        const l = ft(e, t, n, s);
        return (
            l &&
                qr(l) &&
                l.catch((o) => {
                    Un(o, t, n);
                }),
            l
        );
    }
    const r = [];
    for (let l = 0; l < e.length; l++) r.push(Oe(e[l], t, n, s));
    return r;
}
function Un(e, t, n, s = !0) {
    const r = t ? t.vnode : null;
    if (t) {
        let l = t.parent;
        const o = t.proxy,
            i = n;
        for (; l; ) {
            const u = l.ec;
            if (u) {
                for (let f = 0; f < u.length; f++)
                    if (u[f](e, o, i) === !1) return;
            }
            l = l.parent;
        }
        const a = t.appContext.config.errorHandler;
        if (a) {
            ft(a, null, 10, [e, o, i]);
            return;
        }
    }
    li(e, n, r, s);
}
function li(e, t, n, s = !0) {
    console.error(e);
}
let sn = !1,
    ds = !1;
const me = [];
let Ye = 0;
const Mt = [];
let Ge = null,
    bt = 0;
const dl = Promise.resolve();
let Ds = null;
function pl(e) {
    const t = Ds || dl;
    return e ? t.then(this ? e.bind(this) : e) : t;
}
function oi(e) {
    let t = Ye + 1,
        n = me.length;
    for (; t < n; ) {
        const s = (t + n) >>> 1;
        rn(me[s]) < e ? (t = s + 1) : (n = s);
    }
    return t;
}
function Bs(e) {
    (!me.length || !me.includes(e, sn && e.allowRecurse ? Ye + 1 : Ye)) &&
        (e.id == null ? me.push(e) : me.splice(oi(e.id), 0, e), hl());
}
function hl() {
    !sn && !ds && ((ds = !0), (Ds = dl.then(ml)));
}
function ii(e) {
    const t = me.indexOf(e);
    t > Ye && me.splice(t, 1);
}
function ai(e) {
    U(e)
        ? Mt.push(...e)
        : (!Ge || !Ge.includes(e, e.allowRecurse ? bt + 1 : bt)) && Mt.push(e),
        hl();
}
function pr(e, t = sn ? Ye + 1 : 0) {
    for (; t < me.length; t++) {
        const n = me[t];
        n && n.pre && (me.splice(t, 1), t--, n());
    }
}
function Fn(e) {
    if (Mt.length) {
        const t = [...new Set(Mt)];
        if (((Mt.length = 0), Ge)) {
            Ge.push(...t);
            return;
        }
        for (
            Ge = t, Ge.sort((n, s) => rn(n) - rn(s)), bt = 0;
            bt < Ge.length;
            bt++
        )
            Ge[bt]();
        (Ge = null), (bt = 0);
    }
}
const rn = (e) => (e.id == null ? 1 / 0 : e.id),
    ci = (e, t) => {
        const n = rn(e) - rn(t);
        if (n === 0) {
            if (e.pre && !t.pre) return -1;
            if (t.pre && !e.pre) return 1;
        }
        return n;
    };
function ml(e) {
    (ds = !1), (sn = !0), me.sort(ci);
    const t = Ne;
    try {
        for (Ye = 0; Ye < me.length; Ye++) {
            const n = me[Ye];
            n && n.active !== !1 && ft(n, null, 14);
        }
    } finally {
        (Ye = 0),
            (me.length = 0),
            Fn(),
            (sn = !1),
            (Ds = null),
            (me.length || Mt.length) && ml();
    }
}
function ui(e, t, ...n) {
    if (e.isUnmounted) return;
    const s = e.vnode.props || ie;
    let r = n;
    const l = t.startsWith("update:"),
        o = l && t.slice(7);
    if (o && o in s) {
        const f = `${o === "modelValue" ? "model" : o}Modifiers`,
            { number: p, trim: h } = s[f] || ie;
        h && (r = n.map((g) => (fe(g) ? g.trim() : g))), p && (r = n.map(Eo));
    }
    let i,
        a = s[(i = Zn(t))] || s[(i = Zn(Qe(t)))];
    !a && l && (a = s[(i = Zn(Bt(t)))]), a && Oe(a, e, 6, r);
    const u = s[i + "Once"];
    if (u) {
        if (!e.emitted) e.emitted = {};
        else if (e.emitted[i]) return;
        (e.emitted[i] = !0), Oe(u, e, 6, r);
    }
}
function gl(e, t, n = !1) {
    const s = t.emitsCache,
        r = s.get(e);
    if (r !== void 0) return r;
    const l = e.emits;
    let o = {},
        i = !1;
    if (!q(e)) {
        const a = (u) => {
            const f = gl(u, t, !0);
            f && ((i = !0), ve(o, f));
        };
        !n && t.mixins.length && t.mixins.forEach(a),
            e.extends && a(e.extends),
            e.mixins && e.mixins.forEach(a);
    }
    return !l && !i
        ? (ae(e) && s.set(e, null), null)
        : (U(l) ? l.forEach((a) => (o[a] = null)) : ve(o, l),
          ae(e) && s.set(e, o),
          o);
}
function Kn(e, t) {
    return !e || !cn(t)
        ? !1
        : ((t = t.slice(2).replace(/Once$/, "")),
          Q(e, t[0].toLowerCase() + t.slice(1)) || Q(e, Bt(t)) || Q(e, t));
}
let _e = null,
    _l = null;
function Pn(e) {
    const t = _e;
    return (_e = e), (_l = (e && e.type.__scopeId) || null), t;
}
function Se(e, t = _e, n) {
    if (!t || e._n) return e;
    const s = (...r) => {
        s._d && Cr(-1);
        const l = Pn(t);
        let o;
        try {
            o = e(...r);
        } finally {
            Pn(l), s._d && Cr(1);
        }
        return o;
    };
    return (s._n = !0), (s._c = !0), (s._d = !0), s;
}
function Gn(e) {
    const {
        type: t,
        vnode: n,
        proxy: s,
        withProxy: r,
        props: l,
        propsOptions: [o],
        slots: i,
        attrs: a,
        emit: u,
        render: f,
        renderCache: p,
        data: h,
        setupState: g,
        ctx: b,
        inheritAttrs: C,
    } = e;
    let W, _;
    const S = Pn(e);
    try {
        if (n.shapeFlag & 4) {
            const R = r || s;
            (W = Me(f.call(R, R, p, l, g, h, b))), (_ = a);
        } else {
            const R = t;
            (W = Me(
                R.length > 1
                    ? R(l, { attrs: a, slots: i, emit: u })
                    : R(l, null)
            )),
                (_ = t.props ? a : fi(a));
        }
    } catch (R) {
        (Gt.length = 0), Un(R, e, 1), (W = V(je));
    }
    let O = W;
    if (_ && C !== !1) {
        const R = Object.keys(_),
            { shapeFlag: D } = O;
        R.length &&
            D & 7 &&
            (o && R.some(Os) && (_ = di(_, o)), (O = nt(O, _)));
    }
    return (
        n.dirs &&
            ((O = nt(O)), (O.dirs = O.dirs ? O.dirs.concat(n.dirs) : n.dirs)),
        n.transition && (O.transition = n.transition),
        (W = O),
        Pn(S),
        W
    );
}
const fi = (e) => {
        let t;
        for (const n in e)
            (n === "class" || n === "style" || cn(n)) &&
                ((t || (t = {}))[n] = e[n]);
        return t;
    },
    di = (e, t) => {
        const n = {};
        for (const s in e) (!Os(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
        return n;
    };
function pi(e, t, n) {
    const { props: s, children: r, component: l } = e,
        { props: o, children: i, patchFlag: a } = t,
        u = l.emitsOptions;
    if (t.dirs || t.transition) return !0;
    if (n && a >= 0) {
        if (a & 1024) return !0;
        if (a & 16) return s ? hr(s, o, u) : !!o;
        if (a & 8) {
            const f = t.dynamicProps;
            for (let p = 0; p < f.length; p++) {
                const h = f[p];
                if (o[h] !== s[h] && !Kn(u, h)) return !0;
            }
        }
    } else
        return (r || i) && (!i || !i.$stable)
            ? !0
            : s === o
            ? !1
            : s
            ? o
                ? hr(s, o, u)
                : !0
            : !!o;
    return !1;
}
function hr(e, t, n) {
    const s = Object.keys(t);
    if (s.length !== Object.keys(e).length) return !0;
    for (let r = 0; r < s.length; r++) {
        const l = s[r];
        if (t[l] !== e[l] && !Kn(n, l)) return !0;
    }
    return !1;
}
function hi({ vnode: e, parent: t }, n) {
    for (; t && t.subTree === e; ) ((e = t.vnode).el = n), (t = t.parent);
}
const mi = (e) => e.__isSuspense;
function bl(e, t) {
    t && t.pendingBranch
        ? U(e)
            ? t.effects.push(...e)
            : t.effects.push(e)
        : ai(e);
}
function Be(e, t) {
    if (ue) {
        let n = ue.provides;
        const s = ue.parent && ue.parent.provides;
        s === n && (n = ue.provides = Object.create(s)), (n[e] = t);
    }
}
function he(e, t, n = !1) {
    const s = ue || _e;
    if (s) {
        const r =
            s.parent == null
                ? s.vnode.appContext && s.vnode.appContext.provides
                : s.parent.provides;
        if (r && e in r) return r[e];
        if (arguments.length > 1) return n && q(t) ? t.call(s.proxy) : t;
    }
}
function Ue(e, t) {
    return Us(e, null, t);
}
const yn = {};
function dt(e, t, n) {
    return Us(e, t, n);
}
function Us(
    e,
    t,
    { immediate: n, deep: s, flush: r, onTrack: l, onTrigger: o } = ie
) {
    const i = $o() === (ue == null ? void 0 : ue.scope) ? ue : null;
    let a,
        u = !1,
        f = !1;
    if (
        (ge(e)
            ? ((a = () => e.value), (u = On(e)))
            : Lt(e)
            ? ((a = () => e), (s = !0))
            : U(e)
            ? ((f = !0),
              (u = e.some((O) => Lt(O) || On(O))),
              (a = () =>
                  e.map((O) => {
                      if (ge(O)) return O.value;
                      if (Lt(O)) return Ft(O);
                      if (q(O)) return ft(O, i, 2);
                  })))
            : q(e)
            ? t
                ? (a = () => ft(e, i, 2))
                : (a = () => {
                      if (!(i && i.isUnmounted))
                          return p && p(), Oe(e, i, 3, [h]);
                  })
            : (a = Ne),
        t && s)
    ) {
        const O = a;
        a = () => Ft(O());
    }
    let p,
        h = (O) => {
            p = _.onStop = () => {
                ft(O, i, 4);
            };
        },
        g;
    if (on)
        if (
            ((h = Ne),
            t ? n && Oe(t, i, 3, [a(), f ? [] : void 0, h]) : a(),
            r === "sync")
        ) {
            const O = ma();
            g = O.__watcherHandles || (O.__watcherHandles = []);
        } else return Ne;
    let b = f ? new Array(e.length).fill(yn) : yn;
    const C = () => {
        if (!!_.active)
            if (t) {
                const O = _.run();
                (s || u || (f ? O.some((R, D) => tn(R, b[D])) : tn(O, b))) &&
                    (p && p(),
                    Oe(t, i, 3, [
                        O,
                        b === yn ? void 0 : f && b[0] === yn ? [] : b,
                        h,
                    ]),
                    (b = O));
            } else _.run();
    };
    C.allowRecurse = !!t;
    let W;
    r === "sync"
        ? (W = C)
        : r === "post"
        ? (W = () => we(C, i && i.suspense))
        : ((C.pre = !0), i && (C.id = i.uid), (W = () => Bs(C)));
    const _ = new Ms(a, W);
    t
        ? n
            ? C()
            : (b = _.run())
        : r === "post"
        ? we(_.run.bind(_), i && i.suspense)
        : _.run();
    const S = () => {
        _.stop(), i && i.scope && Fs(i.scope.effects, _);
    };
    return g && g.push(S), S;
}
function gi(e, t, n) {
    const s = this.proxy,
        r = fe(e) ? (e.includes(".") ? vl(s, e) : () => s[e]) : e.bind(s, s);
    let l;
    q(t) ? (l = t) : ((l = t.handler), (n = t));
    const o = ue;
    Dt(this);
    const i = Us(r, l.bind(s), n);
    return o ? Dt(o) : Et(), i;
}
function vl(e, t) {
    const n = t.split(".");
    return () => {
        let s = e;
        for (let r = 0; r < n.length && s; r++) s = s[n[r]];
        return s;
    };
}
function Ft(e, t) {
    if (!ae(e) || e.__v_skip || ((t = t || new Set()), t.has(e))) return e;
    if ((t.add(e), ge(e))) Ft(e.value, t);
    else if (U(e)) for (let n = 0; n < e.length; n++) Ft(e[n], t);
    else if (Kr(e) || kt(e))
        e.forEach((n) => {
            Ft(n, t);
        });
    else if (Vr(e)) for (const n in e) Ft(e[n], t);
    return e;
}
function _i() {
    const e = {
        isMounted: !1,
        isLeaving: !1,
        isUnmounting: !1,
        leavingVNodes: new Map(),
    };
    return (
        be(() => {
            e.isMounted = !0;
        }),
        Ks(() => {
            e.isUnmounting = !0;
        }),
        e
    );
}
const Te = [Function, Array],
    bi = {
        name: "BaseTransition",
        props: {
            mode: String,
            appear: Boolean,
            persisted: Boolean,
            onBeforeEnter: Te,
            onEnter: Te,
            onAfterEnter: Te,
            onEnterCancelled: Te,
            onBeforeLeave: Te,
            onLeave: Te,
            onAfterLeave: Te,
            onLeaveCancelled: Te,
            onBeforeAppear: Te,
            onAppear: Te,
            onAfterAppear: Te,
            onAppearCancelled: Te,
        },
        setup(e, { slots: t }) {
            const n = ia(),
                s = _i();
            let r;
            return () => {
                const l = t.default && xl(t.default(), !0);
                if (!l || !l.length) return;
                let o = l[0];
                if (l.length > 1) {
                    for (const C of l)
                        if (C.type !== je) {
                            o = C;
                            break;
                        }
                }
                const i = Z(e),
                    { mode: a } = i;
                if (s.isLeaving) return es(o);
                const u = mr(o);
                if (!u) return es(o);
                const f = ps(u, i, s, n);
                hs(u, f);
                const p = n.subTree,
                    h = p && mr(p);
                let g = !1;
                const { getTransitionKey: b } = u.type;
                if (b) {
                    const C = b();
                    r === void 0 ? (r = C) : C !== r && ((r = C), (g = !0));
                }
                if (h && h.type !== je && (!vt(u, h) || g)) {
                    const C = ps(h, i, s, n);
                    if ((hs(h, C), a === "out-in"))
                        return (
                            (s.isLeaving = !0),
                            (C.afterLeave = () => {
                                (s.isLeaving = !1),
                                    n.update.active !== !1 && n.update();
                            }),
                            es(o)
                        );
                    a === "in-out" &&
                        u.type !== je &&
                        (C.delayLeave = (W, _, S) => {
                            const O = yl(s, h);
                            (O[String(h.key)] = h),
                                (W._leaveCb = () => {
                                    _(),
                                        (W._leaveCb = void 0),
                                        delete f.delayedLeave;
                                }),
                                (f.delayedLeave = S);
                        });
                }
                return o;
            };
        },
    },
    vi = bi;
function yl(e, t) {
    const { leavingVNodes: n } = e;
    let s = n.get(t.type);
    return s || ((s = Object.create(null)), n.set(t.type, s)), s;
}
function ps(e, t, n, s) {
    const {
            appear: r,
            mode: l,
            persisted: o = !1,
            onBeforeEnter: i,
            onEnter: a,
            onAfterEnter: u,
            onEnterCancelled: f,
            onBeforeLeave: p,
            onLeave: h,
            onAfterLeave: g,
            onLeaveCancelled: b,
            onBeforeAppear: C,
            onAppear: W,
            onAfterAppear: _,
            onAppearCancelled: S,
        } = t,
        O = String(e.key),
        R = yl(n, e),
        D = (x, I) => {
            x && Oe(x, s, 9, I);
        },
        M = (x, I) => {
            const L = I[1];
            D(x, I),
                U(x)
                    ? x.every((K) => K.length <= 1) && L()
                    : x.length <= 1 && L();
        },
        k = {
            mode: l,
            persisted: o,
            beforeEnter(x) {
                let I = i;
                if (!n.isMounted)
                    if (r) I = C || i;
                    else return;
                x._leaveCb && x._leaveCb(!0);
                const L = R[O];
                L && vt(e, L) && L.el._leaveCb && L.el._leaveCb(), D(I, [x]);
            },
            enter(x) {
                let I = a,
                    L = u,
                    K = f;
                if (!n.isMounted)
                    if (r) (I = W || a), (L = _ || u), (K = S || f);
                    else return;
                let pe = !1;
                const le = (x._enterCb = (j) => {
                    pe ||
                        ((pe = !0),
                        j ? D(K, [x]) : D(L, [x]),
                        k.delayedLeave && k.delayedLeave(),
                        (x._enterCb = void 0));
                });
                I ? M(I, [x, le]) : le();
            },
            leave(x, I) {
                const L = String(e.key);
                if ((x._enterCb && x._enterCb(!0), n.isUnmounting)) return I();
                D(p, [x]);
                let K = !1;
                const pe = (x._leaveCb = (le) => {
                    K ||
                        ((K = !0),
                        I(),
                        le ? D(b, [x]) : D(g, [x]),
                        (x._leaveCb = void 0),
                        R[L] === e && delete R[L]);
                });
                (R[L] = e), h ? M(h, [x, pe]) : pe();
            },
            clone(x) {
                return ps(x, t, n, s);
            },
        };
    return k;
}
function es(e) {
    if (qn(e)) return (e = nt(e)), (e.children = null), e;
}
function mr(e) {
    return qn(e) ? (e.children ? e.children[0] : void 0) : e;
}
function hs(e, t) {
    e.shapeFlag & 6 && e.component
        ? hs(e.component.subTree, t)
        : e.shapeFlag & 128
        ? ((e.ssContent.transition = t.clone(e.ssContent)),
          (e.ssFallback.transition = t.clone(e.ssFallback)))
        : (e.transition = t);
}
function xl(e, t = !1, n) {
    let s = [],
        r = 0;
    for (let l = 0; l < e.length; l++) {
        let o = e[l];
        const i =
            n == null ? o.key : String(n) + String(o.key != null ? o.key : l);
        o.type === G
            ? (o.patchFlag & 128 && r++, (s = s.concat(xl(o.children, t, i))))
            : (t || o.type !== je) && s.push(i != null ? nt(o, { key: i }) : o);
    }
    if (r > 1) for (let l = 0; l < s.length; l++) s[l].patchFlag = -2;
    return s;
}
function ce(e) {
    return q(e) ? { setup: e, name: e.name } : e;
}
const It = (e) => !!e.type.__asyncLoader,
    qn = (e) => e.type.__isKeepAlive;
function yi(e, t) {
    wl(e, "a", t);
}
function xi(e, t) {
    wl(e, "da", t);
}
function wl(e, t, n = ue) {
    const s =
        e.__wdc ||
        (e.__wdc = () => {
            let r = n;
            for (; r; ) {
                if (r.isDeactivated) return;
                r = r.parent;
            }
            return e();
        });
    if ((Wn(t, s, n), n)) {
        let r = n.parent;
        for (; r && r.parent; )
            qn(r.parent.vnode) && wi(s, t, n, r), (r = r.parent);
    }
}
function wi(e, t, n, s) {
    const r = Wn(t, e, s, !0);
    Ke(() => {
        Fs(s[t], r);
    }, n);
}
function Wn(e, t, n = ue, s = !1) {
    if (n) {
        const r = n[e] || (n[e] = []),
            l =
                t.__weh ||
                (t.__weh = (...o) => {
                    if (n.isUnmounted) return;
                    Ut(), Dt(n);
                    const i = Oe(t, n, e, o);
                    return Et(), Kt(), i;
                });
        return s ? r.unshift(l) : r.push(l), l;
    }
}
const st =
        (e) =>
        (t, n = ue) =>
            (!on || e === "sp") && Wn(e, (...s) => t(...s), n),
    Ei = st("bm"),
    be = st("m"),
    Ci = st("bu"),
    Ai = st("u"),
    Ks = st("bum"),
    Ke = st("um"),
    Ti = st("sp"),
    $i = st("rtg"),
    Si = st("rtc");
function Oi(e, t = ue) {
    Wn("ec", e, t);
}
function Ve(e, t, n, s) {
    const r = e.dirs,
        l = t && t.dirs;
    for (let o = 0; o < r.length; o++) {
        const i = r[o];
        l && (i.oldValue = l[o].value);
        let a = i.dir[s];
        a && (Ut(), Oe(a, n, 8, [e.el, i, e, t]), Kt());
    }
}
const El = "components",
    Cl = Symbol();
function Fi(e) {
    return fe(e) ? Pi(El, e, !1) || e : e || Cl;
}
function Pi(e, t, n = !0, s = !1) {
    const r = _e || ue;
    if (r) {
        const l = r.type;
        if (e === El) {
            const i = da(l, !1);
            if (i && (i === t || i === Qe(t) || i === jn(Qe(t)))) return l;
        }
        const o = gr(r[e] || l[e], t) || gr(r.appContext[e], t);
        return !o && s ? l : o;
    }
}
function gr(e, t) {
    return e && (e[t] || e[Qe(t)] || e[jn(Qe(t))]);
}
function ze(e, t, n, s) {
    let r;
    const l = n && n[s];
    if (U(e) || fe(e)) {
        r = new Array(e.length);
        for (let o = 0, i = e.length; o < i; o++)
            r[o] = t(e[o], o, void 0, l && l[o]);
    } else if (typeof e == "number") {
        r = new Array(e);
        for (let o = 0; o < e; o++) r[o] = t(o + 1, o, void 0, l && l[o]);
    } else if (ae(e))
        if (e[Symbol.iterator])
            r = Array.from(e, (o, i) => t(o, i, void 0, l && l[i]));
        else {
            const o = Object.keys(e);
            r = new Array(o.length);
            for (let i = 0, a = o.length; i < a; i++) {
                const u = o[i];
                r[i] = t(e[u], u, i, l && l[i]);
            }
        }
    else r = [];
    return n && (n[s] = r), r;
}
function ki(e, t, n = {}, s, r) {
    if (_e.isCE || (_e.parent && It(_e.parent) && _e.parent.isCE))
        return t !== "default" && (n.name = t), V("slot", n, s && s());
    let l = e[t];
    l && l._c && (l._d = !1), Y();
    const o = l && Al(l(n)),
        i = Rt(
            G,
            { key: n.key || (o && o.key) || `_${t}` },
            o || (s ? s() : []),
            o && e._ === 1 ? 64 : -2
        );
    return (
        !r && i.scopeId && (i.slotScopeIds = [i.scopeId + "-s"]),
        l && l._c && (l._d = !0),
        i
    );
}
function Al(e) {
    return e.some((t) =>
        Mn(t) ? !(t.type === je || (t.type === G && !Al(t.children))) : !0
    )
        ? e
        : null;
}
const ms = (e) => (e ? (Hl(e) ? Qs(e) || e.proxy : ms(e.parent)) : null),
    Jt = ve(Object.create(null), {
        $: (e) => e,
        $el: (e) => e.vnode.el,
        $data: (e) => e.data,
        $props: (e) => e.props,
        $attrs: (e) => e.attrs,
        $slots: (e) => e.slots,
        $refs: (e) => e.refs,
        $parent: (e) => ms(e.parent),
        $root: (e) => ms(e.root),
        $emit: (e) => e.emit,
        $options: (e) => qs(e),
        $forceUpdate: (e) => e.f || (e.f = () => Bs(e.update)),
        $nextTick: (e) => e.n || (e.n = pl.bind(e.proxy)),
        $watch: (e) => gi.bind(e),
    }),
    ts = (e, t) => e !== ie && !e.__isScriptSetup && Q(e, t),
    Li = {
        get({ _: e }, t) {
            const {
                ctx: n,
                setupState: s,
                data: r,
                props: l,
                accessCache: o,
                type: i,
                appContext: a,
            } = e;
            let u;
            if (t[0] !== "$") {
                const g = o[t];
                if (g !== void 0)
                    switch (g) {
                        case 1:
                            return s[t];
                        case 2:
                            return r[t];
                        case 4:
                            return n[t];
                        case 3:
                            return l[t];
                    }
                else {
                    if (ts(s, t)) return (o[t] = 1), s[t];
                    if (r !== ie && Q(r, t)) return (o[t] = 2), r[t];
                    if ((u = e.propsOptions[0]) && Q(u, t))
                        return (o[t] = 3), l[t];
                    if (n !== ie && Q(n, t)) return (o[t] = 4), n[t];
                    gs && (o[t] = 0);
                }
            }
            const f = Jt[t];
            let p, h;
            if (f) return t === "$attrs" && Ee(e, "get", t), f(e);
            if ((p = i.__cssModules) && (p = p[t])) return p;
            if (n !== ie && Q(n, t)) return (o[t] = 4), n[t];
            if (((h = a.config.globalProperties), Q(h, t))) return h[t];
        },
        set({ _: e }, t, n) {
            const { data: s, setupState: r, ctx: l } = e;
            return ts(r, t)
                ? ((r[t] = n), !0)
                : s !== ie && Q(s, t)
                ? ((s[t] = n), !0)
                : Q(e.props, t) || (t[0] === "$" && t.slice(1) in e)
                ? !1
                : ((l[t] = n), !0);
        },
        has(
            {
                _: {
                    data: e,
                    setupState: t,
                    accessCache: n,
                    ctx: s,
                    appContext: r,
                    propsOptions: l,
                },
            },
            o
        ) {
            let i;
            return (
                !!n[o] ||
                (e !== ie && Q(e, o)) ||
                ts(t, o) ||
                ((i = l[0]) && Q(i, o)) ||
                Q(s, o) ||
                Q(Jt, o) ||
                Q(r.config.globalProperties, o)
            );
        },
        defineProperty(e, t, n) {
            return (
                n.get != null
                    ? (e._.accessCache[t] = 0)
                    : Q(n, "value") && this.set(e, t, n.value, null),
                Reflect.defineProperty(e, t, n)
            );
        },
    };
let gs = !0;
function Mi(e) {
    const t = qs(e),
        n = e.proxy,
        s = e.ctx;
    (gs = !1), t.beforeCreate && _r(t.beforeCreate, e, "bc");
    const {
        data: r,
        computed: l,
        methods: o,
        watch: i,
        provide: a,
        inject: u,
        created: f,
        beforeMount: p,
        mounted: h,
        beforeUpdate: g,
        updated: b,
        activated: C,
        deactivated: W,
        beforeDestroy: _,
        beforeUnmount: S,
        destroyed: O,
        unmounted: R,
        render: D,
        renderTracked: M,
        renderTriggered: k,
        errorCaptured: x,
        serverPrefetch: I,
        expose: L,
        inheritAttrs: K,
        components: pe,
        directives: le,
        filters: j,
    } = t;
    if ((u && Ii(u, s, null, e.appContext.config.unwrapInjectedRef), o))
        for (const re in o) {
            const ee = o[re];
            q(ee) && (s[re] = ee.bind(n));
        }
    if (r) {
        const re = r.call(n, n);
        ae(re) && (e.data = Bn(re));
    }
    if (((gs = !0), l))
        for (const re in l) {
            const ee = l[re],
                Ze = q(ee) ? ee.bind(n, n) : q(ee.get) ? ee.get.bind(n, n) : Ne,
                pn = !q(ee) && q(ee.set) ? ee.set.bind(n) : Ne,
                ht = oe({ get: Ze, set: pn });
            Object.defineProperty(s, re, {
                enumerable: !0,
                configurable: !0,
                get: () => ht.value,
                set: (qe) => (ht.value = qe),
            });
        }
    if (i) for (const re in i) Tl(i[re], s, n, re);
    if (a) {
        const re = q(a) ? a.call(n) : a;
        Reflect.ownKeys(re).forEach((ee) => {
            Be(ee, re[ee]);
        });
    }
    f && _r(f, e, "c");
    function ne(re, ee) {
        U(ee) ? ee.forEach((Ze) => re(Ze.bind(n))) : ee && re(ee.bind(n));
    }
    if (
        (ne(Ei, p),
        ne(be, h),
        ne(Ci, g),
        ne(Ai, b),
        ne(yi, C),
        ne(xi, W),
        ne(Oi, x),
        ne(Si, M),
        ne($i, k),
        ne(Ks, S),
        ne(Ke, R),
        ne(Ti, I),
        U(L))
    )
        if (L.length) {
            const re = e.exposed || (e.exposed = {});
            L.forEach((ee) => {
                Object.defineProperty(re, ee, {
                    get: () => n[ee],
                    set: (Ze) => (n[ee] = Ze),
                });
            });
        } else e.exposed || (e.exposed = {});
    D && e.render === Ne && (e.render = D),
        K != null && (e.inheritAttrs = K),
        pe && (e.components = pe),
        le && (e.directives = le);
}
function Ii(e, t, n = Ne, s = !1) {
    U(e) && (e = _s(e));
    for (const r in e) {
        const l = e[r];
        let o;
        ae(l)
            ? "default" in l
                ? (o = he(l.from || r, l.default, !0))
                : (o = he(l.from || r))
            : (o = he(l)),
            ge(o) && s
                ? Object.defineProperty(t, r, {
                      enumerable: !0,
                      configurable: !0,
                      get: () => o.value,
                      set: (i) => (o.value = i),
                  })
                : (t[r] = o);
    }
}
function _r(e, t, n) {
    Oe(U(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Tl(e, t, n, s) {
    const r = s.includes(".") ? vl(n, s) : () => n[s];
    if (fe(e)) {
        const l = t[e];
        q(l) && dt(r, l);
    } else if (q(e)) dt(r, e.bind(n));
    else if (ae(e))
        if (U(e)) e.forEach((l) => Tl(l, t, n, s));
        else {
            const l = q(e.handler) ? e.handler.bind(n) : t[e.handler];
            q(l) && dt(r, l, e);
        }
}
function qs(e) {
    const t = e.type,
        { mixins: n, extends: s } = t,
        {
            mixins: r,
            optionsCache: l,
            config: { optionMergeStrategies: o },
        } = e.appContext,
        i = l.get(t);
    let a;
    return (
        i
            ? (a = i)
            : !r.length && !n && !s
            ? (a = t)
            : ((a = {}),
              r.length && r.forEach((u) => kn(a, u, o, !0)),
              kn(a, t, o)),
        ae(t) && l.set(t, a),
        a
    );
}
function kn(e, t, n, s = !1) {
    const { mixins: r, extends: l } = t;
    l && kn(e, l, n, !0), r && r.forEach((o) => kn(e, o, n, !0));
    for (const o in t)
        if (!(s && o === "expose")) {
            const i = Ri[o] || (n && n[o]);
            e[o] = i ? i(e[o], t[o]) : t[o];
        }
    return e;
}
const Ri = {
    data: br,
    props: _t,
    emits: _t,
    methods: _t,
    computed: _t,
    beforeCreate: ye,
    created: ye,
    beforeMount: ye,
    mounted: ye,
    beforeUpdate: ye,
    updated: ye,
    beforeDestroy: ye,
    beforeUnmount: ye,
    destroyed: ye,
    unmounted: ye,
    activated: ye,
    deactivated: ye,
    errorCaptured: ye,
    serverPrefetch: ye,
    components: _t,
    directives: _t,
    watch: Ni,
    provide: br,
    inject: Hi,
};
function br(e, t) {
    return t
        ? e
            ? function () {
                  return ve(
                      q(e) ? e.call(this, this) : e,
                      q(t) ? t.call(this, this) : t
                  );
              }
            : t
        : e;
}
function Hi(e, t) {
    return _t(_s(e), _s(t));
}
function _s(e) {
    if (U(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
        return t;
    }
    return e;
}
function ye(e, t) {
    return e ? [...new Set([].concat(e, t))] : t;
}
function _t(e, t) {
    return e ? ve(ve(Object.create(null), e), t) : t;
}
function Ni(e, t) {
    if (!e) return t;
    if (!t) return e;
    const n = ve(Object.create(null), e);
    for (const s in t) n[s] = ye(e[s], t[s]);
    return n;
}
function ji(e, t, n, s = !1) {
    const r = {},
        l = {};
    Sn(l, Vn, 1), (e.propsDefaults = Object.create(null)), $l(e, t, r, l);
    for (const o in e.propsOptions[0]) o in r || (r[o] = void 0);
    n
        ? (e.props = s ? r : ei(r))
        : e.type.props
        ? (e.props = r)
        : (e.props = l),
        (e.attrs = l);
}
function Di(e, t, n, s) {
    const {
            props: r,
            attrs: l,
            vnode: { patchFlag: o },
        } = e,
        i = Z(r),
        [a] = e.propsOptions;
    let u = !1;
    if ((s || o > 0) && !(o & 16)) {
        if (o & 8) {
            const f = e.vnode.dynamicProps;
            for (let p = 0; p < f.length; p++) {
                let h = f[p];
                if (Kn(e.emitsOptions, h)) continue;
                const g = t[h];
                if (a)
                    if (Q(l, h)) g !== l[h] && ((l[h] = g), (u = !0));
                    else {
                        const b = Qe(h);
                        r[b] = bs(a, i, b, g, e, !1);
                    }
                else g !== l[h] && ((l[h] = g), (u = !0));
            }
        }
    } else {
        $l(e, t, r, l) && (u = !0);
        let f;
        for (const p in i)
            (!t || (!Q(t, p) && ((f = Bt(p)) === p || !Q(t, f)))) &&
                (a
                    ? n &&
                      (n[p] !== void 0 || n[f] !== void 0) &&
                      (r[p] = bs(a, i, p, void 0, e, !0))
                    : delete r[p]);
        if (l !== i)
            for (const p in l)
                (!t || (!Q(t, p) && !0)) && (delete l[p], (u = !0));
    }
    u && tt(e, "set", "$attrs");
}
function $l(e, t, n, s) {
    const [r, l] = e.propsOptions;
    let o = !1,
        i;
    if (t)
        for (let a in t) {
            if (Qt(a)) continue;
            const u = t[a];
            let f;
            r && Q(r, (f = Qe(a)))
                ? !l || !l.includes(f)
                    ? (n[f] = u)
                    : ((i || (i = {}))[f] = u)
                : Kn(e.emitsOptions, a) ||
                  ((!(a in s) || u !== s[a]) && ((s[a] = u), (o = !0)));
        }
    if (l) {
        const a = Z(n),
            u = i || ie;
        for (let f = 0; f < l.length; f++) {
            const p = l[f];
            n[p] = bs(r, a, p, u[p], e, !Q(u, p));
        }
    }
    return o;
}
function bs(e, t, n, s, r, l) {
    const o = e[n];
    if (o != null) {
        const i = Q(o, "default");
        if (i && s === void 0) {
            const a = o.default;
            if (o.type !== Function && q(a)) {
                const { propsDefaults: u } = r;
                n in u
                    ? (s = u[n])
                    : (Dt(r), (s = u[n] = a.call(null, t)), Et());
            } else s = a;
        }
        o[0] &&
            (l && !i
                ? (s = !1)
                : o[1] && (s === "" || s === Bt(n)) && (s = !0));
    }
    return s;
}
function Sl(e, t, n = !1) {
    const s = t.propsCache,
        r = s.get(e);
    if (r) return r;
    const l = e.props,
        o = {},
        i = [];
    let a = !1;
    if (!q(e)) {
        const f = (p) => {
            a = !0;
            const [h, g] = Sl(p, t, !0);
            ve(o, h), g && i.push(...g);
        };
        !n && t.mixins.length && t.mixins.forEach(f),
            e.extends && f(e.extends),
            e.mixins && e.mixins.forEach(f);
    }
    if (!l && !a) return ae(e) && s.set(e, Pt), Pt;
    if (U(l))
        for (let f = 0; f < l.length; f++) {
            const p = Qe(l[f]);
            vr(p) && (o[p] = ie);
        }
    else if (l)
        for (const f in l) {
            const p = Qe(f);
            if (vr(p)) {
                const h = l[f],
                    g = (o[p] =
                        U(h) || q(h) ? { type: h } : Object.assign({}, h));
                if (g) {
                    const b = wr(Boolean, g.type),
                        C = wr(String, g.type);
                    (g[0] = b > -1),
                        (g[1] = C < 0 || b < C),
                        (b > -1 || Q(g, "default")) && i.push(p);
                }
            }
        }
    const u = [o, i];
    return ae(e) && s.set(e, u), u;
}
function vr(e) {
    return e[0] !== "$";
}
function yr(e) {
    const t = e && e.toString().match(/^\s*(function|class) (\w+)/);
    return t ? t[2] : e === null ? "null" : "";
}
function xr(e, t) {
    return yr(e) === yr(t);
}
function wr(e, t) {
    return U(t) ? t.findIndex((n) => xr(n, e)) : q(t) && xr(t, e) ? 0 : -1;
}
const Ol = (e) => e[0] === "_" || e === "$stable",
    Ws = (e) => (U(e) ? e.map(Me) : [Me(e)]),
    Bi = (e, t, n) => {
        if (t._n) return t;
        const s = Se((...r) => Ws(t(...r)), n);
        return (s._c = !1), s;
    },
    Fl = (e, t, n) => {
        const s = e._ctx;
        for (const r in e) {
            if (Ol(r)) continue;
            const l = e[r];
            if (q(l)) t[r] = Bi(r, l, s);
            else if (l != null) {
                const o = Ws(l);
                t[r] = () => o;
            }
        }
    },
    Pl = (e, t) => {
        const n = Ws(t);
        e.slots.default = () => n;
    },
    Ui = (e, t) => {
        if (e.vnode.shapeFlag & 32) {
            const n = t._;
            n ? ((e.slots = Z(t)), Sn(t, "_", n)) : Fl(t, (e.slots = {}));
        } else (e.slots = {}), t && Pl(e, t);
        Sn(e.slots, Vn, 1);
    },
    Ki = (e, t, n) => {
        const { vnode: s, slots: r } = e;
        let l = !0,
            o = ie;
        if (s.shapeFlag & 32) {
            const i = t._;
            i
                ? n && i === 1
                    ? (l = !1)
                    : (ve(r, t), !n && i === 1 && delete r._)
                : ((l = !t.$stable), Fl(t, r)),
                (o = t);
        } else t && (Pl(e, t), (o = { default: 1 }));
        if (l) for (const i in r) !Ol(i) && !(i in o) && delete r[i];
    };
function kl() {
    return {
        app: null,
        config: {
            isNativeTag: _o,
            performance: !1,
            globalProperties: {},
            optionMergeStrategies: {},
            errorHandler: void 0,
            warnHandler: void 0,
            compilerOptions: {},
        },
        mixins: [],
        components: {},
        directives: {},
        provides: Object.create(null),
        optionsCache: new WeakMap(),
        propsCache: new WeakMap(),
        emitsCache: new WeakMap(),
    };
}
let qi = 0;
function Wi(e, t) {
    return function (s, r = null) {
        q(s) || (s = Object.assign({}, s)), r != null && !ae(r) && (r = null);
        const l = kl(),
            o = new Set();
        let i = !1;
        const a = (l.app = {
            _uid: qi++,
            _component: s,
            _props: r,
            _container: null,
            _context: l,
            _instance: null,
            version: ga,
            get config() {
                return l.config;
            },
            set config(u) {},
            use(u, ...f) {
                return (
                    o.has(u) ||
                        (u && q(u.install)
                            ? (o.add(u), u.install(a, ...f))
                            : q(u) && (o.add(u), u(a, ...f))),
                    a
                );
            },
            mixin(u) {
                return l.mixins.includes(u) || l.mixins.push(u), a;
            },
            component(u, f) {
                return f ? ((l.components[u] = f), a) : l.components[u];
            },
            directive(u, f) {
                return f ? ((l.directives[u] = f), a) : l.directives[u];
            },
            mount(u, f, p) {
                if (!i) {
                    const h = V(s, r);
                    return (
                        (h.appContext = l),
                        f && t ? t(h, u) : e(h, u, p),
                        (i = !0),
                        (a._container = u),
                        (u.__vue_app__ = a),
                        Qs(h.component) || h.component.proxy
                    );
                }
            },
            unmount() {
                i && (e(null, a._container), delete a._container.__vue_app__);
            },
            provide(u, f) {
                return (l.provides[u] = f), a;
            },
        });
        return a;
    };
}
function Ln(e, t, n, s, r = !1) {
    if (U(e)) {
        e.forEach((h, g) => Ln(h, t && (U(t) ? t[g] : t), n, s, r));
        return;
    }
    if (It(s) && !r) return;
    const l = s.shapeFlag & 4 ? Qs(s.component) || s.component.proxy : s.el,
        o = r ? null : l,
        { i, r: a } = e,
        u = t && t.r,
        f = i.refs === ie ? (i.refs = {}) : i.refs,
        p = i.setupState;
    if (
        (u != null &&
            u !== a &&
            (fe(u)
                ? ((f[u] = null), Q(p, u) && (p[u] = null))
                : ge(u) && (u.value = null)),
        q(a))
    )
        ft(a, i, 12, [o, f]);
    else {
        const h = fe(a),
            g = ge(a);
        if (h || g) {
            const b = () => {
                if (e.f) {
                    const C = h ? (Q(p, a) ? p[a] : f[a]) : a.value;
                    r
                        ? U(C) && Fs(C, l)
                        : U(C)
                        ? C.includes(l) || C.push(l)
                        : h
                        ? ((f[a] = [l]), Q(p, a) && (p[a] = f[a]))
                        : ((a.value = [l]), e.k && (f[e.k] = a.value));
                } else
                    h
                        ? ((f[a] = o), Q(p, a) && (p[a] = o))
                        : g && ((a.value = o), e.k && (f[e.k] = o));
            };
            o ? ((b.id = -1), we(b, n)) : b();
        }
    }
}
let lt = !1;
const xn = (e) => /svg/.test(e.namespaceURI) && e.tagName !== "foreignObject",
    wn = (e) => e.nodeType === 8;
function Vi(e) {
    const {
            mt: t,
            p: n,
            o: {
                patchProp: s,
                createText: r,
                nextSibling: l,
                parentNode: o,
                remove: i,
                insert: a,
                createComment: u,
            },
        } = e,
        f = (_, S) => {
            if (!S.hasChildNodes()) {
                n(null, _, S), Fn(), (S._vnode = _);
                return;
            }
            (lt = !1),
                p(S.firstChild, _, null, null, null),
                Fn(),
                (S._vnode = _),
                lt &&
                    console.error(
                        "Hydration completed but contains mismatches."
                    );
        },
        p = (_, S, O, R, D, M = !1) => {
            const k = wn(_) && _.data === "[",
                x = () => C(_, S, O, R, D, k),
                { type: I, ref: L, shapeFlag: K, patchFlag: pe } = S;
            let le = _.nodeType;
            (S.el = _), pe === -2 && ((M = !1), (S.dynamicChildren = null));
            let j = null;
            switch (I) {
                case jt:
                    le !== 3
                        ? S.children === ""
                            ? (a((S.el = r("")), o(_), _), (j = _))
                            : (j = x())
                        : (_.data !== S.children &&
                              ((lt = !0), (_.data = S.children)),
                          (j = l(_)));
                    break;
                case je:
                    le !== 8 || k ? (j = x()) : (j = l(_));
                    break;
                case Xt:
                    if (
                        (k && ((_ = l(_)), (le = _.nodeType)),
                        le === 1 || le === 3)
                    ) {
                        j = _;
                        const Pe = !S.children.length;
                        for (let ne = 0; ne < S.staticCount; ne++)
                            Pe &&
                                (S.children +=
                                    j.nodeType === 1 ? j.outerHTML : j.data),
                                ne === S.staticCount - 1 && (S.anchor = j),
                                (j = l(j));
                        return k ? l(j) : j;
                    } else x();
                    break;
                case G:
                    k ? (j = b(_, S, O, R, D, M)) : (j = x());
                    break;
                default:
                    if (K & 1)
                        le !== 1 ||
                        S.type.toLowerCase() !== _.tagName.toLowerCase()
                            ? (j = x())
                            : (j = h(_, S, O, R, D, M));
                    else if (K & 6) {
                        S.slotScopeIds = D;
                        const Pe = o(_);
                        if (
                            (t(S, Pe, null, O, R, xn(Pe), M),
                            (j = k ? W(_) : l(_)),
                            j &&
                                wn(j) &&
                                j.data === "teleport end" &&
                                (j = l(j)),
                            It(S))
                        ) {
                            let ne;
                            k
                                ? ((ne = V(G)),
                                  (ne.anchor = j
                                      ? j.previousSibling
                                      : Pe.lastChild))
                                : (ne = _.nodeType === 3 ? Ys("") : V("div")),
                                (ne.el = _),
                                (S.component.subTree = ne);
                        }
                    } else
                        K & 64
                            ? le !== 8
                                ? (j = x())
                                : (j = S.type.hydrate(_, S, O, R, D, M, e, g))
                            : K & 128 &&
                              (j = S.type.hydrate(
                                  _,
                                  S,
                                  O,
                                  R,
                                  xn(o(_)),
                                  D,
                                  M,
                                  e,
                                  p
                              ));
            }
            return L != null && Ln(L, null, R, S), j;
        },
        h = (_, S, O, R, D, M) => {
            M = M || !!S.dynamicChildren;
            const {
                    type: k,
                    props: x,
                    patchFlag: I,
                    shapeFlag: L,
                    dirs: K,
                } = S,
                pe = (k === "input" && K) || k === "option";
            if (pe || I !== -1) {
                if ((K && Ve(S, null, O, "created"), x))
                    if (pe || !M || I & 48)
                        for (const j in x)
                            ((pe && j.endsWith("value")) ||
                                (cn(j) && !Qt(j))) &&
                                s(_, j, null, x[j], !1, void 0, O);
                    else
                        x.onClick &&
                            s(_, "onClick", null, x.onClick, !1, void 0, O);
                let le;
                if (
                    ((le = x && x.onVnodeBeforeMount) && $e(le, O, S),
                    K && Ve(S, null, O, "beforeMount"),
                    ((le = x && x.onVnodeMounted) || K) &&
                        bl(() => {
                            le && $e(le, O, S), K && Ve(S, null, O, "mounted");
                        }, R),
                    L & 16 && !(x && (x.innerHTML || x.textContent)))
                ) {
                    let j = g(_.firstChild, S, _, O, R, D, M);
                    for (; j; ) {
                        lt = !0;
                        const Pe = j;
                        (j = j.nextSibling), i(Pe);
                    }
                } else
                    L & 8 &&
                        _.textContent !== S.children &&
                        ((lt = !0), (_.textContent = S.children));
            }
            return _.nextSibling;
        },
        g = (_, S, O, R, D, M, k) => {
            k = k || !!S.dynamicChildren;
            const x = S.children,
                I = x.length;
            for (let L = 0; L < I; L++) {
                const K = k ? x[L] : (x[L] = Me(x[L]));
                if (_) _ = p(_, K, R, D, M, k);
                else {
                    if (K.type === jt && !K.children) continue;
                    (lt = !0), n(null, K, O, null, R, D, xn(O), M);
                }
            }
            return _;
        },
        b = (_, S, O, R, D, M) => {
            const { slotScopeIds: k } = S;
            k && (D = D ? D.concat(k) : k);
            const x = o(_),
                I = g(l(_), S, x, O, R, D, M);
            return I && wn(I) && I.data === "]"
                ? l((S.anchor = I))
                : ((lt = !0), a((S.anchor = u("]")), x, I), I);
        },
        C = (_, S, O, R, D, M) => {
            if (((lt = !0), (S.el = null), M)) {
                const I = W(_);
                for (;;) {
                    const L = l(_);
                    if (L && L !== I) i(L);
                    else break;
                }
            }
            const k = l(_),
                x = o(_);
            return i(_), n(null, S, x, k, O, R, xn(x), D), k;
        },
        W = (_) => {
            let S = 0;
            for (; _; )
                if (
                    ((_ = l(_)),
                    _ && wn(_) && (_.data === "[" && S++, _.data === "]"))
                ) {
                    if (S === 0) return l(_);
                    S--;
                }
            return _;
        };
    return [f, p];
}
const we = bl;
function Yi(e) {
    return Ll(e);
}
function zi(e) {
    return Ll(e, Vi);
}
function Ll(e, t) {
    const n = Co();
    n.__VUE__ = !0;
    const {
            insert: s,
            remove: r,
            patchProp: l,
            createElement: o,
            createText: i,
            createComment: a,
            setText: u,
            setElementText: f,
            parentNode: p,
            nextSibling: h,
            setScopeId: g = Ne,
            insertStaticContent: b,
        } = e,
        C = (
            c,
            d,
            m,
            y = null,
            v = null,
            T = null,
            F = !1,
            A = null,
            $ = !!d.dynamicChildren
        ) => {
            if (c === d) return;
            c && !vt(c, d) && ((y = hn(c)), qe(c, v, T, !0), (c = null)),
                d.patchFlag === -2 && (($ = !1), (d.dynamicChildren = null));
            const { type: w, ref: H, shapeFlag: P } = d;
            switch (w) {
                case jt:
                    W(c, d, m, y);
                    break;
                case je:
                    _(c, d, m, y);
                    break;
                case Xt:
                    c == null && S(d, m, y, F);
                    break;
                case G:
                    pe(c, d, m, y, v, T, F, A, $);
                    break;
                default:
                    P & 1
                        ? D(c, d, m, y, v, T, F, A, $)
                        : P & 6
                        ? le(c, d, m, y, v, T, F, A, $)
                        : (P & 64 || P & 128) &&
                          w.process(c, d, m, y, v, T, F, A, $, $t);
            }
            H != null && v && Ln(H, c && c.ref, T, d || c, !d);
        },
        W = (c, d, m, y) => {
            if (c == null) s((d.el = i(d.children)), m, y);
            else {
                const v = (d.el = c.el);
                d.children !== c.children && u(v, d.children);
            }
        },
        _ = (c, d, m, y) => {
            c == null ? s((d.el = a(d.children || "")), m, y) : (d.el = c.el);
        },
        S = (c, d, m, y) => {
            [c.el, c.anchor] = b(c.children, d, m, y, c.el, c.anchor);
        },
        O = ({ el: c, anchor: d }, m, y) => {
            let v;
            for (; c && c !== d; ) (v = h(c)), s(c, m, y), (c = v);
            s(d, m, y);
        },
        R = ({ el: c, anchor: d }) => {
            let m;
            for (; c && c !== d; ) (m = h(c)), r(c), (c = m);
            r(d);
        },
        D = (c, d, m, y, v, T, F, A, $) => {
            (F = F || d.type === "svg"),
                c == null ? M(d, m, y, v, T, F, A, $) : I(c, d, v, T, F, A, $);
        },
        M = (c, d, m, y, v, T, F, A) => {
            let $, w;
            const {
                type: H,
                props: P,
                shapeFlag: N,
                transition: B,
                dirs: z,
            } = c;
            if (
                (($ = c.el = o(c.type, T, P && P.is, P)),
                N & 8
                    ? f($, c.children)
                    : N & 16 &&
                      x(
                          c.children,
                          $,
                          null,
                          y,
                          v,
                          T && H !== "foreignObject",
                          F,
                          A
                      ),
                z && Ve(c, null, y, "created"),
                k($, c, c.scopeId, F, y),
                P)
            ) {
                for (const te in P)
                    te !== "value" &&
                        !Qt(te) &&
                        l($, te, null, P[te], T, c.children, y, v, Xe);
                "value" in P && l($, "value", null, P.value),
                    (w = P.onVnodeBeforeMount) && $e(w, y, c);
            }
            z && Ve(c, null, y, "beforeMount");
            const se = (!v || (v && !v.pendingBranch)) && B && !B.persisted;
            se && B.beforeEnter($),
                s($, d, m),
                ((w = P && P.onVnodeMounted) || se || z) &&
                    we(() => {
                        w && $e(w, y, c),
                            se && B.enter($),
                            z && Ve(c, null, y, "mounted");
                    }, v);
        },
        k = (c, d, m, y, v) => {
            if ((m && g(c, m), y))
                for (let T = 0; T < y.length; T++) g(c, y[T]);
            if (v) {
                let T = v.subTree;
                if (d === T) {
                    const F = v.vnode;
                    k(c, F, F.scopeId, F.slotScopeIds, v.parent);
                }
            }
        },
        x = (c, d, m, y, v, T, F, A, $ = 0) => {
            for (let w = $; w < c.length; w++) {
                const H = (c[w] = A ? it(c[w]) : Me(c[w]));
                C(null, H, d, m, y, v, T, F, A);
            }
        },
        I = (c, d, m, y, v, T, F) => {
            const A = (d.el = c.el);
            let { patchFlag: $, dynamicChildren: w, dirs: H } = d;
            $ |= c.patchFlag & 16;
            const P = c.props || ie,
                N = d.props || ie;
            let B;
            m && mt(m, !1),
                (B = N.onVnodeBeforeUpdate) && $e(B, m, d, c),
                H && Ve(d, c, m, "beforeUpdate"),
                m && mt(m, !0);
            const z = v && d.type !== "foreignObject";
            if (
                (w
                    ? L(c.dynamicChildren, w, A, m, y, z, T)
                    : F || ee(c, d, A, null, m, y, z, T, !1),
                $ > 0)
            ) {
                if ($ & 16) K(A, d, P, N, m, y, v);
                else if (
                    ($ & 2 &&
                        P.class !== N.class &&
                        l(A, "class", null, N.class, v),
                    $ & 4 && l(A, "style", P.style, N.style, v),
                    $ & 8)
                ) {
                    const se = d.dynamicProps;
                    for (let te = 0; te < se.length; te++) {
                        const de = se[te],
                            ke = P[de],
                            St = N[de];
                        (St !== ke || de === "value") &&
                            l(A, de, ke, St, v, c.children, m, y, Xe);
                    }
                }
                $ & 1 && c.children !== d.children && f(A, d.children);
            } else !F && w == null && K(A, d, P, N, m, y, v);
            ((B = N.onVnodeUpdated) || H) &&
                we(() => {
                    B && $e(B, m, d, c), H && Ve(d, c, m, "updated");
                }, y);
        },
        L = (c, d, m, y, v, T, F) => {
            for (let A = 0; A < d.length; A++) {
                const $ = c[A],
                    w = d[A],
                    H =
                        $.el && ($.type === G || !vt($, w) || $.shapeFlag & 70)
                            ? p($.el)
                            : m;
                C($, w, H, null, y, v, T, F, !0);
            }
        },
        K = (c, d, m, y, v, T, F) => {
            if (m !== y) {
                if (m !== ie)
                    for (const A in m)
                        !Qt(A) &&
                            !(A in y) &&
                            l(c, A, m[A], null, F, d.children, v, T, Xe);
                for (const A in y) {
                    if (Qt(A)) continue;
                    const $ = y[A],
                        w = m[A];
                    $ !== w &&
                        A !== "value" &&
                        l(c, A, w, $, F, d.children, v, T, Xe);
                }
                "value" in y && l(c, "value", m.value, y.value);
            }
        },
        pe = (c, d, m, y, v, T, F, A, $) => {
            const w = (d.el = c ? c.el : i("")),
                H = (d.anchor = c ? c.anchor : i(""));
            let { patchFlag: P, dynamicChildren: N, slotScopeIds: B } = d;
            B && (A = A ? A.concat(B) : B),
                c == null
                    ? (s(w, m, y),
                      s(H, m, y),
                      x(d.children, m, H, v, T, F, A, $))
                    : P > 0 && P & 64 && N && c.dynamicChildren
                    ? (L(c.dynamicChildren, N, m, v, T, F, A),
                      (d.key != null || (v && d === v.subTree)) && Vs(c, d, !0))
                    : ee(c, d, m, H, v, T, F, A, $);
        },
        le = (c, d, m, y, v, T, F, A, $) => {
            (d.slotScopeIds = A),
                c == null
                    ? d.shapeFlag & 512
                        ? v.ctx.activate(d, m, y, F, $)
                        : j(d, m, y, v, T, F, $)
                    : Pe(c, d, $);
        },
        j = (c, d, m, y, v, T, F) => {
            const A = (c.component = oa(c, y, v));
            if ((qn(c) && (A.ctx.renderer = $t), aa(A), A.asyncDep)) {
                if ((v && v.registerDep(A, ne), !c.el)) {
                    const $ = (A.subTree = V(je));
                    _(null, $, d, m);
                }
                return;
            }
            ne(A, c, d, m, v, T, F);
        },
        Pe = (c, d, m) => {
            const y = (d.component = c.component);
            if (pi(c, d, m))
                if (y.asyncDep && !y.asyncResolved) {
                    re(y, d, m);
                    return;
                } else (y.next = d), ii(y.update), y.update();
            else (d.el = c.el), (y.vnode = d);
        },
        ne = (c, d, m, y, v, T, F) => {
            const A = () => {
                    if (c.isMounted) {
                        let { next: H, bu: P, u: N, parent: B, vnode: z } = c,
                            se = H,
                            te;
                        mt(c, !1),
                            H ? ((H.el = z.el), re(c, H, F)) : (H = z),
                            P && Xn(P),
                            (te = H.props && H.props.onVnodeBeforeUpdate) &&
                                $e(te, B, H, z),
                            mt(c, !0);
                        const de = Gn(c),
                            ke = c.subTree;
                        (c.subTree = de),
                            C(ke, de, p(ke.el), hn(ke), c, v, T),
                            (H.el = de.el),
                            se === null && hi(c, de.el),
                            N && we(N, v),
                            (te = H.props && H.props.onVnodeUpdated) &&
                                we(() => $e(te, B, H, z), v);
                    } else {
                        let H;
                        const { el: P, props: N } = d,
                            { bm: B, m: z, parent: se } = c,
                            te = It(d);
                        if (
                            (mt(c, !1),
                            B && Xn(B),
                            !te &&
                                (H = N && N.onVnodeBeforeMount) &&
                                $e(H, se, d),
                            mt(c, !0),
                            P && Jn)
                        ) {
                            const de = () => {
                                (c.subTree = Gn(c)),
                                    Jn(P, c.subTree, c, v, null);
                            };
                            te
                                ? d.type
                                      .__asyncLoader()
                                      .then(() => !c.isUnmounted && de())
                                : de();
                        } else {
                            const de = (c.subTree = Gn(c));
                            C(null, de, m, y, c, v, T), (d.el = de.el);
                        }
                        if (
                            (z && we(z, v), !te && (H = N && N.onVnodeMounted))
                        ) {
                            const de = d;
                            we(() => $e(H, se, de), v);
                        }
                        (d.shapeFlag & 256 ||
                            (se && It(se.vnode) && se.vnode.shapeFlag & 256)) &&
                            c.a &&
                            we(c.a, v),
                            (c.isMounted = !0),
                            (d = m = y = null);
                    }
                },
                $ = (c.effect = new Ms(A, () => Bs(w), c.scope)),
                w = (c.update = () => $.run());
            (w.id = c.uid), mt(c, !0), w();
        },
        re = (c, d, m) => {
            d.component = c;
            const y = c.vnode.props;
            (c.vnode = d),
                (c.next = null),
                Di(c, d.props, y, m),
                Ki(c, d.children, m),
                Ut(),
                pr(),
                Kt();
        },
        ee = (c, d, m, y, v, T, F, A, $ = !1) => {
            const w = c && c.children,
                H = c ? c.shapeFlag : 0,
                P = d.children,
                { patchFlag: N, shapeFlag: B } = d;
            if (N > 0) {
                if (N & 128) {
                    pn(w, P, m, y, v, T, F, A, $);
                    return;
                } else if (N & 256) {
                    Ze(w, P, m, y, v, T, F, A, $);
                    return;
                }
            }
            B & 8
                ? (H & 16 && Xe(w, v, T), P !== w && f(m, P))
                : H & 16
                ? B & 16
                    ? pn(w, P, m, y, v, T, F, A, $)
                    : Xe(w, v, T, !0)
                : (H & 8 && f(m, ""), B & 16 && x(P, m, y, v, T, F, A, $));
        },
        Ze = (c, d, m, y, v, T, F, A, $) => {
            (c = c || Pt), (d = d || Pt);
            const w = c.length,
                H = d.length,
                P = Math.min(w, H);
            let N;
            for (N = 0; N < P; N++) {
                const B = (d[N] = $ ? it(d[N]) : Me(d[N]));
                C(c[N], B, m, null, v, T, F, A, $);
            }
            w > H ? Xe(c, v, T, !0, !1, P) : x(d, m, y, v, T, F, A, $, P);
        },
        pn = (c, d, m, y, v, T, F, A, $) => {
            let w = 0;
            const H = d.length;
            let P = c.length - 1,
                N = H - 1;
            for (; w <= P && w <= N; ) {
                const B = c[w],
                    z = (d[w] = $ ? it(d[w]) : Me(d[w]));
                if (vt(B, z)) C(B, z, m, null, v, T, F, A, $);
                else break;
                w++;
            }
            for (; w <= P && w <= N; ) {
                const B = c[P],
                    z = (d[N] = $ ? it(d[N]) : Me(d[N]));
                if (vt(B, z)) C(B, z, m, null, v, T, F, A, $);
                else break;
                P--, N--;
            }
            if (w > P) {
                if (w <= N) {
                    const B = N + 1,
                        z = B < H ? d[B].el : y;
                    for (; w <= N; )
                        C(
                            null,
                            (d[w] = $ ? it(d[w]) : Me(d[w])),
                            m,
                            z,
                            v,
                            T,
                            F,
                            A,
                            $
                        ),
                            w++;
                }
            } else if (w > N) for (; w <= P; ) qe(c[w], v, T, !0), w++;
            else {
                const B = w,
                    z = w,
                    se = new Map();
                for (w = z; w <= N; w++) {
                    const Ce = (d[w] = $ ? it(d[w]) : Me(d[w]));
                    Ce.key != null && se.set(Ce.key, w);
                }
                let te,
                    de = 0;
                const ke = N - z + 1;
                let St = !1,
                    nr = 0;
                const Wt = new Array(ke);
                for (w = 0; w < ke; w++) Wt[w] = 0;
                for (w = B; w <= P; w++) {
                    const Ce = c[w];
                    if (de >= ke) {
                        qe(Ce, v, T, !0);
                        continue;
                    }
                    let We;
                    if (Ce.key != null) We = se.get(Ce.key);
                    else
                        for (te = z; te <= N; te++)
                            if (Wt[te - z] === 0 && vt(Ce, d[te])) {
                                We = te;
                                break;
                            }
                    We === void 0
                        ? qe(Ce, v, T, !0)
                        : ((Wt[We - z] = w + 1),
                          We >= nr ? (nr = We) : (St = !0),
                          C(Ce, d[We], m, null, v, T, F, A, $),
                          de++);
                }
                const sr = St ? Qi(Wt) : Pt;
                for (te = sr.length - 1, w = ke - 1; w >= 0; w--) {
                    const Ce = z + w,
                        We = d[Ce],
                        rr = Ce + 1 < H ? d[Ce + 1].el : y;
                    Wt[w] === 0
                        ? C(null, We, m, rr, v, T, F, A, $)
                        : St &&
                          (te < 0 || w !== sr[te] ? ht(We, m, rr, 2) : te--);
                }
            }
        },
        ht = (c, d, m, y, v = null) => {
            const {
                el: T,
                type: F,
                transition: A,
                children: $,
                shapeFlag: w,
            } = c;
            if (w & 6) {
                ht(c.component.subTree, d, m, y);
                return;
            }
            if (w & 128) {
                c.suspense.move(d, m, y);
                return;
            }
            if (w & 64) {
                F.move(c, d, m, $t);
                return;
            }
            if (F === G) {
                s(T, d, m);
                for (let P = 0; P < $.length; P++) ht($[P], d, m, y);
                s(c.anchor, d, m);
                return;
            }
            if (F === Xt) {
                O(c, d, m);
                return;
            }
            if (y !== 2 && w & 1 && A)
                if (y === 0)
                    A.beforeEnter(T), s(T, d, m), we(() => A.enter(T), v);
                else {
                    const { leave: P, delayLeave: N, afterLeave: B } = A,
                        z = () => s(T, d, m),
                        se = () => {
                            P(T, () => {
                                z(), B && B();
                            });
                        };
                    N ? N(T, z, se) : se();
                }
            else s(T, d, m);
        },
        qe = (c, d, m, y = !1, v = !1) => {
            const {
                type: T,
                props: F,
                ref: A,
                children: $,
                dynamicChildren: w,
                shapeFlag: H,
                patchFlag: P,
                dirs: N,
            } = c;
            if ((A != null && Ln(A, null, m, c, !0), H & 256)) {
                d.ctx.deactivate(c);
                return;
            }
            const B = H & 1 && N,
                z = !It(c);
            let se;
            if (
                (z && (se = F && F.onVnodeBeforeUnmount) && $e(se, d, c), H & 6)
            )
                co(c.component, m, y);
            else {
                if (H & 128) {
                    c.suspense.unmount(m, y);
                    return;
                }
                B && Ve(c, null, d, "beforeUnmount"),
                    H & 64
                        ? c.type.remove(c, d, m, v, $t, y)
                        : w && (T !== G || (P > 0 && P & 64))
                        ? Xe(w, d, m, !1, !0)
                        : ((T === G && P & 384) || (!v && H & 16)) &&
                          Xe($, d, m),
                    y && er(c);
            }
            ((z && (se = F && F.onVnodeUnmounted)) || B) &&
                we(() => {
                    se && $e(se, d, c), B && Ve(c, null, d, "unmounted");
                }, m);
        },
        er = (c) => {
            const { type: d, el: m, anchor: y, transition: v } = c;
            if (d === G) {
                ao(m, y);
                return;
            }
            if (d === Xt) {
                R(c);
                return;
            }
            const T = () => {
                r(m), v && !v.persisted && v.afterLeave && v.afterLeave();
            };
            if (c.shapeFlag & 1 && v && !v.persisted) {
                const { leave: F, delayLeave: A } = v,
                    $ = () => F(m, T);
                A ? A(c.el, T, $) : $();
            } else T();
        },
        ao = (c, d) => {
            let m;
            for (; c !== d; ) (m = h(c)), r(c), (c = m);
            r(d);
        },
        co = (c, d, m) => {
            const { bum: y, scope: v, update: T, subTree: F, um: A } = c;
            y && Xn(y),
                v.stop(),
                T && ((T.active = !1), qe(F, c, d, m)),
                A && we(A, d),
                we(() => {
                    c.isUnmounted = !0;
                }, d),
                d &&
                    d.pendingBranch &&
                    !d.isUnmounted &&
                    c.asyncDep &&
                    !c.asyncResolved &&
                    c.suspenseId === d.pendingId &&
                    (d.deps--, d.deps === 0 && d.resolve());
        },
        Xe = (c, d, m, y = !1, v = !1, T = 0) => {
            for (let F = T; F < c.length; F++) qe(c[F], d, m, y, v);
        },
        hn = (c) =>
            c.shapeFlag & 6
                ? hn(c.component.subTree)
                : c.shapeFlag & 128
                ? c.suspense.next()
                : h(c.anchor || c.el),
        tr = (c, d, m) => {
            c == null
                ? d._vnode && qe(d._vnode, null, null, !0)
                : C(d._vnode || null, c, d, null, null, null, m),
                pr(),
                Fn(),
                (d._vnode = c);
        },
        $t = {
            p: C,
            um: qe,
            m: ht,
            r: er,
            mt: j,
            mc: x,
            pc: ee,
            pbc: L,
            n: hn,
            o: e,
        };
    let Qn, Jn;
    return (
        t && ([Qn, Jn] = t($t)),
        { render: tr, hydrate: Qn, createApp: Wi(tr, Qn) }
    );
}
function mt({ effect: e, update: t }, n) {
    e.allowRecurse = t.allowRecurse = n;
}
function Vs(e, t, n = !1) {
    const s = e.children,
        r = t.children;
    if (U(s) && U(r))
        for (let l = 0; l < s.length; l++) {
            const o = s[l];
            let i = r[l];
            i.shapeFlag & 1 &&
                !i.dynamicChildren &&
                ((i.patchFlag <= 0 || i.patchFlag === 32) &&
                    ((i = r[l] = it(r[l])), (i.el = o.el)),
                n || Vs(o, i)),
                i.type === jt && (i.el = o.el);
        }
}
function Qi(e) {
    const t = e.slice(),
        n = [0];
    let s, r, l, o, i;
    const a = e.length;
    for (s = 0; s < a; s++) {
        const u = e[s];
        if (u !== 0) {
            if (((r = n[n.length - 1]), e[r] < u)) {
                (t[s] = r), n.push(s);
                continue;
            }
            for (l = 0, o = n.length - 1; l < o; )
                (i = (l + o) >> 1), e[n[i]] < u ? (l = i + 1) : (o = i);
            u < e[n[l]] && (l > 0 && (t[s] = n[l - 1]), (n[l] = s));
        }
    }
    for (l = n.length, o = n[l - 1]; l-- > 0; ) (n[l] = o), (o = t[o]);
    return n;
}
const Ji = (e) => e.__isTeleport,
    Zt = (e) => e && (e.disabled || e.disabled === ""),
    Er = (e) => typeof SVGElement < "u" && e instanceof SVGElement,
    vs = (e, t) => {
        const n = e && e.to;
        return fe(n) ? (t ? t(n) : null) : n;
    },
    Zi = {
        __isTeleport: !0,
        process(e, t, n, s, r, l, o, i, a, u) {
            const {
                    mc: f,
                    pc: p,
                    pbc: h,
                    o: {
                        insert: g,
                        querySelector: b,
                        createText: C,
                        createComment: W,
                    },
                } = u,
                _ = Zt(t.props);
            let { shapeFlag: S, children: O, dynamicChildren: R } = t;
            if (e == null) {
                const D = (t.el = C("")),
                    M = (t.anchor = C(""));
                g(D, n, s), g(M, n, s);
                const k = (t.target = vs(t.props, b)),
                    x = (t.targetAnchor = C(""));
                k && (g(x, k), (o = o || Er(k)));
                const I = (L, K) => {
                    S & 16 && f(O, L, K, r, l, o, i, a);
                };
                _ ? I(n, M) : k && I(k, x);
            } else {
                t.el = e.el;
                const D = (t.anchor = e.anchor),
                    M = (t.target = e.target),
                    k = (t.targetAnchor = e.targetAnchor),
                    x = Zt(e.props),
                    I = x ? n : M,
                    L = x ? D : k;
                if (
                    ((o = o || Er(M)),
                    R
                        ? (h(e.dynamicChildren, R, I, r, l, o, i), Vs(e, t, !0))
                        : a || p(e, t, I, L, r, l, o, i, !1),
                    _)
                )
                    x || En(t, n, D, u, 1);
                else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
                    const K = (t.target = vs(t.props, b));
                    K && En(t, K, null, u, 0);
                } else x && En(t, M, k, u, 1);
            }
            Ml(t);
        },
        remove(e, t, n, s, { um: r, o: { remove: l } }, o) {
            const {
                shapeFlag: i,
                children: a,
                anchor: u,
                targetAnchor: f,
                target: p,
                props: h,
            } = e;
            if ((p && l(f), (o || !Zt(h)) && (l(u), i & 16)))
                for (let g = 0; g < a.length; g++) {
                    const b = a[g];
                    r(b, t, n, !0, !!b.dynamicChildren);
                }
        },
        move: En,
        hydrate: Xi,
    };
function En(e, t, n, { o: { insert: s }, m: r }, l = 2) {
    l === 0 && s(e.targetAnchor, t, n);
    const { el: o, anchor: i, shapeFlag: a, children: u, props: f } = e,
        p = l === 2;
    if ((p && s(o, t, n), (!p || Zt(f)) && a & 16))
        for (let h = 0; h < u.length; h++) r(u[h], t, n, 2);
    p && s(i, t, n);
}
function Xi(
    e,
    t,
    n,
    s,
    r,
    l,
    { o: { nextSibling: o, parentNode: i, querySelector: a } },
    u
) {
    const f = (t.target = vs(t.props, a));
    if (f) {
        const p = f._lpa || f.firstChild;
        if (t.shapeFlag & 16)
            if (Zt(t.props))
                (t.anchor = u(o(e), t, i(e), n, s, r, l)), (t.targetAnchor = p);
            else {
                t.anchor = o(e);
                let h = p;
                for (; h; )
                    if (
                        ((h = o(h)),
                        h && h.nodeType === 8 && h.data === "teleport anchor")
                    ) {
                        (t.targetAnchor = h),
                            (f._lpa = t.targetAnchor && o(t.targetAnchor));
                        break;
                    }
                u(p, t, f, n, s, r, l);
            }
        Ml(t);
    }
    return t.anchor && o(t.anchor);
}
const Gi = Zi;
function Ml(e) {
    const t = e.ctx;
    if (t && t.ut) {
        let n = e.children[0].el;
        for (; n !== e.targetAnchor; )
            n.nodeType === 1 && n.setAttribute("data-v-owner", t.uid),
                (n = n.nextSibling);
        t.ut();
    }
}
const G = Symbol(void 0),
    jt = Symbol(void 0),
    je = Symbol(void 0),
    Xt = Symbol(void 0),
    Gt = [];
let Re = null;
function Y(e = !1) {
    Gt.push((Re = e ? null : []));
}
function ea() {
    Gt.pop(), (Re = Gt[Gt.length - 1] || null);
}
let ln = 1;
function Cr(e) {
    ln += e;
}
function Il(e) {
    return (
        (e.dynamicChildren = ln > 0 ? Re || Pt : null),
        ea(),
        ln > 0 && Re && Re.push(e),
        e
    );
}
function J(e, t, n, s, r, l) {
    return Il(E(e, t, n, s, r, l, !0));
}
function Rt(e, t, n, s, r) {
    return Il(V(e, t, n, s, r, !0));
}
function Mn(e) {
    return e ? e.__v_isVNode === !0 : !1;
}
function vt(e, t) {
    return e.type === t.type && e.key === t.key;
}
const Vn = "__vInternal",
    Rl = ({ key: e }) => (e != null ? e : null),
    Tn = ({ ref: e, ref_key: t, ref_for: n }) =>
        e != null
            ? fe(e) || ge(e) || q(e)
                ? { i: _e, r: e, k: t, f: !!n }
                : e
            : null;
function E(
    e,
    t = null,
    n = null,
    s = 0,
    r = null,
    l = e === G ? 0 : 1,
    o = !1,
    i = !1
) {
    const a = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e,
        props: t,
        key: t && Rl(t),
        ref: t && Tn(t),
        scopeId: _l,
        slotScopeIds: null,
        children: n,
        component: null,
        suspense: null,
        ssContent: null,
        ssFallback: null,
        dirs: null,
        transition: null,
        el: null,
        anchor: null,
        target: null,
        targetAnchor: null,
        staticCount: 0,
        shapeFlag: l,
        patchFlag: s,
        dynamicProps: r,
        dynamicChildren: null,
        appContext: null,
        ctx: _e,
    };
    return (
        i
            ? (zs(a, n), l & 128 && e.normalize(a))
            : n && (a.shapeFlag |= fe(n) ? 8 : 16),
        ln > 0 &&
            !o &&
            Re &&
            (a.patchFlag > 0 || l & 6) &&
            a.patchFlag !== 32 &&
            Re.push(a),
        a
    );
}
const V = ta;
function ta(e, t = null, n = null, s = 0, r = null, l = !1) {
    if (((!e || e === Cl) && (e = je), Mn(e))) {
        const i = nt(e, t, !0);
        return (
            n && zs(i, n),
            ln > 0 &&
                !l &&
                Re &&
                (i.shapeFlag & 6 ? (Re[Re.indexOf(e)] = i) : Re.push(i)),
            (i.patchFlag |= -2),
            i
        );
    }
    if ((pa(e) && (e = e.__vccOpts), t)) {
        t = na(t);
        let { class: i, style: a } = t;
        i && !fe(i) && (t.class = He(i)),
            ae(a) && (rl(a) && !U(a) && (a = ve({}, a)), (t.style = Ss(a)));
    }
    const o = fe(e) ? 1 : mi(e) ? 128 : Ji(e) ? 64 : ae(e) ? 4 : q(e) ? 2 : 0;
    return E(e, t, n, s, r, o, l, !0);
}
function na(e) {
    return e ? (rl(e) || Vn in e ? ve({}, e) : e) : null;
}
function nt(e, t, n = !1) {
    const { props: s, ref: r, patchFlag: l, children: o } = e,
        i = t ? un(s || {}, t) : s;
    return {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e.type,
        props: i,
        key: i && Rl(i),
        ref:
            t && t.ref
                ? n && r
                    ? U(r)
                        ? r.concat(Tn(t))
                        : [r, Tn(t)]
                    : Tn(t)
                : r,
        scopeId: e.scopeId,
        slotScopeIds: e.slotScopeIds,
        children: o,
        target: e.target,
        targetAnchor: e.targetAnchor,
        staticCount: e.staticCount,
        shapeFlag: e.shapeFlag,
        patchFlag: t && e.type !== G ? (l === -1 ? 16 : l | 16) : l,
        dynamicProps: e.dynamicProps,
        dynamicChildren: e.dynamicChildren,
        appContext: e.appContext,
        dirs: e.dirs,
        transition: e.transition,
        component: e.component,
        suspense: e.suspense,
        ssContent: e.ssContent && nt(e.ssContent),
        ssFallback: e.ssFallback && nt(e.ssFallback),
        el: e.el,
        anchor: e.anchor,
        ctx: e.ctx,
        ce: e.ce,
    };
}
function Ys(e = " ", t = 0) {
    return V(jt, null, e, t);
}
function sa(e, t) {
    const n = V(Xt, null, e);
    return (n.staticCount = t), n;
}
function Me(e) {
    return e == null || typeof e == "boolean"
        ? V(je)
        : U(e)
        ? V(G, null, e.slice())
        : typeof e == "object"
        ? it(e)
        : V(jt, null, String(e));
}
function it(e) {
    return (e.el === null && e.patchFlag !== -1) || e.memo ? e : nt(e);
}
function zs(e, t) {
    let n = 0;
    const { shapeFlag: s } = e;
    if (t == null) t = null;
    else if (U(t)) n = 16;
    else if (typeof t == "object")
        if (s & 65) {
            const r = t.default;
            r && (r._c && (r._d = !1), zs(e, r()), r._c && (r._d = !0));
            return;
        } else {
            n = 32;
            const r = t._;
            !r && !(Vn in t)
                ? (t._ctx = _e)
                : r === 3 &&
                  _e &&
                  (_e.slots._ === 1
                      ? (t._ = 1)
                      : ((t._ = 2), (e.patchFlag |= 1024)));
        }
    else
        q(t)
            ? ((t = { default: t, _ctx: _e }), (n = 32))
            : ((t = String(t)), s & 64 ? ((n = 16), (t = [Ys(t)])) : (n = 8));
    (e.children = t), (e.shapeFlag |= n);
}
function un(...e) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
        const s = e[n];
        for (const r in s)
            if (r === "class")
                t.class !== s.class && (t.class = He([t.class, s.class]));
            else if (r === "style") t.style = Ss([t.style, s.style]);
            else if (cn(r)) {
                const l = t[r],
                    o = s[r];
                o &&
                    l !== o &&
                    !(U(l) && l.includes(o)) &&
                    (t[r] = l ? [].concat(l, o) : o);
            } else r !== "" && (t[r] = s[r]);
    }
    return t;
}
function $e(e, t, n, s = null) {
    Oe(e, t, 7, [n, s]);
}
const ra = kl();
let la = 0;
function oa(e, t, n) {
    const s = e.type,
        r = (t ? t.appContext : e.appContext) || ra,
        l = {
            uid: la++,
            vnode: e,
            type: s,
            parent: t,
            appContext: r,
            root: null,
            next: null,
            subTree: null,
            effect: null,
            update: null,
            scope: new Ao(!0),
            render: null,
            proxy: null,
            exposed: null,
            exposeProxy: null,
            withProxy: null,
            provides: t ? t.provides : Object.create(r.provides),
            accessCache: null,
            renderCache: [],
            components: null,
            directives: null,
            propsOptions: Sl(s, r),
            emitsOptions: gl(s, r),
            emit: null,
            emitted: null,
            propsDefaults: ie,
            inheritAttrs: s.inheritAttrs,
            ctx: ie,
            data: ie,
            props: ie,
            attrs: ie,
            slots: ie,
            refs: ie,
            setupState: ie,
            setupContext: null,
            suspense: n,
            suspenseId: n ? n.pendingId : 0,
            asyncDep: null,
            asyncResolved: !1,
            isMounted: !1,
            isUnmounted: !1,
            isDeactivated: !1,
            bc: null,
            c: null,
            bm: null,
            m: null,
            bu: null,
            u: null,
            um: null,
            bum: null,
            da: null,
            a: null,
            rtg: null,
            rtc: null,
            ec: null,
            sp: null,
        };
    return (
        (l.ctx = { _: l }),
        (l.root = t ? t.root : l),
        (l.emit = ui.bind(null, l)),
        e.ce && e.ce(l),
        l
    );
}
let ue = null;
const ia = () => ue || _e,
    Dt = (e) => {
        (ue = e), e.scope.on();
    },
    Et = () => {
        ue && ue.scope.off(), (ue = null);
    };
function Hl(e) {
    return e.vnode.shapeFlag & 4;
}
let on = !1;
function aa(e, t = !1) {
    on = t;
    const { props: n, children: s } = e.vnode,
        r = Hl(e);
    ji(e, n, r, t), Ui(e, s);
    const l = r ? ca(e, t) : void 0;
    return (on = !1), l;
}
function ca(e, t) {
    const n = e.type;
    (e.accessCache = Object.create(null)), (e.proxy = ll(new Proxy(e.ctx, Li)));
    const { setup: s } = n;
    if (s) {
        const r = (e.setupContext = s.length > 1 ? fa(e) : null);
        Dt(e), Ut();
        const l = ft(s, e, 0, [e.props, r]);
        if ((Kt(), Et(), qr(l))) {
            if ((l.then(Et, Et), t))
                return l
                    .then((o) => {
                        Ar(e, o, t);
                    })
                    .catch((o) => {
                        Un(o, e, 0);
                    });
            e.asyncDep = l;
        } else Ar(e, l, t);
    } else Nl(e, t);
}
function Ar(e, t, n) {
    q(t)
        ? e.type.__ssrInlineRender
            ? (e.ssrRender = t)
            : (e.render = t)
        : ae(t) && (e.setupState = ul(t)),
        Nl(e, n);
}
let Tr;
function Nl(e, t, n) {
    const s = e.type;
    if (!e.render) {
        if (!t && Tr && !s.render) {
            const r = s.template || qs(e).template;
            if (r) {
                const { isCustomElement: l, compilerOptions: o } =
                        e.appContext.config,
                    { delimiters: i, compilerOptions: a } = s,
                    u = ve(ve({ isCustomElement: l, delimiters: i }, o), a);
                s.render = Tr(r, u);
            }
        }
        e.render = s.render || Ne;
    }
    Dt(e), Ut(), Mi(e), Kt(), Et();
}
function ua(e) {
    return new Proxy(e.attrs, {
        get(t, n) {
            return Ee(e, "get", "$attrs"), t[n];
        },
    });
}
function fa(e) {
    const t = (s) => {
        e.exposed = s || {};
    };
    let n;
    return {
        get attrs() {
            return n || (n = ua(e));
        },
        slots: e.slots,
        emit: e.emit,
        expose: t,
    };
}
function Qs(e) {
    if (e.exposed)
        return (
            e.exposeProxy ||
            (e.exposeProxy = new Proxy(ul(ll(e.exposed)), {
                get(t, n) {
                    if (n in t) return t[n];
                    if (n in Jt) return Jt[n](e);
                },
                has(t, n) {
                    return n in t || n in Jt;
                },
            }))
        );
}
function da(e, t = !0) {
    return q(e) ? e.displayName || e.name : e.name || (t && e.__name);
}
function pa(e) {
    return q(e) && "__vccOpts" in e;
}
const oe = (e, t) => ri(e, t, on);
function xe(e, t, n) {
    const s = arguments.length;
    return s === 2
        ? ae(t) && !U(t)
            ? Mn(t)
                ? V(e, null, [t])
                : V(e, t)
            : V(e, null, t)
        : (s > 3
              ? (n = Array.prototype.slice.call(arguments, 2))
              : s === 3 && Mn(n) && (n = [n]),
          V(e, t, n));
}
const ha = Symbol(""),
    ma = () => he(ha),
    ga = "3.2.47",
    _a = "http://www.w3.org/2000/svg",
    yt = typeof document < "u" ? document : null,
    $r = yt && yt.createElement("template"),
    ba = {
        insert: (e, t, n) => {
            t.insertBefore(e, n || null);
        },
        remove: (e) => {
            const t = e.parentNode;
            t && t.removeChild(e);
        },
        createElement: (e, t, n, s) => {
            const r = t
                ? yt.createElementNS(_a, e)
                : yt.createElement(e, n ? { is: n } : void 0);
            return (
                e === "select" &&
                    s &&
                    s.multiple != null &&
                    r.setAttribute("multiple", s.multiple),
                r
            );
        },
        createText: (e) => yt.createTextNode(e),
        createComment: (e) => yt.createComment(e),
        setText: (e, t) => {
            e.nodeValue = t;
        },
        setElementText: (e, t) => {
            e.textContent = t;
        },
        parentNode: (e) => e.parentNode,
        nextSibling: (e) => e.nextSibling,
        querySelector: (e) => yt.querySelector(e),
        setScopeId(e, t) {
            e.setAttribute(t, "");
        },
        insertStaticContent(e, t, n, s, r, l) {
            const o = n ? n.previousSibling : t.lastChild;
            if (r && (r === l || r.nextSibling))
                for (
                    ;
                    t.insertBefore(r.cloneNode(!0), n),
                        !(r === l || !(r = r.nextSibling));

                );
            else {
                $r.innerHTML = s ? `<svg>${e}</svg>` : e;
                const i = $r.content;
                if (s) {
                    const a = i.firstChild;
                    for (; a.firstChild; ) i.appendChild(a.firstChild);
                    i.removeChild(a);
                }
                t.insertBefore(i, n);
            }
            return [
                o ? o.nextSibling : t.firstChild,
                n ? n.previousSibling : t.lastChild,
            ];
        },
    };
function va(e, t, n) {
    const s = e._vtc;
    s && (t = (t ? [t, ...s] : [...s]).join(" ")),
        t == null
            ? e.removeAttribute("class")
            : n
            ? e.setAttribute("class", t)
            : (e.className = t);
}
function ya(e, t, n) {
    const s = e.style,
        r = fe(n);
    if (n && !r) {
        if (t && !fe(t)) for (const l in t) n[l] == null && ys(s, l, "");
        for (const l in n) ys(s, l, n[l]);
    } else {
        const l = s.display;
        r ? t !== n && (s.cssText = n) : t && e.removeAttribute("style"),
            "_vod" in e && (s.display = l);
    }
}
const Sr = /\s*!important$/;
function ys(e, t, n) {
    if (U(n)) n.forEach((s) => ys(e, t, s));
    else if ((n == null && (n = ""), t.startsWith("--"))) e.setProperty(t, n);
    else {
        const s = xa(e, t);
        Sr.test(n)
            ? e.setProperty(Bt(s), n.replace(Sr, ""), "important")
            : (e[s] = n);
    }
}
const Or = ["Webkit", "Moz", "ms"],
    ns = {};
function xa(e, t) {
    const n = ns[t];
    if (n) return n;
    let s = Qe(t);
    if (s !== "filter" && s in e) return (ns[t] = s);
    s = jn(s);
    for (let r = 0; r < Or.length; r++) {
        const l = Or[r] + s;
        if (l in e) return (ns[t] = l);
    }
    return t;
}
const Fr = "http://www.w3.org/1999/xlink";
function wa(e, t, n, s, r) {
    if (s && t.startsWith("xlink:"))
        n == null
            ? e.removeAttributeNS(Fr, t.slice(6, t.length))
            : e.setAttributeNS(Fr, t, n);
    else {
        const l = go(t);
        n == null || (l && !Br(n))
            ? e.removeAttribute(t)
            : e.setAttribute(t, l ? "" : n);
    }
}
function Ea(e, t, n, s, r, l, o) {
    if (t === "innerHTML" || t === "textContent") {
        s && o(s, r, l), (e[t] = n == null ? "" : n);
        return;
    }
    if (t === "value" && e.tagName !== "PROGRESS" && !e.tagName.includes("-")) {
        e._value = n;
        const a = n == null ? "" : n;
        (e.value !== a || e.tagName === "OPTION") && (e.value = a),
            n == null && e.removeAttribute(t);
        return;
    }
    let i = !1;
    if (n === "" || n == null) {
        const a = typeof e[t];
        a === "boolean"
            ? (n = Br(n))
            : n == null && a === "string"
            ? ((n = ""), (i = !0))
            : a === "number" && ((n = 0), (i = !0));
    }
    try {
        e[t] = n;
    } catch {}
    i && e.removeAttribute(t);
}
function Ca(e, t, n, s) {
    e.addEventListener(t, n, s);
}
function Aa(e, t, n, s) {
    e.removeEventListener(t, n, s);
}
function Ta(e, t, n, s, r = null) {
    const l = e._vei || (e._vei = {}),
        o = l[t];
    if (s && o) o.value = s;
    else {
        const [i, a] = $a(t);
        if (s) {
            const u = (l[t] = Fa(s, r));
            Ca(e, i, u, a);
        } else o && (Aa(e, i, o, a), (l[t] = void 0));
    }
}
const Pr = /(?:Once|Passive|Capture)$/;
function $a(e) {
    let t;
    if (Pr.test(e)) {
        t = {};
        let s;
        for (; (s = e.match(Pr)); )
            (e = e.slice(0, e.length - s[0].length)),
                (t[s[0].toLowerCase()] = !0);
    }
    return [e[2] === ":" ? e.slice(3) : Bt(e.slice(2)), t];
}
let ss = 0;
const Sa = Promise.resolve(),
    Oa = () => ss || (Sa.then(() => (ss = 0)), (ss = Date.now()));
function Fa(e, t) {
    const n = (s) => {
        if (!s._vts) s._vts = Date.now();
        else if (s._vts <= n.attached) return;
        Oe(Pa(s, n.value), t, 5, [s]);
    };
    return (n.value = e), (n.attached = Oa()), n;
}
function Pa(e, t) {
    if (U(t)) {
        const n = e.stopImmediatePropagation;
        return (
            (e.stopImmediatePropagation = () => {
                n.call(e), (e._stopped = !0);
            }),
            t.map((s) => (r) => !r._stopped && s && s(r))
        );
    } else return t;
}
const kr = /^on[a-z]/,
    ka = (e, t, n, s, r = !1, l, o, i, a) => {
        t === "class"
            ? va(e, s, r)
            : t === "style"
            ? ya(e, n, s)
            : cn(t)
            ? Os(t) || Ta(e, t, n, s, o)
            : (
                  t[0] === "."
                      ? ((t = t.slice(1)), !0)
                      : t[0] === "^"
                      ? ((t = t.slice(1)), !1)
                      : La(e, t, s, r)
              )
            ? Ea(e, t, s, l, o, i, a)
            : (t === "true-value"
                  ? (e._trueValue = s)
                  : t === "false-value" && (e._falseValue = s),
              wa(e, t, s, r));
    };
function La(e, t, n, s) {
    return s
        ? !!(
              t === "innerHTML" ||
              t === "textContent" ||
              (t in e && kr.test(t) && q(n))
          )
        : t === "spellcheck" ||
          t === "draggable" ||
          t === "translate" ||
          t === "form" ||
          (t === "list" && e.tagName === "INPUT") ||
          (t === "type" && e.tagName === "TEXTAREA") ||
          (kr.test(t) && fe(n))
        ? !1
        : t in e;
}
const Ma = {
    name: String,
    type: String,
    css: { type: Boolean, default: !0 },
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String,
};
vi.props;
const jl = ve({ patchProp: ka }, ba);
let en,
    Lr = !1;
function Ia() {
    return en || (en = Yi(jl));
}
function Ra() {
    return (en = Lr ? en : zi(jl)), (Lr = !0), en;
}
const Ha = (...e) => {
        const t = Ia().createApp(...e),
            { mount: n } = t;
        return (
            (t.mount = (s) => {
                const r = Dl(s);
                if (!r) return;
                const l = t._component;
                !q(l) && !l.render && !l.template && (l.template = r.innerHTML),
                    (r.innerHTML = "");
                const o = n(r, !1, r instanceof SVGElement);
                return (
                    r instanceof Element &&
                        (r.removeAttribute("v-cloak"),
                        r.setAttribute("data-v-app", "")),
                    o
                );
            }),
            t
        );
    },
    Na = (...e) => {
        const t = Ra().createApp(...e),
            { mount: n } = t;
        return (
            (t.mount = (s) => {
                const r = Dl(s);
                if (r) return n(r, !0, r instanceof SVGElement);
            }),
            t
        );
    };
function Dl(e) {
    return fe(e) ? document.querySelector(e) : e;
}
var Bl = "usehead",
    Mr = "head:count",
    rs = "data-head-attrs",
    Ul = "data-meta-body",
    ja = (e, t, n) => {
        const s = n.createElement(e);
        for (const r of Object.keys(t))
            if (r === "body" && t.body === !0) s.setAttribute(Ul, "true");
            else {
                let l = t[r];
                if (r === "renderPriority" || r === "key" || l === !1) continue;
                r === "children" ? (s.textContent = l) : s.setAttribute(r, l);
            }
        return s;
    };
function Ir(e, t) {
    if (e instanceof HTMLElement && t instanceof HTMLElement) {
        const n = t.getAttribute("nonce");
        if (n && !e.getAttribute("nonce")) {
            const s = t.cloneNode(!0);
            return (
                s.setAttribute("nonce", ""),
                (s.nonce = n),
                n === e.nonce && e.isEqualNode(s)
            );
        }
    }
    return e.isEqualNode(t);
}
var Da = (e) => {
        if (!["meta", "base", "script", "link"].includes(e.tag)) return !1;
        const { props: t, tag: n } = e;
        if (n === "base") return "base";
        if (n === "link" && t.rel === "canonical") return "canonical";
        if (t.charset) return "charset";
        const s = ["key", "id", "name", "property", "http-equiv"];
        for (const r of s) {
            let l;
            if (
                (typeof t.getAttribute == "function" && t.hasAttribute(r)
                    ? (l = t.getAttribute(r))
                    : (l = t[r]),
                l !== void 0)
            )
                return `${n}-${r}-${l}`;
        }
        return !1;
    },
    Ba = () => {
        const e = he(Bl);
        if (!e) throw new Error("You may forget to apply app.use(head)");
        return e;
    },
    Ua = [
        "title",
        "meta",
        "link",
        "base",
        "style",
        "script",
        "noscript",
        "htmlAttrs",
        "bodyAttrs",
    ],
    Ka = (e, t) =>
        e == null
            ? ""
            : typeof e == "string"
            ? e.replace("%s", t != null ? t : "")
            : e(De(t)),
    qa = (e) => {
        const t = [],
            n = Object.keys(e);
        for (const s of n)
            if (e[s] != null)
                switch (s) {
                    case "title":
                        t.push({ tag: s, props: { children: e[s] } });
                        break;
                    case "titleTemplate":
                        break;
                    case "base":
                        t.push({ tag: s, props: { key: "default", ...e[s] } });
                        break;
                    default:
                        if (Ua.includes(s)) {
                            const r = e[s];
                            Array.isArray(r)
                                ? r.forEach((l) => {
                                      t.push({ tag: s, props: De(l) });
                                  })
                                : r && t.push({ tag: s, props: r });
                        }
                        break;
                }
        return t;
    },
    Rr = (e, t) => {
        const n = e.getAttribute(rs);
        if (n) for (const r of n.split(",")) r in t || e.removeAttribute(r);
        const s = [];
        for (const r in t) {
            const l = t[r];
            l != null &&
                (l === !1 ? e.removeAttribute(r) : e.setAttribute(r, l),
                s.push(r));
        }
        s.length ? e.setAttribute(rs, s.join(",")) : e.removeAttribute(rs);
    },
    Wa = (e = window.document, t, n) => {
        var s, r;
        const l = e.head,
            o = e.body;
        let i = l.querySelector(`meta[name="${Mr}"]`),
            a = o.querySelectorAll(`[${Ul}]`);
        const u = i ? Number(i.getAttribute("content")) : 0,
            f = [],
            p = [];
        if (a)
            for (let g = 0; g < a.length; g++)
                a[g] &&
                    ((s = a[g].tagName) == null ? void 0 : s.toLowerCase()) ===
                        t &&
                    p.push(a[g]);
        if (i)
            for (
                let g = 0, b = i.previousElementSibling;
                g < u;
                g++, b = (b == null ? void 0 : b.previousElementSibling) || null
            )
                ((r = b == null ? void 0 : b.tagName) == null
                    ? void 0
                    : r.toLowerCase()) === t && f.push(b);
        else
            (i = e.createElement("meta")),
                i.setAttribute("name", Mr),
                i.setAttribute("content", "0"),
                l.append(i);
        let h = n.map((g) => {
            var b;
            return {
                element: ja(g.tag, g.props, e),
                body: (b = g.props.body) != null ? b : !1,
            };
        });
        (h = h.filter((g) => {
            for (let b = 0; b < f.length; b++) {
                const C = f[b];
                if (Ir(C, g.element)) return f.splice(b, 1), !1;
            }
            for (let b = 0; b < p.length; b++) {
                const C = p[b];
                if (Ir(C, g.element)) return p.splice(b, 1), !1;
            }
            return !0;
        })),
            p.forEach((g) => {
                var b;
                return (b = g.parentNode) == null ? void 0 : b.removeChild(g);
            }),
            f.forEach((g) => {
                var b;
                return (b = g.parentNode) == null ? void 0 : b.removeChild(g);
            }),
            h.forEach((g) => {
                g.body === !0
                    ? o.insertAdjacentElement("beforeend", g.element)
                    : l.insertBefore(g.element, i);
            }),
            i.setAttribute(
                "content",
                "" + (u - f.length + h.filter((g) => !g.body).length)
            );
    },
    Va = (e) => {
        let t = [],
            n = new Set();
        e && t.push(al(e));
        const s = {
            install(r) {
                (r.config.globalProperties.$head = s), r.provide(Bl, s);
            },
            get headTags() {
                const r = [],
                    l = {},
                    o = t
                        .map((i) => De(i).titleTemplate)
                        .reverse()
                        .find((i) => i != null);
                return (
                    t.forEach((i, a) => {
                        qa(De(i)).forEach((f, p) => {
                            (f._position = a * 1e4 + p),
                                o &&
                                    f.tag === "title" &&
                                    (f.props.children = Ka(
                                        o,
                                        f.props.children
                                    ));
                            const h = Da(f);
                            h ? (l[h] = f) : r.push(f);
                        });
                    }),
                    r.push(...Object.values(l)),
                    r.sort((i, a) => i._position - a._position)
                );
            },
            addHeadObjs(r) {
                t.push(r);
            },
            removeHeadObjs(r) {
                t = t.filter((l) => l !== r);
            },
            updateDOM(r = window.document) {
                let l,
                    o = {},
                    i = {};
                const a = {};
                for (const f of s.headTags.sort(Qa)) {
                    if (f.tag === "title") {
                        l = f.props.children;
                        continue;
                    }
                    if (f.tag === "htmlAttrs") {
                        Object.assign(o, f.props);
                        continue;
                    }
                    if (f.tag === "bodyAttrs") {
                        Object.assign(i, f.props);
                        continue;
                    }
                    (a[f.tag] = a[f.tag] || []), a[f.tag].push(f);
                }
                l !== void 0 && (r.title = l),
                    Rr(r.documentElement, o),
                    Rr(r.body, i);
                const u = new Set([...Object.keys(a), ...n]);
                for (const f of u) Wa(r, f, a[f] || []);
                n.clear(), Object.keys(a).forEach((f) => n.add(f));
            },
        };
        return s;
    },
    Ya = typeof window < "u",
    za = (e) => {
        const t = Ba(),
            n = X(e);
        t.addHeadObjs(n),
            Ya &&
                (Ue(() => {
                    t.updateDOM();
                }),
                Ks(() => {
                    t.removeHeadObjs(n), t.updateDOM();
                }));
    },
    Qa = (e, t) => {
        const n = (s) => {
            if (s.props.renderPriority) return s.props.renderPriority;
            switch (s.tag) {
                case "base":
                    return -1;
                case "meta":
                    return s.props.charset
                        ? -2
                        : s.props["http-equiv"] === "content-security-policy"
                        ? 0
                        : 10;
                default:
                    return 10;
            }
        };
        return n(e) - n(t);
    };
function Ja(e) {
    try {
        return JSON.parse(e || "{}");
    } catch (t) {
        return console.error("[SSG] On state deserialization -", t, e), {};
    }
}
function Za(e) {
    return document.readyState === "loading"
        ? new Promise((t) => {
              document.addEventListener("DOMContentLoaded", () => t(e));
          })
        : Promise.resolve(e);
}
const Xa = ce({
    setup(e, { slots: t }) {
        const n = X(!1);
        return (
            be(() => (n.value = !0)),
            () => n.value && t.default && t.default({})
        );
    },
});
function Ga(e, t, n = {}) {
    const {
            transformState: s,
            registerComponents: r = !0,
            useHead: l = !0,
            rootContainer: o = "#app",
        } = n,
        i = typeof window < "u";
    async function a(u = !1) {
        const f = u ? Ha(e) : Na(e);
        let p;
        l && ((p = Va()), f.use(p));
        const h = [],
            C = {
                app: f,
                head: p,
                isClient: i,
                router: void 0,
                routes: void 0,
                initialState: {},
                onSSRAppRendered: u ? () => {} : (_) => h.push(_),
                triggerOnSSRAppRendered: () => Promise.all(h.map((_) => _())),
                transformState: s,
            };
        r && f.component("ClientOnly", u ? Xa : { render: () => null }),
            u &&
                (await Za(),
                (C.initialState =
                    (s == null ? void 0 : s(window.__INITIAL_STATE__ || {})) ||
                    Ja(window.__INITIAL_STATE__))),
            await (t == null ? void 0 : t(C));
        const W = C.initialState;
        return { ...C, initialState: W };
    }
    return (
        i &&
            (async () => {
                const { app: u } = await a(!0);
                u.mount(o, !0);
            })(),
        a
    );
}
const Yn = (e, t) => {
        const n = e.__vccOpts || e;
        for (const [s, r] of t) n[s] = r;
        return n;
    },
    ec = {},
    tc = { class: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" };
function nc(e, t) {
    return Y(), J("div", tc, [ki(e.$slots, "default")]);
}
const At = Yn(ec, [["render", nc]]),
    sc = "/assets/footer.f2f7827a.png",
    rc = { viewBox: "0 0 24 24", width: "1.2em", height: "1.2em" },
    lc = E(
        "path",
        {
            d: "M9.78 18.65l.28-4.23l7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3L3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z",
            fill: "currentColor",
        },
        null,
        -1
    ),
    oc = [lc];
function ic(e, t) {
    return Y(), J("svg", rc, oc);
}
const ac = { name: "mdi-telegram", render: ic },
    cc = { viewBox: "0 0 24 24", width: "1.2em", height: "1.2em" },
    uc = E(
        "path",
        {
            fill: "currentColor",
            d: "M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23Z",
        },
        null,
        -1
    ),
    fc = [uc];
function dc(e, t) {
    return Y(), J("svg", cc, fc);
}
const pc = { name: "mdi-twitter", render: dc },
    hc = { viewBox: "0 0 256 256", width: "1.2em", height: "1.2em" },
    mc = E(
        "path",
        {
            fill: "currentColor",
            d: "M248 104a32 32 0 0 0-52.9-24.2c-16.8-8.9-36.8-14.3-57.7-15.5l5.2-31.2l21.8 3.4a24.2 24.2 0 1 0 2.5-15.8l-29.7-4.6a8 8 0 0 0-9.1 6.6l-6.9 41.5c-21.8.9-42.8 6.3-60.3 15.6a32 32 0 0 0-42.6 47.7A61.4 61.4 0 0 0 16 144c0 21.9 12 42.4 33.9 57.5S98.6 224 128 224s57.1-8 78.1-22.5S240 165.9 240 144a60.1 60.1 0 0 0-2.3-16.4A32.4 32.4 0 0 0 248 104ZM72 132a16 16 0 1 1 16 16a16 16 0 0 1-16-16Zm92.7 51.1a80.1 80.1 0 0 1-73.4 0a8 8 0 0 1 7.3-14.2a64.2 64.2 0 0 0 58.8 0a8 8 0 0 1 7.3 14.2ZM168 148a16 16 0 1 1 16-16a16 16 0 0 1-16 16Z",
        },
        null,
        -1
    ),
    gc = [mc];
function _c(e, t) {
    return Y(), J("svg", hc, gc);
}
const bc = { name: "ph-reddit-logo-fill", render: _c },
    vc = { viewBox: "0 0 24 24", width: "1.2em", height: "1.2em" },
    yc = E(
        "path",
        {
            fill: "currentColor",
            d: "M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z",
        },
        null,
        -1
    ),
    xc = [yc];
function wc(e, t) {
    return Y(), J("svg", vc, xc);
}
const Ec = { name: "ri-facebook-fill", render: wc },
    an = {
        title: "Hokkaido",
        description:
            "$HOKA HOKA HOKA Best Meme 2023. Hokkaido ($HOKA) a 100% genuine Meme token. Hokkaido is a cute dog related to Shiba and Kishu",
        discord: "",
        navigation: [
            { href: "#", title: "Whitepaper" },
            { href: "https://t.me/hokkaidoercportal", title: "Community" },
            {
                href: "https://bscscan.com/address/0xbFdfa2143d1aa3EFEA094E5177295df9E77202a8#code",
                title: "Smart Contract",
                attributes: { target: "_blank" },
            },
            { href: "#tokenomic-section", title: "Token Details" },
        ],
        socials: [
            { href: "https://t.me/hokkaidoercportal", icon: ac },
            { href: "https://t.me/hokkaidoercportal", icon: Ec },
            { href: "https://twitter.com/hokkaidoinuu", icon: pc },
            { href: "https://t.me/hokkaidoercportal", icon: bc },
        ],
    },
    Cc = { class: "py-16" },
    Ac = {
        class: "mx-auto flex max-w-screen-sm flex-col items-center justify-between space-x-8 xl:max-w-4xl xl:flex-row xl:items-start",
    },
    Tc = { class: "space-y-4" },
    $c = E(
        "div",
        { class: "space-y-2 text-center xl:text-left" },
        [
            E(
                "h2",
                { class: "uppercase" },
                "Security And Safety Certification"
            ),
            E(
                "h1",
                { class: "text-2xl font-semibold xl:text-4xl" },
                "Audit & KYC - SAFU"
            ),
        ],
        -1
    ),
    Sc = {
        class: "-ml-6 -mt-6 flex flex-wrap items-center justify-center xl:justify-start",
    },
    Oc = ["href"],
    Fc = E(
        "img",
        {
            alt: "",
            class: "order-first mb-8 w-72 shrink-0 xl:order-last xl:mb-0",
            src: sc,
        },
        null,
        -1
    ),
    Pc = { class: "mx-auto mt-16 max-w-xl space-y-6" },
    kc = E(
        "h1",
        { class: "text-center text-2xl font-semibold xl:text-4xl" },
        "JOIN OUR COMMUNITY",
        -1
    ),
    Lc = E(
        "p",
        { class: "text-center" },
        " Contact: admin@hokkaidoinu.io ",
        -1
    ),
    Mc = { class: "-mt-4 -ml-4 flex flex-wrap items-center justify-center" },
    Ic = ["href"],
    Rc = ce({
        __name: "Footer",
        setup(e) {
            const t = [
                [
                    "https://blocksafu.com/project-detail/0xbFdfa2143d1aa3EFEA094E5177295df9E77202a8",
                    "See Audit",
                ],
                [
                    "https://pinksale.notion.site/Hokkaidoinu-KYC-Verification-562e16f86cc9461e84366b85b01b8097",
                    "See Kyc",
                ],
                ["https://coinsult.net/safu_report/hokkaido-inu/", "See SAFU"],
            ];
            return (n, s) => {
                const r = At;
                return (
                    Y(),
                    J(
                        G,
                        null,
                        [
                            E("footer", Cc, [
                                V(r, null, {
                                    default: Se(() => [
                                        E("div", Ac, [
                                            E("div", Tc, [
                                                $c,
                                                E("div", Sc, [
                                                    (Y(),
                                                    J(
                                                        G,
                                                        null,
                                                        ze(t, (l, o) =>
                                                            E(
                                                                "a",
                                                                {
                                                                    key: o,
                                                                    href: l[0],
                                                                    class: "bg-#feae31 ml-6 mt-6 rounded-xl py-2 px-3.5 font-bold uppercase",
                                                                },
                                                                et(l[1]),
                                                                9,
                                                                Oc
                                                            )
                                                        ),
                                                        64
                                                    )),
                                                ]),
                                            ]),
                                            Fc,
                                        ]),
                                        E("div", Pc, [
                                            kc,
                                            Lc,
                                            E("div", Mc, [
                                                (Y(!0),
                                                J(
                                                    G,
                                                    null,
                                                    ze(
                                                        De(an).socials,
                                                        (l, o) => (
                                                            Y(),
                                                            J(
                                                                "a",
                                                                un(
                                                                    {
                                                                        key: o,
                                                                        href: l.href,
                                                                        class: "bg-#bebebe mt-4 ml-4 inline-flex h-12 w-12 items-center rounded-full p-2 sm:h-16 sm:w-16",
                                                                    },
                                                                    l.attributes
                                                                ),
                                                                [
                                                                    (Y(),
                                                                    Rt(
                                                                        Fi(
                                                                            l.icon
                                                                        ),
                                                                        {
                                                                            class: "h-10 w-10 sm:h-14 sm:w-14",
                                                                        }
                                                                    )),
                                                                ],
                                                                16,
                                                                Ic
                                                            )
                                                        )
                                                    ),
                                                    128
                                                )),
                                            ]),
                                        ]),
                                    ]),
                                    _: 1,
                                }),
                            ]),
                            Ys("`` "),
                        ],
                        64
                    )
                );
            };
        },
    }),
    Hc = { viewBox: "0 0 24 24", width: "1.2em", height: "1.2em" },
    Nc = E(
        "path",
        {
            fill: "currentColor",
            d: "m10 13.6l5.9-5.9q.275-.275.7-.275q.425 0 .7.275q.275.275.275.7q0 .425-.275.7l-6.6 6.6q-.3.3-.7.3q-.4 0-.7-.3l-2.6-2.6q-.275-.275-.275-.7q0-.425.275-.7q.275-.275.7-.275q.425 0 .7.275Z",
        },
        null,
        -1
    ),
    jc = [Nc];
function Dc(e, t) {
    return Y(), J("svg", Hc, jc);
}
const Bc = { name: "material-symbols-check-small-rounded", render: Dc },
    Uc = { class: "font-seductive relative" },
    Kc = {
        class: He([
            "whitespace-nowrap text-5xl font-bold uppercase tracking-wide",
        ]),
    },
    qc = { class: "text-#feae31 text-center text-5xl font-bold" },
    Wc = { class: "space-y-1.5" },
    Vc = { class: "text-#ffc385" },
    Yc = ce({
        __name: "RoadmapItem",
        props: { reverse: { type: Boolean }, detail: null },
        setup(e) {
            return (t, n) => {
                const s = Bc;
                return (
                    Y(),
                    J("div", Uc, [
                        E("h1", Kc, " Phase " + et(e.detail.id), 1),
                        E(
                            "div",
                            {
                                class: He([
                                    "space-y-2",
                                    e.reverse ? "mr-4" : "ml-16",
                                ]),
                            },
                            [
                                E("h2", qc, et(e.detail.name), 1),
                                E("ul", Wc, [
                                    (Y(!0),
                                    J(
                                        G,
                                        null,
                                        ze(
                                            e.detail.tasks,
                                            (r, l) => (
                                                Y(),
                                                J(
                                                    "li",
                                                    {
                                                        key: l,
                                                        class: "flex items-center space-x-1.5",
                                                    },
                                                    [
                                                        V(
                                                            s,
                                                            {
                                                                class: He([
                                                                    "h-6 w-6 shrink-0",
                                                                    r.isCompleted
                                                                        ? "text-#f7cead"
                                                                        : "text-#bebebe",
                                                                ]),
                                                            },
                                                            null,
                                                            8,
                                                            ["class"]
                                                        ),
                                                        E(
                                                            "span",
                                                            Vc,
                                                            et(r.name),
                                                            1
                                                        ),
                                                    ]
                                                )
                                            )
                                        ),
                                        128
                                    )),
                                ]),
                            ],
                            2
                        ),
                    ])
                );
            };
        },
    }),
    zc = "/assets/rocket.24239dfc.png",
    Qc = { class: "bg-roadmap relative mt-16 bg-cover bg-bottom" },
    Jc = E(
        "h1",
        {
            class: "font-seductive text-#feae31 mb-12 text-center text-5xl font-bold xl:hidden",
        },
        "Roadmap",
        -1
    ),
    Zc = E("img", { alt: "", src: zc }, null, -1),
    Xc = E(
        "h1",
        {
            class: "font-seductive text-#feae31 absolute left-32 top-0 text-center text-5xl font-bold",
        },
        "Roadmap",
        -1
    ),
    Gc = { class: "h-236 mt-24 flex" },
    eu = { class: "flex flex-1 flex-col space-y-16" },
    tu = E("div", { class: "w-120 h-full" }, null, -1),
    nu = { class: "flex flex-1 flex-col justify-end space-y-16" },
    su = { class: "mt-16 flex flex-col items-start space-y-16 px-4 xl:hidden" },
    ru = ce({
        __name: "RoadmapSection",
        setup(e) {
            const t = [
                [
                    {
                        id: 1,
                        name: "",
                        isCompleted: !1,
                        tasks: [
                            { name: "Website Launch", isCompleted: !0 },
                            { name: "KYC - AUDIT - SAFU", isCompleted: !0 },
                            { name: "2,000 Telegram Members", isCompleted: !1 },
                            { name: "Marketing Campaign", isCompleted: !1 },
                            { name: "Presale on Pinksale", isCompleted: !1 },
                            { name: "Lising Pancakeswap", isCompleted: !1 },
                        ],
                    },
                    {
                        id: 2,
                        name: "",
                        isCompleted: !1,
                        tasks: [
                            { name: "5,000 Holders", isCompleted: !1 },
                            { name: "CoinGecko Listing", isCompleted: !1 },
                            { name: "5,000 Telegram Members", isCompleted: !1 },
                            { name: "Marketing Campaign", isCompleted: !1 },
                            { name: "CoinMarketCap Listing", isCompleted: !1 },
                        ],
                    },
                ],
                [
                    {
                        id: 3,
                        name: "",
                        isCompleted: !1,
                        tasks: [
                            {
                                name: "10,000 Telegram Members",
                                isCompleted: !1,
                            },
                            { name: "Banner Ads", isCompleted: !1 },
                            { name: "50,000 Holders", isCompleted: !1 },
                            {
                                name: "List some top 30 CEX exchanges",
                                isCompleted: !1,
                            },
                        ],
                    },
                    {
                        id: 4,
                        name: "",
                        isCompleted: !1,
                        tasks: [
                            { name: "200,000 Holders", isCompleted: !1 },
                            { name: "BIG CEX Listings", isCompleted: !1 },
                            {
                                name: "50,000 Telegram Members",
                                isCompleted: !1,
                            },
                            {
                                name: "Cooperation with major partners",
                                isCompleted: !1,
                            },
                        ],
                    },
                ],
            ];
            return (n, s) => {
                const r = Yc,
                    l = At;
                return (
                    Y(),
                    J(
                        G,
                        null,
                        [
                            E("section", Qc, [
                                Jc,
                                Zc,
                                V(
                                    l,
                                    {
                                        class: "absolute inset-0 hidden h-full w-full xl:block",
                                    },
                                    {
                                        default: Se(() => [
                                            Xc,
                                            E("div", Gc, [
                                                E("div", eu, [
                                                    (Y(!0),
                                                    J(
                                                        G,
                                                        null,
                                                        ze(
                                                            t[0],
                                                            (o, i) => (
                                                                Y(),
                                                                Rt(
                                                                    r,
                                                                    {
                                                                        key: i,
                                                                        detail: o,
                                                                    },
                                                                    null,
                                                                    8,
                                                                    ["detail"]
                                                                )
                                                            )
                                                        ),
                                                        128
                                                    )),
                                                ]),
                                                tu,
                                                E("div", nu, [
                                                    (Y(!0),
                                                    J(
                                                        G,
                                                        null,
                                                        ze(
                                                            t[1],
                                                            (o, i) => (
                                                                Y(),
                                                                Rt(
                                                                    r,
                                                                    {
                                                                        key: i,
                                                                        detail: o,
                                                                        reverse:
                                                                            "",
                                                                    },
                                                                    null,
                                                                    8,
                                                                    ["detail"]
                                                                )
                                                            )
                                                        ),
                                                        128
                                                    )),
                                                ]),
                                            ]),
                                        ]),
                                        _: 1,
                                    }
                                ),
                            ]),
                            E("section", su, [
                                (Y(!0),
                                J(
                                    G,
                                    null,
                                    ze(
                                        [...t[0], ...t[1]],
                                        (o, i) => (
                                            Y(),
                                            Rt(
                                                r,
                                                { key: i, detail: o },
                                                null,
                                                8,
                                                ["detail"]
                                            )
                                        )
                                    ),
                                    128
                                )),
                            ]),
                        ],
                        64
                    )
                );
            };
        },
    }),
    lu = "/assets/tokenomic.6ec4f99a.png",
    ou = {},
    iu = { class: "py-16" },
    au = E(
        "h1",
        {
            class: "font-liberation text-#feae31 text-center text-3xl font-bold xl:text-5xl",
        },
        " Total Supply: 100.000.000.000.000.000 ",
        -1
    ),
    cu = E(
        "div",
        {
            class: "flex flex-col items-center justify-center pt-24 xl:flex-row xl:space-x-16",
        },
        -1
    );
function uu(e, t) {
    const n = At;
    return (
        Y(),
        J("section", iu, [V(n, null, { default: Se(() => [au, cu]), _: 1 })])
    );
}
const fu = Yn(ou, [["render", uu]]),
    du = "/assets/1.f0426e6c.png",
    pu = "/assets/2.f10c696b.png",
    hu = "/assets/3.9d6fbad2.png",
    mu = "/assets/4.820febbc.png",
    gu = { class: "pt-16 xl:pb-16" },
    _u = E(
        "h1",
        {
            class: "font-liberation text-#ffc385 text-center text-4xl font-bold xl:text-5xl",
        },
        " Why Should I own Hokkaido inu? ",
        -1
    ),
    bu = {
        class: "all:space-x-0 xl:all:space-x-8 relative mx-auto max-w-screen-sm pb-16 xl:max-w-4xl",
    },
    vu = ["src"],
    yu = { class: "font-space text-#feae31 text-2xl font-medium" },
    xu = { class: "text-md" },
    wu = ce({
        __name: "HighlightSection",
        setup(e) {
            const t = [
                [
                    du,
                    "Hokkaido Inu starts a new meme coin.",
                    "We value community, and community is the core of the x1000 at ath project. Fair and equal opportunity for all.Our goal is to create a transparent blockchain meme token that is truly owned by everyone.",
                ],
                [
                    pu,
                    "We say no to all VCs,",
                    "We only believe in the strength of the community, in transparency, and in creating fairness. a meme that considers it your primary property.",
                ],
                [
                    hu,
                    "Create an attractive,",
                    "Profitable betting mechanism for investors holding Hokkaido Inu",
                ],
                [
                    mu,
                    "Hokkaido Inu a genuine,",
                    "Brand new meme coin without VCs, turn small meme coin into your big dream. There's no greeting I can't do. We will create Hokkaido Inu applications such as payment inapp, games, football bets, and betting. We are an honest community project that has renounced ownership and been audited and kyc-ed, clear safety.",
                ],
            ];
            return (n, s) => {
                const r = At;
                return (
                    Y(),
                    J("section", gu, [
                        V(r, null, {
                            default: Se(() => [
                                _u,
                                E("div", bu, [
                                    (Y(),
                                    J(
                                        G,
                                        null,
                                        ze(t, (l, o) =>
                                            E(
                                                "div",
                                                {
                                                    key: o,
                                                    class: He([
                                                        "flex flex-col items-center xl:items-start xl:flex-row space-y-6 xl:space-y-0 xl:space-x-6",
                                                        o % 2
                                                            ? "xl:items-end mt-16 xl:-mt-20"
                                                            : "mt-16",
                                                    ]),
                                                },
                                                [
                                                    E(
                                                        "img",
                                                        {
                                                            class: He([
                                                                "w-52 xl:w-72",
                                                                {
                                                                    "xl:order-last":
                                                                        o % 2,
                                                                },
                                                            ]),
                                                            src: l[0],
                                                            alt: "",
                                                        },
                                                        null,
                                                        10,
                                                        vu
                                                    ),
                                                    E(
                                                        "div",
                                                        {
                                                            class: He([
                                                                "space-y-2 text-center",
                                                                o % 2
                                                                    ? "xl:text-left"
                                                                    : "xl:text-right",
                                                            ]),
                                                        },
                                                        [
                                                            E(
                                                                "p",
                                                                yu,
                                                                et(l[1]),
                                                                1
                                                            ),
                                                            E(
                                                                "p",
                                                                xu,
                                                                et(l[2]),
                                                                1
                                                            ),
                                                        ],
                                                        2
                                                    ),
                                                ],
                                                2
                                            )
                                        ),
                                        64
                                    )),
                                ]),
                            ]),
                            _: 1,
                        }),
                    ])
                );
            };
        },
    }),
    Eu = "/assets/1.fbb20eb4.gif",
    Cu = "/assets/2.10a9961c.gif",
    Au = "/assets/3.ee44f1a6.gif",
    Tu = "/assets/4.644cc66e.gif",
    $u = "/assets/5.7e9252df.gif",
    Su = { class: "mt-16 py-24" },
    Ou = {
        class: "-ml-6 -mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5",
    },
    Fu = { class: "pt-full relative w-full" },
    Pu = ["src"],
    ku = { class: "font-medium" },
    Lu = ce({
        __name: "FeatureSection",
        setup(e) {
            const t = [
                [Eu, "100% coin memes"],
                [Cu, "KYC, Audit, and Safu"],
                [Au, "Renounced ownership"],
                [Tu, "Automatic token burning mechanism according to volume"],
                [$u, "Attractive reflection mechanism"],
            ];
            return (n, s) => {
                const r = At;
                return (
                    Y(),
                    J("section", Su, [
                        V(r, null, {
                            default: Se(() => [
                                E("div", Ou, [
                                    (Y(),
                                    J(
                                        G,
                                        null,
                                        ze(t, (l, o) =>
                                            E(
                                                "div",
                                                {
                                                    key: o,
                                                    class: "ml-6 mt-6 space-y-4 text-left",
                                                },
                                                [
                                                    E("div", Fu, [
                                                        E(
                                                            "img",
                                                            {
                                                                src: l[0],
                                                                alt: "",
                                                                class: "absolute inset-0 h-full w-full object-cover object-center",
                                                            },
                                                            null,
                                                            8,
                                                            Pu
                                                        ),
                                                    ]),
                                                    E("p", ku, et(l[1]), 1),
                                                ]
                                            )
                                        ),
                                        64
                                    )),
                                ]),
                            ]),
                            _: 1,
                        }),
                    ])
                );
            };
        },
    }),
    Mu = "/assets/coins.2c3ed66d.png",
    Iu = {},
    Ru = { class: "space-y-10" },
    Hu = sa(
        '<div class="font-space space-y-2.5 text-3xl font-bold xl:text-5xl"><p class="xl:w-122 mx-auto flex w-80 items-center justify-between space-x-2.5 xl:mx-0"><span>Hokkaido Inu.</span><span class="bg-#fb5c5c">A 100%</span></p><p class="xl:w-122 mx-auto flex w-80 items-center justify-between space-x-2.5 xl:mx-0"><span class="bg-#7cfb5c">Genuine</span><span class="bg-#7b6ffc">Meme token</span></p></div><p class="max-w-122 mx-auto flex items-start space-x-2 xl:mx-0 xl:flex-row"><img alt="" class="xl:h-22 h-16" src="' +
            Mu +
            '"><span class="font-medium xl:text-lg"> Hokkaido is a cute dog related to Shiba and Kishu. Shiba Inu and Kishu Inu are two very successful memes token, and Hokkaido is still a mystery. The Hokkaido dog-loving community is huge, second only to Shiba Inu. </span></p>',
        2
    ),
    Nu = [Hu];
function ju(e, t) {
    return Y(), J("div", Ru, Nu);
}
const Du = Yn(Iu, [["render", ju]]),
    Bu = "/assets/tr.181b0384.png",
    Uu = "/assets/cc.58964939.png",
    Ku = "/assets/cr.2344a225.png",
    qu = "/assets/bl.2ddc6cd3.png",
    Wu = "/assets/bc.98cb0c65.png",
    Vu = "/assets/br.fb56cbaf.png",
    Yu = {},
    zu = { class: "bg-hero bg-cover bg-left-bottom bg-no-repeat" },
    Qu = { class: "flex min-h-screen flex-col pt-20" },
    Ju = { class: "relative mt-8 flex-1 xl:mt-28" },
    Zu = E(
        "div",
        { class: "w-192 h-100 absolute top-0 right-0 mx-auto hidden xl:block" },
        [
            E("img", {
                class: "-top-144 absolute left-16 hidden xl:block",
                src: Bu,
            }),
            E("img", { class: "absolute top-48 -left-24", src: Uu }),
            E("img", { class: "absolute top-40 right-8", src: Ku }),
        ],
        -1
    ),
    Xu = E(
        "div",
        {
            class: "h-100 max-w-375px relative mx-auto mt-6 w-full shrink-0 xl:mt-20 xl:max-w-full",
        },
        [
            E("img", {
                alt: "",
                class: "xl:w-148 absolute bottom-0 left-0 z-20 w-56",
                src: qu,
            }),
            E("img", {
                alt: "",
                class: "xl:w-156 xl:left-112 absolute left-0 top-52 z-10 w-full xl:top-20",
                src: Wu,
            }),
            E("img", {
                alt: "",
                class: "absolute bottom-0 right-16 w-64 xl:-right-16 xl:z-30 xl:w-72",
                src: Vu,
            }),
        ],
        -1
    );
function Gu(e, t) {
    const n = Du,
        s = At;
    return (
        Y(),
        J("section", zu, [
            V(s, null, {
                default: Se(() => [
                    E("div", Qu, [E("div", Ju, [V(n), Zu]), Xu]),
                ]),
                _: 1,
            }),
        ])
    );
}
const ef = Yn(Yu, [["render", Gu]]);
function Fe(e, t, ...n) {
    if (e in t) {
        let r = t[e];
        return typeof r == "function" ? r(...n) : r;
    }
    let s = new Error(
        `Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(
            t
        )
            .map((r) => `"${r}"`)
            .join(", ")}.`
    );
    throw (Error.captureStackTrace && Error.captureStackTrace(s, Fe), s);
}
var In = ((e) => (
        (e[(e.None = 0)] = "None"),
        (e[(e.RenderStrategy = 1)] = "RenderStrategy"),
        (e[(e.Static = 2)] = "Static"),
        e
    ))(In || {}),
    ct = ((e) => (
        (e[(e.Unmount = 0)] = "Unmount"), (e[(e.Hidden = 1)] = "Hidden"), e
    ))(ct || {});
function Ae({
    visible: e = !0,
    features: t = 0,
    ourProps: n,
    theirProps: s,
    ...r
}) {
    var l;
    let o = ql(s, n),
        i = Object.assign(r, { props: o });
    if (e || (t & 2 && o.static)) return ls(i);
    if (t & 1) {
        let a = (l = o.unmount) == null || l ? 0 : 1;
        return Fe(a, {
            [0]() {
                return null;
            },
            [1]() {
                return ls({
                    ...r,
                    props: { ...o, hidden: !0, style: { display: "none" } },
                });
            },
        });
    }
    return ls(i);
}
function ls({ props: e, attrs: t, slots: n, slot: s, name: r }) {
    var l, o;
    let { as: i, ...a } = Wl(e, ["unmount", "static"]),
        u = (l = n.default) == null ? void 0 : l.call(n, s),
        f = {};
    if (s) {
        let p = !1,
            h = [];
        for (let [g, b] of Object.entries(s))
            typeof b == "boolean" && (p = !0), b === !0 && h.push(g);
        p && (f["data-headlessui-state"] = h.join(" "));
    }
    if (i === "template") {
        if (
            ((u = Kl(u != null ? u : [])),
            Object.keys(a).length > 0 || Object.keys(t).length > 0)
        ) {
            let [p, ...h] = u != null ? u : [];
            if (!tf(p) || h.length > 0)
                throw new Error(
                    [
                        'Passing props on "template"!',
                        "",
                        `The current component <${r} /> is rendering a "template".`,
                        "However we need to passthrough the following props:",
                        Object.keys(a)
                            .concat(Object.keys(t))
                            .map((C) => C.trim())
                            .filter((C, W, _) => _.indexOf(C) === W)
                            .sort((C, W) => C.localeCompare(W))
                            .map((C) => `  - ${C}`).join(`
`),
                        "",
                        "You can apply a few solutions:",
                        [
                            'Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',
                            "Render a single element as the child so that we can forward the props onto that element.",
                        ].map((C) => `  - ${C}`).join(`
`),
                    ].join(`
`)
                );
            let g = ql((o = p.props) != null ? o : {}, a),
                b = nt(p, g);
            for (let C in g)
                C.startsWith("on") &&
                    (b.props || (b.props = {}), (b.props[C] = g[C]));
            return b;
        }
        return Array.isArray(u) && u.length === 1 ? u[0] : u;
    }
    return xe(i, Object.assign({}, a, f), { default: () => u });
}
function Kl(e) {
    return e.flatMap((t) => (t.type === G ? Kl(t.children) : [t]));
}
function ql(...e) {
    if (e.length === 0) return {};
    if (e.length === 1) return e[0];
    let t = {},
        n = {};
    for (let s of e)
        for (let r in s)
            r.startsWith("on") && typeof s[r] == "function"
                ? (n[r] != null || (n[r] = []), n[r].push(s[r]))
                : (t[r] = s[r]);
    if (t.disabled || t["aria-disabled"])
        return Object.assign(
            t,
            Object.fromEntries(Object.keys(n).map((s) => [s, void 0]))
        );
    for (let s in n)
        Object.assign(t, {
            [s](r, ...l) {
                let o = n[s];
                for (let i of o) {
                    if (r instanceof Event && r.defaultPrevented) return;
                    i(r, ...l);
                }
            },
        });
    return t;
}
function Wl(e, t = []) {
    let n = Object.assign({}, e);
    for (let s of t) s in n && delete n[s];
    return n;
}
function tf(e) {
    return e == null
        ? !1
        : typeof e.type == "string" ||
              typeof e.type == "object" ||
              typeof e.type == "function";
}
let nf = 0;
function sf() {
    return ++nf;
}
function Tt() {
    return sf();
}
var Vl = ((e) => (
    (e.Space = " "),
    (e.Enter = "Enter"),
    (e.Escape = "Escape"),
    (e.Backspace = "Backspace"),
    (e.Delete = "Delete"),
    (e.ArrowLeft = "ArrowLeft"),
    (e.ArrowUp = "ArrowUp"),
    (e.ArrowRight = "ArrowRight"),
    (e.ArrowDown = "ArrowDown"),
    (e.Home = "Home"),
    (e.End = "End"),
    (e.PageUp = "PageUp"),
    (e.PageDown = "PageDown"),
    (e.Tab = "Tab"),
    e
))(Vl || {});
function Je(e) {
    var t;
    return e == null || e.value == null
        ? null
        : (t = e.value.$el) != null
        ? t
        : e.value;
}
let Yl = Symbol("Context");
var Ct = ((e) => (
    (e[(e.Open = 0)] = "Open"), (e[(e.Closed = 1)] = "Closed"), e
))(Ct || {});
function rf() {
    return Js() !== null;
}
function Js() {
    return he(Yl, null);
}
function lf(e) {
    Be(Yl, e);
}
class of {
    constructor() {
        (this.current = this.detect()), (this.currentId = 0);
    }
    set(t) {
        this.current !== t && ((this.currentId = 0), (this.current = t));
    }
    reset() {
        this.set(this.detect());
    }
    nextId() {
        return ++this.currentId;
    }
    get isServer() {
        return this.current === "server";
    }
    get isClient() {
        return this.current === "client";
    }
    detect() {
        return typeof window > "u" || typeof document > "u"
            ? "server"
            : "client";
    }
}
let fn = new of();
function qt(e) {
    if (fn.isServer) return null;
    if (e instanceof Node) return e.ownerDocument;
    if (e != null && e.hasOwnProperty("value")) {
        let t = Je(e);
        if (t) return t.ownerDocument;
    }
    return document;
}
let xs = [
    "[contentEditable=true]",
    "[tabindex]",
    "a[href]",
    "area[href]",
    "button:not([disabled])",
    "iframe",
    "input:not([disabled])",
    "select:not([disabled])",
    "textarea:not([disabled])",
]
    .map((e) => `${e}:not([tabindex='-1'])`)
    .join(",");
var at = ((e) => (
        (e[(e.First = 1)] = "First"),
        (e[(e.Previous = 2)] = "Previous"),
        (e[(e.Next = 4)] = "Next"),
        (e[(e.Last = 8)] = "Last"),
        (e[(e.WrapAround = 16)] = "WrapAround"),
        (e[(e.NoScroll = 32)] = "NoScroll"),
        e
    ))(at || {}),
    zl = ((e) => (
        (e[(e.Error = 0)] = "Error"),
        (e[(e.Overflow = 1)] = "Overflow"),
        (e[(e.Success = 2)] = "Success"),
        (e[(e.Underflow = 3)] = "Underflow"),
        e
    ))(zl || {}),
    af = ((e) => (
        (e[(e.Previous = -1)] = "Previous"), (e[(e.Next = 1)] = "Next"), e
    ))(af || {});
function cf(e = document.body) {
    return e == null
        ? []
        : Array.from(e.querySelectorAll(xs)).sort((t, n) =>
              Math.sign(
                  (t.tabIndex || Number.MAX_SAFE_INTEGER) -
                      (n.tabIndex || Number.MAX_SAFE_INTEGER)
              )
          );
}
var Ql = ((e) => (
    (e[(e.Strict = 0)] = "Strict"), (e[(e.Loose = 1)] = "Loose"), e
))(Ql || {});
function uf(e, t = 0) {
    var n;
    return e === ((n = qt(e)) == null ? void 0 : n.body)
        ? !1
        : Fe(t, {
              [0]() {
                  return e.matches(xs);
              },
              [1]() {
                  let s = e;
                  for (; s !== null; ) {
                      if (s.matches(xs)) return !0;
                      s = s.parentElement;
                  }
                  return !1;
              },
          });
}
function Ht(e) {
    e == null || e.focus({ preventScroll: !0 });
}
let ff = ["textarea", "input"].join(",");
function df(e) {
    var t, n;
    return (n =
        (t = e == null ? void 0 : e.matches) == null
            ? void 0
            : t.call(e, ff)) != null
        ? n
        : !1;
}
function pf(e, t = (n) => n) {
    return e.slice().sort((n, s) => {
        let r = t(n),
            l = t(s);
        if (r === null || l === null) return 0;
        let o = r.compareDocumentPosition(l);
        return o & Node.DOCUMENT_POSITION_FOLLOWING
            ? -1
            : o & Node.DOCUMENT_POSITION_PRECEDING
            ? 1
            : 0;
    });
}
function $n(
    e,
    t,
    { sorted: n = !0, relativeTo: s = null, skipElements: r = [] } = {}
) {
    var l;
    let o =
            (l = Array.isArray(e)
                ? e.length > 0
                    ? e[0].ownerDocument
                    : document
                : e == null
                ? void 0
                : e.ownerDocument) != null
                ? l
                : document,
        i = Array.isArray(e) ? (n ? pf(e) : e) : cf(e);
    r.length > 0 && i.length > 1 && (i = i.filter((b) => !r.includes(b))),
        (s = s != null ? s : o.activeElement);
    let a = (() => {
            if (t & 5) return 1;
            if (t & 10) return -1;
            throw new Error(
                "Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last"
            );
        })(),
        u = (() => {
            if (t & 1) return 0;
            if (t & 2) return Math.max(0, i.indexOf(s)) - 1;
            if (t & 4) return Math.max(0, i.indexOf(s)) + 1;
            if (t & 8) return i.length - 1;
            throw new Error(
                "Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last"
            );
        })(),
        f = t & 32 ? { preventScroll: !0 } : {},
        p = 0,
        h = i.length,
        g;
    do {
        if (p >= h || p + h <= 0) return 0;
        let b = u + p;
        if (t & 16) b = (b + h) % h;
        else {
            if (b < 0) return 3;
            if (b >= h) return 1;
        }
        (g = i[b]), g == null || g.focus(f), (p += a);
    } while (g !== o.activeElement);
    return (
        t & 6 && df(g) && g.select(),
        g.hasAttribute("tabindex") || g.setAttribute("tabindex", "0"),
        2
    );
}
function os(e, t, n) {
    fn.isServer ||
        Ue((s) => {
            document.addEventListener(e, t, n),
                s(() => document.removeEventListener(e, t, n));
        });
}
function hf(e, t, n = oe(() => !0)) {
    function s(l, o) {
        if (!n.value || l.defaultPrevented) return;
        let i = o(l);
        if (i === null || !i.getRootNode().contains(i)) return;
        let a = (function u(f) {
            return typeof f == "function"
                ? u(f())
                : Array.isArray(f) || f instanceof Set
                ? f
                : [f];
        })(e);
        for (let u of a) {
            if (u === null) continue;
            let f = u instanceof HTMLElement ? u : Je(u);
            if (
                (f != null && f.contains(i)) ||
                (l.composed && l.composedPath().includes(f))
            )
                return;
        }
        return (
            !uf(i, Ql.Loose) && i.tabIndex !== -1 && l.preventDefault(), t(l, i)
        );
    }
    let r = X(null);
    os(
        "mousedown",
        (l) => {
            var o, i;
            n.value &&
                (r.value =
                    ((i = (o = l.composedPath) == null ? void 0 : o.call(l)) ==
                    null
                        ? void 0
                        : i[0]) || l.target);
        },
        !0
    ),
        os(
            "click",
            (l) => {
                !r.value || (s(l, () => r.value), (r.value = null));
            },
            !0
        ),
        os(
            "blur",
            (l) =>
                s(l, () =>
                    window.document.activeElement instanceof HTMLIFrameElement
                        ? window.document.activeElement
                        : null
                ),
            !0
        );
}
var Rn = ((e) => (
    (e[(e.None = 1)] = "None"),
    (e[(e.Focusable = 2)] = "Focusable"),
    (e[(e.Hidden = 4)] = "Hidden"),
    e
))(Rn || {});
let ws = ce({
    name: "Hidden",
    props: {
        as: { type: [Object, String], default: "div" },
        features: { type: Number, default: 1 },
    },
    setup(e, { slots: t, attrs: n }) {
        return () => {
            let { features: s, ...r } = e,
                l = {
                    "aria-hidden": (s & 2) === 2 ? !0 : void 0,
                    style: {
                        position: "fixed",
                        top: 1,
                        left: 1,
                        width: 1,
                        height: 0,
                        padding: 0,
                        margin: -1,
                        overflow: "hidden",
                        clip: "rect(0, 0, 0, 0)",
                        whiteSpace: "nowrap",
                        borderWidth: "0",
                        ...((s & 4) === 4 &&
                            (s & 2) !== 2 && { display: "none" }),
                    },
                };
            return Ae({
                ourProps: l,
                theirProps: r,
                slot: {},
                attrs: n,
                slots: t,
                name: "Hidden",
            });
        };
    },
});
function mf(e, t, n) {
    fn.isServer ||
        Ue((s) => {
            window.addEventListener(e, t, n),
                s(() => window.removeEventListener(e, t, n));
        });
}
var zt = ((e) => (
    (e[(e.Forwards = 0)] = "Forwards"), (e[(e.Backwards = 1)] = "Backwards"), e
))(zt || {});
function gf() {
    let e = X(0);
    return (
        mf("keydown", (t) => {
            t.key === "Tab" && (e.value = t.shiftKey ? 1 : 0);
        }),
        e
    );
}
function Jl(e, t, n, s) {
    fn.isServer ||
        Ue((r) => {
            (e = e != null ? e : window),
                e.addEventListener(t, n, s),
                r(() => e.removeEventListener(t, n, s));
        });
}
function _f(e) {
    typeof queueMicrotask == "function"
        ? queueMicrotask(e)
        : Promise.resolve()
              .then(e)
              .catch((t) =>
                  setTimeout(() => {
                      throw t;
                  })
              );
}
var Zl = ((e) => (
    (e[(e.None = 1)] = "None"),
    (e[(e.InitialFocus = 2)] = "InitialFocus"),
    (e[(e.TabLock = 4)] = "TabLock"),
    (e[(e.FocusLock = 8)] = "FocusLock"),
    (e[(e.RestoreFocus = 16)] = "RestoreFocus"),
    (e[(e.All = 30)] = "All"),
    e
))(Zl || {});
let Vt = Object.assign(
    ce({
        name: "FocusTrap",
        props: {
            as: { type: [Object, String], default: "div" },
            initialFocus: { type: Object, default: null },
            features: { type: Number, default: 30 },
            containers: { type: Object, default: X(new Set()) },
        },
        inheritAttrs: !1,
        setup(e, { attrs: t, slots: n, expose: s }) {
            let r = X(null);
            s({ el: r, $el: r });
            let l = oe(() => qt(r));
            bf(
                { ownerDocument: l },
                oe(() => Boolean(e.features & 16))
            );
            let o = vf(
                {
                    ownerDocument: l,
                    container: r,
                    initialFocus: oe(() => e.initialFocus),
                },
                oe(() => Boolean(e.features & 2))
            );
            yf(
                {
                    ownerDocument: l,
                    container: r,
                    containers: e.containers,
                    previousActiveElement: o,
                },
                oe(() => Boolean(e.features & 8))
            );
            let i = gf();
            function a(h) {
                let g = Je(r);
                !g ||
                    ((b) => b())(() => {
                        Fe(i.value, {
                            [zt.Forwards]: () => {
                                $n(g, at.First, {
                                    skipElements: [h.relatedTarget],
                                });
                            },
                            [zt.Backwards]: () => {
                                $n(g, at.Last, {
                                    skipElements: [h.relatedTarget],
                                });
                            },
                        });
                    });
            }
            let u = X(!1);
            function f(h) {
                h.key === "Tab" &&
                    ((u.value = !0),
                    requestAnimationFrame(() => {
                        u.value = !1;
                    }));
            }
            function p(h) {
                var g;
                let b = new Set((g = e.containers) == null ? void 0 : g.value);
                b.add(r);
                let C = h.relatedTarget;
                C instanceof HTMLElement &&
                    C.dataset.headlessuiFocusGuard !== "true" &&
                    (Xl(b, C) ||
                        (u.value
                            ? $n(
                                  Je(r),
                                  Fe(i.value, {
                                      [zt.Forwards]: () => at.Next,
                                      [zt.Backwards]: () => at.Previous,
                                  }) | at.WrapAround,
                                  { relativeTo: h.target }
                              )
                            : h.target instanceof HTMLElement && Ht(h.target)));
            }
            return () => {
                let h = {},
                    g = { ref: r, onKeydown: f, onFocusout: p },
                    { features: b, initialFocus: C, containers: W, ..._ } = e;
                return xe(G, [
                    Boolean(b & 4) &&
                        xe(ws, {
                            as: "button",
                            type: "button",
                            "data-headlessui-focus-guard": !0,
                            onFocus: a,
                            features: Rn.Focusable,
                        }),
                    Ae({
                        ourProps: g,
                        theirProps: { ...t, ..._ },
                        slot: h,
                        attrs: t,
                        slots: n,
                        name: "FocusTrap",
                    }),
                    Boolean(b & 4) &&
                        xe(ws, {
                            as: "button",
                            type: "button",
                            "data-headlessui-focus-guard": !0,
                            onFocus: a,
                            features: Rn.Focusable,
                        }),
                ]);
            };
        },
    }),
    { features: Zl }
);
function bf({ ownerDocument: e }, t) {
    let n = X(null);
    function s() {
        var l;
        n.value || (n.value = (l = e.value) == null ? void 0 : l.activeElement);
    }
    function r() {
        !n.value || (Ht(n.value), (n.value = null));
    }
    be(() => {
        dt(
            t,
            (l, o) => {
                l !== o && (l ? s() : r());
            },
            { immediate: !0 }
        );
    }),
        Ke(r);
}
function vf({ ownerDocument: e, container: t, initialFocus: n }, s) {
    let r = X(null),
        l = X(!1);
    return (
        be(() => (l.value = !0)),
        Ke(() => (l.value = !1)),
        be(() => {
            dt(
                [t, n, s],
                (o, i) => {
                    if (
                        o.every((u, f) => (i == null ? void 0 : i[f]) === u) ||
                        !s.value
                    )
                        return;
                    let a = Je(t);
                    !a ||
                        _f(() => {
                            var u, f;
                            if (!l.value) return;
                            let p = Je(n),
                                h =
                                    (u = e.value) == null
                                        ? void 0
                                        : u.activeElement;
                            if (p) {
                                if (p === h) {
                                    r.value = h;
                                    return;
                                }
                            } else if (a.contains(h)) {
                                r.value = h;
                                return;
                            }
                            p
                                ? Ht(p)
                                : $n(a, at.First | at.NoScroll) === zl.Error &&
                                  console.warn(
                                      "There are no focusable elements inside the <FocusTrap />"
                                  ),
                                (r.value =
                                    (f = e.value) == null
                                        ? void 0
                                        : f.activeElement);
                        });
                },
                { immediate: !0, flush: "post" }
            );
        }),
        r
    );
}
function yf(
    { ownerDocument: e, container: t, containers: n, previousActiveElement: s },
    r
) {
    var l;
    Jl(
        (l = e.value) == null ? void 0 : l.defaultView,
        "focus",
        (o) => {
            if (!r.value) return;
            let i = new Set(n == null ? void 0 : n.value);
            i.add(t);
            let a = s.value;
            if (!a) return;
            let u = o.target;
            u && u instanceof HTMLElement
                ? Xl(i, u)
                    ? ((s.value = u), Ht(u))
                    : (o.preventDefault(), o.stopPropagation(), Ht(a))
                : Ht(s.value);
        },
        !0
    );
}
function Xl(e, t) {
    var n;
    for (let s of e) if ((n = s.value) != null && n.contains(t)) return !0;
    return !1;
}
let Hr = "body > *",
    Ot = new Set(),
    ot = new Map();
function Nr(e) {
    e.setAttribute("aria-hidden", "true"), (e.inert = !0);
}
function jr(e) {
    let t = ot.get(e);
    !t ||
        (t["aria-hidden"] === null
            ? e.removeAttribute("aria-hidden")
            : e.setAttribute("aria-hidden", t["aria-hidden"]),
        (e.inert = t.inert));
}
function xf(e, t = X(!0)) {
    Ue((n) => {
        if (!t.value || !e.value) return;
        let s = e.value,
            r = qt(s);
        if (r) {
            Ot.add(s);
            for (let l of ot.keys()) l.contains(s) && (jr(l), ot.delete(l));
            r.querySelectorAll(Hr).forEach((l) => {
                if (l instanceof HTMLElement) {
                    for (let o of Ot) if (l.contains(o)) return;
                    Ot.size === 1 &&
                        (ot.set(l, {
                            "aria-hidden": l.getAttribute("aria-hidden"),
                            inert: l.inert,
                        }),
                        Nr(l));
                }
            }),
                n(() => {
                    if ((Ot.delete(s), Ot.size > 0))
                        r.querySelectorAll(Hr).forEach((l) => {
                            if (l instanceof HTMLElement && !ot.has(l)) {
                                for (let o of Ot) if (l.contains(o)) return;
                                ot.set(l, {
                                    "aria-hidden":
                                        l.getAttribute("aria-hidden"),
                                    inert: l.inert,
                                }),
                                    Nr(l);
                            }
                        });
                    else for (let l of ot.keys()) jr(l), ot.delete(l);
                });
        }
    });
}
let Gl = Symbol("ForcePortalRootContext");
function wf() {
    return he(Gl, !1);
}
let Es = ce({
    name: "ForcePortalRoot",
    props: {
        as: { type: [Object, String], default: "template" },
        force: { type: Boolean, default: !1 },
    },
    setup(e, { slots: t, attrs: n }) {
        return (
            Be(Gl, e.force),
            () => {
                let { force: s, ...r } = e;
                return Ae({
                    theirProps: r,
                    ourProps: {},
                    slot: {},
                    slots: t,
                    attrs: n,
                    name: "ForcePortalRoot",
                });
            }
        );
    },
});
function Ef(e) {
    let t = qt(e);
    if (!t) {
        if (e === null) return null;
        throw new Error(
            `[Headless UI]: Cannot find ownerDocument for contextElement: ${e}`
        );
    }
    let n = t.getElementById("headlessui-portal-root");
    if (n) return n;
    let s = t.createElement("div");
    return (
        s.setAttribute("id", "headlessui-portal-root"), t.body.appendChild(s)
    );
}
let eo = ce({
        name: "Portal",
        props: { as: { type: [Object, String], default: "div" } },
        setup(e, { slots: t, attrs: n }) {
            let s = X(null),
                r = oe(() => qt(s)),
                l = wf(),
                o = he(to, null),
                i = X(l === !0 || o == null ? Ef(s.value) : o.resolveTarget());
            return (
                Ue(() => {
                    l || (o != null && (i.value = o.resolveTarget()));
                }),
                Ke(() => {
                    var a, u;
                    let f =
                        (a = r.value) == null
                            ? void 0
                            : a.getElementById("headlessui-portal-root");
                    !f ||
                        (i.value === f &&
                            i.value.children.length <= 0 &&
                            ((u = i.value.parentElement) == null ||
                                u.removeChild(i.value)));
                }),
                () => {
                    if (i.value === null) return null;
                    let a = { ref: s, "data-headlessui-portal": "" };
                    return xe(
                        Gi,
                        { to: i.value },
                        Ae({
                            ourProps: a,
                            theirProps: e,
                            slot: {},
                            attrs: n,
                            slots: t,
                            name: "Portal",
                        })
                    );
                }
            );
        },
    }),
    to = Symbol("PortalGroupContext"),
    Cf = ce({
        name: "PortalGroup",
        props: {
            as: { type: [Object, String], default: "template" },
            target: { type: Object, default: null },
        },
        setup(e, { attrs: t, slots: n }) {
            let s = Bn({
                resolveTarget() {
                    return e.target;
                },
            });
            return (
                Be(to, s),
                () => {
                    let { target: r, ...l } = e;
                    return Ae({
                        theirProps: l,
                        ourProps: {},
                        slot: {},
                        attrs: t,
                        slots: n,
                        name: "PortalGroup",
                    });
                }
            );
        },
    }),
    no = Symbol("StackContext");
var Cs = ((e) => ((e[(e.Add = 0)] = "Add"), (e[(e.Remove = 1)] = "Remove"), e))(
    Cs || {}
);
function Af() {
    return he(no, () => {});
}
function Tf({ type: e, enabled: t, element: n, onUpdate: s }) {
    let r = Af();
    function l(...o) {
        s == null || s(...o), r(...o);
    }
    be(() => {
        dt(
            t,
            (o, i) => {
                o ? l(0, e, n) : i === !0 && l(1, e, n);
            },
            { immediate: !0, flush: "sync" }
        );
    }),
        Ke(() => {
            t.value && l(1, e, n);
        }),
        Be(no, l);
}
let so = Symbol("DescriptionContext");
function $f() {
    let e = he(so, null);
    if (e === null) throw new Error("Missing parent");
    return e;
}
function Sf({ slot: e = X({}), name: t = "Description", props: n = {} } = {}) {
    let s = X([]);
    function r(l) {
        return (
            s.value.push(l),
            () => {
                let o = s.value.indexOf(l);
                o !== -1 && s.value.splice(o, 1);
            }
        );
    }
    return (
        Be(so, { register: r, slot: e, name: t, props: n }),
        oe(() => (s.value.length > 0 ? s.value.join(" ") : void 0))
    );
}
let Ed = ce({
    name: "Description",
    props: {
        as: { type: [Object, String], default: "p" },
        id: { type: String, default: () => `headlessui-description-${Tt()}` },
    },
    setup(e, { attrs: t, slots: n }) {
        let s = $f();
        return (
            be(() => Ke(s.register(e.id))),
            () => {
                let {
                        name: r = "Description",
                        slot: l = X({}),
                        props: o = {},
                    } = s,
                    { id: i, ...a } = e,
                    u = {
                        ...Object.entries(o).reduce(
                            (f, [p, h]) => Object.assign(f, { [p]: De(h) }),
                            {}
                        ),
                        id: i,
                    };
                return Ae({
                    ourProps: u,
                    theirProps: a,
                    slot: l.value,
                    attrs: t,
                    slots: n,
                    name: r,
                });
            }
        );
    },
});
function Of(e) {
    let t = al(e.getSnapshot());
    return (
        Ke(
            e.subscribe(() => {
                t.value = e.getSnapshot();
            })
        ),
        t
    );
}
function Zs() {
    let e = [],
        t = [],
        n = {
            enqueue(s) {
                t.push(s);
            },
            addEventListener(s, r, l, o) {
                return (
                    s.addEventListener(r, l, o),
                    n.add(() => s.removeEventListener(r, l, o))
                );
            },
            requestAnimationFrame(...s) {
                let r = requestAnimationFrame(...s);
                n.add(() => cancelAnimationFrame(r));
            },
            nextFrame(...s) {
                n.requestAnimationFrame(() => {
                    n.requestAnimationFrame(...s);
                });
            },
            setTimeout(...s) {
                let r = setTimeout(...s);
                n.add(() => clearTimeout(r));
            },
            add(s) {
                e.push(s);
            },
            style(s, r, l) {
                let o = s.style.getPropertyValue(r);
                return (
                    Object.assign(s.style, { [r]: l }),
                    this.add(() => {
                        Object.assign(s.style, { [r]: o });
                    })
                );
            },
            dispose() {
                for (let s of e.splice(0)) s();
            },
            async workQueue() {
                for (let s of t.splice(0)) await s();
            },
        };
    return n;
}
function Ff(e, t) {
    let n = e(),
        s = new Set();
    return {
        getSnapshot() {
            return n;
        },
        subscribe(r) {
            return s.add(r), () => s.delete(r);
        },
        dispatch(r, ...l) {
            let o = t[r].call(n, ...l);
            o && ((n = o), s.forEach((i) => i()));
        },
    };
}
function Pf() {
    let e;
    return {
        before({ doc: t }) {
            var n;
            let s = t.documentElement;
            e =
                ((n = t.defaultView) != null ? n : window).innerWidth -
                s.clientWidth;
        },
        after({ doc: t, d: n }) {
            let s = t.documentElement,
                r = s.clientWidth - s.offsetWidth,
                l = e - r;
            n.style(s, "paddingRight", `${l}px`);
        },
    };
}
function kf() {
    return (
        /iPhone/gi.test(window.navigator.platform) ||
        (/Mac/gi.test(window.navigator.platform) &&
            window.navigator.maxTouchPoints > 0)
    );
}
function Lf() {
    if (!kf()) return {};
    let e;
    return {
        before() {
            e = window.pageYOffset;
        },
        after({ doc: t, d: n, meta: s }) {
            function r(o) {
                return s.containers
                    .flatMap((i) => i())
                    .some((i) => i.contains(o));
            }
            n.style(t.body, "marginTop", `-${e}px`), window.scrollTo(0, 0);
            let l = null;
            n.addEventListener(
                t,
                "click",
                (o) => {
                    if (o.target instanceof HTMLElement)
                        try {
                            let i = o.target.closest("a");
                            if (!i) return;
                            let { hash: a } = new URL(i.href),
                                u = t.querySelector(a);
                            u && !r(u) && (l = u);
                        } catch {}
                },
                !0
            ),
                n.addEventListener(
                    t,
                    "touchmove",
                    (o) => {
                        o.target instanceof HTMLElement &&
                            !r(o.target) &&
                            o.preventDefault();
                    },
                    { passive: !1 }
                ),
                n.add(() => {
                    window.scrollTo(0, window.pageYOffset + e),
                        l &&
                            l.isConnected &&
                            (l.scrollIntoView({ block: "nearest" }),
                            (l = null));
                });
        },
    };
}
function Mf() {
    return {
        before({ doc: e, d: t }) {
            t.style(e.documentElement, "overflow", "hidden");
        },
    };
}
function If(e) {
    let t = {};
    for (let n of e) Object.assign(t, n(t));
    return t;
}
let xt = Ff(() => new Map(), {
    PUSH(e, t) {
        var n;
        let s =
            (n = this.get(e)) != null
                ? n
                : { doc: e, count: 0, d: Zs(), meta: new Set() };
        return s.count++, s.meta.add(t), this.set(e, s), this;
    },
    POP(e, t) {
        let n = this.get(e);
        return n && (n.count--, n.meta.delete(t)), this;
    },
    SCROLL_PREVENT({ doc: e, d: t, meta: n }) {
        let s = { doc: e, d: t, meta: If(n) },
            r = [Lf(), Pf(), Mf()];
        r.forEach(({ before: l }) => (l == null ? void 0 : l(s))),
            r.forEach(({ after: l }) => (l == null ? void 0 : l(s)));
    },
    SCROLL_ALLOW({ d: e }) {
        e.dispose();
    },
    TEARDOWN({ doc: e }) {
        this.delete(e);
    },
});
xt.subscribe(() => {
    let e = xt.getSnapshot(),
        t = new Map();
    for (let [n] of e) t.set(n, n.documentElement.style.overflow);
    for (let n of e.values()) {
        let s = t.get(n.doc) === "hidden",
            r = n.count !== 0;
        ((r && !s) || (!r && s)) &&
            xt.dispatch(n.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", n),
            n.count === 0 && xt.dispatch("TEARDOWN", n);
    }
});
function Rf(e, t, n) {
    let s = Of(xt),
        r = oe(() => {
            let l = e.value ? s.value.get(e.value) : void 0;
            return l ? l.count > 0 : !1;
        });
    return (
        dt(
            [e, t],
            ([l, o], [i], a) => {
                if (!l || !o) return;
                xt.dispatch("PUSH", l, n);
                let u = !1;
                a(() => {
                    u || (xt.dispatch("POP", i != null ? i : l, n), (u = !0));
                });
            },
            { immediate: !0 }
        ),
        r
    );
}
var Hf = ((e) => (
    (e[(e.Open = 0)] = "Open"), (e[(e.Closed = 1)] = "Closed"), e
))(Hf || {});
let As = Symbol("DialogContext");
function dn(e) {
    let t = he(As, null);
    if (t === null) {
        let n = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
        throw (Error.captureStackTrace && Error.captureStackTrace(n, dn), n);
    }
    return t;
}
let Cn = "DC8F892D-2EBD-447C-A4C8-A03058436FF4",
    Nf = ce({
        name: "Dialog",
        inheritAttrs: !1,
        props: {
            as: { type: [Object, String], default: "div" },
            static: { type: Boolean, default: !1 },
            unmount: { type: Boolean, default: !0 },
            open: { type: [Boolean, String], default: Cn },
            initialFocus: { type: Object, default: null },
            id: { type: String, default: () => `headlessui-dialog-${Tt()}` },
        },
        emits: { close: (e) => !0 },
        setup(e, { emit: t, attrs: n, slots: s, expose: r }) {
            var l;
            let o = X(!1);
            be(() => {
                o.value = !0;
            });
            let i = X(0),
                a = Js(),
                u = oe(() =>
                    e.open === Cn && a !== null
                        ? Fe(a.value, { [Ct.Open]: !0, [Ct.Closed]: !1 })
                        : e.open
                ),
                f = X(new Set()),
                p = X(null),
                h = X(null),
                g = oe(() => qt(p));
            if ((r({ el: p, $el: p }), !(e.open !== Cn || a !== null)))
                throw new Error(
                    "You forgot to provide an `open` prop to the `Dialog`."
                );
            if (typeof u.value != "boolean")
                throw new Error(
                    `You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${
                        u.value === Cn ? void 0 : e.open
                    }`
                );
            let b = oe(() => (o.value && u.value ? 0 : 1)),
                C = oe(() => b.value === 0),
                W = oe(() => i.value > 1);
            he(As, null);
            let _ = oe(() => (W.value ? "parent" : "leaf"));
            xf(
                p,
                oe(() => (W.value ? C.value : !1))
            ),
                Tf({
                    type: "Dialog",
                    enabled: oe(() => b.value === 0),
                    element: p,
                    onUpdate: (M, k, x) => {
                        if (k === "Dialog")
                            return Fe(M, {
                                [Cs.Add]() {
                                    f.value.add(x), (i.value += 1);
                                },
                                [Cs.Remove]() {
                                    f.value.delete(x), (i.value -= 1);
                                },
                            });
                    },
                });
            let S = Sf({
                    name: "DialogDescription",
                    slot: oe(() => ({ open: u.value })),
                }),
                O = X(null),
                R = {
                    titleId: O,
                    panelRef: X(null),
                    dialogState: b,
                    setTitleId(M) {
                        O.value !== M && (O.value = M);
                    },
                    close() {
                        t("close", !1);
                    },
                };
            Be(As, R);
            function D() {
                var M, k, x;
                return [
                    ...Array.from(
                        (k =
                            (M = g.value) == null
                                ? void 0
                                : M.querySelectorAll(
                                      "html > *, body > *, [data-headlessui-portal]"
                                  )) != null
                            ? k
                            : []
                    ).filter(
                        (I) =>
                            !(
                                I === document.body ||
                                I === document.head ||
                                !(I instanceof HTMLElement) ||
                                I.contains(Je(h)) ||
                                (R.panelRef.value &&
                                    I.contains(R.panelRef.value))
                            )
                    ),
                    (x = R.panelRef.value) != null ? x : p.value,
                ];
            }
            return (
                hf(
                    () => D(),
                    (M, k) => {
                        R.close(), pl(() => (k == null ? void 0 : k.focus()));
                    },
                    oe(() => b.value === 0 && !W.value)
                ),
                Jl(
                    (l = g.value) == null ? void 0 : l.defaultView,
                    "keydown",
                    (M) => {
                        M.defaultPrevented ||
                            (M.key === Vl.Escape &&
                                b.value === 0 &&
                                (W.value ||
                                    (M.preventDefault(),
                                    M.stopPropagation(),
                                    R.close())));
                    }
                ),
                Rf(g, C, (M) => {
                    var k;
                    return {
                        containers: [
                            ...((k = M.containers) != null ? k : []),
                            D,
                        ],
                    };
                }),
                Ue((M) => {
                    if (b.value !== 0) return;
                    let k = Je(p);
                    if (!k) return;
                    let x = new IntersectionObserver((I) => {
                        for (let L of I)
                            L.boundingClientRect.x === 0 &&
                                L.boundingClientRect.y === 0 &&
                                L.boundingClientRect.width === 0 &&
                                L.boundingClientRect.height === 0 &&
                                R.close();
                    });
                    x.observe(k), M(() => x.disconnect());
                }),
                () => {
                    let { id: M, open: k, initialFocus: x, ...I } = e,
                        L = {
                            ...n,
                            ref: p,
                            id: M,
                            role: "dialog",
                            "aria-modal": b.value === 0 ? !0 : void 0,
                            "aria-labelledby": O.value,
                            "aria-describedby": S.value,
                        },
                        K = { open: b.value === 0 };
                    return xe(Es, { force: !0 }, () => [
                        xe(eo, () =>
                            xe(Cf, { target: p.value }, () =>
                                xe(Es, { force: !1 }, () =>
                                    xe(
                                        Vt,
                                        {
                                            initialFocus: x,
                                            containers: f,
                                            features: C.value
                                                ? Fe(_.value, {
                                                      parent: Vt.features
                                                          .RestoreFocus,
                                                      leaf:
                                                          Vt.features.All &
                                                          ~Vt.features
                                                              .FocusLock,
                                                  })
                                                : Vt.features.None,
                                        },
                                        () =>
                                            Ae({
                                                ourProps: L,
                                                theirProps: I,
                                                slot: K,
                                                attrs: n,
                                                slots: s,
                                                visible: b.value === 0,
                                                features:
                                                    In.RenderStrategy |
                                                    In.Static,
                                                name: "Dialog",
                                            })
                                    )
                                )
                            )
                        ),
                        xe(ws, { features: Rn.Hidden, ref: h }),
                    ]);
                }
            );
        },
    });
ce({
    name: "DialogOverlay",
    props: {
        as: { type: [Object, String], default: "div" },
        id: {
            type: String,
            default: () => `headlessui-dialog-overlay-${Tt()}`,
        },
    },
    setup(e, { attrs: t, slots: n }) {
        let s = dn("DialogOverlay");
        function r(l) {
            l.target === l.currentTarget &&
                (l.preventDefault(), l.stopPropagation(), s.close());
        }
        return () => {
            let { id: l, ...o } = e;
            return Ae({
                ourProps: { id: l, "aria-hidden": !0, onClick: r },
                theirProps: o,
                slot: { open: s.dialogState.value === 0 },
                attrs: t,
                slots: n,
                name: "DialogOverlay",
            });
        };
    },
});
ce({
    name: "DialogBackdrop",
    props: {
        as: { type: [Object, String], default: "div" },
        id: {
            type: String,
            default: () => `headlessui-dialog-backdrop-${Tt()}`,
        },
    },
    inheritAttrs: !1,
    setup(e, { attrs: t, slots: n, expose: s }) {
        let r = dn("DialogBackdrop"),
            l = X(null);
        return (
            s({ el: l, $el: l }),
            be(() => {
                if (r.panelRef.value === null)
                    throw new Error(
                        "A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing."
                    );
            }),
            () => {
                let { id: o, ...i } = e,
                    a = { id: o, ref: l, "aria-hidden": !0 };
                return xe(Es, { force: !0 }, () =>
                    xe(eo, () =>
                        Ae({
                            ourProps: a,
                            theirProps: { ...t, ...i },
                            slot: { open: r.dialogState.value === 0 },
                            attrs: t,
                            slots: n,
                            name: "DialogBackdrop",
                        })
                    )
                );
            }
        );
    },
});
let jf = ce({
    name: "DialogPanel",
    props: {
        as: { type: [Object, String], default: "div" },
        id: { type: String, default: () => `headlessui-dialog-panel-${Tt()}` },
    },
    setup(e, { attrs: t, slots: n, expose: s }) {
        let r = dn("DialogPanel");
        s({ el: r.panelRef, $el: r.panelRef });
        function l(o) {
            o.stopPropagation();
        }
        return () => {
            let { id: o, ...i } = e,
                a = { id: o, ref: r.panelRef, onClick: l };
            return Ae({
                ourProps: a,
                theirProps: i,
                slot: { open: r.dialogState.value === 0 },
                attrs: t,
                slots: n,
                name: "DialogPanel",
            });
        };
    },
});
ce({
    name: "DialogTitle",
    props: {
        as: { type: [Object, String], default: "h2" },
        id: { type: String, default: () => `headlessui-dialog-title-${Tt()}` },
    },
    setup(e, { attrs: t, slots: n }) {
        let s = dn("DialogTitle");
        return (
            be(() => {
                s.setTitleId(e.id), Ke(() => s.setTitleId(null));
            }),
            () => {
                let { id: r, ...l } = e;
                return Ae({
                    ourProps: { id: r },
                    theirProps: l,
                    slot: { open: s.dialogState.value === 0 },
                    attrs: t,
                    slots: n,
                    name: "DialogTitle",
                });
            }
        );
    },
});
function Df(e) {
    let t = { called: !1 };
    return (...n) => {
        if (!t.called) return (t.called = !0), e(...n);
    };
}
function is(e, ...t) {
    e && t.length > 0 && e.classList.add(...t);
}
function An(e, ...t) {
    e && t.length > 0 && e.classList.remove(...t);
}
var Ts = ((e) => ((e.Finished = "finished"), (e.Cancelled = "cancelled"), e))(
    Ts || {}
);
function Bf(e, t) {
    let n = Zs();
    if (!e) return n.dispose;
    let { transitionDuration: s, transitionDelay: r } = getComputedStyle(e),
        [l, o] = [s, r].map((i) => {
            let [a = 0] = i
                .split(",")
                .filter(Boolean)
                .map((u) =>
                    u.includes("ms") ? parseFloat(u) : parseFloat(u) * 1e3
                )
                .sort((u, f) => f - u);
            return a;
        });
    return (
        l !== 0 ? n.setTimeout(() => t("finished"), l + o) : t("finished"),
        n.add(() => t("cancelled")),
        n.dispose
    );
}
function Dr(e, t, n, s, r, l) {
    let o = Zs(),
        i = l !== void 0 ? Df(l) : () => {};
    return (
        An(e, ...r),
        is(e, ...t, ...n),
        o.nextFrame(() => {
            An(e, ...n),
                is(e, ...s),
                o.add(Bf(e, (a) => (An(e, ...s, ...t), is(e, ...r), i(a))));
        }),
        o.add(() => An(e, ...t, ...n, ...s, ...r)),
        o.add(() => i("cancelled")),
        o.dispose
    );
}
function gt(e = "") {
    return e.split(" ").filter((t) => t.trim().length > 1);
}
let Xs = Symbol("TransitionContext");
var Uf = ((e) => ((e.Visible = "visible"), (e.Hidden = "hidden"), e))(Uf || {});
function Kf() {
    return he(Xs, null) !== null;
}
function qf() {
    let e = he(Xs, null);
    if (e === null)
        throw new Error(
            "A <TransitionChild /> is used but it is missing a parent <TransitionRoot />."
        );
    return e;
}
function Wf() {
    let e = he(Gs, null);
    if (e === null)
        throw new Error(
            "A <TransitionChild /> is used but it is missing a parent <TransitionRoot />."
        );
    return e;
}
let Gs = Symbol("NestingContext");
function zn(e) {
    return "children" in e
        ? zn(e.children)
        : e.value.filter(({ state: t }) => t === "visible").length > 0;
}
function ro(e) {
    let t = X([]),
        n = X(!1);
    be(() => (n.value = !0)), Ke(() => (n.value = !1));
    function s(l, o = ct.Hidden) {
        let i = t.value.findIndex(({ id: a }) => a === l);
        i !== -1 &&
            (Fe(o, {
                [ct.Unmount]() {
                    t.value.splice(i, 1);
                },
                [ct.Hidden]() {
                    t.value[i].state = "hidden";
                },
            }),
            !zn(t) && n.value && (e == null || e()));
    }
    function r(l) {
        let o = t.value.find(({ id: i }) => i === l);
        return (
            o
                ? o.state !== "visible" && (o.state = "visible")
                : t.value.push({ id: l, state: "visible" }),
            () => s(l, ct.Unmount)
        );
    }
    return { children: t, register: r, unregister: s };
}
let lo = In.RenderStrategy,
    oo = ce({
        props: {
            as: { type: [Object, String], default: "div" },
            show: { type: [Boolean], default: null },
            unmount: { type: [Boolean], default: !0 },
            appear: { type: [Boolean], default: !1 },
            enter: { type: [String], default: "" },
            enterFrom: { type: [String], default: "" },
            enterTo: { type: [String], default: "" },
            entered: { type: [String], default: "" },
            leave: { type: [String], default: "" },
            leaveFrom: { type: [String], default: "" },
            leaveTo: { type: [String], default: "" },
        },
        emits: {
            beforeEnter: () => !0,
            afterEnter: () => !0,
            beforeLeave: () => !0,
            afterLeave: () => !0,
        },
        setup(e, { emit: t, attrs: n, slots: s, expose: r }) {
            if (!Kf() && rf())
                return () =>
                    xe(
                        io,
                        {
                            ...e,
                            onBeforeEnter: () => t("beforeEnter"),
                            onAfterEnter: () => t("afterEnter"),
                            onBeforeLeave: () => t("beforeLeave"),
                            onAfterLeave: () => t("afterLeave"),
                        },
                        s
                    );
            let l = X(null),
                o = X("visible"),
                i = oe(() => (e.unmount ? ct.Unmount : ct.Hidden));
            r({ el: l, $el: l });
            let { show: a, appear: u } = qf(),
                { register: f, unregister: p } = Wf(),
                h = { value: !0 },
                g = Tt(),
                b = { value: !1 },
                C = ro(() => {
                    b.value || ((o.value = "hidden"), p(g), t("afterLeave"));
                });
            be(() => {
                let x = f(g);
                Ke(x);
            }),
                Ue(() => {
                    if (i.value === ct.Hidden && !!g) {
                        if (a && o.value !== "visible") {
                            o.value = "visible";
                            return;
                        }
                        Fe(o.value, {
                            hidden: () => p(g),
                            visible: () => f(g),
                        });
                    }
                });
            let W = gt(e.enter),
                _ = gt(e.enterFrom),
                S = gt(e.enterTo),
                O = gt(e.entered),
                R = gt(e.leave),
                D = gt(e.leaveFrom),
                M = gt(e.leaveTo);
            be(() => {
                Ue(() => {
                    if (o.value === "visible") {
                        let x = Je(l);
                        if (x instanceof Comment && x.data === "")
                            throw new Error(
                                "Did you forget to passthrough the `ref` to the actual DOM node?"
                            );
                    }
                });
            });
            function k(x) {
                let I = h.value && !u.value,
                    L = Je(l);
                !L ||
                    !(L instanceof HTMLElement) ||
                    I ||
                    ((b.value = !0),
                    a.value && t("beforeEnter"),
                    a.value || t("beforeLeave"),
                    x(
                        a.value
                            ? Dr(L, W, _, S, O, (K) => {
                                  (b.value = !1),
                                      K === Ts.Finished && t("afterEnter");
                              })
                            : Dr(L, R, D, M, O, (K) => {
                                  (b.value = !1),
                                      K === Ts.Finished &&
                                          (zn(C) ||
                                              ((o.value = "hidden"),
                                              p(g),
                                              t("afterLeave")));
                              })
                    ));
            }
            return (
                be(() => {
                    dt(
                        [a],
                        (x, I, L) => {
                            k(L), (h.value = !1);
                        },
                        { immediate: !0 }
                    );
                }),
                Be(Gs, C),
                lf(
                    oe(() =>
                        Fe(o.value, { visible: Ct.Open, hidden: Ct.Closed })
                    )
                ),
                () => {
                    let {
                            appear: x,
                            show: I,
                            enter: L,
                            enterFrom: K,
                            enterTo: pe,
                            entered: le,
                            leave: j,
                            leaveFrom: Pe,
                            leaveTo: ne,
                            ...re
                        } = e,
                        ee = { ref: l },
                        Ze = {
                            ...re,
                            ...(u && a && fn.isServer
                                ? { class: He([re.class, ...W, ..._]) }
                                : {}),
                        };
                    return Ae({
                        theirProps: Ze,
                        ourProps: ee,
                        slot: {},
                        slots: s,
                        attrs: n,
                        features: lo,
                        visible: o.value === "visible",
                        name: "TransitionChild",
                    });
                }
            );
        },
    }),
    Vf = oo,
    io = ce({
        inheritAttrs: !1,
        props: {
            as: { type: [Object, String], default: "div" },
            show: { type: [Boolean], default: null },
            unmount: { type: [Boolean], default: !0 },
            appear: { type: [Boolean], default: !1 },
            enter: { type: [String], default: "" },
            enterFrom: { type: [String], default: "" },
            enterTo: { type: [String], default: "" },
            entered: { type: [String], default: "" },
            leave: { type: [String], default: "" },
            leaveFrom: { type: [String], default: "" },
            leaveTo: { type: [String], default: "" },
        },
        emits: {
            beforeEnter: () => !0,
            afterEnter: () => !0,
            beforeLeave: () => !0,
            afterLeave: () => !0,
        },
        setup(e, { emit: t, attrs: n, slots: s }) {
            let r = Js(),
                l = oe(() =>
                    e.show === null && r !== null
                        ? Fe(r.value, { [Ct.Open]: !0, [Ct.Closed]: !1 })
                        : e.show
                );
            Ue(() => {
                if (![!0, !1].includes(l.value))
                    throw new Error(
                        'A <Transition /> is used but it is missing a `:show="true | false"` prop.'
                    );
            });
            let o = X(l.value ? "visible" : "hidden"),
                i = ro(() => {
                    o.value = "hidden";
                }),
                a = X(!0),
                u = { show: l, appear: oe(() => e.appear || !a.value) };
            return (
                be(() => {
                    Ue(() => {
                        (a.value = !1),
                            l.value
                                ? (o.value = "visible")
                                : zn(i) || (o.value = "hidden");
                    });
                }),
                Be(Gs, i),
                Be(Xs, u),
                () => {
                    let f = Wl(e, [
                            "show",
                            "appear",
                            "unmount",
                            "onBeforeEnter",
                            "onBeforeLeave",
                            "onAfterEnter",
                            "onAfterLeave",
                        ]),
                        p = { unmount: e.unmount };
                    return Ae({
                        ourProps: { ...p, as: "template" },
                        theirProps: {},
                        slot: {},
                        slots: {
                            ...s,
                            default: () => [
                                xe(
                                    Vf,
                                    {
                                        onBeforeEnter: () => t("beforeEnter"),
                                        onAfterEnter: () => t("afterEnter"),
                                        onBeforeLeave: () => t("beforeLeave"),
                                        onAfterLeave: () => t("afterLeave"),
                                        ...n,
                                        ...p,
                                        ...f,
                                    },
                                    s.default
                                ),
                            ],
                        },
                        attrs: {},
                        features: lo,
                        visible: o.value === "visible",
                        name: "Transition",
                    });
                }
            );
        },
    });
const Yf = { class: "inline-flex items-center space-x-8" },
    zf = ["href"],
    Qf = { class: "text-lg font-medium uppercase" },
    Jf = ce({
        __name: "Navigation",
        props: { white: { type: Boolean } },
        setup(e) {
            const t = an.navigation;
            return (n, s) => (
                Y(),
                J("nav", Yf, [
                    (Y(!0),
                    J(
                        G,
                        null,
                        ze(
                            De(t),
                            (r) => (
                                Y(),
                                J(
                                    "a",
                                    un(
                                        {
                                            key: r.href,
                                            href: r.href,
                                            class: "group relative",
                                        },
                                        (r == null ? void 0 : r.attributes) ||
                                            {}
                                    ),
                                    [
                                        E("span", Qf, et(r.title), 1),
                                        E(
                                            "span",
                                            {
                                                class: He([
                                                    "absolute bottom-0.5 left-1/2 block h-px w-0 -translate-x-1/2 transition-all duration-200 group-hover:w-full",
                                                    e.white
                                                        ? "bg-white"
                                                        : "bg-[#3D006F]",
                                                ]),
                                            },
                                            null,
                                            2
                                        ),
                                    ],
                                    16,
                                    zf
                                )
                            )
                        ),
                        128
                    )),
                ])
            );
        },
    }),
    Zf = { viewBox: "0 0 24 24", width: "1.2em", height: "1.2em" },
    Xf = E(
        "path",
        {
            fill: "currentColor",
            d: "M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z",
        },
        null,
        -1
    ),
    Gf = [Xf];
function ed(e, t) {
    return Y(), J("svg", Zf, Gf);
}
const td = { name: "ic-baseline-close", render: ed },
    nd = E("div", { class: "fixed inset-0" }, null, -1),
    sd = { class: "fixed inset-0 overflow-hidden" },
    rd = { class: "absolute inset-0 overflow-hidden" },
    ld = {
        class: "pointer-events-none fixed inset-y-0 right-0 flex w-full max-w-[200px]",
    },
    od = { class: "h-full overflow-y-scroll bg-[#343351]" },
    id = {
        class: "flex min-h-full flex-col items-center justify-center py-14 text-white",
    },
    ad = ce({
        __name: "Sidebar",
        setup(e) {
            const t = {
                    enter: "transform transition ease-in-out duration-500 sm:duration-700",
                    enterFrom: "translate-x-full",
                    enterTo: "translate-x-0",
                    leave: "transform transition ease-in-out duration-500 sm:duration-700",
                    leaveFrom: "translate-x-0",
                    leaveTo: "translate-x-full",
                },
                n = he("sidebar");
            return (s, r) => {
                const l = td,
                    o = Jf,
                    i = jf,
                    a = oo,
                    u = Nf,
                    f = io;
                return (
                    Y(),
                    Rt(
                        f,
                        { show: !!De(n), as: "template" },
                        {
                            default: Se(() => [
                                V(
                                    u,
                                    {
                                        as: "aside",
                                        class: "relative z-50 lg:hidden",
                                        onClose:
                                            r[1] ||
                                            (r[1] = (p) => (n.value = !1)),
                                    },
                                    {
                                        default: Se(() => [
                                            nd,
                                            E("div", sd, [
                                                E("div", rd, [
                                                    E("div", ld, [
                                                        V(
                                                            a,
                                                            un(
                                                                {
                                                                    as: "template",
                                                                },
                                                                t
                                                            ),
                                                            {
                                                                default: Se(
                                                                    () => [
                                                                        V(
                                                                            i,
                                                                            {
                                                                                class: "pointer-events-auto w-full",
                                                                            },
                                                                            {
                                                                                default:
                                                                                    Se(
                                                                                        () => [
                                                                                            E(
                                                                                                "div",
                                                                                                od,
                                                                                                [
                                                                                                    E(
                                                                                                        "button",
                                                                                                        {
                                                                                                            class: "fixed top-4 right-4 rounded-full",
                                                                                                            onClick:
                                                                                                                r[0] ||
                                                                                                                (r[0] =
                                                                                                                    (
                                                                                                                        p
                                                                                                                    ) =>
                                                                                                                        (n.value =
                                                                                                                            !1)),
                                                                                                        },
                                                                                                        [
                                                                                                            V(
                                                                                                                l,
                                                                                                                {
                                                                                                                    class: "h-8 w-8",
                                                                                                                }
                                                                                                            ),
                                                                                                        ]
                                                                                                    ),
                                                                                                    E(
                                                                                                        "div",
                                                                                                        id,
                                                                                                        [
                                                                                                            V(
                                                                                                                o,
                                                                                                                {
                                                                                                                    class: "flex-col !space-x-0 space-y-8",
                                                                                                                    white: "",
                                                                                                                }
                                                                                                            ),
                                                                                                        ]
                                                                                                    ),
                                                                                                ]
                                                                                            ),
                                                                                        ]
                                                                                    ),
                                                                                _: 1,
                                                                            }
                                                                        ),
                                                                    ]
                                                                ),
                                                                _: 1,
                                                            },
                                                            16
                                                        ),
                                                    ]),
                                                ]),
                                            ]),
                                        ]),
                                        _: 1,
                                    }
                                ),
                            ]),
                            _: 1,
                        },
                        8,
                        ["show"]
                    )
                );
            };
        },
    }),
    cd = { viewBox: "0 0 24 24", width: "1.2em", height: "1.2em" },
    ud = E(
        "path",
        {
            fill: "currentColor",
            d: "M4 18q-.425 0-.712-.288Q3 17.425 3 17t.288-.712Q3.575 16 4 16h16q.425 0 .712.288q.288.287.288.712t-.288.712Q20.425 18 20 18Zm0-5q-.425 0-.712-.288Q3 12.425 3 12t.288-.713Q3.575 11 4 11h16q.425 0 .712.287q.288.288.288.713t-.288.712Q20.425 13 20 13Zm0-5q-.425 0-.712-.287Q3 7.425 3 7t.288-.713Q3.575 6 4 6h16q.425 0 .712.287Q21 6.575 21 7t-.288.713Q20.425 8 20 8Z",
        },
        null,
        -1
    ),
    fd = [ud];
function dd(e, t) {
    return Y(), J("svg", cd, fd);
}
const pd = { name: "material-symbols-menu-rounded", render: dd },
    hd = "/assets/logo.f886a791.png",
    md = { class: "fixed top-0 left-0 z-50 w-full bg-black/30" },
    gd = { class: "flex h-20 items-center justify-between" },
    _d = E("img", { alt: "Logo Image", class: "h-12", src: hd }, null, -1),
    bd = { class: "hidden items-center justify-end space-x-6 xl:flex" },
    vd = { class: "space-x-4" },
    yd = ["href"],
    xd = ce({
        __name: "Header",
        setup(e) {
            const t = he("sidebar");
            return (n, s) => {
                const r = pd,
                    l = At;
                return (
                    Y(),
                    J("header", md, [
                        V(l, null, {
                            default: Se(() => [
                                E("div", gd, [
                                    _d,
                                    E(
                                        "button",
                                        {
                                            class: "xl:hidden",
                                            type: "button",
                                            onClick:
                                                s[0] ||
                                                (s[0] = (o) =>
                                                    (t.value = !De(t))),
                                        },
                                        [V(r, { class: "h-8 w-8" })]
                                    ),
                                    E("div", bd, [
                                        E("nav", vd, [
                                            (Y(!0),
                                            J(
                                                G,
                                                null,
                                                ze(
                                                    De(an).navigation,
                                                    (o, i) => (
                                                        Y(),
                                                        J(
                                                            "a",
                                                            un(
                                                                {
                                                                    key: i,
                                                                    href: o.href,
                                                                },
                                                                o.attributes
                                                            ),
                                                            et(o.title),
                                                            17,
                                                            yd
                                                        )
                                                    )
                                                ),
                                                128
                                            )),
                                        ]),
                                    ]),
                                ]),
                            ]),
                            _: 1,
                        }),
                    ])
                );
            };
        },
    }),
    wd = ce({
        __name: "App",
        setup(e) {
            return (
                za({
                    title: an.title,
                    meta: [{ name: "description", content: an.description }],
                }),
                Be("sidebar", X(!1)),
                (t, n) => {
                    const s = xd,
                        r = ad,
                        l = ef,
                        o = Lu,
                        i = wu,
                        a = fu,
                        u = ru,
                        f = Rc;
                    return (
                        Y(),
                        J(
                            G,
                            null,
                            [
                                V(s),
                                V(r),
                                E("main", null, [V(l), V(o), V(i), V(a), V(u)]),
                                V(f),
                            ],
                            64
                        )
                    );
                }
            );
        },
    });
Ga(wd);
